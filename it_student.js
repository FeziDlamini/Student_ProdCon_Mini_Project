class ITStudent {
    constructor(name, sid, programme, courseList) {
        this.name = name;
        this.sid = sid;
        this.programme = programme;
        this.courselist = courseList;
    }

    calculateAverage() {
        const totalMarks = this.courselist.reduce((sum, course) => sum + course.mark, 0);
        return totalMarks / this.courselist.length;
    }

    determinePassOrFail() {
        const average = this.calculateAverage();
        return average >= 50 ? 'Pass' : 'Fail';
    }
}

export default ITStudent;