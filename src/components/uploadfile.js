// import React, { useState } from "react";
// import { Card, Button, ProgressBar } from "react-bootstrap";
// import axios from "axios";
// import { useDropzone } from "react-dropzone";

// const UploadFile = () => {
//   const [file, setFile] = useState(null);
//   const [uploadProgress, setUploadProgress] = useState(0);

//   const onDrop = (acceptedFiles) => {
//     setFile(acceptedFiles[0]);
//   };

//   const { getRootProps, getInputProps } = useDropzone({ onDrop });

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
//     <Card className="mt-3">
//       <Card.Body>
//         <Card.Title>Upload File</Card.Title>
//         <div
//           {...getRootProps()}
//           style={{
//             border: "2px dashed #ccc",
//             padding: "20px",
//             textAlign: "center",
//             cursor: "pointer",
//           }}
//         >
//           <input {...getInputProps()} />
//           <p>Drag & drop a file here, or click to select a file</p>
//         </div>
//         <Button variant="primary" className="mt-3" onClick={handleUpload}>
//           Upload
//         </Button>
//         {uploadProgress > 0 && (
//           <ProgressBar
//             animated
//             now={uploadProgress}
//             label={`${uploadProgress}%`}
//             className="mt-3"
//           />
//         )}
//       </Card.Body>
//     </Card>
//   );
// };

// export default UploadFile;
