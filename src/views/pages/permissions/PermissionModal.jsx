import React, { useState, useEffect } from "react";

const PermissionsModal = ({ categories, instructors, editingPermission }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    instructor: "",
    courses: "",
    description: "",
  });

  // Reset form when modal is opened for adding a new permission
  useEffect(() => {
    if (editingPermission) {
      setFormData({
        name: editingPermission.name || "",
        category: editingPermission.category || "",
        instructor: editingPermission.instructor || "",
        courses: editingPermission.courses || "",
        description: editingPermission.description || "",
      });
    }
  }, [editingPermission]);
  
  // Clear form when Add Modal opens
  useEffect(() => {
    const addModal = document.getElementById("add_permission");
  
    const handleAddModalOpen = () => {
      setFormData({
        name: "",
        category: "",
        instructor: "",
        courses: "",
        description: "",
      });
    };
  
    if (addModal) {
      addModal.addEventListener("show.bs.modal", handleAddModalOpen);
    }
  
    return () => {
      if (addModal) {
        addModal.removeEventListener("show.bs.modal", handleAddModalOpen);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, either create or update the permission
    if (editingPermission) {
      console.log("Editing Permission:", formData);
    } else {
      console.log("Adding Permission:", formData);
    }
    // Close modal after submitting (Optional, depending on the behavior you need)
    document.getElementById(editingPermission ? "edit_permission" : "add_permission").classList.remove("show");
  };

  return (
    <>
      {/* Add Permission Modal */}
      <div
        className="modal custom-modal fade"
        id="add_permission"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Permission</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    name="name"
                    className="form-control"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-block mb-3">
                  <label className="col-form-label">Category</label>
                  <select
                    className="form-control"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="">-- Select Category --</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="input-block mb-3">
                  <label className="col-form-label">Instructor</label>
                  <select
                    className="form-control"
                    name="instructor"
                    value={formData.instructor}
                    onChange={handleChange}
                  >
                    <option value="">-- Select Instructor --</option>
                    {instructors.map((instructor) => (
                      <option key={instructor.id} value={instructor.name}>
                        {instructor.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="input-block mb-3">
                  <label className="col-form-label">Courses</label>
                  <input
                    name="courses"
                    className="form-control"
                    type="text"
                    value={formData.courses}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-block mb-3">
                  <label className="col-form-label">Description</label>
                  <textarea
                    name="description"
                    className="form-control"
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>

                <div className="submit-section">
                  <button
                    className="btn btn-primary submit-btn"
                    type="submit"
                  >
                    Add Permission
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Permission Modal */}
      <div
        className="modal custom-modal fade"
        id="edit_permission"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Permission</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    name="name"
                    className="form-control"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-block mb-3">
                  <label className="col-form-label">Category</label>
                  <select
                    className="form-control"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="">-- Select Category --</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="input-block mb-3">
                  <label className="col-form-label">Instructor</label>
                  <select
                    className="form-control"
                    name="instructor"
                    value={formData.instructor}
                    onChange={handleChange}
                  >
                    <option value="">-- Select Instructor --</option>
                    {instructors.map((instructor) => (
                      <option key={instructor.id} value={instructor.name}>
                        {instructor.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="input-block mb-3">
                  <label className="col-form-label">Courses</label>
                  <input
                    name="courses"
                    className="form-control"
                    type="text"
                    value={formData.courses}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-block mb-3">
                  <label className="col-form-label">Description</label>
                  <textarea
                    name="description"
                    className="form-control"
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>

                <div className="submit-section">
                  <button
                    className="btn btn-primary submit-btn"
                    type="submit"
                  >
                    Edit Permission
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PermissionsModal;
