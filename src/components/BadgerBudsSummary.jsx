import { useContext, useState } from "react";
import { Button, Card, Carousel, Image } from "react-bootstrap";
import BadgerBudsDataContext from "../contexts/BadgerBudsDataContext";

export default function BadgerBudsSummary(props) {
    const [showMore, setShowMore] = useState(false);

    return (
        <Card style={{ overflow: "hidden" }}>
            {showMore ? (
                <Carousel>
                    {props.imgIds.map((imgId) => (
                        <Carousel.Item>
                            <img
                                src={
                                    "https://raw.githubusercontent.com/CS571-S25/hw5-api-static-content/main/cats/" +
                                    imgId
                                }
                                alt={
                                    "Image for " +
                                    props.name +
                                    "with image id " +
                                    imgId
                                }
                                className="d-block w-100"
                                style={{
                                    aspectRatio: "1/1",
                                    objectFit: "cover",
                                }}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            ) : (
                <Card.Img
                    src={
                        "https://raw.githubusercontent.com/CS571-S25/hw5-api-static-content/main/cats/" +
                        props.imgIds[0]
                    }
                    alt={"Image for " + props.name}
                    style={{ aspectRatio: "1/1", objectFit: "cover" }}
                    variant="top"
                />
            )}
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                {showMore && (
                    <div>
                        {props.gender && <Card.Text>{props.gender}</Card.Text>}
                        {props.breed && <Card.Text>{props.breed}</Card.Text>}
                        {props.age && <Card.Text>{props.age}</Card.Text>}
                        {props.description && (
                            <Card.Text>{props.description}</Card.Text>
                        )}
                    </div>
                )}
            </Card.Body>
            <Card.Footer className="d-flex gap-2">
                <Button size="sm" onClick={() => setShowMore(!showMore)}>
                    Show {showMore ? "Less" : "More"}
                </Button>
                <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => {
                        alert(`${props.name} has been added to your basket!`);
                        props.save(props.id);
                    }}
                >
                    ❤️ Save
                </Button>
            </Card.Footer>
        </Card>
    );
}
