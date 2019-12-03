const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const studentSchema = new Schema({
    name: String,
    Attendance: { type: Boolean, default: true }

}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;