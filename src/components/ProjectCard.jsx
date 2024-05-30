import React from 'react';
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <a href={url} target="_blank" rel="noopener noreferrer" className="project-link">
                <div className="proj-imgbx">
                    <img src={imgUrl} alt="Project" />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                    <div className="proj-desc">{title}</div>
                </div>
            </a>
        </Col>
    );
};
