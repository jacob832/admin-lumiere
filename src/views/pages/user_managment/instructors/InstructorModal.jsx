import React, { useState } from "react";

const InstructorModal = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    instructorCode: "",
    email: "",
    role: "",
    mobile: "",
    specialization: "",
    status: "active",
    joinDate: "",
    birthDate: "",
  });
  const [activeStep, setActiveStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      instructorCode: "",
      email: "",
      role: "",
      mobile: "",
      specialization: "",
      status: "active",
      joinDate: "",
      birthDate: "",
    });
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="modal custom-modal fade" id="add_instructors" role="dialog">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Instructor</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="wizard">
                <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                  <li
                    className={`nav-item flex-fill ${activeStep === 1 ? "active" : ""}`}
                    role="presentation"
                    onClick={() => handleStepChange(1)}
                  >
                    <a
                      className={`nav-link rounded-circle mx-auto d-flex align-items-center justify-content-center ${activeStep === 1 ? "active-step" : ""}`}
                      id="step1-tab"
                      data-bs-toggle="tab"
                      href="#step1"
                      role="tab"
                      aria-controls="step1"
                      aria-selected={activeStep === 1 ? "true" : "false"}
                    >
                      <i className="far fa-user" />
                    </a>
                  </li>
                  <li
                    className={`nav-item flex-fill ${activeStep === 2 ? "active" : ""}`}
                    role="presentation"
                    onClick={() => handleStepChange(2)}
                  >
                    <a
                      className={`nav-link rounded-circle mx-auto d-flex align-items-center justify-content-center ${activeStep === 2 ? "active-step" : ""}`}
                      id="step2-tab"
                      data-bs-toggle="tab"
                      href="#step2"
                      role="tab"
                      aria-controls="step2"
                      aria-selected={activeStep === 2 ? "true" : "false"}
                    >
                      <i class="las la-sms"/>
                    </a>
                  </li>
                  <li
                    className={`nav-item flex-fill ${activeStep === 3 ? "active" : ""}`}
                    role="presentation"
                    onClick={() => handleStepChange(3)}
                  >
                    <a
                      className={`nav-link rounded-circle mx-auto d-flex align-items-center justify-content-center ${activeStep === 3 ? "active-step" : ""}`}
                      id="step3-tab"
                      data-bs-toggle="tab"
                      href="#step3"
                      role="tab"
                      aria-controls="step3"
                      aria-selected={activeStep === 3 ? "true" : "false"}
                    >
                      <i className="las la-user-cog" />
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className={`tab-pane fade ${activeStep === 1 ? "show active" : ""}`}
                    id="step1"
                    role="tabpanel"
                    aria-labelledby="step1-tab"
                  >
                    <div className="mb-4">
                      <h4>Enter Instructor Basic Information</h4>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="name" className="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="instructorCode" className="form-label">
                            Instructor Code
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="instructorCode"
                            name="instructorCode"
                            value={formData.instructorCode}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex mt-3 justify-content-between">
                      <button type="button" className="btn btn-secondary" onClick={() => handleStepChange(2)}>
                        Next
                      </button>
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade ${activeStep === 2 ? "show active" : ""}`}
                    id="step2"
                    role="tabpanel"
                    aria-labelledby="step2-tab"
                  >
                    <div className="mb-4">
                      <h4>Enter Instructor Contact Information</h4>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="mobile" className="form-label">
                            Mobile
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="specialization" className="form-label">
                            Specialization
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="specialization"
                            name="specialization"
                            value={formData.specialization}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex mt-3 justify-content-between">
                      <button type="button" className="btn btn-secondary" onClick={() => handleStepChange(1)}>
                        Back
                      </button>
                      <button type="button" className="btn btn-secondary" onClick={() => handleStepChange(3)}>
                        Next
                      </button>
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade ${activeStep === 3 ? "show active" : ""}`}
                    id="step3"
                    role="tabpanel"
                    aria-labelledby="step3-tab"
                  >
                    <div className="mb-4">
                      <h4>Enter Instructor Role & Status</h4>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="role" className="form-label">
                            Role
                          </label>
                          <select
                            className="form-control"
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="instructor">Instructor</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="status" className="form-label">
                            Status
                          </label>
                          <select
                            className="form-control"
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            required
                          >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="joinDate" className="form-label">
                            Join Date
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="joinDate"
                            name="joinDate"
                            value={formData.joinDate}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="birthDate" className="form-label">
                            Birth Date
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="birthDate"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex mt-3 justify-content-between">
                      <button type="button" className="btn btn-secondary" onClick={() => handleStepChange(2)}>
                        Back
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Save Instructor
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorModal;
