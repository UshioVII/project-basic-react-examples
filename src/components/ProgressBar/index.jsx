import React, { useRef, useState } from 'react'
import { Container, Row, Col, Card, Button, ProgressBar as BarProgress, FormControl} from 'react-bootstrap'

export const ProgressBar = () => {
  const [now, setNow] = useState(0);
  const inputRef = useRef(null)

  const handleDownload = () => {
  const valueInput = inputRef.current?.value
  const interval = setInterval(() => {
      setNow((now) =>{
        if (now === +valueInput) {
          clearInterval(interval);
          return now
        }
        return now + 1
      }); 
    }, 100);
  };
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} lg={{ span: 8, offset: 2 }} className="text-center">
          <Card  style={{ width: '40rem' }}  className="m-auto">
            <Card.Body>
              <Card.Title>Progress Bar</Card.Title>
              <BarProgress animated now={now} label={`${now}%`} variant='success' />;

              <FormControl
              ref={inputRef}
              placeholder="Ingresar tiempo de descarga"
              className="my-3"
              >

              </FormControl>
              <Button variant="primary" onClick={handleDownload}>Descargar</Button> 
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
