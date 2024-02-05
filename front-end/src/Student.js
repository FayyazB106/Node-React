import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentInfo = ({ sid }) => {
  const [student, setData] = useState(null);
  
  useEffect(() => {
    axios.get(`http://localhost:5000/list/${sid}`)
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, [sid]);

  if (!student) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>{student.id}</h2>
      <p>{student.name}</p>
      <p>{student.major}</p>
    </div>
  );
};

export default StudentInfo;