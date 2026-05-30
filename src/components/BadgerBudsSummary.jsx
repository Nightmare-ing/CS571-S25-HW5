import { useContext } from "react";
import { Button, Card, Image } from "react-bootstrap";
import BadgerBudsDataContext from "../contexts/BadgerBudsDataContext";

export default function BadgerBudsSummary(props) {
    return (
        <Card>
            <Card.Img
                src={
                    "https://raw.githubusercontent.com/CS571-S25/hw5-api-static-content/main/cats/" +
                    props.imgIds[0]
                }
                alt={"Image for " + props.name}
                style={{ aspectRatio: "1/1", objectFit: "cover" }}
                variant="top"
            />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
            </Card.Body>
            <Card.Footer className="d-flex gap-2">
                <Button size="sm">Show more</Button>
                <Button size="sm" variant="secondary">
                    ❤️ Save
                </Button>
            </Card.Footer>
        </Card>
    );
}
