import React from "react";
import { Button } from "@mui/material";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";

export default function ImageUpload({ setImageUpload, setImageUrls }) {
  const uploadFile = () => {
    if (setImageUpload == null) return;
    const imageRef = ref(storage, `images/${setImageUpload.name + v4()}`);
    uploadBytes(imageRef, setImageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <Button onClick={uploadFile}>Upload Image</Button>
    </div>
  );
}
