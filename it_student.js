class ITStudent {
    constructor(sname, sid, programme, courselist) {
        this.sname = sname;
        this.sid = sid;
        this.programme = programme;
        this.courselist = courselist;
    }

    calculateAverage() {
        const totalMarks = this.courses.reduce((sum, course) => sum + course.mark, 0);
        return totalMarks / this.courses.length;
    }

    determinePassOrFail() {
        const average = this.calculateAverage();
        return average >= 50 ? 'Pass' : 'Fail';
    }
}