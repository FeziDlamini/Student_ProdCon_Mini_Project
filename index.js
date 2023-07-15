const buffer = new Buffer(10); // Create a buffer with a maximum size of 10

// Producer process
function producer() {
  // Generate random student data
  const name = generateRandomName();
  const id = generateRandomID();
  const programme = generateRandomProgramme();
  const courses = generateRandomCourses();

  // Create an ITStudent object with the generated data
  const student = new ITStudent(name, id, programme, courses);

  // Produce the student data and add it to the buffer
  buffer.produce(student);
}

// Consumer process
function consumer() {
  // Consume student data from the buffer
  buffer.consume();
}
// Running the producer/consumer processes
setInterval(producer, 2000); // Run the producer every 2 seconds
setInterval(consumer, 3000); // Run the consumer every 3 seconds