'use strict';
const fs = require('fs');

function fileReaderToArr (filename: string): string[] {
    return fs.readFileSync(filename, 'utf-8').split('\r\n')  // read data from the file, 
    // then split it to an array, by the new lines.   //'\r\n' windowsban a sortörést így hivatkozom
}
function checkAttendance (classList: string [], attendanceList: string [] ) {
   let absentStudents: string [] = [];
    if (classList.length === attendanceList.length){
        console.log('Everyone is present');
        
    }else {
        classList.forEach (student => {
            if (!attendanceList.includes(student)) {
                absentStudents.push(student)
            }
        })
    }
    return absentStudents;
}

try {
   const classListFromFile: string [] = fileReaderToArr('class.txt');
   const attendanceLIstFromFile: string [] = fileReaderToArr('attendance.txt');
   const absentList = checkAttendance(classListFromFile, attendanceLIstFromFile);
   const absentStudentListAsString: string = absentList.join(); // create string from array -
   // because file needs string
   fs.writeFileSync('absent.txt', absentStudentListAsString) 
} catch (error) {
    console.error(error);
}