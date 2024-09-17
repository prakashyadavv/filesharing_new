
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
// import { Container } from "react-bootstrap";
import Navbar from "./components/navbar"; // Updated component name to match file name
import Footer from "./components/footer"; // Updated component name to match file name
import Home from "./components/home"; // Updated component name to match file name
import Login from "./components/login"; // Updated component name to match file name
import Signup from "./components/signup"; // Updated component name to match file name
import ForgotPassword from "./components/forgotpassword"; // Updated component name to match file name

import Dashboard from "../src/components/dashboard";

import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <Container className="mt-4">
          {/* Define routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            {/* Add routes for dashboard components */}
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Container>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Container, Row, Col } from "react-bootstrap";
// import Navbar from "./components/navbar"; // Updated component name to match file name
// import Footer from "./components/footer"; // Updated component name to match file name
// import Home from "./components/home"; // Updated component name to match file name
// import Login from "./components/login"; // Updated component name to match file name
// import Signup from "./components/signup"; // Updated component name to match file name
// import ForgotPassword from "./components/forgotpassword"; // Updated component name to match file name
// import DashboardLeft from "./components/dashboardleft"; // Import DashboardLeft component
// import DashboardRight from "./components/dashboardright"; // Import DashboardRight component
// import UploadFile from "./components/uploadfile"; // Import UploadFile component
// import UploadFolder from "./components/uploadfolder"; // Import UploadFolder component
// import DefaultComponent from "./components/defaultcomponent";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* Navbar */}
//         <Navbar />

//         {/* Main content */}
//         <Container className="mt-4">
//           <Row>
//             {/* Left Section */}
//             <Col
//               md={3}
//               style={{ minHeight: "100vh", borderRight: "1px solid #ccc" }}
//             >
//               <DashboardLeft />
//             </Col>

//             {/* Right Section */}
//             <Col md={9}>
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/forgot-password" element={<ForgotPassword />} />
//                 <Route path="/dashboard" element={<DashboardRight />} />
//                 <Route path="/upload-file" element={<UploadFile />} />
//                 <Route path="/upload-folder" element={<UploadFolder />} />
//                 <Route path="*" element={<DefaultComponent />} />
//               </Routes>
//             </Col>
//           </Row>
//         </Container>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
