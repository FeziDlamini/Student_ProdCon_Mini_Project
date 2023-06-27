class ITStudent {
    constructor(sname, sid, programme, courseList) {
        this.sname = sname;
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