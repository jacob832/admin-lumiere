import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Select, Card, Row, Col } from "antd";
import LeavesModal from "./LeavesModal";
import DeleteModal from "../../../components/modelpopup/deletePopup";
import Breadcrumbs from "../../../components/Breadcrumbs";

const { Option } = Select;

const Leaves = () => {
  const [selectedLeave, setSelectedLeave] = useState(null);
  const [pageSize, setPageSize] = useState(5);

  const data = [
    { id: 1, leaveType: "Medical Leave", from: "2023-04-01", to: "2023-04-03", noOfDays: 3, reason: "Fever", status: "Approved" },
    { id: 2, leaveType: "Annual Leave", from: "2023-05-01", to: "2023-05-07", noOfDays: 7, reason: "Family Trip", status: "Pending" },
    { id: 3, leaveType: "Other Leave", from: "2023-06-10", to: "2023-06-12", noOfDays: 3, reason: "Personal Reason", status: "Declined" },
    { id: 4, leaveType: "Annual Leave", from: "2023-07-01", to: "2023-07-05", noOfDays: 5, reason: "Vacation", status: "Approved" },
    { id: 5, leaveType: "Medical Leave", from: "2023-08-15", to: "2023-08-17", noOfDays: 2, reason: "Surgery", status: "Pending" },
    { id: 6, leaveType: "Annual Leave", from: "2023-09-10", to: "2023-09-15", noOfDays: 6, reason: "Wedding", status: "Approved" },
    { id: 7, leaveType: "Other Leave", from: "2023-10-01", to: "2023-10-02", noOfDays: 2, reason: "Conference", status: "Approved" },
    { id: 8, leaveType: "Medical Leave", from: "2023-11-05", to: "2023-11-06", noOfDays: 1, reason: "Checkup", status: "Declined" },
    { id: 9, leaveType: "Annual Leave", from: "2023-12-20", to: "2023-12-25", noOfDays: 5, reason: "Holiday", status: "Pending" },
  ];

  // Calculate counts
  const annualLeaveCount = data.filter(d => d.leaveType === "Annual Leave").length;
  const medicalLeaveCount = data.filter(d => d.leaveType === "Medical Leave").length;
  const otherLeaveCount = data.filter(d => d.leaveType === "Other Leave").length;
  const totalLeavesTaken = data.reduce((acc, d) => acc + d.noOfDays, 0);
  const remainingLeave = 30 - totalLeavesTaken; // Assuming total 30 days/year

  const columns = [
    { title: "#", dataIndex: "id", key: "id", sorter: (a, b) => a.id - b.id },
    { title: "Leave Type", dataIndex: "leaveType", key: "leaveType", sorter: (a, b) => a.leaveType.localeCompare(b.leaveType) },
    { title: "From", dataIndex: "from", key: "from", sorter: (a, b) => new Date(a.from) - new Date(b.from) },
    { title: "To", dataIndex: "to", key: "to", sorter: (a, b) => new Date(a.to) - new Date(b.to) },
    { title: "No of Days", dataIndex: "noOfDays", key: "noOfDays", sorter: (a, b) => a.noOfDays - b.noOfDays },
    { title: "Reason", dataIndex: "reason", key: "reason" },
    {
      title: "Status", dataIndex: "status", key: "status", render: (text) => (
        <div className="dropdown action-label">
          <Link className="btn btn-white btn-sm btn-rounded dropdown-toggle" to="#" data-bs-toggle="dropdown">
            <i className={
              text === "Pending" ? "far fa-dot-circle text-warning"
                : text === "Approved" ? "far fa-dot-circle text-success"
                  : "far fa-dot-circle text-danger"
            } />{" "} {text}
          </Link>
        </div>
      )
    },
    {
      title: "Action", key: "action", render: (text, record) => (
        <div className="dropdown dropdown-action">
          <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" onClick={() => setSelectedLeave(record)}>
            <i className="material-icons">more_vert</i>
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#edit_leave">
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete">
              <i className="fa fa-trash m-r-5" /> Delete
            </Link>
          </div>
        </div>
      )
    },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs maintitle="Leaves" title="Dashboard" subtitle="Leaves" modal="#add_leave" name="Add Leave" />

          {/* Cards */}
          <Row gutter={16} style={{ marginBottom: "20px" }}>
            {[
              { title: "Annual Leave", count: annualLeaveCount },
              { title: "Medical Leave", count: medicalLeaveCount },
              { title: "Other Leave", count: otherLeaveCount },
              { title: "Remaining Leave", count: remainingLeave >= 0 ? remainingLeave : 0 },
            ].map((item, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card bordered={false} style={{ textAlign: "center", padding: "20px 0" }} bodyStyle={{ padding: 0 }}>
                  <h4 style={{ marginBottom: "10px" }}>{item.title}</h4>
                  <h2 style={{ fontSize: "32px", fontWeight: "bold" }}>{item.count}</h2>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Show entries dropdown */}
          <div style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "10px" }}>Show:</span>
            <Select
              defaultValue={5}
              style={{ width: 80 }}
              onChange={(value) => setPageSize(value)}
            >
              <Option value={5}>5</Option>
              <Option value={10}>10</Option>
              <Option value={20}>20</Option>
              <Option value={50}>50</Option>
            </Select>
            <span style={{ marginLeft: "10px" }}>entries</span>
          </div>

          {/* Table */}
          <Table
            className="table-striped"
            style={{ overflowX: "auto" }}
            columns={columns}
            dataSource={data}
            rowKey={(record) => record.id}
            pagination={{ pageSize }}
          />
        </div>
      </div>

      {/* Modals */}
      <LeavesModal leaves={data} editingLeave={selectedLeave} />
      <DeleteModal Name="Delete" />
    </>
  );
};

export default Leaves;
