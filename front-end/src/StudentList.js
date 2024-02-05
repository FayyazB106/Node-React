import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Create component
const StudentList = () => {
  // Initialize state
  const [data, setData] = useState([]);
 
  // Fetch student list
  useEffect(() => {
    axios.get('http://localhost:5000/list')
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  // Design component
  return (
    <div style={{padding: 10}}>
      <h2>Student List</h2>
      <p>Subject: English 2</p>
      <p>Semester: Spring 2024</p>
      <a href="http://localhost:3000/add"> {/* Page to add student to list */}
        <button>Register a student</button>
      </a>
      <a href="http://localhost:3000/delete" style={{padding: 5, textDecoration: 'none'}}> {/* Page to remove student from list */}
        <button>Remove a student</button>
      </a>
      <ul>
        {data.map((student) => (
          <li key={student.id}>
            <strong>{student.name}</strong>
            <p>
              Student ID: {student.id}<br />
              Major: {student.major}
            </p>
          </li>
        ))}
      </ul> 
    </div>
  );
}; 

// Export component
export default StudentList;