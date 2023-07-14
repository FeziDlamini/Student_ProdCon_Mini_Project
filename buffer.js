// Buffer class to handle the shared buffer
class Buffer {
    constructor(maxSize) {
      this.maxSize = maxSize;
      this.buffer = [];
      this.semaphore = new Semaphore(1); // Semaphore to control access to the buffer
    }
  
    produce(student) {
      if (this.buffer.length >= this.maxSize) {
        console.log('Buffer is full. Waiting...');
        // Wait until the buffer is not full
        // ...
      }
  
      this.semaphore.acquire(); // Acquire the semaphore to access the buffer
  
      const fileName = `student${this.buffer.length + 1}.xml`;
      const xmlData = wrapToXML(student);
      FileSystem.saveXMLFile(fileName, xmlData);
  
      this.buffer.push(this.buffer.length + 1); // Insert the generated number into the buffer
  
      this.semaphore.release(); // Release the semaphore
    }
  
    consume() {
      if (this.buffer.length === 0) {
        console.log('Buffer is empty. Waiting...');
        // Wait until the buffer is not empty
        // ...
      }
  
      this.semaphore.acquire(); // Acquire the semaphore to access the buffer
  
      const fileName = `student${this.buffer[0]}.xml`;
      const xmlData = FileSystem.readXMLFile(fileName);
      const student = unwrapFromXML(xmlData);
  
      FileSystem.clearXMLFile(fileName);
      this.buffer.shift(); // Remove the integer from the buffer
  
      this.semaphore.release(); // Release the semaphore
  
      const average = student.calculateAverage();
      const passOrFail = student.determinePassOrFail();
  
      console.log('Student Name:', student.name);
      console.log('Student ID:', student.id);
      console.log('Programme:', student.programme);
      console.log('Courses and Marks:');
      student.courses.forEach((course) => {
        console.log(`${course.name}: ${course.mark}`);
      });
      console.log('Average:', average);
      console.log('Pass/Fail:', passOrFail);
    }
  }
  