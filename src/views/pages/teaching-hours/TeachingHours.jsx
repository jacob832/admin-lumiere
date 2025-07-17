import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Select } from "antd";

import DeleteModal from "../../../components/modelpopup/deletePopup";
import Breadcrumbs from "../../../components/Breadcrumbs";
import TeachingHoursModal from "./TeachingHoursModal";

const { Option } = Select;

const TeachingHours = () => {
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState("All");

  const months = ["All", "January", "February", "March", "April", "May", "June"];

  const data = [
    {
      id: 1,
      instructor: "Alice",
      totalHours: 40,
      completedHours: 30,
      upcoming: 5,
      break: 2,
      status: "On Time",
      month: "May",
    },
    {
      id: 2,
      instructor: "Bob",
      totalHours: 50,
      completedHours: 60,
      upcoming: 0,
      break: 1,
      status: "Ahead",
      month: "April",
    },
    {
      id: 3,
      instructor: "Charlie",
      totalHours: 30,
      completedHours: 15,
      upcoming: 10,
      break: 3,
      status: "Behind",
      month: "May",
    },
  ];

  const filteredData =
    selectedMonth === "All"
      ? data
      : data.filter((item) => item.month === selectedMonth);

  const columns = [
    { title: "#", dataIndex: "id", sorter: (a, b) => a.id - b.id },
    { title: "Instructor Name", dataIndex: "instructor" },
    { title: "Total Hours", dataIndex: "totalHours" },
    { title: "Completed Hours", dataIndex: "completedHours" },
    { title: "Upcoming", dataIndex: "upcoming" },
    { title: "Break", dataIndex: "break" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <span
          className={`badge ${
            status === "Ahead"
              ? "bg-success"
              : status === "Behind"
              ? "bg-danger"
              : "bg-warning"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Action",
      render: (text, record) => (
        <div className="dropdown dropdown-action">
          <Link
            to="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={() => setSelectedRecord(record)}
          >
            <i className="material-icons">more_vert</i>
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit_teaching"
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link
              className="dropdown-item"
              to="#delete"
              data-bs-toggle="modal"
              data-bs-target="#delete"
            >
              <i className="fa fa-trash m-r-5" /> Delete
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Teaching Hours"
            title="Dashboard"
            subtitle="Teaching Hours"
            modal="#add_teaching"
            name="Add Teaching Hours"
          />

          <div className="mb-3 d-flex align-items-center">
            <label className="me-2">Filter by Month:</label>
            <Select
              value={selectedMonth}
              onChange={setSelectedMonth}
              style={{ width: 200 }}
            >
              {months.map((month) => (
                <Option key={month} value={month}>
                  {month}
                </Option>
              ))}
            </Select>
          </div>

          <Table
            className="table-striped"
            style={{ overflowX: "auto" }}
            columns={columns}
            dataSource={filteredData}
            rowKey={(record) => record.id}
          />
        </div>
      </div>

      <TeachingHoursModal editingRecord={selectedRecord} />
      <DeleteModal Name="Delete Teaching Record" />
    </div>
  );
};

export default TeachingHours;
