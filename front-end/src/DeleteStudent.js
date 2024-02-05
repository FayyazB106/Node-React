import React, { useState } from 'react';
import axios from 'axios';

// Create component
const DeleteStudent = () => {
  // Initialize state variables
  const [id, setId] = useState('');
  const [isDeleted, setIsDeleted] = useState(null);

  // Delete student function
  const handleDelete = async () => {
    try {
      // Delete student from list
      await axios.delete(`http://localhost:5000/list/${id}`);
      setIsDeleted(true);
    } catch (error) {console.error(error); setIsDeleted(false);}
  };

  // Design component
  return (
    <div style={{ padding: 10 }}>
      <h2>Delete a student</h2>
      <div>
        <label>Student ID: </label>
        <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <div>
        <button onClick={handleDelete} disabled={!id}>Delete Student</button> {/* Grays out submit button if field empty */}
      </div>
      {isDeleted && <p>Student removed successfully!</p>}
      {isDeleted === false && <p>Deletion failed. Please check the ID.</p>}<br />
      <a href="http://localhost:3000/"> {/* Homepage which displays student list */}
        <button>View List</button>
      </a>
    </div>
  );
};

// Export component
export default DeleteStudent;