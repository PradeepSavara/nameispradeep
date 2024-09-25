import React from 'react'

function Resume() {
  const footerStyle = {
    // width: '100%',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '14px',
    margin:'0'
  };


  return (
<>
<div style={{paddingTop:'100px'}}>
<center>
<button className='btn-primary'style={{borderRadius:'7px',border:'3px solid #a601d7'}}><a href='my-resume.pdf' target='_balnk' download style={{textDecoration:'none',color:'#a601d7',fontFamily:'serif',fontSize:'18px',margin:'3px'}}>DOWNLOAD RESUME</a></button>
</center>
</div>
<br/><br/>
<div className="resume">
  <center><h2 className="text-white">My <span style={{color:'#a601d7'}}>Resume</span></h2></center>
  <center>
  <img src='PradeepSavara.jpg' alt='...' style={{width:'65%'}}/>

  </center>
  <br/>
</div>

<div className="footer fixed-bottom" style={footerStyle}>
        <p>Designed and Developed by Pradeep Savara | Copyrights Reserved 2024</p>
      </div>
</>    
  )
}

export default Resume
