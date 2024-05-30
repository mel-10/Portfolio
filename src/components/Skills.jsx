import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Skills = () => {
  const data = {
    labels: ['HTML/CSS', 'JavaScript', 'React.js', 'Responsive Design', 'C++', 'Python', 'MongoDB', 'MySQL', 'OS & CN', 'DSA', 'RESTful APIs', 'Firebase', 'Critical Thinking', 'Teamwork & Collaboration', 'Adaptability', 'Creativity'],
    datasets: [
      {
        label: 'Proficiency',
        data: [25, 25, 20, 15, 15, 15, 13, 13, 10, 15, 12, 12, 12, 12, 12, 12],
        backgroundColor: [
          '#003f5c',
          '#2f4b7c',
          '#665191',
          '#a05195',
          '#d45087',
          '#f95d6a',
          '#ff7c43',
          '#ffa600',
          '#003f5c',
          '#2f4b7c',
          '#665191',
          '#a05195',
          '#d45087',
          '#f95d6a',
          '#ff7c43',
          '#ffa600'
        ]
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Skills Proficiency',
      },
    },
  };

  return (
    <section className="Skills" id="skills">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="skills-description">
              <h2>Skills</h2>
              <p>
                As a proficient developer, I possess a diverse skill set encompassing various programming languages, web development technologies, and problem-solving abilities. With a focus on continuous learning and adaptability, I strive to stay updated with the latest advancements in the field of software development.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <Bar data={data} options={options} />
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
