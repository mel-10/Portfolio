import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import coder from '../assets/coder.png';

export const Coder = () => {
  return (
    <Container id="coder">
      <section className="coder">
        <Row className="rectangle">
          <Col md={8} className="code">
            <div className="code-editor">
              <div className="editor-header">
                <div className="editor-buttons">
                  <span className="editor-button close"></span>
                  <span className="editor-button minimize"></span>
                  <span className="editor-button maximize"></span>
                </div>
                <div className="editor-title">index.js</div>
              </div>
              <div className="box">
                <div className="text-wrapper">Code of Life</div>
                <div className="overlap-group">
                  <div className="while-mels-exists">
                    <div className="comment">
                      # Life's code, tirelessly coding away as 'mels' persist,<br />
                      # It's like chasing bugs in a cosmic software, but hey, at least we're debugging existence!<br />
                    </div>
                    <div className="code-line">
                      <span className="keyword">while</span>(<span className="variable">mels</span> <span className="operator">exists</span>)
                    </div>
                    <div className="code-line">{"{"}</div>
                    <div className="code-line">
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="function">Life.coding</span>();
                    </div>
                    <div className="comment">
                      # If 'mels' keeps this up, life might need a coffee break to handle this eternal debugging!<br />
                    </div>
                    <div className="code-line">{"}"}</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="d-flex justify-content-end align-items-center">
            <img src={coder} className="coderimg" alt="Coder" />
          </Col>
        </Row>
      </section>
    </Container>
  );
};
