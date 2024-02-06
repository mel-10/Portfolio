import {Row, Col, Container} from "react-bootstrap";
import coder from '../assets/coder.png';

export const Coder = ()=>{
    return(
        <Container id="coder">
            <section className="coder" >
                <Row className="rectangle">
                    <Col md={8} className="code">
                        <div className="box">
                        
                            
                            <div className="text-wrapper">Code of the life</div>
                                <div className="overlap-group">
                                
                                    <div className="while-mels-exists">
                                        <div className="comment">
                                      #Life's code, tirelessly coding away as 'mels' persist,<br/>
                                      #It's like chasing bugs in a cosmic software, but hey, at least we're debugging existence!<br/>
                                        </div>
                                        while(mels exists)
                                        <br />
                                        {"{"}
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;Life.coding( );
                                        <br />
                                        <div className="comment">
                                        #If 'mels' keeps this up, life might need a coffee break to handle this eternal debugging!<br/>
                                        </div>
                                        {"}"}
                                    </div>
                                  
                                </div>
                               
                            </div>
                    </Col>
                    <Col  md={4} className="d-flex justify-content-end align-items-center">
                        <img src={coder} className="coderimg" />
                    </Col>
                </Row>
            </section>
        </Container>
    )
}