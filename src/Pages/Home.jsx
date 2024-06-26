import React, { useState } from "react";
import Add from "../components/Add";
import { Link } from "react-router-dom";
import View from "../components/View";
import Category from "../components/Category";

function Home() {
  const [addVideoUploadState, setAddVideoUploadState] = useState([]);
  const [deleteVideoStatus, setDeleteVideoStatus] = useState([]);
  const [dropStatus, setDropStatus] = useState(false);

  return (
    <>
      <div className="d-flex mt-5 p-5">
        <Add setAddVideoUploadState={setAddVideoUploadState} />
        <h5 className="ms-auto">
          <Link to={"/watch-history"}>Watch History</Link>
        </h5>
      </div>
      <div className="row w-100 p-4">
        <div className="col-md-9">
          <h4>All Videos</h4>
          <View
            addVideoUploadState={addVideoUploadState}
            setDeleteVideoStatus={setDeleteVideoStatus}
            deleteVideoStatus={deleteVideoStatus}
            setDropStatus={setDropStatus}
          />
        </div>
        <div className="col-md-3">
          <Category dropStatus={dropStatus} setDropStatus={setDropStatus} />
        </div>
      </div>
    </>
  );
}

export default Home;
