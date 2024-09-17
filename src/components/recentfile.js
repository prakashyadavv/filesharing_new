// // components/RecentFiles.js
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { ListGroup, Button } from "react-bootstrap";

// const RecentFiles = () => {
//   const [files, setFiles] = useState([]);

//   useEffect(() => {
//     const fetchFiles = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/files");
//         setFiles(response.data);
//       } catch (error) {
//         console.error("Error fetching files", error);
//       }
//     };

//     fetchFiles();
//   }, []);

//   const handleDownload = async (key) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:5000/api/download/${key}`,
//         {
//           responseType: "blob",
//         }
//       );

//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement("a");
//       link.href = url;
//       link.setAttribute("download", key);
//       document.body.appendChild(link);
//       link.click();
//     } catch (error) {
//       console.error("Error downloading file", error);
//     }
//   };

//   return (
//     <div>
//       <h3>Recent Files</h3>
//       <ListGroup>
//         {files.map((file) => (
//           <ListGroup.Item key={file._id}>
//             <div className="d-flex justify-content-between align-items-center">
//               <span>{file.filename}</span>
//               <Button
//                 variant="primary"
//                 onClick={() => handleDownload(file.key)}
//               >
//                 Download
//               </Button>
//             </div>
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//     </div>
//   );
// };

// export default RecentFiles;
// components/RecentFiles.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListGroup, Button, Dropdown } from "react-bootstrap";

const RecentFiles = () => {
  const [files, setFiles] = useState([]);
  const [showDropdown, setShowDropdown] = useState(null);
  const [shareableLink, setShareableLink] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/files");
        setFiles(response.data);
      } catch (error) {
        console.error("Error fetching files", error);
      }
    };

    fetchFiles();
  }, []);

  const handleDownload = async (key) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/download/${key}`, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", key);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error downloading file", error);
    }
  };

  const handleShare = async (key) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/generateShareableLink`, { key });
      setShareableLink(response.data.shareableLink);
    } catch (error) {
      console.error("Error generating shareable link", error);
    }
  };

  const toggleDropdown = (fileId) => {
    setShowDropdown(showDropdown === fileId ? null : fileId);
  };

  return (
    <div>
      <h3>Recent Files</h3>
      <ListGroup>
        {files.map((file) => (
          <ListGroup.Item key={file._id}>
            <div className="d-flex justify-content-between align-items-center">
              <span>{file.filename}</span>
              <div className="d-flex align-items-center">
                <Button variant="primary" onClick={() => handleDownload(file.key)}>
                  Download
                </Button>
                <Dropdown show={showDropdown === file._id} onToggle={() => toggleDropdown(file._id)}>
                  <Dropdown.Toggle variant="secondary" className="ml-2">
                    ...
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleShare(file.key)}>Share</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      {shareableLink && (
        <div className="mt-3">
          <h5>Shareable Link:</h5>
          <a href={shareableLink} target="_blank" rel="noopener noreferrer">
            {shareableLink}
          </a>
        </div>
      )}
    </div>
  );
};

export default RecentFiles;
