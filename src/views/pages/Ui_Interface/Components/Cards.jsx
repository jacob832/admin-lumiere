import React from "react";
import { Img_01, avatar1, avatar10, avatar11, avatar12, avatar13, avatar14, avatar15, avatar16, avatar17, avatar18, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, image_01, img_02, img_03, img_2, img_3, img_4, img_5 } from "../../../../Routes/ImagePath";
import { Link } from "react-router-dom";
import Header from "../../../layout/Header";
import Sidebar from "../../../layout/Sidebar";

const Cards = () => {

  return (
    <div>
      {/* Cards */}
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Cards</h4>
            </div>
          </div>
          {/* Feature Card */}
          <div className="row">
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="card">
                <img src={Img_01} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6 className="card-title fw-semibold">Card title</h6>
                  <p className="card-text text-muted">
                    when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.
                  </p>
                  <Link to="#" className="btn btn-primary">
                    Read More
                  </Link>
                </div>
                <div className="card-footer">
                  <span className="card-text">Last updated 3 mins ago</span>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Featured</div>
                </div>
                <div className="card-body">
                  <h6 className="card-title fw-semibold">Special title treatment</h6>
                  <p className="card-text">
                    Richard McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage
                  </p>
                  <Link to="#" className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title fw-semibold mb-2">Card title</h6>
                  <p className="card-subtitle mb-3 text-muted">Card subtitle</p>
                  <p className="card-text">
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration many variations of
                    passages of Lorem Ipsum available there are so many ways to solve
                    but the majority have suffered.
                  </p>
                </div>
                <div className="card-footer">
                  <Link to="#" className="card-link text-danger m-1">
                    Buy Now
                  </Link>
                  <Link
                    to="#"
                    className="card-link text-success m-1"
                  >
                    <u>Review</u>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="card">
                <img src={img_02} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    &apos; can be escaped with &apos;&rsquo;&apos;
                    Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
                  </p>
                </div>
              </div>
              <h6 className="mb-3">Only Card Body:</h6>
              <div className="card">
                <div className="card-body">
                  <div className="card-text">
                    <p className="mb-0">
                      It is a long established fact that a reader will be distracted
                      by the readable content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="card">
                <img src={img_03} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6 className="card-title fw-semibold">Card title</h6>
                  <p className="card-text">
                    &apos; can be escaped with &apos;&rsquo;&apos;
                    Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">An item</li>
                  <li className="list-group-item">A second item</li>
                </ul>
                <div className="card-body">
                  <Link to="#" className="card-link text-primary">
                    Card link
                  </Link>
                  <Link
                    to="#"
                    className="card-link text-secondary d-inline-block"
                  >
                    Another link
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* / Feature Card */}
         
          {/* Text Alignment */}
          <div className="row">
            <div className="col-xl-9">
              <h6 className="mb-3">Text Alignment:</h6>
              <div className="row">
                <div className="col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="mb-2">
                        <span className="avatar avatar-md">
                          <img src={Img_01} alt="img" />
                        </span>
                      </div>
                      <h6 className="card-title fw-semibold">Where it come from</h6>
                      <p className="card-text">
                        Contrary to popular belief, Lorem Ipsum is not simply random
                        text. It has roots in a piece of classical Latin literature.
                      </p>
                      <Link to="#" className="btn btn-primary">
                        Go somewhere
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="card text-center">
                    <div className="card-body">
                      <div className="mb-2">
                        <span className="avatar avatar-md">
                          <img src={img_02} alt="img" />
                        </span>
                      </div>
                      <h6 className="card-title fw-semibold">Why do we use it?</h6>
                      <p className="card-text">
                        Many desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text.
                      </p>
                      <Link to="#" className="btn btn-primary">
                        Go somewhere
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="card text-end">
                    <div className="card-body">
                      <div className="mb-2">
                        <span className="avatar avatar-md">
                          <img src={img_03} alt="img" />
                        </span>
                      </div>
                      <h6 className="card-title fw-semibold">What is special?</h6>
                      <p className="card-text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in some
                        form.
                      </p>
                      <Link to="#" className="btn btn-primary">
                        Go somewhere
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="row">
                <h6 className="mb-3">Mixins utilities:</h6>
                <div className="col-xl-12">
                  <div className="card border border-success mb-3">
                    <div className="card-header bg-transparent border-bottom border-success">
                      Header
                    </div>
                    <div className="card-body text-success">
                      <h6 className="card-title fw-semibold">Looking For Success?</h6>
                      <p className="card-text">
                        If you are going to use a passage of Lorem Ipsum, you need to
                        be sure there  isn&apos;t anything embarrassing hidden in the middle
                        of text. All the Lorem Ipsum generators on the Internet tend
                        to repeat predefined chunks as necessary.
                      </p>
                    </div>
                    <div className="card-footer bg-transparent border-top border-success">
                      Footer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Text Alignment */}
        
         
          {/* Image Overlays */}
          <h6 className="mb-3">Image Overlays:</h6>
          <div className="row">
            <div className="col-xl-4">
              <div className="card overlay-card">
                <img src={img_2} className="card-img" alt="..." />
                <div className="card-img-overlay d-flex flex-column p-0">
                  <div className="card-header">
                    <div className="card-title text-fixed-white">
                      Image Overlays Are Awesome!
                    </div>
                  </div>
                  <div className="card-body text-fixed-white">
                    <div className="card-text mb-2">
                      There are many variations of passages of Lorem Ipsum available,
                      but the majority have suffered alteration in some form, by
                      injected humour, or randomised words which don&apos;t look even.
                    </div>
                    <div className="card-text">Last updated 3 mins ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card overlay-card">
                <img src={img_3} className="card-img" alt="..." />
                <div className="card-img-overlay d-flex flex-column p-0 over-content-bottom">
                  <div className="card-body text-fixed-white">
                    <div className="card-text text-fixed-white">
                      Image Overlays Are Awesome!
                    </div>
                    <div className="card-text mb-2">
                      There are many variations of passages of Lorem Ipsum available,
                      but the majority have suffered alteration in some form, by
                      injected humour, or randomised words which don&apos;t look even.
                    </div>
                    <div className="card-text">Last updated 3 mins ago</div>
                  </div>
                  <div className="card-footer text-fixed-white">
                    Last updated 3 mins ago
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card overlay-card">
                <img src={img_4} className="card-img" alt="..." />
                <div className="card-img-overlay d-flex flex-column p-0">
                  <div className="card-header">
                    <div className="card-title text-fixed-white">
                      Image Overlays Are Awesome!
                    </div>
                  </div>
                  <div className="card-body text-fixed-white">
                    <div className="card-text">
                      There are many variations of passages of Lorem Ipsum available,
                      but the majority have suffered alteration in some form, by
                      injected humour, or randomised words which don&apos;t look even.
                    </div>
                  </div>
                  <div className="card-footer text-fixed-white">
                    Last updated 3 mins ago
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Image Overlays */}
         
          {/* Background Colored Cards */}
          <h6 className="mb-3">Background Colored Cards:</h6>
          <div className="row">
            <div className="col-xl-3">
              <div className="card card-bg-primary">
                <div className="card-body">
                  <div className="d-flex align-items-center w-100">
                    <div className="me-2">
                      <span className="avatar avatar-rounded">
                        <img src={avatar2} alt="img" />
                      </span>
                    </div>
                    <div className="">
                      <div className="fs-15 fw-semibold">Adam Smith</div>
                      <p className="mb-0 text-fixed-white op-7 fs-12">
                        Finished by today
                      </p>
                    </div>
                    <div className="ms-auto">
                      <Link to="#" className="text-fixed-white">
                        <i className="fa-solid fa-ellipsis-vertical" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card card-bg-secondary">
                <div className="card-body">
                  <div className="d-flex align-items-center w-100">
                    <div className="me-2">
                      <span className="avatar avatar-rounded">
                        <img src={avatar1} alt="img" />
                      </span>
                    </div>
                    <div className="">
                      <div className="fs-15 fw-semibold">Elisha Corner</div>
                      <p className="mb-0 text-fixed-white op-7 fs-12">
                        Completed 24 days back
                      </p>
                    </div>
                    <div className="ms-auto">
                      <Link to="#" className="text-fixed-white">
                        <i className="fa-solid fa-ellipsis-vertical" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card card-bg-warning">
                <div className="card-body">
                  <div className="d-flex align-items-center w-100">
                    <div className="me-2">
                      <span className="avatar avatar-rounded">
                        <img src={avatar3} alt="img" />
                      </span>
                    </div>
                    <div className="">
                      <div className="fs-15 fw-semibold">Sarah Alina</div>
                      <p className="mb-0 text-fixed-white op-7 fs-12">
                        Completed today
                      </p>
                    </div>
                    <div className="ms-auto">
                      <Link to="#" className="text-fixed-white">
                        <i className="fa-solid fa-ellipsis-vertical" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card card-bg-info">
                <div className="card-body">
                  <div className="d-flex align-items-center w-100">
                    <div className="me-2">
                      <span className="avatar avatar-rounded">
                        <img src={avatar7} alt="img" />
                      </span>
                    </div>
                    <div className="">
                      <div className="fs-15 fw-semibold">Monica Karen</div>
                      <p className="mb-0 text-fixed-white op-7 fs-12">
                        Pending from 4 days
                      </p>
                    </div>
                    <div className="ms-auto">
                      <Link to="#" className="text-fixed-white">
                        <i className="fa-solid fa-ellipsis-vertical" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card card-bg-success">
                <div className="card-body">
                  <div className="d-flex align-items-center w-100">
                    <div className="me-2">
                      <span className="avatar avatar-rounded">
                        <img src={avatar11} alt="img" />
                      </span>
                    </div>
                    <div className="">
                      <div className="fs-15 fw-semibold">Samantha sid</div>
                      <p className="mb-0 text-fixed-white op-7 fs-12">
                        In leave for 1 month
                      </p>
                    </div>
                    <div className="ms-auto">
                      <Link to="#" className="text-fixed-white">
                        <i className="fa-solid fa-ellipsis-vertical" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card card-bg-danger">
                <div className="card-body">
                  <div className="d-flex align-items-center w-100">
                    <div className="me-2">
                      <span className="avatar avatar-rounded">
                        <img src={avatar4} alt="img" />
                      </span>
                    </div>
                    <div className="">
                      <div className="fs-15 fw-semibold">Sebastien steyn</div>
                      <p className="mb-0 text-fixed-white op-7 fs-12">
                        Completed by Tomorrow
                      </p>
                    </div>
                    <div className="ms-auto">
                      <Link to="#" className="text-fixed-white">
                        <i className="fa-solid fa-ellipsis-vertical" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card card-bg-light">
                <div className="card-body">
                  <div className="d-flex align-items-center w-100">
                    <div className="me-2">
                      <span className="avatar avatar-rounded">
                        <img src={avatar5} alt="img" />
                      </span>
                    </div>
                    <div className="">
                      <div className="fs-15 fw-semibold">Jacob Smith</div>
                      <p className="mb-0 text-muted op-7 fs-12">Finished by 24,Nov</p>
                    </div>
                    <div className="ms-auto">
                      <Link to="#" className="text-default">
                        <i className="fa-solid fa-ellipsis-vertical" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card card-bg-dark">
                <div className="card-body">
                  <div className="d-flex align-items-center w-100">
                    <div className="me-2">
                      <span className="avatar avatar-rounded">
                        <img src={avatar6} alt="img" />
                      </span>
                    </div>
                    <div className="">
                      <div className="fs-15 fw-semibold text-white">Pope Adam</div>
                      <p className="mb-0 op-7 fs-12 text-white">
                        Completed on 24,may
                      </p>
                    </div>
                    <div className="ms-auto">
                      <Link to="#" className="text-white">
                        <i className="fa-solid fa-ellipsis-vertical" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Background Colored Cards */}
          {/* Colored Border Cards */}
          <h6 className="mb-3">Colored Border Cards:</h6>
          <div className="row">
            <div className="col-xl-3">
              <div className="card border border-primary">
                <div className="card-body">
                  <p className="fs-14 fw-semibold mb-2 lh-1">Home Page Design</p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-primary-transparent">Framework</span>
                    <span className="badge bg-secondary-transparent">Angular</span>
                    <span className="badge bg-info-transparent">Php</span>
                  </div>
                  <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src={avatar1} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src={avatar2} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src={avatar3} alt="img" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card border border-secondary">
                <div className="card-body">
                  <p className="fs-14 fw-semibold mb-2 lh-1">Landing Page Design</p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-danger-transparent">Laravel</span>
                    <span className="badge bg-info-transparent">Codeignitor</span>
                    <span className="badge bg-success-transparent">Php</span>
                  </div>
                  <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src={avatar4} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src={avatar5} alt="img" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card border border-warning">
                <div className="card-body">
                  <p className="fs-14 fw-semibold mb-2 lh-1">Update New Project</p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-warning-transparent">Html</span>
                    <span className="badge bg-secondary-transparent">Bootstrap</span>
                    <span className="badge bg-info-transparent">React</span>
                  </div>
                  <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src={avatar6} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src={avatar7} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src={avatar8} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src={avatar9} alt="img" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card border border-info">
                <div className="card-body">
                  <p className="fs-14 fw-semibold mb-2 lh-1">
                    New Project Discussion
                  </p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-info-transparent">React</span>
                    <span className="badge bg-primary-transparent">Typescript</span>
                  </div>
                  <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src={avatar10} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src={avatar11} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src={avatar12} alt="img" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card border border-danger">
                <div className="card-body">
                  <p className="fs-14 fw-semibold mb-2 lh-1">
                    Recent Projects Testing
                  </p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-primary-transparent">Ui</span>
                    <span className="badge bg-secondary-transparent">Angular</span>
                    <span className="badge bg-info-transparent">Java</span>
                  </div>
                  <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src={avatar13} alt="img" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card border border-success">
                <div className="card-body">
                  <p className="fs-14 fw-semibold mb-2 lh-1">
                    About Us Page redesign
                  </p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-danger-transparent">Html</span>
                    <span className="badge bg-warning-transparent">Symphony</span>
                    <span className="badge bg-success-transparent">Php</span>
                  </div>
                  <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src={avatar14} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src={avatar15} alt="img" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card border border-light">
                <div className="card-body">
                  <p className="fs-14 fw-semibold mb-2 lh-1">New Employees</p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-warning-transparent">Html</span>
                    <span className="badge bg-info-transparent">Cake Php</span>
                    <span className="badge bg-success-transparent">React</span>
                  </div>
                  <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src={avatar16} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src={avatar17} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src={avatar18} alt="img" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card border border-dark">
                <div className="card-body">
                  <p className="fs-14 fw-semibold mb-2 lh-1">Terminated Employees</p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-primary-transparent">Angular</span>
                  </div>
                  <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src={avatar1} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src={avatar2} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src={avatar3} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src={avatar4} alt="img" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Colored Border Cards */}
          {/* Card Groups With Footer */}
          <h6 className="mb-3">Card Groups With Footer:</h6>
          <div className="row">
            <div className="col-xl-12">
              <div className="card-group">
                <div className="card">
                  <img
                    src={Img_01}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title fw-semibold">
                      Delecious food is a blessing!
                    </h6>
                    <p className="card-text">
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </div>
                </div>
                <div className="card">
                  <img
                    src={img_02}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title fw-semibold">
                      Is office the best place to earn knowledge?
                    </h6>
                    <p className="card-text">
                      This card has supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </div>
                </div>
                <div className="card">
                  <img
                    src={img_03}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title fw-semibold">Writing is an art.</h6>
                    <p className="card-text">
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This card has even longer content
                      than the first to show that equal height action.
                    </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Card Groups With Footer */}
          {/* Cards With Link */}
          <h6 className="mb-3">Cards With Link:</h6>
          <div className="row">
            <div className="col-xxl-3 col-xl-12">
              <div className="card">
                <Link to="#" className="card-anchor" />
                <img src={image_01} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6 className="card-title fw-semibold mb-0">
                    Forests are Awesome.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6">
              <div className="row">
                <div className="col-xxl-12 col-xl-12">
                  <div className="card card-bg-primary">
                    <Link to="#" className="card-anchor" />
                    <div className="card-body">
                      <blockquote className="blockquote mb-0 text-center">
                        <h6 className="text-fixed-white">
                          The best and most beautiful things in the world cannot be
                          seen or even touched — they must be felt with the heart..
                        </h6>
                        <footer className="blockquote-footer mt-3 fs-14 text-fixed-white op-7">
                          Someone famous as{" "}
                          <cite title="Source Title">-Helen Keller</cite>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-12">
                  <div className="card">
                    <Link to="#" className="card-anchor" />
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="me-3">
                          <span className="avatar avatar-md">
                            <img src={avatar2} alt="img" />
                          </span>
                        </div>
                        <div>
                          <p className="card-text mb-0 fs-14 fw-semibold">
                            Atharva Simon.
                          </p>
                          <div className="card-title text-muted fs-12 mb-0">
                            Correspondent Professor
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card border border-info">
                    <Link to="#" className="card-anchor" />
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="me-3">
                          <span className="avatar avatar-xl">
                            <img src={avatar1} alt="img" />
                          </span>
                        </div>
                        <div>
                          <p className="card-text text-info mb-1 fs-14 fw-semibold">
                            Alicia Keys.
                          </p>
                          <div className="card-title fs-12 mb-1">
                            Department Of Commerce
                          </div>
                          <div className="card-title text-muted fs-11 mb-0">
                            24 Years, Female
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-7 col-xl-12">
                  <div className="card">
                    <Link to="#" className="card-anchor" />
                    <div className="row g-0">
                      <div className="col-md-8">
                        <div className="card-body">
                          <h6 className="card-title mb-2 fw-semibold">
                            Fox is Beautiful ?
                          </h6>
                          <p className="card-text mb-0">
                            This is a wild animal with supporting tactics and are very
                            efficient at kill,they are very Dangerous.
                          </p>
                          <p className="mb-0 card-text">
                            Fox lives mainly in forests and are well known for their
                            hunting skills.
                          </p>
                        </div>
                        <div className="card-footer">
                          <p className="card-text">
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <img
                          src={img_5}
                          className="img-fluid rounded-end object-fit-cover h-100"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-6">
              <div className="card">
                <Link to="#" className="card-anchor" />
                <img src={img_4} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6 className="card-title fw-semibold">
                    Most tropical areas are suitable
                  </h6>
                  <p className="card-text">
                    {" "}
                    If you are going to use a passage of Lorem Ipsum, you need to be
                    sure there isn&apos;t anything embarrassing hidden in the middle of
                    text.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* /Cards With Link */}
          {/* Grid Cards */}
          <h6 className="mb-3">Grid Cards:</h6>
          <div className="row">
            <div className="col-xl-12">
              <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                  <div className="card">
                    <img
                      src={Img_01}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h6 className="card-title fw-semibold">
                        Morphology of a typical fruit.
                      </h6>
                      <p className="card-text">
                        {" "}
                        If you are going to use a passage of Lorem Ipsum, you need to
                        be sure there isn&apos;t anything embarrassing hidden in the middle
                        of text.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img
                      src={img_02}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h6 className="card-title fw-semibold">
                        Research improves ability &amp; agility !
                      </h6>
                      <p className="card-text">
                        {" "}
                        If you are going to use a passage of Lorem Ipsum, you need to
                        be sure there isn&apos;t anything embarrassing hidden in the middle
                        of text.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img
                      src={img_03}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h6 className="card-title fw-semibold">
                        Most tropical areas are suitable
                      </h6>
                      <p className="card-text">
                        {" "}
                        If you are going to use a passage of Lorem Ipsum, you need to
                        be sure there isn&apos;t anything embarrassing hidden in the middle
                        of text.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img
                      src={img_4}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h6 className="card-title fw-semibold">
                        Are They seasonal fruits ?
                      </h6>
                      <p className="card-text">
                        {" "}
                        If you are going to use a passage of Lorem Ipsum, you need to
                        be sure there isn&apos;t anything embarrassing hidden in the middle
                        of text.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Grid Cards */}
        </div>
      </div>
      {/* /Cards */}
    </div>
  );
};

export default Cards;
