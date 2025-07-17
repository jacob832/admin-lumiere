import React, { useState, useEffect } from "react";
  import { Link } from "react-router-dom";
  import { Table } from "antd";
  import CategoriesModal from "./CategoriesModal";
  import Breadcrumbs from "../../../../components/Breadcrumbs";
  import { useGetCategoriesQuery } from "./categoriesApi"; // API in the same folder

  import {
    Avatar_01,
    Avatar_02,
    Avatar_03,
  } from "../../../../Routes/ImagePath";

  const Categories = () => {
    const { data: response, isLoading, isError } = useGetCategoriesQuery();
    console.log("📦 Full response from API", response);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const data = response?.data?.map((category, index) => ({
      id: category.id,
      img: Avatar_01,
      category: category.name,
      status: category.status,
      count: category.courseCount,
      subcategory: category.subCategories?.length
        ? category.subCategories.map((sub) => sub.name).join(", ")
        : "No sub-categories",
    })) || [];
    

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
              <img alt="img" src={`${record.img}`} />
            </Link>
            {text}
          </span>
        ),
        sorter: (a, b) => a.category.localeCompare(b.category),
      },
      {
        title: "# of Courses ",
        dataIndex: "count",
        sorter: (a, b) => a.count - b.count,
        render: (text) => (
          <span>
            <span className="grey">{`${text} Courses`}</span>
          </span>
        ),
      },
      {
        title: "Status",
        dataIndex: "status",
        render: (text) => (
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
              <Link className="dropdown-item" to="#">
                <i className="far fa-dot-circle text-success" /> Active
              </Link>
              <Link className="dropdown-item" to="#">
                <i className="far fa-dot-circle text-danger" /> Inactive
              </Link>
            </div>
          </div>
        ),
        sorter: (a, b) => a.status.localeCompare(b.status),
      },
      {
        title: "Sub-Category Name",
        dataIndex: "subcategory",
        sorter: (a, b) => a.subcategory.localeCompare(b.subcategory),
      },
      {
        title: "Action",
        key: "action",
        render: (_, record) => (
          <div className="dropdown dropdown-action">
            <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="material-icons">more_vert</i>
            </Link>
            <div className="dropdown-menu dropdown-menu-right">
              {/* ✅ عند الضغط على Edit نعطي العطلة للمودال */}
              <Link
                className="dropdown-item"
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#edit_categories"
                onClick={() => setSelectedCategory(record)}
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
              maintitle="Categories"
              title="Dashboard"
              subtitle="Course Categories"
              modal="#add_categories"
              name="Add Categories"
            />
            <Table
              className="table-striped"
              style={{ overflowX: "auto" }}
              columns={columns}
              dataSource={data}
              rowKey={(record) => record.id}
              loading={isLoading}
              locale={{
                emptyText: isError ? "Failed to load categories." : "No categories found.",
              }}
            />
          </div>
        </div>
        <CategoriesModal
  selectedCategory={selectedCategory}
  categories={response?.data || []}
/>
      </>
    );
  };

  export default Categories;
