const {ITStudent} = require('./it_student');
const Buffer = require('./buffer');
const {
    generateRandomName,
    generateRandomID,
    generateRandomProgramme,
    generateRandomCourses
} = require("./random_generator");

const buffer = new Buffer(10); // Create a buffer with a maximum size of 10

// Producer process
async function producer() {
    // Generate random student data
    const name = generateRandomName();
    const id = generateRandomID();
    const programme = generateRandomProgramme();
    const courses = generateRandomCourses();

    // Create an ITStudent object with the generated data
    const student = new ITStudent(name, id, programme, courses);

    // Produce the student data and add it to the buffer
    await buffer.produce(student);
}

// Consumer process
async function consumer() {
    // Consume student data from the buffer
    await buffer.consume();
}

for(let i = 0; i < 3; i++){
    // Running the producer/consumer processes
    setInterval(producer, 2000); // Run the producer every 2 seconds
    setInterval(consumer, 3000); // Run the consumer every 3 seconds
}
