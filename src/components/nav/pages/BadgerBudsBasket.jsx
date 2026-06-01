import { useContext, useState } from "react";
import BadgerBudsDataContext from "../../../contexts/BadgerBudsDataContext";
import { Col, Container, Row } from "react-bootstrap";
import BadgerBudsBasketCard from "../../BadgerBudsBasketCard";

export default function BadgerBudsBasket(props) {
    const buds = useContext(BadgerBudsDataContext);
    const catIds = JSON.parse(sessionStorage.getItem("savedCatIds"));
    const [savedCatIds, setSavedCatIds] = useState(catIds ?? []);
    const catsInBasket = buds.filter((bud) => savedCatIds.includes(bud.id));

    function unselectCat(catId) {
        const updatedSavedCatIds = savedCatIds.filter(
            (savedCatId) => savedCatId !== catId,
        );
        sessionStorage.setItem(
            "savedCatIds",
            JSON.stringify(updatedSavedCatIds),
        );
        setSavedCatIds(updatedSavedCatIds);
    }

    return (
        <div>
            <h1>Badger Buds Basket</h1>
            <p>These cute cats could be all yours!</p>
            <Container fluid>
                <Row className="gy-3">
                    {catsInBasket.map((cat) => (
                        <Col key={cat.id} xs={12} md={6} lg={3}>
                            <BadgerBudsBasketCard
                                {...cat}
                                unselect={unselectCat}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
