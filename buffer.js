// Buffer class to handle the shared buffer
const {Semaphore} = require("./semaphor");
const {unwrapFromXML, wrapToXML} = require("./wrapper");
const {FileSystem} = require("./file_handler");

class Buffer {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.buffer = [];
        this.semaphore = new Semaphore(1); // Semaphore to control access to the buffer
    }

    async produce(student) {
        if (this.buffer.length >= this.maxSize) {
            console.log('Buffer is full. Waiting...');
            // Wait until the buffer is not full
            // ...
        }

        await this.semaphore.acquire(); // Acquire the semaphore to access the buffer

        const fileName = `student${this.buffer.length + 1}.xml`;
        const xmlData = wrapToXML(student);
        await FileSystem.saveXMLFile(fileName, xmlData);

        this.buffer.push(this.buffer.length + 1); // Insert the generated number into the buffer

        this.semaphore.release(); // Release the semaphore
    }

    async consume() {
        if (this.buffer.length === 0) {
            console.log('Buffer is empty. Waiting...');
            // Wait until the buffer is not empty
            // ...
        }

        await this.semaphore.acquire(); // Acquire the semaphore to access the buffer

        const fileName = `student${this.buffer[0]}.xml`;
        const xmlData = await FileSystem.readXMLFile(fileName);
        if (xmlData) {
            const student = unwrapFromXML(xmlData);

            await FileSystem.clearXMLFile(fileName);
            this.buffer.shift(); // Remove the integer from the buffer

            this.semaphore.release(); // Release the semaphore

            const average = student.calculateAverage();
            const passOrFail = student.determinePassOrFail();

            console.log('Student Name:', student.name);
            console.log('Student ID:', student.sid);
            console.log('Programme:', student.programme);
            console.log('Courses and Marks:');
            student?.courselist?.forEach((course) => {
                console.log(`\t${course.name}: ${course.mark}`);
            });
            console.log('Average:', average);
            console.log('Pass/Fail:', passOrFail, '\n\n');
        }
    }
}

module.exports = Buffer;