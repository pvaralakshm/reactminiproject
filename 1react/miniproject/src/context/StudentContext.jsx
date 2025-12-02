import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(res => {
        setStudents(res.data.users || []);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load students');
        setLoading(false);
      });
  }, []);

  const addStudent = (student) => {
    setStudents(prev => [...prev, { ...student, id: Date.now() }]);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, loading, error }}>
      {children}
    </StudentContext.Provider>
  );
};
