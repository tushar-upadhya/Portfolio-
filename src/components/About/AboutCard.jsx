import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        I am <span className="purple">Tushar Upadhyay </span>
                        from <span className="purple"> Hathras, India.</span>
                        <br />
                        Software Engineer who loves to transform ideas into
                        reality using code.
                        <br />
                        I enjoy creating beautiful, accessible, and responsive
                        websites using HTML, CSS, Tailwind, Sass, SCSS, Vanilla
                        JavaScript, and React. Effective use of time,
                        problem-solving, and communication skills help me show a
                        positive attitude in complex situations, and my desire
                        to learn quickly adapts me to changing situations.
                        <br />
                        Apart from coding, some other activities that I love to
                        do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Music
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Biking
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Traveling
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Watching Animation Movie
                        </li>
                    </ul>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
