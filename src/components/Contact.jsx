import { useState } from "react"
import { Container , Row , Col} from "react-bootstrap";
import contactImg from "../assets/contactImg.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () =>{
    const formInitailDeatils ={
        firstName:'',
        lastName:'',
        email: '',
        phone: '',
        message: ''
    }
    const[formDetails, setFormDetails]= useState(formInitailDeatils);
    const[buttonText,setButtonText]=useState('Send');
    const[status, setStatus]=useState({});

    const onFormUpdate=(category,value)=>{
        setFormDetails({
            ...formDetails,
            [category]:value 
        })
    }

    const handleSubmit= async (e) => {
        e.preventDefault();
        setButtonText('Sending');
        let response= await fetch("http://localhost:5000/contact",{
            method:"POST",
            headers:{
                "Content-Type": "Application/json;charset=utf-8",
            },
            body:JSON.stringify(formDetails),

        });
        setButtonText("Send");
        let result= response.json();
        setFormDetails(formInitailDeatils);
        if(result.code === 200){
            setStatus({success: true, message:'Message sent Sucessfully'});
        } else {
            setStatus({ success: false, message:'Something went wring , Please try again later!'})
        }

    };
    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                
                    <Col size={12} md={6} className="contain-bx">
                    <div class="image-container">
                    <TrackVisibility>
                    {({ isVisible }) =>
                    <img className={isVisible ? "animate__animated animate__fadeIn" : ""}
                      src= {contactImg}  alt="ContactUs"/>
                    } 
                    </TrackVisibility>
                    </div>
                    </Col>
                
                    <Col md={6}>
                        <h2>Contact</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=> onFormUpdate('firstName',e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=> onFormUpdate('lastName',e.target.value)}/>  
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="xyz123@email.com" onChange={(e)=> onFormUpdate('email',e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e)=> onFormUpdate('phone',e.target.value)}/>
                                </Col>
                                <Col>
                                <textarea row="6" value ={formDetails.message} placeholder="Message" onChange={(e)=> onFormUpdate('message',e.target.value)}/>
                                <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                    <p className={status.success === false ? "danger":"success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}