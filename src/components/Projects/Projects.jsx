import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { PROJECTS } from "../../Constants";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Container>
                <p className="heading-description blockquote">
                    I have spent a lot of time on different projects. I love
                    doing everything from scratch. Here are some of my favorite
                    ones which sum up my knowledge. I have done many small
                    projects from different courses and challenges to learn the
                    basics. You can check them on my
                    <strong className="purple"> Github </strong>
                    work
                </p>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row
                    style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                    {PROJECTS.map((project, index) => (
                        <Col md={4} className="project-card" key={index}>
                            <ProjectCard
                                imgPath={project.image}
                                technologyUsed={project.technologyUsed}
                                isBlog={false}
                                title={project.name}
                                description={project.description}
                                link={project.url}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
