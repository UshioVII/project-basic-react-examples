import { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";

const oneOrTwoNum = (num) => (num > 9 ? num : `0${num}`);
const pluralSingular = (num) => (num > 1 ? "s" : "");
const ONE_SECOND_TO_MILLISECOND = 1000
export const StopwatchTimerFakePractice = () => {
  const [dateNow, setDateNow] = useState(new Date());
  const [intervalState, setIntervalState] = useState(null);
  const [velocity, setVelocity] = useState(0);
  const [velocityName, setVelocityName] = useState("");

  useEffect(() => {
    const interval = setInterval(() => setDateNow(new Date()), velocity ? ONE_SECOND_TO_MILLISECOND / velocity : ONE_SECOND_TO_MILLISECOND);
    setIntervalState(interval);
  }, [velocity]);

  const handleStart = () => {
    if (intervalState) {
      handleStop();
    }

    const interval = setInterval(() => setDateNow(new Date()), velocity ? ONE_SECOND_TO_MILLISECOND / velocity : ONE_SECOND_TO_MILLISECOND);
    setIntervalState(interval);
  };

  const handleStop = () => {
    if (!intervalState) {
      console.log('No hay intervalo activo');
      return
    }
    clearInterval(intervalState);
  }

  const handleReset = () => {
    handleStop();
    setDateNow(new Date());
  };

  const handleVelocity = (vel, velText) => {
    if (intervalState) {
      handleStop()
    }
    setVelocity(vel);
    setVelocityName(velText);
  };
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} lg={{ span: 6, offset: 3 }} className="text-center">
          <ButtonGroup aria-label="Basic example" className="d-block my-1">
            <Button variant="outline-success" onClick={handleStart}>
              Comenzar
            </Button>
            <Button variant="outline-danger" onClick={handleStop}>
              Detener
            </Button>
            <Button variant="outline-dark" onClick={handleReset}>
              Reiniciar
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example">
            <Button
              variant="outline-dark"
              className={velocityName === "min" && "active"}
              onClick={() => handleVelocity(0, "min")}
            >
              Min
            </Button>
            <Button
              variant="outline-dark"
              className={velocityName === "x2" && "active"}
              onClick={() => handleVelocity(10, "x2")}
            >
              x2
            </Button>
            <Button
              variant="outline-dark"
              className={velocityName === "x4" && "active"}
              onClick={() => handleVelocity(40, "x4")}
            >
              x4
            </Button>
            <Button
              variant="outline-dark"
              className={velocityName === "x6" && "active"}
              onClick={() => handleVelocity(80, "x6")}
            >
              x6
            </Button>
            <Button
              variant="outline-dark"
              className={velocityName === "max" && "active"}
              onClick={() => handleVelocity(1000, "max")}
            >
              Max
            </Button>
          </ButtonGroup>
          <Card style={{ width: "25rem" }} className="m-auto my-3">
            <Card.Body>
              <Card.Title>Stopwatch / Timer</Card.Title>
              <Card.Text>
                {oneOrTwoNum(dateNow.getHours())} horas - {oneOrTwoNum(dateNow.getMinutes())}{" "}
                minutos - {oneOrTwoNum(dateNow.getSeconds())} segundo
                {pluralSingular(dateNow.getSeconds())}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              {oneOrTwoNum(dateNow.getHours())}:{oneOrTwoNum(dateNow.getMinutes())}:
              {oneOrTwoNum(dateNow.getSeconds())}
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};