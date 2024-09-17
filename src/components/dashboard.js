
// // Dashboard.js
// import React, { useState } from "react";
// import { Container, Row, Col, Button, Card, ProgressBar } from "react-bootstrap";
// import { useDropzone } from "react-dropzone";
// import axios from "axios";
// import RecentFiles from "../components/recentfile"
// // import RecentFiles from "./components/recentFiles";


// const Dashboard = () => {
//   const [selectedComponent, setSelectedComponent] = useState("default");
//   const [file, setFile] = useState(null);
//   const [uploadProgress, setUploadProgress] = useState(0);

//   const handleLinkClick = (link) => {
//     setSelectedComponent(link);
//     setFile(null);
//     setUploadProgress(0);
//   };

//   const onDrop = (acceptedFiles) => {
//     setFile(acceptedFiles[0]);
//   };

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//     noClick: true,
//     noKeyboard: true,
//   });

//   const handleFileInputChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) return;

//     try {
//       // Get signed URL
//       const res = await axios.post("http://localhost:5000/getSignedUrl", {
//         fileName: file.name,
//         fileType: file.type,
//       });

//       const { signedUrl, key } = res.data;

//       // Upload to S3
//       const options = {
//         headers: {
//           "Content-Type": file.type,
//         },
//         onUploadProgress: (progressEvent) => {
//           const percentCompleted = Math.round(
//             (progressEvent.loaded * 100) / progressEvent.total
//           );
//           setUploadProgress(percentCompleted);
//         },
//       };

//       await axios.put(signedUrl, file, options);

//       // Save metadata to MongoDB
//       const fileUrl = signedUrl.split("?")[0];
//       await axios.post("http://localhost:5000/saveMetadata", {
//         key,
//         location: fileUrl,
//         mimetype: file.type,
//         filename: file.name,
//       });

//       alert("File uploaded successfully");
//     } catch (err) {
//       console.error(err);
//       alert("Error uploading file");
//     }
//   };

//   return (
//     <Container fluid>
//       <Row>
//         {/* Sidebar */}
//         <Col
//           md={2}
//           className="bg-light p-3"
//           style={{ borderRight: "1px solid #ccc" }}
//         >
//           <div className="d-flex flex-column">
//             <Button
//               variant="link"
//               onClick={() => handleLinkClick("uploadFile")}
//               className="text-start"
//             >
//               Files
//             </Button>
//             <Button
//               variant="link"
//               onClick={() => handleLinkClick("uploadFolder")}
//               className="text-start"
//             >
//               Folder
//             </Button>
//             <Button
//               variant="link"
//               onClick={() => handleLinkClick("recentFiles")}
//               className="text-start"
//             >
//               Recent
//             </Button>
//           </div>
//         </Col>

//         {/* Main content */}
//         <Col md={10} className="p-3">
//           {selectedComponent === "default" && <h3>Hello World</h3>}

//           {selectedComponent === "uploadFile" && (
//             <div>
//               <h3>Upload File Component</h3>
//               <Card className="mt-3">
//                 <Card.Body>
//                   <Card.Title>Upload File</Card.Title>
//                   <div
//                     {...getRootProps()}
//                     style={{
//                       border: "2px dashed #ccc",
//                       padding: "20px",
//                       textAlign: "center",
//                       cursor: "pointer",
//                     }}
//                   >
//                     <p>Drag & drop a file here</p>
//                   </div>
//                   <Button
//                     variant="primary"
//                     className="mt-3"
//                     onClick={() => document.getElementById("fileInput").click()}
//                   >
//                     Browse File
//                   </Button>
//                   <input
//                     id="fileInput"
//                     type="file"
//                     style={{ display: "none" }}
//                     onChange={handleFileInputChange}
//                   />
//                   <Button variant="primary" className="mt-3" onClick={handleUpload}>
//                     Upload
//                   </Button>
//                   {uploadProgress > 0 && (
//                     <ProgressBar
//                       animated
//                       now={uploadProgress}
//                       label={`${uploadProgress}%`}
//                       className="mt-3"
//                     />
//                   )}
//                 </Card.Body>
//               </Card>
//             </div>
//           )}

