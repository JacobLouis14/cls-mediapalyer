import React from "react";
import Card from "react-bootstrap/Card";

function LandingPage() {
  return (
    <>
      <div
        style={{ minHeight: "80vh" }}
        className="row mt-5 w-100 d-flex align-items-center justify-content-center"
      >
        <div className="col-md-1"></div>
        <div className="col-md-5 p-5 ">
          <h4>
            Welcome to <span className="text-warning">Media Player</span>
          </h4>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum enim
            recusandae quos voluptatem quae. Sit quos fugit molestias tempore
            sapiente optio blanditiis tempora temporibus, ea rem, ducimus vel
            eveniet maxime..
          </p>
          <button className="btn btn-warning">Get Start</button>
        </div>

        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <img
            src="https://cdn.pixabay.com/animation/2023/10/10/13/26/13-26-45-476_512.gif"
            alt="No Image"
            className="w-75"
          />
        </div>
        <div className="col-md-1"></div>
      </div>
      {/* Fetures */}
      <div className="row w-100">
        <h4 className="text-center mt-5 mb-5">Features</h4>
        <div className="col-md-1 me-md-5"></div>
        <div className="col-md-3 px-5 px-md-4 mt-3">
          <Card style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              className="w-100"
              height={"180px"}
              src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/03/woman-listening-to-music-with-headphones.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 px-5 px-md-4 mt-3">
          <Card style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              height={"180px"}
              src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/03/woman-listening-to-music-with-headphones.jpg"
              className="w-100"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 px-5 px-md-4 mt-3">
          <Card style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              height={"180px"}
              className="w-100"
              src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/03/woman-listening-to-music-with-headphones.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-1"></div>
      </div>
      {/* Section */}
      <div className="row mt-5">
        <div className="col-md-1"></div>
        <div className="col-md-10 p-5">
          <div className="row w-100">
            <div className="col-md-6">
              <h3>Simple, Fast and Powerfull</h3>
              <p className="mt-4 mx-3" style={{ textAlign: "justify" }}>
                <span className="fs-4 text-bold">Play Everything : </span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore, harum explicabo incidunt, maxime est iure doloremque
                nostrum, recusandae numquam rem quaerat? Debitis temporibus
                veniam a molestiae commodi voluptas recusandae perspiciatis?
              </p>
              <p className="mt-4 mx-3" style={{ textAlign: "justify" }}>
                <span className="fs-4 text-bold">Play Everything : </span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore, harum explicabo incidunt, maxime est iure doloremque
                nostrum, recusandae numquam rem quaerat? Debitis temporibus
                veniam a molestiae commodi voluptas recusandae perspiciatis?
              </p>
              <p className="mt-4 mx-3" style={{ textAlign: "justify" }}>
                <span className="fs-4 text-bold">Play Everything : </span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore, harum explicabo incidunt, maxime est iure doloremque
                nostrum, recusandae numquam rem quaerat? Debitis temporibus
                veniam a molestiae commodi voluptas recusandae perspiciatis?
              </p>
            </div>
            <div className="col-md-6">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ijBxe70sd8M"
                title="Achacho - Video Song | Aranmanai 4  | Sundar.C | Tamannaah | Raashii Khanna | Hiphop Tamizha"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  );
}

export default LandingPage;
