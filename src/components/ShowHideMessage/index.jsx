import { Container, Row, Col, Button, Toast } from "react-bootstrap"
import { useShow } from "../../hooks/useShow"

export const ShowHideMessage = () => {

  const { show, handleShowMessage } = useShow(false);

  return (
    <Container style={{ marginTop: "12rem" }}>
      <Row className="mt-5" style={{ display: "flex", alignItems: "center", margin: "15rem" }}>
        <Col xs={12} lg={{ span: 6, offset: 0 }} className="text-center">
          <Button className="mb-2" variant={show ? 'danger' : 'success'} onClick={handleShowMessage}>
            {show ? 'Oculta' : 'Mostrar'} mensaje
          </Button>
          <Toast show={show} onClose={handleShowMessage} className="m-auto" >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto" style={{ color: "gray" }}>✅ Mensaje</strong>
            </Toast.Header>
            <Toast.Body><h3 style={{ fontWeight: "bold", padding: "2rem", margin: " 0.2rem" }}>Espero que tengas una linda tarde c:</h3></Toast.Body>
          </Toast>
        </Col>
        <Col xs={12} lg={{ span: 6, offset: 0 }} className="text-left" style={{
          backgroundColor: 'rgb(251 236 175)', color: 'rgb(143 132 90)', borderRadius: '5px', border: "solid 1px", borderColor: "rgb(231 213 143) "}}>
          <h3>Consigna:</h3>
          <p>En la clase numero 1 hemos implementado un boton que muestra y oculta un mensaje</p>
          <hr></hr>
          <h3>Usamos:</h3>
          <ul style={{ listStyle: "none", paddingLeft: "10px", padding: "5px" }}>
            <li>- Hook useState</li>
            <li>- React Boostrap</li>
            <li>- React Router Doom</li>
            <hr></hr>
          </ul>
        </Col>
      </Row>
    </Container>
  )

}