import { useContext, useMemo } from 'react';
import { StudentContext } from '../context/StudentContext';
import StudentCard from '../components/StudentCard';
import Loading from '../components/Loading';
import { Row, Col } from 'react-bootstrap';

export default function StudentsList() {
  const { students, loading, error } = useContext(StudentContext);

  const sortedStudents = useMemo(() => {
    return [...students].sort((a, b) => a.firstName.localeCompare(b.firstName));
  }, [students]);

  if (loading) return <Loading />;
  if (error) return <div className="text-danger">{error}</div>;

  return (
    <>
      <h2 className="mb-4">Students List</h2>
      <Row xs={1} md={2} lg={3} className="g-3">
        {sortedStudents.map(s => (
          <Col key={s.id}>
            <StudentCard student={s} />
          </Col>
        ))}
      </Row>
    </>
  );
}
