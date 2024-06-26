import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { addToHistory, deleteVideo } from "../service/allApis";

function VideoCard({ video, setDeleteVideoStatus, isCategory }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    let caption = video?.caption;
    let url = video?.url;
    let time = new Date();
    let timeStamp = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(time);

    const reqBody = {
      caption,
      url,
      timeStamp,
    };
    const result = await addToHistory(reqBody);
    console.log(result);
  };

  const handleDelete = async (id) => {
    const result = await deleteVideo(id);
    if ((result.status >= 200) & (result.status < 300)) {
      setDeleteVideoStatus(result.data);
    }
  };

  const videoDragHandler = (e, id) => {
    e.dataTransfer.setData("videoID", id);
  };

  return (
    <>
      <Card
        style={{ width: "100%", marginTop: "20px", backgroundColor: "black" }}
        draggable
        onDragStart={(e) => videoDragHandler(e, video?.id)}
      >
        {!isCategory && (
          <Card.Img
            onClick={handleShow}
            variant="top"
            src={video?.image}
            width={"100%"}
            height={"300px"}
            style={{ objectFit: "contain" }}
          />
        )}
        <Card.Body className="d-flex">
          <Card.Text>{video?.caption}</Card.Text>
          {!isCategory && (
            <button
              className="btn btn-danger ms-auto"
              onClick={() => handleDelete(video?.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          )}
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="522"
            src={video?.url}
            title="AARADHAKARE SHANTHARAKUVIN- a theatre comedy| FULL VIDEO|jismavimal| Malayalamcomedy |fiction comedy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoCard;
