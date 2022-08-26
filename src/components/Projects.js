import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/solidity.png";
import projImg2 from "../assets/img/js.png";
import projImg3 from "../assets/img/rust.png";
import partnerships from "../assets/img/partnership.png";
import ecopartnership from "../assets/img/eco-partnership.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Solidity Bootcamp",
      description: "Organized a boot camp in learning and motivated them by incentivizing their learning process.",
      imgUrl: projImg1,
    },
    {
      title: "Javascript Bootcamp",
      description: "Started from scratch to level where people can integrate JS with the blockchain",
      imgUrl: projImg2,
      URL: "https://docs.google.com/document/d/1MRrOhtbkJZW0qjM1koYnfuMag9cI3nICfdW7-DFh9co/edit",
      
    },
    {
      title: "Rust Masterclass",
      description: "To get familiar with Rust language semanticss",
      imgUrl: projImg3,
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>The team at TPG has conducted onboarding sessions for women on various web3 topics, and created
opportunities for women in web3 in the form of grants, and bounties etc., we have also provided
mentorship to the women in the community and have created occasions for cross mentorship within
the group. We also conduct bootcamps and immersive sessions for various domains (Development,
Marketing, Operations, Design, Product etc.).</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Technical</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Grants</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Partnerships</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>NFT Claim Platform (2 women from The Phoenix Guild):
                        <br/>
                      <strong>Project Compensation: 2000$</strong>
                      <hr/>
Rust Study Group(3 women):
<li>Sweta</li>
<li>Gyan</li>
<li>Almas</li>

<strong>Grant: 6000$</strong>
</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Partnerships So Far <img src={partnerships} alt="" />
                      <hr />
                      Ecosystem Partnerships so Far <img src={ecopartnership} alt="" /></p>

                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
