import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../layout/Header';
import Sidebar from '../../../layout/Sidebar';
import { Avatar_01, Avatar_02, Avatar_03, Avatar_04, Avatar_05, Avatar_06 } from '../../../../Routes/ImagePath';

const Alerts = () => {


  return (
    <div>
       {/* Page Wrapper */}
  <div className="page-wrapper">
  <div className="content container-fluid">
  <Header/>
  <Sidebar/>
    {/* Page Header */}
    <div className="page-header">
      <div className="content-page-header">
        <h5>Alert</h5>
      </div>
    </div>
    {/* /Page Header */}
    {/* Alerts */}
    <div className="row">
      <div className="col-xl-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Default Alerts</h5>
          </div>
          <div className="card-body">
            <div className="alert alert-primary" role="alert">
              A simple primary alert—check it out!
            </div>
            <div className="alert alert-secondary" role="alert">
              A simple secondary alert—check it out!
            </div>
            <div className="alert alert-success" role="alert">
              A simple success alert—check it out!
            </div>
            <div className="alert alert-danger" role="alert">
              A simple danger alert—check it out!
            </div>
            <div className="alert alert-warning" role="alert">
              A simple warning alert—check it out!
            </div>
            <div className="alert alert-info" role="alert">
              A simple info alert—check it out!
            </div>
            <div className="alert alert-light" role="alert">
              A simple light alert—check it out!
            </div>
            <div className="alert alert-dark" role="alert">
              A simple dark alert—check it out!
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Links in alerts</h5>
          </div>
          <div className="card-body">
            <div className="alert alert-primary" role="alert">
              A simple primary alert with{" "}
              <Link to="#" className="alert-link">
                an example link
              </Link>
              . Give it a click if you like.
            </div>
            <div className="alert alert-secondary" role="alert">
              A simple secondary alert with{" "}
              <Link to="#" className="alert-link">
                an example link
              </Link>
              . Give it a click if you like.
            </div>
            <div className="alert alert-success" role="alert">
              A simple success alert with{" "}
              <Link to="#" className="alert-link">
                an example link
              </Link>
              . Give it a click if you like.
            </div>
            <div className="alert alert-danger" role="alert">
              A simple danger alert with{" "}
              <Link to="#" className="alert-link">
                an example link
              </Link>
              . Give it a click if you like.
            </div>
            <div className="alert alert-warning" role="alert">
              A simple warning alert with{" "}
              <Link to="#" className="alert-link">
                an example link
              </Link>
              . Give it a click if you like.
            </div>
            <div className="alert alert-info" role="alert">
              A simple info alert with{" "}
              <Link to="#" className="alert-link">
                an example link
              </Link>
              . Give it a click if you like.
            </div>
            <div className="alert alert-light" role="alert">
              A simple light alert with{" "}
              <Link to="#" className="alert-link">
                an example link
              </Link>
              . Give it a click if you like.
            </div>
            <div className="alert alert-dark" role="alert">
              A simple dark alert with{" "}
              <Link to="#" className="alert-link">
                an example link
              </Link>
              . Give it a click if you like.
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Solid Colored Alerts</h5>
          </div>
          <div className="card-body">
            <div className="alert alert-solid-primary alert-dismissible fade show">
              A simple solid primary alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-solid-secondary alert-dismissible fade show">
              A simple solid secondary alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-solid-info alert-dismissible fade show">
              A simple solid info alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-solid-warning alert-dismissible fade show">
              A simple solid warning alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-solid-success alert-dismissible fade show">
              A simple solid success alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-solid-danger alert-dismissible fade show">
              A simple solid danger alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-solid-light alert-dismissible fade show">
              A simple solid light alert—check it out!
              <button
                type="button"
                className="btn-close text-default"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-solid-dark alert-dismissible fade show text-white">
              A simple solid dark alert—check it out!
              <button
                type="button"
                className="btn-close text-white"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Outline Alerts </h5>
          </div>
          <div className="card-body">
            <div className="alert alert-outline-primary alert-dismissible fade show">
              A simple outline primary alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-outline-secondary alert-dismissible fade show">
              A simple outline secondary alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-outline-info alert-dismissible fade show">
              A simple outline info alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-outline-warning alert-dismissible fade show">
              A simple outline warning alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-outline-success alert-dismissible fade show">
              A simple outline success alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-outline-danger alert-dismissible fade show">
              A simple outline danger alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-outline-light alert-dismissible fade show">
              A simple outline light alert—check it out!
              <button
                type="button"
                className="btn-close text-default"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-outline-dark alert-dismissible fade show">
              A simple outline dark alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
          </div>
        </div>
      </div>
     
      </div>
    </div>
    {/* /Alerts */}
  </div>

  </div>

  );
}

export default Alerts;
