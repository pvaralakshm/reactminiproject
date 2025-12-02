import { Card, Button } from 'react-bootstrap';
import { memo } from 'react';
import { Link } from 'react-router-dom';

const StudentCard = ({ student }) => {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>{student.firstName} {student.lastName}</Card.Title>
        <Card.Text>Email: {student.email}</Card.Text>
        <Link to={`/students/${student.id}`}><Button variant="secondary">View Details</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default memo(StudentCard);
