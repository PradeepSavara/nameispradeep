// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-dark sticky-top">
//         <div className="division container-fluid bg-black d-flex">
//           <img
//             src="/sp.jpg"
//             alt="..."
//             width="50"
//             height="50"
//             className="mx-2 rounded-circle"
//           />
//           <Link className="navbar-brand fs-5 text-white" to="/" >
//             <strong style={{color:'#a601d7'}}>𝓢𝓟.</strong>
//           </Link>
//           <button
//             className="navbar-toggler bg-white"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link
//                   className="nav-link mx-4 fs-5 text-white underline-hover"
//                   aria-current="page"
//                   to="/"
//                 >
//                   <i className="bx bx-home-alt mx-1"></i>
//                   <strong>Home</strong>
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link mx-4 fs-5 text-white underline-hover" to="/about">
//                   <i className="bx bx-body mx-1"></i>About
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link mx-4 fs-5 text-white underline-hover" to="/project">
//                   <i className="bx bx-show-alt mx-1"></i>Projects
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link mx-4 fs-5 text-white underline-hover" to="/resume">
//                   <i className="bx bx-notepad mx-1"></i>Resume
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link mx-4 fs-5 text-white underline-hover" to="/contact">
//                   <i className="bx bxs-phone mx-1"></i>Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;



import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark sticky-top">
        <div className="container-fluid d-flex justify-content-between align-items-center bg-black">
          {/* Logo and Brand */}
          <div className="d-flex align-items-center">
            <img
              src="/sp.jpg"
              alt="..."
              width="50"
              height="50"
              className="mx-2 rounded-circle"
            />
            <Link className="navbar-brand fs-5 text-white" to="/">
              <strong style={{ color: '#a601d7' }}>𝓢𝓟.</strong>
            </Link>
          </div>

          {/* Button for mobile view */}
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation links */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex">
              <li className="nav-item">
                <Link
                  className="nav-link mx-4 fs-5 text-white underline-hover"
                  aria-current="page"
                  to="/"
                >
                  <i className="bx bx-home-alt mx-1"></i>
                  <strong>Home</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4 fs-5 text-white underline-hover" to="/about">
                  <i className="bx bx-body mx-1"></i>About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4 fs-5 text-white underline-hover" to="/project">
                  <i className="bx bx-show-alt mx-1"></i>Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4 fs-5 text-white underline-hover" to="/resume">
                  <i className="bx bx-notepad mx-1"></i>Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4 fs-5 text-white underline-hover" to="/contact">
                  <i className="bx bxs-phone mx-1"></i>Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
