import { useContext, useState } from "react";
import BadgerBudsDataContext from "../../../contexts/BadgerBudsDataContext";
import BadgerBudsSummary from "../../BadgerBudsSummary";
import { Container, Row, Col } from "react-bootstrap";

export default function BadgerBudsAdoptable(props) {
    const buds = useContext(BadgerBudsDataContext);
    let catIds = JSON.parse(sessionStorage.getItem("savedCatIds"));
    const [savedCatIds, setSavedCatIds] = useState(catIds ?? []);
    catIds = JSON.parse(sessionStorage.getItem("adoptedCatIds"));
    const [adoptedCatIds, _] = useState(catIds ?? []);
    const adoptableBuds = buds.filter(
        (bud) =>
            !savedCatIds.includes(bud.id) && !adoptedCatIds.includes(bud.id),
    );

    function saveCat(id) {
        const updatedSavedCatIds = [...savedCatIds, id];
        setSavedCatIds(updatedSavedCatIds);
        sessionStorage.setItem(
            "savedCatIds",
            JSON.stringify(updatedSavedCatIds),
        );
    }
    return (
        <div>
            <h1>Available Badger Buds</h1>
            <p>
                The following cats are looking for a loving home! Could you
                help?
            </p>
            <Container fluid>
                <Row className="gy-3">
                    {adoptableBuds.map((bud) => (
                        <Col xs={12} md={6} lg={3} key={bud.id}>
                            <BadgerBudsSummary {...bud} save={saveCat} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
