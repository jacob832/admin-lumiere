import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";

import DeleteModal from "../../../components/modelpopup/deletePopup";
import Breadcrumbs from "../../../components/Breadcrumbs";
import PermissionsModal from "./PermissionModal";

const Permissions = () => {
  const [selectedPermission, setSelectedPermission] = useState(null);

  const data = [
    { id: 1, name: "ADD COURSE", category: "Hardware", instructor: "Alice", courses: "Course 1", description: "Description 1" },
    { id: 2, name: "ADD COURSE", category: "Material", instructor: "Bob", courses: "Course 2", description: "Description 2" },
    { id: 3, name: "ADD COURSE", category: "Vehicle", instructor: "Charlie", courses: "Course 3", description: "Description 3" },
  ];

  const categories = [{ id: 1, name: "Hardware" }, { id: 2, name: "Material" }, { id: 3, name: "Vehicle" }];
  const instructors = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 3, name: "Charlie" }];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Category",
      dataIndex: "category",
      sorter: (a, b) => a.category.localeCompare(b.category),
    },
    {
      title: "Instructor",
      dataIndex: "instructor",
      sorter: (a, b) => a.instructor.localeCompare(b.instructor),
    },
    {
      title: "Courses",
      dataIndex: "courses",
      sorter: (a, b) => a.courses.localeCompare(b.courses),
    },
    {
      title: "Description",
      dataIndex: "description",
      sorter: (a, b) => a.description.localeCompare(b.description),
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
            onClick={() => setSelectedPermission(record)}
          >
            <i className="material-icons">more_vert</i>
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit_permission"
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
            maintitle="Permissions"
            title="Dashboard"
            subtitle="Permissions"
            modal="#add_permission"
            name="Add Permissions"
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

      {/* Pass the selected permission and categories, instructors to the modal */}
      <PermissionsModal
        categories={categories}
        instructors={instructors}
        editingPermission={selectedPermission}
      />
      <DeleteModal Name="Delete" />
    </div>
  );
};

export default Permissions;
