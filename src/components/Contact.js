
import Swal from 'sweetalert2'
import React from "react";

function App() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8abfd081-3b4a-40e7-8345-ae42ee304405");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };
  const footerStyle = {
    // width: '100%',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '14px',

  
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        
        <div className="mb-3" style={{margin:'50px'}}>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          <strong style={{color:'#a601d7'}}>      Email :
          </strong>
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          id="exampleFormControlInput1"
          placeholder="enter your E-mail"
          required
        />
      </div>
      <div className="mb-3" style={{margin:'50px'}}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <strong style={{color:'#a601d7'}}>          Description:</strong>
        </label>
        <textarea
          className="form-control"
          name="message"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Enter Description Here"
          required
        ></textarea>
      </div>
      <center>
      <button type="submit button" className="btn" style={{background:'#a601d7',color:'white'}}>Submit</button>
      </center>
      </form>
      <div className="footer fixed-bottom" style={footerStyle}>
        <p>Designed and Developed by Pradeep Savara | Copyrights Reserved 2024</p>
      </div>
      </>
  );
}

export default App;