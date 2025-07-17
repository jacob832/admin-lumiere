import React, { useState, useEffect } from "react";

const HolidaysModal = ({ holidays = [], editingHoliday }) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
  });
  const [errors, setErrors] = useState({});
  const [isDuplicate, setIsDuplicate] = useState(false);

  // Fill form when editingHoliday changes
  useEffect(() => {
    if (editingHoliday) {
      setFormData({
        name: editingHoliday.title || "",
        date: editingHoliday.date || "",
      });
    }
  }, [editingHoliday]);

  // Check for duplicate holiday names
  useEffect(() => {
    if (formData.name) {
      const duplicate = holidays.some(
        (holiday) =>
          holiday.title.toLowerCase() === formData.name.toLowerCase() &&
          (!editingHoliday || holiday.id !== editingHoliday.id) // ignore if editing the same holiday
      );
      setIsDuplicate(duplicate);
    } else {
      setIsDuplicate(false);
    }
  }, [formData.name, holidays, editingHoliday]);

  // Calculate the day of the week from the date
  const getDayOfWeek = (date) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date(date);
    return days[d.getDay()];
  };

  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Validate the form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Holiday name is required";
    } else if (isDuplicate) {
      newErrors.name = "Holiday name already exists";
    }

    if (!formData.date.trim()) {
      newErrors.date = "Holiday date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Call your API or update the list here
    }
  };

  return (
    <>
      {/* Add Holiday Modal */}
      <div className="modal custom-modal fade" id="add_holiday" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Holiday</h5>
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
                {/* Holiday Name */}
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Holiday Name <span className="text-danger">*</span>
                  </label>
                  <input
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                  {isDuplicate && !errors.name && (
                    <div className="text-warning">Holiday name already exists</div>
                  )}
                </div>

                {/* Holiday Date */}
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Date <span className="text-danger">*</span>
                  </label>
                  <input
                    className={`form-control ${errors.date ? "is-invalid" : ""}`}
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                  {errors.date && (
                    <div className="invalid-feedback">{errors.date}</div>
                  )}
                </div>

                {/* Display Day of the Week */}
                {formData.date && (
                  <div className="mb-3">
                    <strong>Day: </strong>
                    {getDayOfWeek(formData.date)}
                  </div>
                )}

                <div className="submit-section">
                  <button className="btn btn-primary submit-btn" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Holiday Modal */}
      <div className="modal custom-modal fade" id="edit_holiday" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Holiday</h5>
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
                {/* Holiday Name */}
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Holiday Name <span className="text-danger">*</span>
                  </label>
                  <input
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                {/* Holiday Date */}
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Date <span className="text-danger">*</span>
                  </label>
                  <input
                    className={`form-control ${errors.date ? "is-invalid" : ""}`}
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                  {errors.date && (
                    <div className="invalid-feedback">{errors.date}</div>
                  )}
                </div>

                {/* Display Day of the Week */}
                {formData.date && (
                  <div className="mb-3">
                    <strong>Day: </strong>
                    {getDayOfWeek(formData.date)}
                  </div>
                )}

                <div className="submit-section">
                  <button className="btn btn-primary submit-btn" type="submit">
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

export default HolidaysModal;
