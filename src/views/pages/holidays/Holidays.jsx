import React, { useState } from "react"; // ✅ اضفنا useState
import { Link } from "react-router-dom";
import { Table } from "antd";
import HolidaysModal from "./HolidaysModal";
import Breadcrumbs from "../../../components/Breadcrumbs";
import DeleteModal from "../../../components/modelpopup/deletePopup";

const Holidays = () => {
  const [editingHoliday, setEditingHoliday] = useState(null); // ✅ هنا

  const data = [
    { id: 1, title: "New Year's Day", date: "2025-01-01", day: "Wednesday" },
    { id: 2, title: "Labor Day", date: "2025-05-01", day: "Thursday" },
    { id: 3, title: "Christmas Day", date: "2025-12-25", day: "Thursday" },
  ];

  const columns = [
    { title: "#", dataIndex: "id", key: "id", sorter: (a, b) => a.id - b.id },
    { title: "Title", dataIndex: "title", key: "title", sorter: (a, b) => a.title.localeCompare(b.title) },
    { title: "Holiday Date", dataIndex: "date", key: "date", sorter: (a, b) => new Date(a.date) - new Date(b.date) },
    { title: "Day", dataIndex: "day", key: "day", sorter: (a, b) => a.day.localeCompare(b.day) },
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
              data-bs-target="#edit_holiday"
              onClick={() => setEditingHoliday(record)}
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
            maintitle="Holidays"
            title="Dashboard"
            subtitle="Holiday List"
            modal="#add_holiday"
            name="Add Holidays"
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

      {/* ✅ نمرر editingHoliday هنا */}
      <HolidaysModal holidays={data} editingHoliday={editingHoliday} />
      <DeleteModal Name="Delete" />
    </>
  );
};

export default Holidays;
