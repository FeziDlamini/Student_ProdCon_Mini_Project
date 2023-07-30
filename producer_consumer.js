const {consumer, producer} = require("./index");

for (let i = 0; i < 3; i++) {
    // Running the producer/consumer processes
    setInterval(producer, 2000); // Run the producer every 2 seconds
    setInterval(consumer, 3000); // Run the consumer every 3 seconds
}