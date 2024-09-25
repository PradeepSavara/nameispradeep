import React from "react";

function Project() {
  const footerStyle = {
    // width: '100%',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '14px',
  };
  return (
    <>
      <p className="h1 my-4" style={{ fontFamily: "serif",textAlign:'center',margin:'0'}}>
        My Recent <span style={{color:'#a601d7'}}>Works</span>
      </p>
      <p className="h4 my-4" style={{ fontFamily: "serif",textAlign:'center',margin:'0' }}>
        Here are few <span style={{color:'#a601d7'}}>Projects</span> I've worked on recently.
      </p>
      <div className="row justify-content-center align-items-center g-2" style={{margin:'0',width:'100%'}}>
        <div className="project card mx-4 my-4" style={{width:'18rem'}}>
          <img className="card-img-top" src="funtext.jpg" alt="..." />
          <div className="card-body">
            <h5 className="card-title">!FunText</h5>
            <p className="card-text">
              I've designed a FunText application using React, where you can find number of characters, upper case
              lower case , copy the text, reverse the text, time taken by the system to read your text.
            </p>
            <a href="https://fun-text-sigma.vercel.app" className="btn btn-primary">
              Know More
            </a>
          </div>
        </div>
        <div className="project card mx-4 my-4" style={{width:'18rem'}}>
          <img className="card-img-top" src="WordPress.png" alt="..." />
          <div className="card-body"> 
            <h5 className="card-title">Portfolio- Using wordpress</h5>
            <p className="card-text">
              To gain some knowledge and work with wordpress,I created this.
            </p>
            <a href="nameispradeep.wordpress.com" className="btn btn-primary">
              Know More
            </a>
          </div>
        </div>
        <div className="project card mx-4 my-4" style={{width:'18rem'}}>
          <img className="card-img-top" src="todolist.jpg" alt="..." />
          <div className="card-body">
            <h5 className="card-title">ToDoList</h5>
            <p className="card-text">
              Using html, css and js I've designed ToDoList to remind your work .This will remainds your work whenever 
              you open this website.You can add multiple tasks to do.
            </p>
            <a href="https://to-do-list-one-nu-92.vercel.app/" className="btn btn-primary">
              Know More
            </a>
          </div>
        </div>
        <div className="project card mx-4 my-4" style={{width:'18rem'}}>
          <img className="card-img-top" src="apssdc.png" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Figma - APSSDC website</h5>
            <p className="card-text">
              I have designed APSSDC website as a project that have been given to me when I was learning FIGMA course.
            </p>
            <a href="https://www.figma.com/proto/QPlTrwBIlFJGHMM7IA88CN/FirstFigma?type=design&node-id=88-8617&t=iqjcoZS03GGflwPA-1&scaling=scale-down&page-id=88%3A8616&mode=design" className="btn btn-primary">
              Know More
            </a>
          </div>
        </div>
        <div className="project card mx-4 my-4" style={{width:'18rem'}}>
          <img className="card-img-top" src="daily.png" alt="..." style={{height:'280px'}}/>
          <div className="card-body">
            <h5 className="card-title">!DailyNews</h5>
            <p className="card-text">
              As a MERN developer , i have created a webiste where you can read news daily.But it is not deployed due to API restrictions.
            </p>
            <a href="/" className="btn btn-primary">
              Know More
            </a>
          </div>
        </div>
      </div>
      <br /><br /><br />
      <div className="footer" style={footerStyle}>
        <p>Designed and Developed by Pradeep Savara | Copyrights Reserved 2024</p>
      </div>
    </>
  );
}

export default Project;
