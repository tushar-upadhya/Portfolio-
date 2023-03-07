import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myImg.png";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={6} className="home-header">
                            <h1
                                style={{ paddingBottom: 15 }}
                                className="heading"
                            >
                                Hi There!{" "}
                                <span
                                    className="wave"
                                    role="img"
                                    aria-labelledby="wave"
                                >
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <strong className="main-name">
                                    {" "}
                                    Tushar Upadhyay
                                </strong>
                            </h1>

                            <p className="heading-description blockquote">
                                I am a Frontend Developer, passionate about
                                building digital products that improve everyday
                                experience for people. I love to work on
                                exciting projects that test what I've learnt,
                                whilst being exposed to the power and potential
                                of the ever-evolving technologies around us. I'm
                                always looking for better, and more importantly,
                                ethical and accessible ways to solve the common
                                problems we are faced with day-to-day.
                            </p>

                            <div className="heading-type">
                                <TypeWriter />
                            </div>
                        </Col>

                        <Col md={5}>
                            <img
                                src={myImg}
                                className="profile-pic"
                                alt="avatar"
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="home-about-section" id="about">
                <Container>
                    <Row>
                        <Col md={12} className="home-about-social">
                            <h1>Get in Touch</h1>
                            <p>
                                {" "}
                                Whether you want to get in touch, or talk about
                                a project collaboration.
                                <br />
                                <strong>Feel free to connect with me</strong>
                            </p>
                            <SocialMedia />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Home;
