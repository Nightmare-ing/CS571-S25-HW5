import { Card, Button } from "react-bootstrap";

export default function BadgerBudsBasketCard(props) {
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
            <Card.Footer className="d-flex gap-2">
                <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => {
                        alert(
                            `${props.name} has been removed from your basket!`,
                        );
                        props.unselect(props.id);
                    }}
                >
                    Unselect
                </Button>
                <Button
                    size="sm"
                    variant="success"
                    onClick={() => {
                        alert(`Thank you for adopting ${props.name}! 💕 😸`);
                        props.adopt(props.id);
                    }}
                >
                    💕 Adopt
                </Button>
            </Card.Footer>
        </Card>
    );
}
