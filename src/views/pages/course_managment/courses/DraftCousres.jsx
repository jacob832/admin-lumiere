import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Table } from "antd";

const DraftCourses = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      name: "Introduction to React",
      instructor: "Alice Johnson",
      status: "Draft",
      level: "Beginner",
      startDate: "2024-08-10",
      endDate: "2024-10-10",
      enrollmentCount: 45,
    },
    {
      id: 2,
      name: "Advanced JavaScript",
      instructor: "Bob Brown",
      status: "Draft",
      level: "Advanced",
      startDate: "2024-07-15",
      endDate: "2024-09-30",
      enrollmentCount: 32,
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
            text === "Draft"
              ? "bg-secondary text-dark"
              : text === "Approved"
              ? "bg-success"
              : "bg-warning"
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
        <h4 className="mb-4">Draft Courses</h4>
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

export default DraftCourses;
