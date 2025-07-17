import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { TimePicker } from "antd";
dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
  // console.log(time, timeString);
};
const ScheduleTimingModal = () => {
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [selectedDate3, setSelectedDate3] = useState(null);
  const [setSelectedOption] = useState(null);
  const [setSelectedOptionTwo] = useState(null);
  const [setSelectedOptionThree] = useState(null);
  const [value, onChange] = useState("10:00");
  const [selectedDate4, setSelectedDate4] = useState(null);
  const handleDateChange4 = (date) => {
    setSelectedDate4(date);
  };
  const options = [
    { value: "Select Time", label: "Select Time" },
    { value: "12:00 AM-01:00 AM", label: "12:00 AM-01:00 AM" },
    { value: "01:00 AM-02:00 AM", label: "01:00 AM-02:00 AM" },
    { value: "02:00 AM-03:00 AM", label: "02:00 AM-03:00 AM" },
    { value: "03:00 AM-04:00 AM", label: "03:00 AM-04:00 AM" },
    { value: "04:00 AM-05:00 AM", label: "04:00 AM-05:00 AM" },
    { value: "05:00 AM-06:00 AM", label: "05:00 AM-06:00 AM" },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#ff9b44" : "#fff",
      color: state.isFocused ? "#fff" : "#000",
      "&:hover": {
        backgroundColor: "#ff9b44",
      },
    }),
  };

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };
  const handleDateChange3 = (date) => {
    setSelectedDate3(date);
  };
  return (
    <>
    <div id="add_schedule" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Schedule</h5>
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
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label className="col-form-label">
                        Department <span className="text-danger">*</span>
                      </label>
                      <select className="select form-control">
                        <option value="">Select</option>
                        <option value="">Development</option>
                        <option value={1}>Finance</option>
                        <option value={2}>Finance and Management</option>
                        <option value={3}>Hr &amp; Finance</option>
                        <option value={4}>ITech</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label className="col-form-label">
                        Employee Name <span className="text-danger">*</span>
                      </label>
                      <select className="select form-control">
                        <option value="">Select </option>
                        <option value={1}>Richard Miles </option>
                        <option value={2}>John Smith</option>
                        <option value={3}>Mike Litorus </option>
                        <option value={4}>Wilmer Deluna</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label className="col-form-label">Date</label>
                      <div className="cal-icon">
                        <DatePicker
                          selected={selectedDate4}
                          onChange={handleDateChange4}
                          className="form-control floating datetimepicker"
                          type="date"
                          dateFormat="dd-MM-yyyy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label className="col-form-label">
                        Shifts <span className="text-danger">*</span>
                      </label>
                      <select className="select form-control">
                        <option value="">Select </option>
                        <option value={1}>10'o clock Shift</option>
                        <option value={2}>10:30 shift</option>
                        <option value={3}>Daily Shift </option>
                        <option value={4}>New Shift</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">
                        Min Start Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time">
                        <div className="form-control timepicker">
                          <TimePicker
                            className="input-group-text"
                            onChange={onChange}
                            bordered={false}
                            defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">
                        Start Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time">
                        <div className="form-control timepicker">
                          <TimePicker
                            className="input-group-text"
                            onChange={onChange}
                            bordered={false}
                            defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">
                        Max Start Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time">
                        <div className="form-control timepicker">
                          <TimePicker
                            className="input-group-text"
                            onChange={onChange}
                            bordered={false}
                            defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">
                        Min End Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time">
                        <div className="form-control timepicker">
                          <TimePicker
                            className="input-group-text"
                            onChange={onChange}
                            bordered={false}
                            defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">
                        End Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time">
                        <div className="form-control timepicker">
                          <TimePicker
                            className="input-group-text"
                            onChange={onChange}
                            bordered={false}
                            defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">
                        Max End Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time">
                        <div className="form-control timepicker">
                          <TimePicker
                            className="input-group-text"
                            onChange={onChange}
                            bordered={false}
                            defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">
                        Break Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time">
                        <div className="form-control timepicker">
                          <TimePicker
                            className="input-group-text"
                            onChange={onChange}
                            bordered={false}
                            defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-block">
                      <label className="col-form-label">
                        Accept Extra Hours{" "}
                      </label>
                      <div className="custom-control form-switch">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customSwitch1"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customSwitch1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-block">
                      <label className="col-form-label">Publish </label>
                      <div className="custom-control form-switch">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customSwitch2"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customSwitch2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button
                    className="btn btn-primary submit-btn"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    type="reset"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    <div id="edit_course" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit</h5>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block">
                    <label>Schedule Date 1</label>
                    <div className="cal-icon">
                      <DatePicker
                        selected={selectedDate1}
                        onChange={handleDateChange1}
                        className="form-control floating datetimepicker"
                        type="date"
                        dateFormat="dd-MM-yyyy"
                      />
                    </div>{" "}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label>Select Time</label>
                    <Select
                      placeholder="12:00 AM-01:00 AM"
                      onChange={setSelectedOption}
                      options={options}
                      styles={customStyles}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label>Schedule Date 2</label>
                    <div className="cal-icon">
                      <DatePicker
                        selected={selectedDate2}
                        onChange={handleDateChange2}
                        className="form-control floating datetimepicker"
                        type="date"
                        dateFormat="dd-MM-yyyy"
                      />
                    </div>{" "}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label>Select Time</label>
                    <Select
                      placeholder="12:00 AM-01:00 AM"
                      onChange={setSelectedOptionTwo}
                      options={options}
                      styles={customStyles}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label>Schedule Date 3</label>
                    <div className="cal-icon">
                      <DatePicker
                        selected={selectedDate3}
                        onChange={handleDateChange3}
                        className="form-control floating datetimepicker"
                        type="date"
                        dateFormat="dd-MM-yyyy"
                      />
                    </div>{" "}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label>Select Time</label>
                    <Select
                      placeholder="12:00 AM-01:00 AM"
                      onChange={setSelectedOptionThree}
                      options={options}
                      styles={customStyles}
                    />
                  </div>
                </div>
              </div>
              <div className="submit-section">
                <button
                  className="btn btn-primary submit-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  type="reset"
                >
                  Save
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

export default ScheduleTimingModal;
