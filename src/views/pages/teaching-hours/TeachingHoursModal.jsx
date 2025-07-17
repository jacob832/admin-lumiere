import React, { useState, useEffect } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";

const TeachingHoursModal = ({ editingRecord }) => {
  const [formData, setFormData] = useState({
    instructor: "",
    courses: "",
    totalHours: "",
    status: "On Time",
  });

  useEffect(() => {
    if (editingRecord) {
      setFormData({
        instructor: editingRecord.instructor,
        courses: editingRecord.courses || "",
        totalHours: editingRecord.totalHours,
        status: editingRecord.status,
      });
    }
  }, [editingRecord]);

  useEffect(() => {
    const modal = document.getElementById("add_teaching");
    const handleOpen = () => {
      setFormData({
        instructor: "",
        courses: "",
        totalHours: "",
        status: "On Time",
      });
    };
    modal?.addEventListener("show.bs.modal", handleOpen);
    return () => modal?.removeEventListener("show.bs.modal", handleOpen);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingRecord) {
      console.log("Edit Teaching Hours:", formData);
    } else {
      console.log("Add Teaching Hours:", formData);
    }
    document.getElementById(editingRecord ? "edit_teaching" : "add_teaching")?.classList.remove("show");
  };

  const ModalForm = ({ isEdit = false }) => (
    <form onSubmit={handleSubmit} className="d-flex flex-column h-100">
      <div className="modal-header">
        <h5 className="modal-title">{isEdit ? "Edit Teaching Hours" : "Add Teaching Hours"}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>

      <div className="modal-body overflow-auto">
        {!isEdit && (
          <div className="text-center mb-4">
            <FaChalkboardTeacher size={60} className="text-primary" />
          </div>
        )}

        {!isEdit && (
          <>
            <div className="input-block mb-3">
              <label>Instructor</label>
              <input
                name="instructor"
                className="form-control"
                type="text"
                value={formData.instructor}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-block mb-3">
              <label>Courses</label>
              <input
                name="courses"
                className="form-control"
                type="text"
                value={formData.courses}
                onChange={handleChange}
              />
            </div>
          </>
        )}

        <div className="input-block mb-3">
          <label>Total Hours</label>
          <input
            name="totalHours"
            className="form-control"
            type="number"
            value={formData.totalHours}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-block mb-3">
          <label>Status</label>
          <select
            name="status"
            className="form-control"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Ahead">Ahead</option>
            <option value="On Time">On Time</option>
            <option value="Behind">Behind</option>
          </select>
        </div>
      </div>

      <div className="modal-footer">
        <button className="btn btn-primary w-100" type="submit">
          {isEdit ? "Save Changes" : "Add Teaching Hours"}
        </button>
      </div>
    </form>
  );

  return (
    <>
      {/* Add Modal */}
      <div className="modal custom-modal fade" id="add_teaching" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content h-100">{ModalForm({ isEdit: false })}</div>
        </div>
      </div>

      {/* Edit Modal */}
      <div className="modal custom-modal fade" id="edit_teaching" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content h-100">{ModalForm({ isEdit: true })}</div>
        </div>
      </div>
    </>
  );
};

export default TeachingHoursModal;
