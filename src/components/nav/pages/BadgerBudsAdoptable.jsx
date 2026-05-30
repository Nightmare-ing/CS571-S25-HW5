import { useContext } from "react";
import BadgerBudsDataContext from "../../../contexts/BadgerBudsDataContext";
import BadgerBudsSummary from "../../BadgerBudsSummary";
import { Container, Row, Col } from "react-bootstrap";

export default function BadgerBudsAdoptable(props) {
    const buds = useContext(BadgerBudsDataContext);
    return (
        <div>
            <h1>Available Badger Buds</h1>
            <p>
                The following cats are looking for a loving home! Could you
                help?
            </p>
            <Container fluid>
                <Row className="gy-3">
                    {buds.map((bud) => (
                        <Col xs={12} md={6} lg={3} key={bud.id}>
                            <BadgerBudsSummary {...bud} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
