import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import VideoCard from "./VideoCard";
import {
  getCategoryApi,
  getVideoApi,
  upadateCategoryApi,
} from "../service/allApis";

function View({
  addVideoUploadState,
  setDeleteVideoStatus,
  deleteVideoStatus,
  setDropStatus,
}) {
  const [video, setVideo] = useState([]);

  const getVideo = async () => {
    const result = await getVideoApi();
    setVideo(result.data);
  };

  const dragHandler = (e) => {
    e.preventDefault();
  };
  const dropHandler = async (e) => {
    const { videoId, categoryId } = JSON.parse(
      e.dataTransfer.getData("dataShared")
    );
    const allCategory = await getCategoryApi();
    const selectedCategory = allCategory.data.find(
      (val) => val.id === categoryId
    );
    selectedCategory.allVideos = selectedCategory.allVideos.filter(
      (val) => val.id != videoId
    );
    console.log(selectedCategory);
    await upadateCategoryApi(categoryId, selectedCategory);
    setDropStatus(true);
  };

  useEffect(() => {
    getVideo();
  }, [addVideoUploadState, deleteVideoStatus]);

  return (
    <Row
      className="w-100"
      droppable
      onDragOver={(e) => dragHandler(e)}
      onDrop={(e) => dropHandler(e)}
    >
      {video?.length > 0 ? (
        video?.map((data, i) => (
          <Col
            key={i}
            xs={12}
            md={6}
            lg={4}
            xl={3}
            className="d-flex justify-content-center align-items-center"
          >
            <VideoCard
              video={data}
              setDeleteVideoStatus={setDeleteVideoStatus}
            />
          </Col>
        ))
      ) : (
        <p>Video not even uploaded</p>
      )}
    </Row>
  );
}

export default View;
