const mongoose = require("mongoose");
const Student = require("./Student.js");
const db = mongoose.connection;
const mongoURI = "mongodb://localhost:27017/students";

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("the connection with mongod is established");
  }
);

const studentsNames = [
  "Abdullah Altamimi",
  "Abdulrahman Alfouzan",
  "Abdulrahman Aljammaz",
  "Abdulrahman Alshabibi",
  "Abdulwahhab AlBallaa",
  "Aisha Dabbagh",
  "Dalia Abdullah",
  "Fahad Abdullah",
  "Hisham Aljahbli",
  "Joseph Rulo",
  "Lama Alyousef",
  "Lamees Alfallaj",
  "Mesfer AlQahtani",
  "Moayad Alnuwaysir",
  "Mohammed Almarri",
  "Mohammed Alofaysan",
  "Muhannad Alanazi",
  "Muneera Bin Hotan",
  "Nawal Bin Dawood",
  "Noura Albukhaite",
  "Nouf Almatroudi",
  "Obaid Alqahtani",
  "Osama Alruthaya",
  "Raje Alharthi",
  "Sager Alarifi",
  "Sara Alghannamy",
  "Sarah Alghofaili",
  "Saud Alshamsi",
  "Sumayah Ali"
];

const studentsObjects = studentsNames.map(student => {
  return { name: student };
});

// Populate Database with studentsObjects

// Student.insertMany(studentsObjects, (error, students) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(students);
//   }
//   db.close();
// });

// Print all students names
Student.find((err, students) => {
  console.log("Find All students");
  if (err) {
    console.log(err);
  } else {
    console.log(students);
  }
  db.close();
});

// Update `Saud Alshamsi` and `Lamees Alfallaj` attendance to false
Student.updateMany(
  { $or: [{ name: "Saud Alshamsi" }, { name: "Lamees Alfallaj" }] },
  { $set: { Attendance: false } },
  (err, students) => {
    console.log("update saud and lamees");
    if (err) {
      console.log(err);
    } else {
      console.log(students);
    }
    db.close();
  }
);

// Remove 'Joseph Rulo'
Student.find({ name: "Joseph Rulo" }, (err, students) => {
  console.log("Delete Joseph Rulo");
  if (err) {
    console.log(err);
  } else {
    console.log(students);
  }
  db.close();
});
