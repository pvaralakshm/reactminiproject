import { useState, useContext, useCallback } from 'react';
import { StudentContext } from '../context/StudentContext';
import { Form, Button, Card } from 'react-bootstrap';

export default function AddStudent() {
  const { addStudent } = useContext(StudentContext);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });

  const handleChange = useCallback((e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.email) return alert('Name and Email are required!');
    addStudent(form);
    setForm({ firstName: '', lastName: '', email: '' });
  };

  return (
    <Card className="p-4 mt-4">
      <h2 className="mb-3">Add Student</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control name="firstName" value={form.firstName} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control name="lastName" value={form.lastName} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" value={form.email} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
         <Form.Label>Age</Form.Label>
          <Form.Control name="email" value={form.age} onChange={handleChange} />
        </Form.Group>
        <Button type="submit" variant="secondary">Add Student</Button>
      </Form>
    </Card>
  );
}
