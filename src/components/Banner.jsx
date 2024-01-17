import { useState,useEffect } from "react"
import { Container,Row ,Col } from "react-bootstrap"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import banner from '../assets/banner.png'



export const Banner = () => {
    const [loopNum,setLoopNum]=useState(0);
    const [isDeleting,setIsDeleting]= useState(false);
    const [index,setIndex]=useState(1);
    const toRotate=["Web Developer","Web Designer","Student"];
    const [text,setText]= useState('');
    const [delta,setDelta]= useState(300-Math.random()*100);
    const period=2000;

    useEffect(()=>{
        let ticker=setInterval(()=>{
            tick();
        },delta);

        return ()=>{clearInterval(ticker)};
    },[text])

    const tick= ()=>{
        let i= loopNum % toRotate.length;
        let fullText= toRotate[i];
        let upadatedText =isDeleting ? fullText.substring(0, text.length -1): fullText.substring(0, fullText.length + 1);

        setText(upadatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }
        if(!isDeleting && upadatedText === fullText){
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex -1);
            setDelta(period);
        } else if(isDeleting && upadatedText ===''){
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setIndex(1);
            setDelta(500);

        }else{
            setIndex(prevIndex => prevIndex +1);
        }

    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                
                    <Col xs={12} md={6} xl={7} className="bx-1">
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>Hi! I'm Malika</h1>
                                    <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='["Web Developer","Web Designer","Student"]'><span className="wrap"> {text}</span></span></h1>

                                    <p>I am a final year Student, Web Developer and a Designer.</p>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col  xs={12} md={6} xl={7} className="bx-1">
                        <div className="image-container">
                            <img src={banner} alt="Rotating Image" className="rotating-image" />
                        </div>
                    </Col>                                        
                </Row>
            </Container>
        </section>
    )
}