//           {selectedComponent === "uploadFolder" && (
//             <div>
//               <h3>Upload Folder Component</h3>
//               <Card className="mt-3">
//                 <Card.Body>
//                   <Card.Title>Upload Folder</Card.Title>
//                   <div
//                     {...getRootProps()}
//                     style={{
//                       border: "2px dashed #ccc",
//                       padding: "20px",
//                       textAlign: "center",
//                       cursor: "pointer",
//                     }}
//                   >
//                     <p>Drag & drop a folder here</p>
//                   </div>
//                   <Button
//                     variant="primary"
//                     className="mt-3"
//                     onClick={() => document.getElementById("folderInput").click()}
//                   >
//                     Browse Folder
//                   </Button>
//                   <input
//                     id="folderInput"
//                     type="file"
//                     webkitdirectory="true"
//                     style={{ display: "none" }}
//                     onChange={handleFileInputChange}
//                   />
//                   <Button variant="primary" className="mt-3" onClick={handleUpload}>
//                     Upload
//                   </Button>
//                   {uploadProgress > 0 && (
//                     <ProgressBar
//                       animated
//                       now={uploadProgress}
//                       label={`${uploadProgress}%`}
//                       className="mt-3"
//                     />
//                   )}
//                 </Card.Body>
//               </Card>
//             </div>
//           )}

//           {selectedComponent === "recentFiles" && <RecentFiles />}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Dashboard;
// Dashboard.js
import React, { useState } from "react";
import { Container, Row, Col, Button, Card, ProgressBar } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import RecentFiles from "../components/recentfile";

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState("default");
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleLinkClick = (link) => {
    setSelectedComponent(link);
    setFile(null);
    setUploadProgress(0);
  };

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
  });

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
      // Get signed URL
      const res = await axios.post("http://localhost:5000/getSignedUrl", {
        fileName: file.name,
        fileType: file.type,
      });

      const { signedUrl, key } = res.data;

      // Upload to S3
      const options = {
        headers: {
          "Content-Type": file.type,
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      };

      await axios.put(signedUrl, file, options);

      // Save metadata to MongoDB
      const fileUrl = signedUrl.split("?")[0];
      await axios.post("http://localhost:5000/saveMetadata", {
        key,
        location: fileUrl,
        mimetype: file.type,
        filename: file.name,
      });

      alert("File uploaded successfully");
    } catch (err) {
      console.error(err);
      alert("Error uploading file");
    }
  };

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col
          md={2}
          className="bg-light p-3"
          style={{ borderRight: "1px solid #ccc" }}
        >
          <div className="d-flex flex-column">
            <Button
              variant="link"
              onClick={() => handleLinkClick("uploadFile")}
              className="text-start"
            >
              Files
            </Button>
            <Button
              variant="link"
              onClick={() => handleLinkClick("uploadFolder")}
              className="text-start"
            >
              Folder
            </Button>
            <Button
              variant="link"
              onClick={() => handleLinkClick("recentFiles")}
              className="text-start"
            >
              Recent
            </Button>
          </div>
        </Col>

        {/* Main content */}
        <Col md={10} className="p-3">
          {selectedComponent === "default" && <h3>Hello World</h3>}

          {selectedComponent === "uploadFile" && (
            <div>
              <h3>Upload File Component</h3>
              <Card className="mt-3">
                <Card.Body>
                  <Card.Title>Upload File</Card.Title>
                  <div
                    {...getRootProps()}
                    style={{
                      border: "2px dashed #ccc",
                      padding: "20px",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    <p>Drag & drop a file here</p>
                  </div>
                  <Button
                    variant="primary"
                    className="mt-3"
                    onClick={() => document.getElementById("fileInput").click()}
                  >
                    Browse File
                  </Button>
                  <input
                    id="fileInput"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                  />
                  <Button variant="primary" className="mt-3" onClick={handleUpload}>
                    Upload
                  </Button>
                  {uploadProgress > 0 && (
                    <ProgressBar
                      animated
                      now={uploadProgress}
                      label={`${uploadProgress}%`}
                      className="mt-3"
                    />
                  )}
                </Card.Body>
              </Card>
            </div>
          )}

          {selectedComponent === "uploadFolder" && (
            <div>
              <h3>Upload Folder Component</h3>
              <Card className="mt-3">
                <Card.Body>
                  <Card.Title>Upload Folder</Card.Title>
                  <div
                    {...getRootProps()}
                    style={{
                      border: "2px dashed #ccc",
                      padding: "20px",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    <p>Drag & drop a folder here</p>
                  </div>
                  <Button
                    variant="primary"
                    className="mt-3"
                    onClick={() => document.getElementById("folderInput").click()}
                  >
                    Browse Folder
                  </Button>
                  <input
                    id="folderInput"
                    type="file"
                    webkitdirectory="true"
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                  />
                  <Button variant="primary" className="mt-3" onClick={handleUpload}>
                    Upload
                  </Button>
                  {uploadProgress > 0 && (
                    <ProgressBar
                      animated
                      now={uploadProgress}
                      label={`${uploadProgress}%`}
                      className="mt-3"
                    />
                  )}
                </Card.Body>
              </Card>
            </div>
          )}

          {selectedComponent === "recentFiles" && <RecentFiles />}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
