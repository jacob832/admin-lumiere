import React, { useState, useEffect } from "react";

const LeavesModal = ({ leaves = [], editingLeave }) => {
  const [formData, setFormData] = useState({
    leaveType: "",
    from: "",
    to: "",
    numberOfDays: "",
    remainingLeaves: "",
    leaveReason: "",
  });
  const [isDuplicate, setIsDuplicate] = useState(false);

  // Fill form when editingLeave changes
  useEffect(() => {
    if (editingLeave) {
      setFormData({
        leaveType: editingLeave.leaveType || "",
        from: editingLeave.from || "",
        to: editingLeave.to || "",
        numberOfDays: editingLeave.numberOfDays || "",
        remainingLeaves: editingLeave.remainingLeaves || "",
        leaveReason: editingLeave.leaveReason || "",
      });
    }
  }, [editingLeave]);

  // Check for duplicate leave requests (if necessary)
  useEffect(() => {
    if (formData.leaveType && formData.from && formData.to) {
      const duplicate = leaves.some(
        (leave) =>
          leave.leaveType === formData.leaveType &&
          leave.from === formData.from &&
          leave.to === formData.to &&
          (!editingLeave || leave.id !== editingLeave.id) // ignore the current editing leave
      );
      setIsDuplicate(duplicate);
    } else {
      setIsDuplicate(false);
    }
  }, [formData, leaves, editingLeave]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {/* Add Leave Modal */}
      <div className="modal custom-modal fade" id="add_leave" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Leave</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                {/* Leave Type */}
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Leave Type <span className="text-danger">*</span>
                  </label>
                  <select
                    name="leaveType"
                    className="form-control"
                    value={formData.leaveType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Leave Type</option>
                    <option value="Annual Leave">Annual Leave</option>
                    <option value="Medical Leave">Medical Leave</option>
                    <option value="Other Leave">Other Leave</option>
                  </select>
                </div>

                {/* From Date */}
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    From <span className="text-danger">*</span>
                  </label>
                  <input
                    name="from"
                    className="form-control"
                    type="date"
                    value={formData.from}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* To Date */}
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    To <span className="text-danger">*</span>
                  </label>
                  <input
                    name="to"
                    className="form-control"
                    type="date"
                    value={formData.to}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Number of Days */}
                <div className="input-block mb-3">
                  <label className="col-form-label">Number of Days</label>
                  <input
                    name="numberOfDays"
                    className="form-control"
                    type="number"
                    value={formData.numberOfDays}
                    onChange={handleChange}
                  />
                </div>

                {/* Remaining Leaves */}
                <div className="input-block mb-3">
                  <label className="col-form-label">Remaining Leaves</label>
                  <input
                    name="remainingLeaves"
                    className="form-control"
                    type="number"
                    value={formData.remainingLeaves}
                    onChange={handleChange}
                  />
                </div>

                {/* Leave Reason */}
                <div className="input-block mb-3">
                  <label className="col-form-label">Leave Reason</label>
                  <textarea
                    name="leaveReason"
                    className="form-control"
                    rows={3}
                    value={formData.leaveReason}
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

      {/* Edit Leave Modal */}
      <div className="modal custom-modal fade" id="edit_leave" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Leave</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                {/* Leave Type */}
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Leave Type <span className="text-danger">*</span>
                  </label>
                  <select
                    name="leaveType"
                    className="form-control"
                    value={formData.leaveType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Leave Type</option>
                    <option value="Annual Leave">Annual Leave</option>
                    <option value="Medical Leave">Medical Leave</option>
                    <option value="Other Leave">Other Leave</option>
                  </select>
                </div>

                {/* From Date */}
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    From <span className="text-danger">*</span>
                  </label>
                  <input
                    name="from"
                    className="form-control"
                    type="date"
                    value={formData.from}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* To Date */}
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    To <span className="text-danger">*</span>
                  </label>
                  <input
                    name="to"
                    className="form-control"
                    type="date"
                    value={formData.to}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Number of Days */}
                <div className="input-block mb-3">
                  <label className="col-form-label">Number of Days</label>
                  <input
                    name="numberOfDays"
                    className="form-control"
                    type="number"
                    value={formData.numberOfDays}
                    onChange={handleChange}
                  />
                </div>

                {/* Remaining Leaves */}
                <div className="input-block mb-3">
                  <label className="col-form-label">Remaining Leaves</label>
                  <input
                    name="remainingLeaves"
                    className="form-control"
                    type="number"
                    value={formData.remainingLeaves}
                    onChange={handleChange}
                  />
                </div>

                {/* Leave Reason */}
                <div className="input-block mb-3">
                  <label className="col-form-label">Leave Reason</label>
                  <textarea
                    name="leaveReason"
                    className="form-control"
                    rows={3}
                    value={formData.leaveReason}
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

export default LeavesModal;
