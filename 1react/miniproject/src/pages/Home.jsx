import { Container, Card } from 'react-bootstrap';

export default function Home() {
  return (
    <Container className="mt-5">
      <Card className="p-5 text-center shadow-sm">
        <h1 className="display-4">Welcome to Student Dashboard</h1>
        <p className="lead">
          Manage students efficiently using React, Context API, and React-Bootstrap UI.
        </p>
      </Card>
    </Container>
  );
}

