const Joi = require('joi');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(express.json());
app.use(cors());

// In-memory array
const studentList = [
    {id: "100", name: 'Ahmad', major: 'Computer Science'},
    {id: "156", name: 'Muhammad', major: 'Accounting'},
    {id: "254", name: 'Fatima', major: 'Mathematics'}
];

// Homepage
app.get('/', (req, res) => {
    res.send("Hello!");
});

// Display list of students
app.get('/list', (req, res) => {
    res.send(studentList);
});

// Display one student from list
app.get('/list/:id', (req, res) => {
    const student = studentList.find(s => s.id == parseInt(req.params.id));
    // If student doesn't exist, send error 404
    if (!student) return res.status(404).send("Student not found.");
    res.send(student)
});

// Add student to list
app.post('/list', (req, res) => {
    const result = validateData(req.body);
    // If validation fails, send error 400
    if (result.error) return res.status(400).send(result.error.details[0].message);

    // Create student object
    const student = {
        id: req.body.id,
        name: req.body.name,
        major: req.body.major
    };

    // Add object to list
    studentList.push(student);
    res.send(studentList);
});

// Update data of an existing student
app.put('/list/:id', (req, res) => {
    const student = studentList.find(s => s.id == parseInt(req.params.id));
    // If student doesn't exist, send error 404
    if (!student) return res.status(404).send("Student not found.");

    const result = validateData(req.body);
    // If validation fails, send error 400
    if (result.error) return res.status(400).send(result.error.details[0].message);

    // Update data
    student.name = req.body.name;
    student.major = req.body.major;
    res.send(student);
});

// Delete student from list
app.delete('/list/:id', (req, res) => {
    const student = studentList.find(s => s.id == parseInt(req.params.id));
    // If student doesn't exist, send error 404
    if (!student) return res.status(404).send("Student not found.");

    // Get index of student data entry
    const idx = studentList.indexOf(student);
    // Use index to delete data of that student
    studentList.splice(idx, 1);

    res.send(studentList);
});

// Data validation
// Function prevents empty POST requests
function validateData(student) {
    const schema = Joi.object({
        id: Joi.required(),
        name: Joi.required(),
        major: Joi.required()
    });
    return schema.validate(student);
};

// Launches the backend on port 5000
app.listen(5000, () => console.log('Listening...'))