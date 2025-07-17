import React from "react";
import { Table } from "antd";

import { Link } from "react-router-dom";
import {
  Avatar_01,
  Avatar_02,
  Avatar_03,
} from "../../../Routes/ImagePath";
import ScheduleTimingModal from "./ScheduleTimingModal";
import DeleteModal from "../../../components/modelpopup/deletePopup";

const ScheduleTimingTable = () => {
  const data = [
    {
      id: 1,
      image: Avatar_02,
      name: "John Doe",
      role: "Web Designer",
      coursetitle: "Web Designer",
    },
    {
      id: 2,
      image: Avatar_01,
      name: "Richard Miles",
      role: "Web Developer",
      coursetitle: "Web Developer",
    },
    {
      id: 3,
      image: Avatar_03,
      name: "John Smith",
      role: "Android Developer",
      coursetitle: "Android Developer",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <div className="table-avatar">
          <Link to="/profile" className="avatar">
            <img alt="" src={record.image} />
          </Link>
          <Link to="/profile">
            {text} <span>{record.role}</span>
          </Link>
        </div>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Course",
      dataIndex: "coursetitle",
      render: (text) => <Link to="/course-details">{text}</Link>,
      sorter: (a, b) => a.coursetitle.length - b.coursetitle.length,
    },
    {
      title: "Instructor Available Timings",
      dataIndex: "status",
      render: () => (
        <p>
          <b>11-03-2022</b> - 11:00 AM-12:00 PM
          <br />
          <b>12-03-2023</b> - 10:00 AM-11:00 AM
          <br />
          <b>01-03-2022</b> - 10:00 AM-11:00 AM
          <br />
        </p>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Schedule timing",
      render: () => (
        <div className="action-label text-center">
          <Link
            className="btn btn-primary btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#edit_course"
            to="#"
          >
           Instructor Schedule Time
          </Link>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <Table
              className="table-striped"
              style={{ overflowX: "auto" }}
              columns={columns}
              dataSource={data}
              rowKey={(record) => record.id}
              pagination={false}
            />
          </div>
        </div>
      </div>

      <ScheduleTimingModal />
      <DeleteModal Name="Delete" />
    </>
  );
};

export default ScheduleTimingTable;
