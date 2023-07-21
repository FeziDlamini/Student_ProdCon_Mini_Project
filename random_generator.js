const crypto = require('crypto');

// Utility functions for generating random data
function generateRandomName() {
    const surnames = [
        'Johnson',
        'Smith',
        'Williams',
        'Brown',
        'Davis',
        'Wilson',
        'Taylor',
        'Clark',
        'Lewis',
        'Turner',
        'Dlamini',
        'Khumalo',
        'Zulu',
        'Mhlongo',
        'Nkosi',
        'Ngubane',
        'Ntuli',
        'Ndlovu',
        'Mthembu',
        'Shabalala'
    ];
    const lastNames = [
        'Alice',
        'Bob',
        'Charlie',
        'David',
        'Eve',
        'Frank',
        'Grace',
        'Henry',
        'Ivy',
        'Jack',
        'Sipho',
        'Thandiwe',
        'Lungile',
        'Nokuthula',
        'Mandla',
        'Nomvula',
        'Bhekisisa',
        'Zanele',
        'Njabulo',
        'Phindile'
    ];

    return lastNames[Math.floor(Math.random() * lastNames.length)] + ' ' +
        surnames[Math.floor(Math.random() * surnames.length)];
}

function generateRandomID() {
    const idBuffer = crypto.randomBytes(4); // Generate 4 bytes (32 bits) of random data
    const id = idBuffer.readUInt32BE(0); // Read the unsigned 32-bit integer from the buffer
    // Convert to string and pad with leading zeros if necessary
    return String(id).padStart(8, '0');
}

function generateRandomProgramme() {
    // Generate a random student programme
    // ...
    // Return the generated programme
    const courseNames = [
        'Introduction to Computer Science',
        'Data Structures and Algorithms',
        'Database Systems',
        'Operating Systems',
        'Computer Networks',
        'Software Engineering',
        'Artificial Intelligence',
        'Web Development',
        'Cybersecurity',
        'Mobile App Development',
        'Machine Learning',
        'Computer Graphics',
        'Cloud Computing',
        'Data Mining',
        'Information Retrieval',
        'Computer Architecture',
        'Human-Computer Interaction',
        'Network Security',
        'Big Data Analytics',
        'Software Testing'
    ];

    const courses = [];

    for (let i = 0; i < courseNames.length; i++) {
        const course = {
            name: courseNames[i],
            mark: Math.floor(Math.random() * 61) + 40 // Generate a random mark between 40 and 100
        };
        courses.push(course);
    }

    return courses;
}

function generateRandomCourses() {
    // Generate a list of random courses with associated marks
    // ...
    // Return the generated list of courses
    const courseNames = [
        'Introduction to Computer Science',
        'Data Structures and Algorithms',
        'Database Systems',
        'Operating Systems',
        'Computer Networks',
        'Software Engineering',
        'Artificial Intelligence',
        'Web Development',
        'Cybersecurity',
        'Mobile App Development'
    ];

    const courses = [];

    for (let i = 0; i < courseNames.length; i++) {
        const course = {
            name: courseNames[i],
            mark: Math.floor(Math.random() * 61) + 40 // Generate a random mark between 40 and 100
        };
        courses.push(course);
    }

    return courses;
}

module.exports = {
    generateRandomCourses,
    generateRandomID,
    generateRandomProgramme,
    generateRandomName
}