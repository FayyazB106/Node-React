import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentList from './StudentList';
import AddStudent from './AddStudent';
import DeleteStudent from './DeleteStudent';

// Main component
function App() {
  return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<StudentList/>} /> {/* Homepage which displays student list */}
            <Route path="/add" element={<AddStudent/>} /> {/* Page to add student to list */}
            <Route path="/delete" element={<DeleteStudent/>} /> {/* Page to remove student from list */}
          </Routes>
        </Router>
      </div>
  );
};

export default App;