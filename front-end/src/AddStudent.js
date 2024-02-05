import React, { useState } from 'react';
import axios from 'axios';

// Create component
const AddStudent = () => {
  // Initialize state variables
  const [id, setID] = useState(''); 
  const [name, setDescription] = useState(''); 
  const [major, setMajor] = useState('');
  const [isAdded, setIsAdded] = useState(null);

  // Form submission function
  const handleSubmit = (e) => {
    // Prevent reloading page upon submission
    e.preventDefault();
    // Create student object
    const student = {id, name, major};
    
    // Send object to server to be added to list
    axios.post('http://localhost:5000/list', student)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.error(error));
    //alert("Form Submitted Successfully")
    setIsAdded(true);
  }; 

  // Design component
  return (
    <div style={{padding: 10}}>
      <h2>Register a student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Student ID: </label>
          <input type="number" value={id} onChange={(e) => setID(e.target.value)} />
        </div>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Major: </label>
          <input type="text" value={major} onChange={(e) => setMajor(e.target.value)} />
        </div>
        <div>
          <button type="submit" disabled={!id || !name || !major}>Add Student</button> {/* Grays out submit button until all fields are full */}
        </div>
      </form>
      {isAdded && <p>Student successfully registered!</p>}<br />
      <a href="http://localhost:3000/"> {/* Homepage which displays student list */}
        <button>View List</button>
      </a>
    </div>
  );
};

// Export component
export default AddStudent;