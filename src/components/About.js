
import React, { useState } from 'react';
import './About.css';

function About() {
  const [hoverEffect, setHoverEffect] = useState({});

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
  };

  const rowStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
  };

  const textContainerStyle = {
    flex: '1',
    fontFamily: 'sans-serif',
    padding: '1rem',
    // maxWidth: '500px',
    width:'100%',
    fontSize:'18px',
    letterSpacing:'1px'
    
  };

  const imageContainerStyle = {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
  };

  const avatarStyle = {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ...hoverEffect,
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setHoverEffect({
      transform: `translate(${x / 10}px, ${y / 10}px)`,
    });
  };

  const handleMouseOut = () => {
    setHoverEffect({});
  };

  const footerStyle = {
    // width: '100%',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems:'center',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '14px',
    margin:'3px'
  };

  return (
    <>
      <div style={containerStyle}>
        <p className="h1 my-4" style={{ fontFamily: 'monospace', letterSpacing: '2px',textAlign:'center'}}>
          Know <span style={{color:'#a601d7'}}>Who</span> I'm
        </p>
        <div style={rowStyle}>
          <div style={textContainerStyle}>
            Hi Everyone, I am <span style={{color:'#a601d7'}}>Pradeep Savara</span> from Srikakulam, India.<br />
            I am a <span style={{color:'#a601d7'}}>Software Developer</span>; I can develop and deploy websites.<br />
            I make stuff that looks good and works great.<br /><br />
            Apart from coding, some other activities that I love to do:<br /><br />
            <span className='h5' style={{color:'#a601d7'}}>
              <i className='bx bx-right-arrow-circle mx-4' ></i>Playing Games<br />
              <i className='bx bx-right-arrow-circle mx-4' ></i>Travelling<br />
              <i className='bx bx-right-arrow-circle mx-4' ></i>Riding Bikes and Cars<br />
            </span>
            <br />
            <span className="h4 mx-5">
              "Be the <span style={{color:'#a601d7'}}>Expectations!</span>"<br />
              {/* <p className='h5' style={{ paddingLeft: '280px' }}>- Pradeep Savara</p> */}
            </span>
          </div>
          <div style={imageContainerStyle}>
            <img
              src='avatar.svg'
              alt='Avatar'
              style={avatarStyle}
              onMouseMove={handleMouseMove}
              onMouseOut={handleMouseOut}
            />
          </div>
        </div>
      </div>

      <p className="h1 my-4" style={{ fontFamily: 'serif',textAlign:'center',margin:'0' }}>
        Professional <span style={{color:'#a601d7'}}>skills!</span>
      </p>
      <div className="row justify-content-center align-items-center gap-4" style={{ paddingBottom: '50px',width:'100%'}}>
        {['C.svg', 'HTML5.svg', 'CSS3.svg', 'JavaScript.svg', 'React.svg', 'express.png', 'Node.js.svg', 'MongoDB.svg', 'Python.svg', 'Java.svg'].map((src, index) => (
          <div
            key={index}
            className="col-md-2 col-4 icon-container"
            style={{ margin: '10px', padding: '10px', border: '2px solid #a601d7' }}
          >
            <img src={src} alt={src.split('.')[0]} style={{ width: '150px', height: '120px' }} />
          </div>
        ))}
      </div>

        <p className="h1 my-4" style={{ fontFamily: 'serif',textAlign:'center',margin:'0' }}>
          Tools <span style={{color:'#a601d7'}}>I use</span>
        </p>
      <div className="row justify-content-center align-items-center gap-4" style={{width:'100%'}}>
        {['Visual Studio Code (VS Code).svg', 'Windows 8.svg', 'Postman.svg'].map((src, index) => (
          <div
            key={index}
            className="col-md-2 col-4 icon-container"
            style={{ 
              margin: '10px',
              padding: '10px', 
              border: '2px solid #a601d7',
              boxSizing: 'border-box',
        maxWidth: 'calc(100% / 5 - 20px)', /* Adjust for spacing */
        flexBasis: 'calc(100% / 5 - 20px)'  /* Ensures that the columns fit within the row */
               }}
          >
            <img src={src} alt={src.split('.')[0]} style={{ width: '150px', height: '120px' }} />
          </div>
        ))}
      </div>

      <br /><br /><br />
      <div className="footer" style={footerStyle}>
        <p>Designed and Developed by Pradeep Savara | Copyrights Reserved 2024</p>
      </div>
    </>
  );
}

export default About;
