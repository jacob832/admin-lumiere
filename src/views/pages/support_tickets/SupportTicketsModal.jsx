import React, { useState, useEffect } from "react";

const SupportTicketsModal = ({ tickets = [], editingTicket }) => {
  const [formData, setFormData] = useState({
    subject: "",
    priority: "",
    category: "",
    status: "",
    postedBy: "",
    date: "",
  });

  const [isDuplicate, setIsDuplicate] = useState(false);

  // Populate form for editing
  useEffect(() => {
    if (editingTicket) {
      setFormData({
        subject: editingTicket.subject || "",
        priority: editingTicket.priority || "",
        category: editingTicket.category || "",
        status: editingTicket.status || "",
        postedBy: editingTicket.postedBy || "",
        date: editingTicket.date || "",
      });
    }
  }, [editingTicket]);

  // Check for duplicates
  useEffect(() => {
    if (formData.subject && formData.date) {
      const duplicate = tickets.some(
        (ticket) =>
          ticket.subject === formData.subject &&
          ticket.date === formData.date &&
          (!editingTicket || ticket.id !== editingTicket.id)
      );
      setIsDuplicate(duplicate);
    } else {
      setIsDuplicate(false);
    }
  }, [formData, tickets, editingTicket]);
  useEffect(() => {
    const editModalEl = document.getElementById("edit_ticket");
    const handleHide = () => setFormData({
      subject: "",
      priority: "",
      category: "",
      status: "",
      postedBy: "",
      date: "",
    });
  
    editModalEl.addEventListener("hidden.bs.modal", handleHide);
    return () => editModalEl.removeEventListener("hidden.bs.modal", handleHide);
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {/* Add Ticket Modal */}
      <div className="modal custom-modal fade" id="add_ticket" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Support Ticket</h5>
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
              <form>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Subject <span className="text-danger">*</span>
                  </label>
                  <input
                    name="subject"
                    className="form-control"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-block mb-3">
                  <label className="col-form-label">Priority</label>
                  <select
                    name="priority"
                    className="form-control"
                    value={formData.priority}
                    onChange={handleChange}
                  >
                    <option value="">Select Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>

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

                <div className="input-block mb-3">
                  <label className="col-form-label">Status</label>
                  <select
                    name="status"
                    className="form-control"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="">Select Status</option>
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>

                <div className="input-block mb-3">
                  <label className="col-form-label">Posted By</label>
                  <input
                    name="postedBy"
                    className="form-control"
                    type="text"
                    value={formData.postedBy}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-block mb-3">
                  <label className="col-form-label">Date</label>
                  <input
                    name="date"
                    className="form-control"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>

                {isDuplicate && (
                  <p className="text-danger">Duplicate ticket exists.</p>
                )}

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

      {/* Edit Ticket Modal */}
      <div className="modal custom-modal fade" id="edit_ticket" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Support Ticket</h5>
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
              <form>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Subject <span className="text-danger">*</span>
                  </label>
                  <input
                    name="subject"
                    className="form-control"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-block mb-3">
                  <label className="col-form-label">Priority</label>
                  <select
                    name="priority"
                    className="form-control"
                    value={formData.priority}
                    onChange={handleChange}
                  >
                    <option value="">Select Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>

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

                <div className="input-block mb-3">
                  <label className="col-form-label">Status</label>
                  <select
                    name="status"
                    className="form-control"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="">Select Status</option>
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>

                <div className="input-block mb-3">
                  <label className="col-form-label">Posted By</label>
                  <input
                    name="postedBy"
                    className="form-control"
                    type="text"
                    value={formData.postedBy}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-block mb-3">
                  <label className="col-form-label">Date</label>
                  <input
                    name="date"
                    className="form-control"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>

                {isDuplicate && (
                  <p className="text-danger">Duplicate ticket exists.</p>
                )}

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

export default SupportTicketsModal;
