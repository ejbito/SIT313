import React, { useState, useRef } from "react";
import { Button } from "@mui/material";

export default function ImageUpload({ onChangeFile }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onChangeFile(file);
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Selected File:", selectedFile);
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <div className="App">
      <label>Add an image: </label>
      <input
        size={100}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
        ref={fileInputRef}
      />
      <input
        type="text"
        value={selectedFile ? selectedFile.name : ""}
        readOnly
        placeholder="No file chosen"
      />
      <Button onClick={() => fileInputRef.current.click()}>Browse</Button>
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}
