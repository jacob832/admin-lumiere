import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import PoliciesModal from "./PoliciesModal"; // Replace with your actual modal component
import DeleteModal from "../../../components/modelpopup/deletePopup"; // Same for DeleteModal
import Breadcrumbs from "../../../components/Breadcrumbs"; // Breadcrumbs component

const Policies = () => {
  const [selectedPolicy, setSelectedPolicy] = useState(null);

  const data = [
    {
      id: 1,
      policyName: "Privacy Policy",
      category: "Security",
      description: "This is the privacy policy.",
      created: "2023-01-01",
    },
    {
      id: 2,
      policyName: "Terms of Service",
      category: "Legal",
      description: "These are the terms of service.",
      created: "2023-02-01",
    },
    {
      id: 3,
      policyName: "Refund Policy",
      category: "Customer Service",
      description: "This is the refund policy.",
      created: "2023-03-01",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Policy Name",
      dataIndex: "policyName",
      key: "policyName",
      sorter: (a, b) => a.policyName.localeCompare(b.policyName),
    },
    {
      title: "Categories",
      dataIndex: "category",
      key: "category",
      sorter: (a, b) => a.category.localeCompare(b.category),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      sorter: (a, b) => a.description.localeCompare(b.description),
    },
    {
      title: "Created",
      dataIndex: "created",
      key: "created",
      sorter: (a, b) => new Date(a.created) - new Date(b.created),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <div className="dropdown dropdown-action">
          <Link
            to="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={() => setSelectedPolicy(record)} // Set selected policy
          >
            <i className="material-icons">more_vert</i>
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit_policy"
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
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Policies"
            title="Dashboard"
            subtitle="Policy List"
            modal="#add_policy"
            name="Add Policy"
          />
          <Table
            className="table-striped"
            style={{ overflowX: "auto" }}
            columns={columns}
            dataSource={data}
            rowKey={(record) => record.id}
          />
        </div>
      </div>
      <PoliciesModal policies={data} editingPolicy={selectedPolicy} /> {/* Pass selected policy to modal */}
      <DeleteModal Name="Delete" />
    </>
  );
};

export default Policies;
