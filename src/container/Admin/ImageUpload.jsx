import React, { useState } from "react";
import { storage } from "../../utils/firebase-config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import "./admin.css";

const ImageUpload = ({ setImageURL }) => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageURL(downloadURL);
        });
      }
    );
  };

  return (
    <div id="createProductFormFile">
      <input
        type="file"
        name="image"
        accept=".jpg, .png, .jpeg"
        onChange={handleChange}
      />
      <button onClick={handleUpload}>Upload</button>

      <hr />
      <h2 className="heading-secondary">Uploading done {progress}%</h2>
    </div>
  );
};

export default ImageUpload;
