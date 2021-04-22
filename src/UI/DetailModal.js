import React from "react";
import {
    Button,
    Modal,
    ModalBody,
    Container,
    ModalFooter,
    Row,
    Col,
} from 'react-bootstrap';
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import EditBook from "./EditBook";

const Details = (props) => {
    return (
        <Modal  show={props.show} size="md"  onHide={props.hideModal}>
            <ModalHeader closeButton={true} >
                Details
        </ModalHeader>
            <ModalBody>
                <Container>
                    <Row>
                        <Col >
                            <img src={props.img} alt="hello"></img>
                        </Col>
                        <Col>
                            <h3>{props.title}</h3>
                            <h3>{props.author}</h3>
                            <h3>{props.publication}</h3>
                            <h3>{props.description}</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Button style={{ marginLeft: "2%", width: "100%" }} href={props.pdf} target="__blank"> Download</Button>
                    </Row>
                </Container>

            </ModalBody>
            <ModalFooter>
            </ModalFooter>
        </Modal>

    );
}
export default Details;