import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons/faCloudArrowUp";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { addVideosApi } from "../service/allApis";

function Add({ setAddVideoUploadState }) {
  const [video, setVideo] = useState({
    caption: "",
    image: "",
    url: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setVideo({
      caption: "",
      image: "",
      url: "",
    });
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const urlHandler = (e) => {
    const link = e.target.value;
    if (link.endsWith("?feature=shared")) {
      const urlKey = link.slice(-26, -15);
      let correctedUrl = `https://www.youtube.com/embed/${urlKey}`;
      setVideo({ ...video, url: correctedUrl });
      console.log(correctedUrl);
    } else if (link.startsWith("https://youtu.be")) {
      const urlKey = link.slice(17, 28);
      let correctedUrl = `https://www.youtube.com/embed/${urlKey}`;
      setVideo({ ...video, url: correctedUrl });
      console.log(correctedUrl);
    } else {
      const urlKey = link.slice(-11);
      let correctedUrl = `https://www.youtube.com/embed/${urlKey}`;
      setVideo({ ...video, url: correctedUrl });
      console.log(correctedUrl);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const { caption, url, image } = video;
    if (!caption || !url || !image) {
      alert("Please fill completly");
    } else {
      const result = await addVideosApi(video);
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        alert("Video added Succesfully");
        setAddVideoUploadState(result.data);
        handleClose();
      } else {
        alert("SOmething went wrong");
        handleClose();
      }
    }
  };
  return (
    <>
      <div className="d-flex align-items-end">
        <h5 id="screenRemove">Upload new Videos</h5>
        <button className="btn">
          <FontAwesomeIcon
            onClick={handleShow}
            icon={faCloudArrowUp}
            size="2xl"
            style={{ color: "#ffffff" }}
          />
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FontAwesomeIcon icon={faFilm} className="me-2 text-warning" />
            Upload Videos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Plese fill the following</p>
          <form className="p-3">
            <input
              type="text"
              placeholder="Video Caption"
              className="form-control"
              onChange={(e) => setVideo({ ...video, caption: e.target.value })}
            />
            <input
              type="text"
              placeholder="Video Image"
              className="form-control mt-3"
              onChange={(e) => setVideo({ ...video, image: e.target.value })}
            />
            <input
              type="text"
              placeholder="Video Url"
              className="form-control mt-3"
              onChange={(e) => urlHandler(e)}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
