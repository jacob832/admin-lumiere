import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Table } from "antd";

const Courses = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      name: "Marketing Fundamentals",
      instructor: "Jane Doe",
      status: "Pending",
      level: "Beginner",
      startDate: "2024-10-24",
      endDate: "2024-12-09",
      enrollmentCount: 123,
    },
    {
      id: 2,
      name: "Intro to UI/UX",
      instructor: "John Smith",
      status: "Pending",
      level: "Intermediate",
      startDate: "2024-09-01",
      endDate: "2024-11-15",
      enrollmentCount: 87,
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
    },
    {
      title: "Course Name",
      dataIndex: "name",
      render: (text, record) => (
        <Link
          to="#"
          onClick={() => navigate(`courses/${record.id}`)}
        >
          {text}
        </Link>
      ),
    },
    {
      title: "Instructor",
      dataIndex: "instructor",
    },
    {
      title: "Level",
      dataIndex: "level",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
    },
    {
      title: "Enrollments",
      dataIndex: "enrollmentCount",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <span
          className={`badge rounded-pill ${
            text === "Pending"
              ? "bg-warning text-dark"
              : text === "Approved"
              ? "bg-success"
              : "bg-secondary"
          }`}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Actions",
      render: (text, record) => (
        <div className="dropdown dropdown-action">
          <Link
            to="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="material-icons">more_vert</i>
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to={`/courses/${record.id}`}>
              <i className="fa fa-eye m-r-5" /> Preview
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="fa fa-check m-r-5" /> Approve
            </Link>
            <Link className="dropdown-item text-danger" to="#">
              <i className="fa fa-times m-r-5" /> Reject
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <h4 className="mb-4">Courses Pending Approval</h4>
        <Table
          className="table-striped"
          style={{ overflowX: "auto" }}
          columns={columns}
          dataSource={data}
          rowKey={(record) => record.id}
        />
      </div>
    </div>
  );
};

export default Courses;
