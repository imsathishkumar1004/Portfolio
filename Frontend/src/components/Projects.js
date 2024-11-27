import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/home.png";
import projImg2 from "../assets/img/Screenshot (199).png";
import projImg3 from "../assets/img/Expense_Track.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Healthcare Service",
      description: "MERN STACK PROJECT",
      imgUrl: projImg1,
    },
    {
      title: "Rentify Application",
      description: "MERN STACK PROJECT",
      imgUrl: projImg2,
    },
    {
      title: "Expense Tracker",
      description: "JavaScript project",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row className="justify-content-center">
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="text-center">Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Project 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Project 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Project 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p className="text-center">The Kongu Healthcare Service is a comprehensive online platform developed using the MERN stack. It aims to simplify the process of booking healthcare appointments for patients and managing appointments for healthcare providers. The system offers features such as appointment scheduling, patient registration, doctor availability, and reminders to ensure a smooth and efficient healthcare appointment experience.</p>
                    <Row className="justify-content-center">
                    <ProjectCard {...projects[0]} />
                    </Row>
                    <a href="https://healthbooker.onrender.com/" target="_blank" rel="noopener noreferrer"><button 
                    style={{
                    backgroundColor: 'black', 
                    color: 'white', 
                    border: 'none', 
                    padding: '10px 580px', 
                    cursor: 'pointer', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    fontSize: '16px'
                    }}
                  >
                    Explore It.. <ArrowRightCircle size={25} />
                  </button>
                </a>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <p className="text-center">Rentify is an advanced e-commerce platform designed to facilitate the rental of cameras, phones, and watches. Built using the MERN stack, the platform provides users with a seamless and user-friendly interface to browse, compare, and rent a wide range of electronic devices. It features secure payment gateways, detailed product descriptions, customer reviews, and a user dashboard to manage rentals, ensuring a convenient and its trustworthy rental experience for both renters and owners.</p>
                        <Row className="justify-content-center">
                          <ProjectCard {...projects[1]} />
                        </Row>
                        <a href="https://github.com/imsathishkumar1004/Rentify" target="_blank" rel="noopener noreferrer"><button 
                    style={{
                    backgroundColor: 'black', 
                    color: 'white', 
                    border: 'none', 
                    padding: '10px 580px', 
                    cursor: 'pointer', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    fontSize: '16px'
                    }}
                  >
                    Explore It.. <ArrowRightCircle size={25} />
                  </button>
                </a>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p className="text-center">The Expense Tracker is a Node.js-based app that helps users manage their finances by tracking income and expenses. It displays the current balance, transaction history, and allows users to add new transactions with descriptions and amounts. Positive amounts represent income, and negative amounts represent expenses. The app updates in real-time to reflect changes in the balance and transaction history.</p>
                        <Row className="justify-content-center">
                         <ProjectCard {...projects[2]} />
                         </Row>
                         <a href="https://github.com/imsathishkumar1004/expense_tracker_api" target="_blank" rel="noopener noreferrer"><button 
                    style={{
                    backgroundColor: 'black', 
                    color: 'white', 
                    border: 'none', 
                    padding: '10px 580px', 
                    cursor: 'pointer', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    fontSize: '16px'
                    }}
                  >
                    Explore It.. <ArrowRightCircle size={25} />
                  </button>
                </a>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}
