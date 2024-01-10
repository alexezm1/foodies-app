"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./ImagePicker.module.css";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInput = useRef();

  const handleClick = () => {
    imageInput.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>Please pick an image to see the preview</p>}
          {pickedImage && <Image src={pickedImage} alt="meal preview" fill />}
        </div>
        <input
          className={styles.input}
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button className={styles.button} type="button" onClick={handleClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
