import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Table } from "antd";
import Breadcrumbs from "../../../../components/Breadcrumbs";

const SubCategoriesPage = () => {
  const { id } = useParams(); // Get the parent category ID from the route
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    // Fetch sub-categories for the given parent category id
    // Replace this with a real API call
    const fetchSubCategories = () => {
      // Example of sub-category data. Replace with API call.
      const data = [
        { id: 1, name: "Hardware Expenses" },
        { id: 2, name: "Material Expenses" },
        { id: 3, name: "Company Vehicle Information" },
      ];
      setSubCategories(data); // Set the fetched data to state
    };

    fetchSubCategories();
  }, [id]); // This effect runs every time the `id` changes

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Sub-Category Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Action",
      render: (text, record) => (
        <div className="dropdown dropdown-action">
          <button className="btn btn-white btn-sm btn-rounded">
            Edit
          </button>
          <button className="btn btn-danger btn-sm btn-rounded">
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Breadcrumbs
          maintitle="Sub Categories"
          title="Dashboard"
          subtitle={`Sub-Categories for Category ${id}`} // Show category id in the subtitle
          modal="#add_sub_categories"
          name="Add Sub Categories"
        />
        <Table
          className="table-striped"
          columns={columns}
          dataSource={subCategories}
          rowKey={(record) => record.id}
        />
      </div>
    </div>
  );
};

export default SubCategoriesPage;
