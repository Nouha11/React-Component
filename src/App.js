import './App.css';
import React from "react";
import { Card, Button} from 'react-bootstrap';
import Name from './Components/FullName'
import Addressse from './Components/Address'
import Photo from './Components/ProfilePhoto'

function App() {
  return (
    <div className="App">
      <main className="Main">
          <Card className="Card" style={{ width: '18rem' }}>
      <Card.Img variant="top" />
      <Photo />
      <Card.Body>
        <Card.Title><Name></Name></Card.Title>
        <Card.Text>
          <Addressse></Addressse>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </main>
    </div>
  );
}

export default App;
