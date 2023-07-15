class Semaphore {
    constructor(initialCount) {
        this.count = initialCount;
        this.waitQueue = [];
    }

    async acquire() {
        if (this.count > 0) {
            this.count--;
        } else {
            return new Promise((resolve) => {
                this.waitQueue.push(resolve);
            });
        }
    }

    release() {
        if (this.waitQueue.length > 0) {
            const nextProcess = this.waitQueue.shift();
            nextProcess();
        } else {
            this.count++;
        }
    }
}

export default Semaphore;