import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  deleteWatchHistoryVideo,
  getVideoHistoryAPi,
} from "../service/allApis";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function WatchHistory() {
  const [videosHistoryData, setVIdeoHistoryData] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState([]);

  const watchHistoryHandler = async () => {
    let result = await getVideoHistoryAPi();

    if (result.status >= 200 && result.status < 300) {
      setVIdeoHistoryData(result.data);
    }
  };

  useEffect(() => {
    watchHistoryHandler();
  }, [deleteStatus]);

  // Watch history delete handler
  const watchHistoryDeleteHandler = async (id) => {
    const result = await deleteWatchHistoryVideo(id);
    setDeleteStatus(result.data);
  };

  return (
    <>
      <div className="d-flex w-100 mt-5">
        <div className="ms-5">
          <h4>Watch-History</h4>
        </div>
        <div className="ms-auto me-5">
          <h5>Back To Home</h5>
        </div>
      </div>
      <div className="tableContainer container mt-5">
        {videosHistoryData ? (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Caption</th>
                <th>Url</th>
                <th>Time Stamp</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {videosHistoryData.map((data, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data?.caption}</td>
                  <td>
                    <Link to={data?.url}>{data?.url}</Link>
                  </td>
                  <td>{data?.timeStamp}</td>
                  <td>
                    <FontAwesomeIcon
                      className="btn btn-danger"
                      icon={faTrashCan}
                      onClick={() => watchHistoryDeleteHandler(data?.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <h2>No videos watched</h2>
        )}
      </div>
    </>
  );
}

export default WatchHistory;
