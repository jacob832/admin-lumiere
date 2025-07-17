import React from 'react'
import Header from '../../../layout/Header'
import Sidebar from '../../../layout/Sidebar'

const Progress = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h5>Progress</h5>
            </div>
          </div>
          <div className="row">
            {/* Basic Progress */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Basic Progress</h5>
                </div>
                <div className="card-body">
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={0}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-bar" style={{ width: "0%" }} />
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-bar bg-primary" style={{ width: "25%" }} />
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-bar bg-primary" style={{ width: "50%" }} />
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-bar bg-primary" style={{ width: "75%" }} />
                  </div>
                  <div
                    className="progress mb-0"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-bar bg-primary" style={{ width: "100%" }} />
                  </div>
                </div>
              </div>
            </div>
            {/* /Basic Progress */}
            {/* Colored Progress */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Colored Progress</h5>
                </div>
                <div className="card-body">
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={20}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-secondary"
                      style={{ width: "20%" }}
                    />
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={40}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "40%" }}
                    />
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-info"
                      style={{ width: "60%" }}
                    />
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-success"
                      style={{ width: "80%" }}
                    />
                  </div>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-danger"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* /Colored Progress */}
            {/* Striped Progress */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Striped Progress</h5>
                </div>
                <div className="card-body">
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar progress-bar-striped"
                      style={{ width: "10%" }}
                    ></div>
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar progress-bar-striped bg-secondary"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar progress-bar-striped bg-success"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar progress-bar-striped bg-info"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar progress-bar-striped bg-warning"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* /Striped Progress */}
            {/* Progress Height */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Progress Height</h5>
                </div>
                <div className="card-body">
                  <div
                    className="progress progress-xs mb-3"
                    role="progressbar"
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: "10%" }}
                    ></div>
                  </div>
                  <div
                    className="progress progress-sm mb-3"
                    role="progressbar"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                  <div
                    className="progress progress-lg mb-3"
                    role="progressbar"
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <div
                    className="progress progress-xl"
                    role="progressbar"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* /Progress Height */}
         
           
          
            
            
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Progress
