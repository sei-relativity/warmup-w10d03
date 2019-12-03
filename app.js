const mongoose = require('mongoose')
const Student = require('./Student.js')
const db = mongoose.connection;
const mongoURI = 'mongodb://localhost:27017/students';


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
    console.log('the connection with mongod is established')
})

const studentsNames = [
    'Abdullah Altamimi', 
    'Abdulrahman Alfouzan', 
    'Abdulrahman Aljammaz', 
    'Abdulrahman Alshabibi', 
    'Abdulwahhab AlBallaa', 
    'Aisha Dabbagh', 
    'Dalia Abdullah', 
    'Fahad Abdullah', 
    'Hisham Aljahbli',
    'Joseph Rulo',
    'Lama Alyousef', 
    'Lamees Alfallaj', 
    'Mesfer AlQahtani', 
    'Moayad Alnuwaysir', 
    'Mohammed Almarri', 
    'Mohammed Alofaysan',
    'Muhannad Alanazi', 
    'Muneera Bin Hotan',  
    'Nawal Bin Dawood', 
    'Noura Albukhaite', 
    'Nouf Almatroudi', 
    'Obaid Alqahtani', 
    'Osama Alruthaya', 
    'Raje Alharthi', 
    'Sager Alarifi', 
    'Sara Alghannamy', 
    'Sarah Alghofaili', 
    'Saud Alshamsi', 
    'Sumayah Ali' ]


const studentsObjects = studentsNames.map(student => { return { name: student } })

// Populate Database with studentsObjects


// Student.insertMany(studentsObjects, (error, student) => {
//         if (error) {
//             console.log(error)
//         } else {
//             console.log(student);
//         } db.close()
//     });


// Print all students names


// Method 1 Print Students Names

// Student.find((err, students) => {
//     students.forEach(student => {
//         console.log(student.name);
//     })
//     db.close()
// });


// Method 2 Print Students Object

// Student.find((err, student) => {
//     console.log(student);
// db.close()
// });

// Update `Saud Alshamsi` and `Lamees Alfallaj` attendance to false

// Student.findOneAndUpdate({ name: 'Saud Alshamsi' }, { Attendance: false }, (err, student) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(student);
//     }
//     db.close()
// });


// Student.findOneAndUpdate({ name: 'Lamees Alfallaj' }, { Attendance: false }, (err, student) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(student);
//     }
//     db.close()
// });

// Remove 'Joseph Rulo'

// Student.findOneAndRemove({ name: 'Joseph Rulo' }, (err, student) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('This is the deleted student:', student);
//     }
//     db.close()
// });



