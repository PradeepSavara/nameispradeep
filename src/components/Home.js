
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Home() {
    const image = {
        width: '100%',
        maxWidth: '450px',
        height: 'auto',
        borderRadius: '20px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    };

    const para = {
        fontSize: '2.5rem',
        paddingTop: '2rem',
        paddingLeft: '1rem',
        position: 'relative',
        fontFamily:'serif'
    };

    const container = {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
    };

    const textContainer = {
        textAlign: 'center',
    };

    const description = {
        fontSize: '20px',
        letterSpacing: '2px',
        fontFamily: 'sans-serif',
        margin: '30px auto', // Center the description content
        maxWidth: '800px', // Limit the width
        textAlign: 'center', // Center the text
    };

    const logoContainer = {
        fontSize: '40px',
        letterSpacing: '30px',
        justifyContent: 'center', // Center the logos
        display: 'flex',
    };

    // const logo = {
    //     transition: 'all 0.3s ease-in-out, box-shadow 0.3s ease',
    // };

    // const logoHoverEffect = {
    //     filter: 'brightness(1.2)',
    //     boxShadow: '0 0 20px 5px pink',
    //     transform: 'scale(1.1)',
    // };

    const footer = {
        // width: '100%',
        height: '60px',
        display: 'flex',
        justifyContent: 'center', // Center the footer text horizontally
        alignItems: 'center', // Center the footer text vertically
        backgroundColor: 'black',
        textAlign:'center',
        color: 'white',
        fontSize: '14px',
    };

    return (
        <>
            <div className="container-fluid" style={container}>
                <div className="row w-100 d-flex align-items-center justify-content-between">
                    <div className="info col-12 col-md-6" style={textContainer}>
                        <p className="para fw-bold mx-md-5 my-md-2" style={para}>
                            <br/>
                            Hi There! <i className="bx" style={{color:'#a601d7'}}>👋🏻</i><br />
                            I'M <span style={{color:'#a601d7'}}>PRADEEP SAVARA</span>
                        </p>
                        <h2 className="mx-md-5 fw-bold" style={{color:'#a601d7',fontFamily:'serif'}}>
                            <TypeAnimation
                                sequence={[
                                    'Software Engineer !', 2000,
                                    '', 500,
                                    'MERN Developer !', 2000,
                                    '', 500,
                                    'Open Source Contributor !', 2000,
                                    '', 500,
                                    'Freelancer Designer !', 2000,
                                    '', 500,
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                            />
                        </h2>
                    </div>
                    <div className="image col-12 col-md-6 my-4 my-md-5 text-center">
                        <img 
                            src="pradeep.jpg" 
                            alt="..." 
                            style={image} 
                            className="hover-effect"
                        />
                    </div>
                </div>
            </div>
            <br/><br/><br></br>
            <div className="intro row" style={{margin:'0'}}>
                
                <p className="h2" style={{color:'#a601d7',textAlign:'center',margin:'0'}}>LET ME INTRODUCE MYSELF</p>
            </div>
            <div className="description" style={description}>
                "I'm a passionate <span style={{color:'#a601d7'}}>MERN</span> stack developer with experience in building <span  style={{color:'#a601d7'}}>full-stack </span>applications.
                 I specialize in <span style={{color:'#a601d7'}}>JavaScript, React, Node.js,Express.js and MongoDB</span> and I'm also an active contributor to open-source projects.
                  My goal is to create <span style={{color:'#a601d7'}}>efficient</span > and <span style={{color:'#a601d7'}}>scalable</span> web solutions."
                <br /><br />
                "I'm aware of <span style={{color:'#a601d7'}}>UI/UX </span> designing, as I have already built some prototypes as a project submission."
            </div>

            <div className="find h2" style={{color:'#a601d7'}}>
                <center>FIND ME ON</center>
            </div>
            <div className="h5"><center>Feel Free to <span style={{color:'#a601d7'}}>connect</span> with me.</center></div><br/>

            <div className="logo d-flex" style={logoContainer}>
                <div className="github">
                    <a href='https://github.com/PradeepSavara'><i className='logos bx bxl-github'></i></a>
                </div>
                
                <div className="linkedin">
                    <a href='https://www.linkedin.com/in/savara-pradeep-8220832b0/' ><i className='logos bx bxl-linkedin'></i></a>
                </div>
                <div className="instagram">
                    <a href='https://www.instagram.com/pradeep__2364/?hl=en' ><i className='logos bx bxl-instagram'></i></a>
                </div>
            </div>
            <br/><br/><br/>
            <div className="footer" style={footer}>
                <p>Designed and Developed by PradeepSavara | Copyrights Reserved 2024</p>
            </div>
        </>
    );
}

export default Home;
