import {Col, Container, Tab, Row, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ProjImg1 from "../assets/ProjImg1.jpeg"
import ProjImg2 from "../assets/ProjImg2.jpg"
import ProjImg3 from "../assets/ProjImg3.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects= () =>{
    const projects = [
        {
            title:"TO-DO List",
            description:"TechStack used:TypeScript",
            imgUrl: ProjImg1
        },
        {
            title:"React Budget App",
            description:"TechStack used: ReactJS",
            imgUrl: ProjImg2
        },
        {
            title:"Full-Stack Notes App",
            description:"TechStack used: WASP",
            imgUrl: ProjImg3
        }
    ];
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p> </p>
                    <Tab.Container id="project-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Designs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Other Works</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project,index) =>{
                                    return(
                                       <ProjectCard
                                       key={index}
                                       {...project}
                                       />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">The upload process is ongoing.</Tab.Pane>
                    <Tab.Pane eventKey="third">The upload process is ongoing. </Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
                  </div>}
                  </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}