import { Component } from 'react';
import { StudentContext } from '../context/StudentContext';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

class StudentDetailsClass extends Component {
  static contextType = StudentContext;

  render() {
    const { students } = this.context;
    const { id } = this.props;
    const student = students.find(s => s.id.toString() === id);

    if (!student) return <div className="text-danger mt-3">Student not found</div>;

    return (
      <Card className="p-4 mt-4">
        <h2 className="mb-3">Student Details</h2>
        <p><strong>Name:</strong> {student.firstName} {student.lastName}</p>
        <p><strong>Email:</strong> {student.email}</p>
         <p><strong>Age:</strong> {student.age}</p>
        
        
      </Card>
    );
  }
}

// Wrapper to use useParams in Class Component
export default function StudentDetails() {
  const { id } = useParams();
  return <StudentDetailsClass id={id} />;
}
