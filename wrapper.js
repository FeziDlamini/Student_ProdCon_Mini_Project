// Utility functions for XML wrapping and unwrapping
const {ITStudent} = require("./it_student");
const jsdom = require("jsdom");

function wrapToXML(student) {
    let xml = `<Student>\n`;
    xml += `\t<Name>${student.name}</Name>\n`;
    xml += `\t<SID>${student.sid}</SID>\n`;
    xml += `\t<Programme>${student.programme}</Programme>\n`;
    xml += `\t<CourseList>\n`;
    student.courselist.forEach((data) => {
        xml += `\t\t<CourseListItem>\n`;
        xml += `\t\t\t<CourseName>${data.name}</CourseName>\n`;
        xml += `\t\t\t<CourseMark>${data.mark}</CourseMark>\n`;
        xml += `\t\t</CourseListItem>\n`;
    })
    xml += `\t</CourseList>\n`;
    xml += `</Student>`
    return xml;
}

function unwrapFromXML(data) {
    try {
        let xmlData = new jsdom.JSDOM(data, "text/xml")
        const studentNode = xmlData.window.document.querySelector("Student");
        const name = studentNode.querySelector("Name").textContent;
        const sid = studentNode.querySelector("SID").textContent;
        const programme = studentNode.querySelector("Programme").textContent;
        const courseListItems = studentNode.querySelectorAll("CourseListItem");
        const courses = [];

        courseListItems.forEach((courseItem) => {
            const courseName = courseItem.querySelector("CourseName").textContent;
            const courseMark = parseInt(courseItem.querySelector("CourseMark").textContent);
            courses.push({name: courseName, mark: courseMark});
        });

        return new ITStudent(name, sid, programme, courses);
    } catch (e) {
        console.log('Data file is ', data)
        throw e
    }
}

module.exports = {
    wrapToXML,
    unwrapFromXML
}