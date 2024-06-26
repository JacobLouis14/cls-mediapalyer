import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useState } from "react";
import VideoCard from "./VideoCard";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import {
  addCategory,
  deleteCategoryApi,
  getCategoryApi,
  getVideoWithId,
  upadateCategoryApi,
} from "../service/allApis";

function Category({ dropStatus, setDropStatus }) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [categoryStatus, setCategorySTatus] = useState(false);

  const handleClose = () => {
    setShow(false);
    setCategoryName("");
  };
  const handleShow = () => setShow(true);

  const addCategoryHandler = async () => {
    if (categoryName) {
      const reqBody = {
        categoryName,
        allVideos: [],
      };
      const result = await addCategory(reqBody);
      if (result.status >= 200 && result.status < 300) {
        setCategorySTatus(true);
        handleClose();
        alert("Category added succesfully");
      } else {
        console.log(result);
      }
    } else {
      alert("Plese fill the Category name");
    }
  };

  const getCategoryHandler = async () => {
    const result = await getCategoryApi();
    if (result.status >= 200 && result.status < 300) {
      setCategoryData(result.data);
    }
  };

  const categoryDeleteHandler = async (id) => {
    const result = await deleteCategoryApi(id);
    getCategoryHandler();
  };

  const onDragHandler = (e) => {
    e.preventDefault();
  };

  const onDropHandler = async (e, categoryId) => {
    let videoID = e.dataTransfer.getData("videoID");
    const { data } = await getVideoWithId(videoID);
    const selectedCategory = categoryData.find((val) => val.id === categoryId);
    const isCategoryExists = selectedCategory.allVideos.some(
      (val) => val.id === data.id
    );
    if (isCategoryExists) {
      alert("Video exists in category");
    } else {
      selectedCategory.allVideos.push(data);
      await upadateCategoryApi(categoryId, selectedCategory);
      alert("Video Added Succesfully");
      getCategoryHandler();
    }
  };

  const dragStartHandler = (e, categoryId, videoId) => {
    const sharedData = {
      videoId,
      categoryId,
    };
    e.dataTransfer.setData("dataShared", JSON.stringify(sharedData));
  };

  useEffect(() => {
    setCategorySTatus(false);
    getCategoryHandler();
  }, [categoryStatus, dropStatus]);

  return (
    <>
      <div className="w-100 mt-1 p-4">
        <button className="btn btn-warning w-100" onClick={handleShow}>
          Add Category
          <FontAwesomeIcon className="ms-2" icon={faPlus} />
        </button>
      </div>
      <div className="mt-md-5">
        {categoryData?.length > 0
          ? categoryData.map((data, index) => (
              <div
                key={index}
                className="border border-secondary mt-3 rounded p-3 ms-4 ms-md-0"
                droppable
                onDragOver={(e) => onDragHandler(e)}
                onDrop={(e) => onDropHandler(e, data.id)}
              >
                <div className="d-flex">
                  <h6>{data.categoryName}</h6>
                  <button
                    className="btn btn-danger
             ms-auto"
                    onClick={() => {
                      categoryDeleteHandler(data.id);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
                <Row>
                  {data?.allVideos?.length > 0
                    ? data?.allVideos?.map((val, index) => (
                        <Col
                          key={index}
                          sm={12}
                          draggable
                          onDragStart={(e) => {
                            dragStartHandler(e, data.id, val.id);
                          }}
                        >
                          <VideoCard video={val} isCategory={true} />
                        </Col>
                      ))
                    : null}
                </Row>
              </div>
            ))
          : null}
      </div>

      {/* Modals */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Category Name</p>
          <input
            className="form-control"
            type="text"
            placeholder="Enter the category names"
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn btn-warning" onClick={addCategoryHandler}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Category;
