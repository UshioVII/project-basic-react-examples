import React, { useRef, useState, useEffect } from 'react'
import { Container, Row, Col, Card, Button, ProgressBar as BarProgress, FormControl, Modal } from 'react-bootstrap'
import styles from './styles.module.css';
import rickrollGif from './rickroll-roll.gif';
import rickrollSound from './RickRollSoundEffect.mp3';

export const ProgressBar = () => {
  const [now, setNow] = useState(0);
  const [intervalState, setIntervalState] = useState(null);
  const inputRef = useRef(null);
  const [btnDisable, setBtnDisable] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showRickrollWin, setShowRickrollWin] = useState(false);

  const soundRef = useRef(null);

  const handleDownload = () => {
    const valueInput = +inputRef.current?.value;
    const isValueValid = !isNaN(valueInput) && valueInput > 0 && valueInput < 101
    setShowModal(!isValueValid)

    if (intervalState) {
      clearInterval(intervalState)
    }

    if (isValueValid) {
      const interval = setInterval(() => {
        setNow((now) => {
          console.log(now)
          if (now === valueInput) {
            clearInterval(interval);
            setShowRickrollWin(true);
            return now;
          }
          return now + 1;
        });
      }, 1000);
      setIntervalState(interval)
    } else {
      handleReset()
    }
  };

  const handleReset = () => {
    setNow(0)
    clearInterval(intervalState);
  };

  const handleChange = ({ target: { value } }) => {
    setBtnDisable(!!!+value)
  };

  const handleClose = () => {
    setShowModal(false)
  };

  const handleRickrollWin = () => {
    setShowRickrollWin(false);
    handleReset();
  };

  useEffect(() => {
    if (now === 100) {
      soundRef.current.play();
    }
  }, [now])

  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} lg={{ span: 8, offset: 2 }} className="text-center">
          <Card style={{ width: '40rem' }} className="m-auto">
            <Card.Body>
              <Card.Title>Progress Bar</Card.Title>
              <BarProgress animated now={now} label={`${now}%`} className={styles.bar} />

              <FormControl
                ref={inputRef}
                placeholder="Ingresar tiempo de descarga"
                className="my-3"
                onChange={handleChange}
              >
              </FormControl>
              <Button variant="primary" onClick={handleDownload} disable={btnDisable}>Descargar</Button>
              <Button variant="danger" onClick={handleReset}>Reiniciar</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mensaje.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <h2 className="text-danger text-center py-4">ERROR... ✖️</h2>
            <p className='text-muted fs-4 text-center'>Solo se acepta valores numéricos. El valor debe ser mayor a 0 y menor 100.</p>
          </>
        </Modal.Body>
      </Modal>
      <Modal show={showRickrollWin} onHide={handleRickrollWin}>
        <Modal.Header closeButton>
          <Modal.Title>Mensaje.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <h2 className="text-success text-center py-4">¡Fuiste RickRolleado! 👍</h2>
            <img
              src={rickrollGif}
              alt="Rick Roll Gif"
              className="img-fluid m-auto d-block"
            />
          </>
        </Modal.Body>
      </Modal>
      <audio src={rickrollSound} ref={soundRef}></audio>
    </Container>
  )
}