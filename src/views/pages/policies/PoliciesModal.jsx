import React, { useState, useEffect } from "react";

const PoliciesModal = ({ policies = [], editingPolicy }) => {
  const [formData, setFormData] = useState({
    policyName: "",
    category: "",
    description: "",
    created: "",
  });
  const [isDuplicate, setIsDuplicate] = useState(false);

  // Fill form when editingPolicy changes
  useEffect(() => {
    if (editingPolicy) {
      setFormData({
        policyName: editingPolicy.policyName || "",
        category: editingPolicy.category || "",
        description: editingPolicy.description || "",
        created: editingPolicy.created || "",
      });
    }
  }, [editingPolicy]);

  // Check for duplicate policy names
  useEffect(() => {
    if (formData.policyName) {
      const duplicate = policies.some(
        (policy) =>
          policy.policyName.toLowerCase() === formData.policyName.toLowerCase() &&
          (!editingPolicy || policy.id !== editingPolicy.id) // ignore the current editing policy
      );
      setIsDuplicate(duplicate);
    } else {
      setIsDuplicate(false);
    }
  }, [formData.policyName, policies, editingPolicy]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {/* Add Policy Modal */}
      <div className="modal custom-modal fade" id="add_policy" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Policy</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                {/* Policy Name */}
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Policy Name <span className="text-danger">*</span>
                  </label>
                  <input
                    name="policyName"
                    className="form-control"
                    type="text"
                    value={formData.policyName}
                    onChange={handleChange}
                    required
                  />
                  {isDuplicate && (
                    <div className="text-warning">Policy name already exists</div>
                  )}
                </div>

                {/* Category */}
                <div className="input-block mb-3">
                  <label className="col-form-label">Category</label>
                  <input
                    name="category"
                    className="form-control"
                    type="text"
                    value={formData.category}
                    onChange={handleChange}
                  />
                </div>

                {/* Created Date */}
                <div className="input-block mb-3">
                  <label className="col-form-label">Created Date</label>
                  <input
                    name="created"
                    className="form-control"
                    type="date"
                    value={formData.created}
                    onChange={handleChange}
                  />
                </div>

                {/* Description */}
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
                    data-bs-dismiss="modal"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Policy Modal */}
      <div className="modal custom-modal fade" id="edit_policy" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Policy</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                {/* Policy Name */}
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Policy Name <span className="text-danger">*</span>
                  </label>
                  <input
                    name="policyName"
                    className="form-control"
                    type="text"
                    value={formData.policyName}
                    onChange={handleChange}
                    required
                  />
                  {isDuplicate && (
                    <div className="text-warning">Policy name already exists</div>
                  )}
                </div>

                {/* Category */}
                <div className="input-block mb-3">
                  <label className="col-form-label">Category</label>
                  <input
                    name="category"
                    className="form-control"
                    type="text"
                    value={formData.category}
                    onChange={handleChange}
                  />
                </div>

                {/* Created Date */}
                <div className="input-block mb-3">
                  <label className="col-form-label">Created Date</label>
                  <input
                    name="created"
                    className="form-control"
                    type="date"
                    value={formData.created}
                    onChange={handleChange}
                  />
                </div>

                {/* Description */}
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
                    data-bs-dismiss="modal"
                    type="submit"
                  >
                    Save Changes
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

export default PoliciesModal;
