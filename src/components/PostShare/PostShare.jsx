import React, { useState, useRef } from "react";
import "./PostShare.css";
import ProfileImg from "../../img/profileImg.png";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";
import { addPost } from "../../Data/PostsData";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const imageRef = useRef();
  const videoRef = useRef();
  const dateRef = useRef();
  const inputRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  const onVideoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let vid = event.target.files[0];
      setVideo({
        video: URL.createObjectURL(vid),
      });
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`Lat: ${latitude}, Lon: ${longitude}`);
        inputRef.current.value += ` Lat: ${latitude}, Lon: ${longitude}`;
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    inputRef.current.value += ` ${selectedDate}`;
  };

  const handleShare = () => {
    const newPost = {
      img: image ? image.image : null,
      video: video ? video.video : null,
      desc: inputRef.current.value,
      location: location,
      date: new Date().toISOString(), // Guardamos la fecha actual
      name: "User", // Puedes cambiarlo por el nombre del usuario si está disponible
      likes: 0, // Inicia con 0 likes
      liked: false, // Inicia como no gustado
    };
    addPost(newPost);
    // Limpiar los campos después de compartir
    setImage(null);
    setVideo(null);
    setLocation("");
    setDate("");
    inputRef.current.value = "";
    window.location.reload();
  };

  return (
    <div className="PostShare">
      <img src={ProfileImg} alt="" />
      <div>
        <input
          type="text"
          ref={inputRef}
          placeholder="En que estas pensando?"
        />
        <div className="PostOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Foto
          </div>
          <div
            className="option"
            style={{ color: "var(--video)" }}
            onClick={() => videoRef.current.click()}
          >
            <UilPlayCircle />
            Video
          </div>
          <div
            className="option"
            style={{ color: "var(--location)" }}
            onClick={getLocation}
          >
            <UilLocationPoint />
            Locacion
          </div>
          <div
            className="option"
            style={{ color: "var(--schedule)" }}
            onClick={() => dateRef.current.showPicker()}
          >
            <UilSchedule />
            Fecha
          </div>
          <button className="button ps-button" onClick={handleShare}>
            Compartir
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="MyImage"
              ref={imageRef}
              onChange={onImageChange}
            />
            <input
              type="file"
              name="MyVideo"
              ref={videoRef}
              onChange={onVideoChange}
              accept="video/*"
            />
            <input type="date" ref={dateRef} onChange={handleDateChange} />
          </div>
        </div>
        {image && (
          <div className="PreviewImg">
            <UilTimes onClick={() => setImage(null)} />
            <img src={image.image} alt="" />
          </div>
        )}
        {video && (
          <div className="PreviewImg">
            <UilTimes onClick={() => setVideo(null)} />
            <video src={video.video} controls />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
