import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import SubCategoriesModal from "./subCategoryModal";
import DeleteModal from "../../../../components/modelpopup/deletePopup";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import Header from "../../../layout/Header";
import Sidebar from "../../../layout/Sidebar";
import {
  Avatar_01,
  Avatar_02,
  Avatar_03,
} from "../../../../Routes/ImagePath";

const SubCategory = () => {
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const data = [
    { id: 1, category: "Hardware", subcategory: "Hardware Expenses", description: "Description 1", status: "Active", thumbnail: "" },
    { id: 2, category: "Material", subcategory: "Material Expenses", description: "Description 2", status: "Inactive", thumbnail: "" },
    { id: 3, category: "Vehicle", subcategory: "Company Vehicle Information", description: "Description 3", status: "Active", thumbnail: "" },
  ];
  const handleStatusChange = (record, status) => {
    // Update the status for the selected record
    const updatedData = data.map((item) =>
      item.id === record.id ? { ...item, status } : item
    );
    // You should use a state or context to manage the updated data
    console.log("Updated Data:", updatedData);
  };
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Category Name",
      dataIndex: "category",
      
      render: (text, record) => (
        
        <span className="table-avatar">
          <Link to="/profile" className="avatar">
            <img alt="img" src={`${record.img}`} /> {/* Updated field name */}
          </Link>
          {text} <span>{record.role}</span>
        </span>
      ),
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: "Sub-Category Name",
      dataIndex: "subcategory",
      sorter: (a, b) => a.subcategory.localeCompare(b.subcategory),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text, record) => (
        <div className="dropdown action-label">
          <Link
            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
            to="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i
              className={
                text === "Inactive"
                  ? "far fa-dot-circle text-danger"
                  : "far fa-dot-circle text-success"
              }
            />{" "}
            {text}
          </Link>
          <div className="dropdown-menu">
            <Link
              className="dropdown-item"
              to="#"
              onClick={() => handleStatusChange(record, "Active")}
            >
              <i className="far fa-dot-circle text-success" /> Active
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              onClick={() => handleStatusChange(record, "Inactive")}
            >
              <i className="far fa-dot-circle text-danger" /> Inactive
            </Link>
          </div>
        </div>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
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
            onClick={() => setSelectedSubCategory(record)}
          >
            <i className="material-icons">more_vert</i>
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#editsub_categories"
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
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Sub Categories"
            title="Dashboard"
            subtitle="Sub-Categories"
            modal="#addsub_categories"
            name="Add Sub Categories"
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
      {/* Pass the selected subcategory to the modal */}
      <SubCategoriesModal categories={data}
       editingSubCategory={selectedSubCategory} />
      <DeleteModal Name="Delete" />
    </div>
  );
};

export default SubCategory;
