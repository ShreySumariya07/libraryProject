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

const Details = (props) => {
    return (
        <Modal show={props.show} size="md" onHide={props.hideModal}>
            <ModalHeader closeButton={true} >
                Details
        </ModalHeader>
            <ModalBody>
                <Container>
                    <Row>
                        <Col >
                            <img src={props.img} alt="Image2" style={{height:'200px',width:'200px'}}></img>
                        </Col>
                        <Col>
                            <Row style={{ marginBottom: "1%" }}><h2>{props.title}</h2></Row>
                            <Row><h6>By : {props.author}</h6><h6>Published by: {props.publication}</h6></Row>
                            <Row><h5> {props.description}</h5></Row>
                        </Col>
                    </Row>
                    <Row>
                        <Button style={{ marginLeft: "2%", width: "100%" }} href={props.pdf} target="__blank"> Download</Button>
                    </Row>
                </Container>
            </ModalBody>
            <ModalFooter />
        </Modal>

    );
}
export default Details;