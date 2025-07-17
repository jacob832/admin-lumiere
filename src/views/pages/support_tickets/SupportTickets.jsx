import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Select, Card, Row, Col, Input,Tag,Button } from "antd";
import Breadcrumbs from "../../../components/Breadcrumbs";
import DeleteModal from "../../../components/modelpopup/deletePopup";
import SupportTicketsModal from "./SupportTicketsModal";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Papa from "papaparse";
import { saveAs } from "file-saver";
import { DatePicker } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { RangePicker } = DatePicker;

const { Option } = Select;
const { Search } = Input;

// ...imports stay the same

const SupportTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [editingTicket, setEditingTicket] = useState(null);

  const [selectedTicket, setSelectedTicket] = useState(null);
  const [dateRange, setDateRange] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [searchText, setSearchText] = useState("");

  const resetFilters = () => {
    setStatusFilter("All");
    setPriorityFilter("All");
    setCategoryFilter("All");
    setSearchText("");
    setDateRange([]);
  };

  const data = [
    { id: 101, date: "2025-05-01", subject: "Login issue", priority: "High", category: "Authentication", status: "Open", postedBy: "Alice" },
    { id: 102, date: "2025-05-03", subject: "Feature request", priority: "Low", category: "Suggestions", status: "Closed", postedBy: "Bob" },
    { id: 103, date: "2025-05-04", subject: "Bug in dashboard", priority: "Medium", category: "Bug Report", status: "Open", postedBy: "Charlie" },
    { id: 104, date: "2025-05-05", subject: "Data not syncing", priority: "High", category: "Synchronization", status: "Closed", postedBy: "David" },
  ];

  const filteredData = data.filter(ticket => {
    const matchFilters =
      (statusFilter === "All" || ticket.status === statusFilter) &&
      (priorityFilter === "All" || ticket.priority === priorityFilter) &&
      (categoryFilter === "All" || ticket.category === categoryFilter);

    const search = searchText.toLowerCase();
    const matchSearch =
      ticket.subject.toLowerCase().includes(search) ||
      ticket.postedBy.toLowerCase().includes(search) ||
      ticket.id.toString().includes(search);

    const matchDate =
      dateRange.length === 0 ||
      (new Date(ticket.date) >= dateRange[0]._d && new Date(ticket.date) <= dateRange[1]._d);

    return matchFilters && matchSearch && matchDate;
  });

  const totalTickets = data.length;
  const openTickets = data.filter(d => d.status === "Open").length;
  const closedTickets = data.filter(d => d.status === "Closed").length;

  const columns = [
    { title: "Ticket ID", dataIndex: "id", key: "id", sorter: (a, b) => a.id - b.id },
    { title: "Date", dataIndex: "date", key: "date", sorter: (a, b) => new Date(a.date) - new Date(b.date) },
    { title: "Subject", dataIndex: "subject", key: "subject" },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
      render: (priority) => {
        let color;
        switch (priority) {
          case "High":
            color = "volcano"; // red-orange
            break;
          case "Medium":
            color = "gold"; // yellowish
            break;
          case "Low":
            color = "green";
            break;
          default:
            color = "default";
        }
        return <Tag color={color} style={{ fontWeight: "bold" }}>{priority}</Tag>;
      },
    }
    ,
    { title: "Category", dataIndex: "category", key: "category" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color;
        switch (status) {
          case "Open":
            color = "blue";
            break;
          case "Closed":
            color = "success"; // green
            break;
          default:
            color = "default";
        }
        return <Tag color={color} style={{ fontWeight: "bold" }}>{status}</Tag>;
      },
    }
    ,
    { title: "Posted By", dataIndex: "postedBy", key: "postedBy" },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <div className="dropdown dropdown-action">
          <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" onClick={() => setEditingTicket(record)}>
            <i className="material-icons">more_vert</i>
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#edit_ticket">
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete">
              <i className="fa fa-trash m-r-5" /> Delete
            </Link>
          </div>
        </div>
      )
    }
  ];

  const exportToPDF = () => {
    const doc = new jsPDF();
    autoTable(doc, {
      head: [['Ticket ID', 'Date', 'Subject', 'Priority', 'Category', 'Status', 'Posted By']],
      body: filteredData.map(ticket => [
        ticket.id,
        ticket.date,
        ticket.subject,
        ticket.priority,
        ticket.category,
        ticket.status,
        ticket.postedBy
      ])
    });
    doc.save('support_tickets.pdf');
  };

  const exportToCSV = () => {
    const csv = Papa.unparse(
      filteredData.map(ticket => ({
        "Ticket ID": ticket.id,
        Date: ticket.date,
        Subject: ticket.subject,
        Priority: ticket.priority,
        Category: ticket.category,
        Status: ticket.status,
        "Posted By": ticket.postedBy,
      }))
    );
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "support_tickets.csv");
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
           maintitle="Support Tickets"
            title="Dashboard"
             subtitle="Support Tickets"
              modal="#add_ticket"
               name="Add Ticket" />

          <Row gutter={16} style={{ marginBottom: "20px" }}>
            {[{ title: "Total Tickets", count: totalTickets },
              { title: "Open Tickets", count: openTickets },
              { title: "Closed Tickets", count: closedTickets }
            ].map((item, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card bordered={false} style={{ textAlign: "center", padding: "20px 0" }} bodyStyle={{ padding: 0 }}>
                  <h4 style={{ marginBottom: "10px" }}>{item.title}</h4>
                  <h2 style={{ fontSize: "32px", fontWeight: "bold" }}>{item.count}</h2>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Filters */}
          <Row gutter={16} style={{ marginBottom: "10px" }}>
            <Col xs={24} sm={8}>
              <label>Status</label>
              <Select value={statusFilter} onChange={setStatusFilter} style={{ width: "100%" }}>
                <Option value="All">All</Option>
                <Option value="Open">Open</Option>
                <Option value="Closed">Closed</Option>
              </Select>
            </Col>
            <Col xs={24} sm={8}>
              <label>Priority</label>
              <Select value={priorityFilter} onChange={setPriorityFilter} style={{ width: "100%" }}>
                <Option value="All">All</Option>
                <Option value="Low">Low</Option>
                <Option value="Medium">Medium</Option>
                <Option value="High">High</Option>
              </Select>
            </Col>
            <Col xs={24} sm={8}>
              <label>Category</label>
              <Select value={categoryFilter} onChange={setCategoryFilter} style={{ width: "100%" }}>
                <Option value="All">All</Option>
                <Option value="Authentication">Authentication</Option>
                <Option value="Suggestions">Suggestions</Option>
                <Option value="Bug Report">Bug Report</Option>
                <Option value="Synchronization">Synchronization</Option>
              </Select>
            </Col>
          </Row>

          {/* Search */}
          <Row style={{ marginBottom: "20px" }}>
            <Col span={24}>
            <Search
          placeholder="Search by subject, posted by, or ticket ID"
          enterButton={
            <Button type="primary" icon={<SearchOutlined />}  style={{ backgroundColor: "#fa8c16", borderColor: "#fa8c16", color: "#fff" }}>
              Search
            </Button>
          }
          allowClear
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          />
            </Col>
          </Row>

          {/* Actions: Export and Reset */}
          <Row style={{ marginBottom: "20px" }} gutter={16}>
            <Col>
              <button onClick={exportToPDF} className="btn btn-primary">
                <i className="fa fa-file-pdf" /> Export to PDF
              </button>
            </Col>
            <Col>
              <button onClick={exportToCSV} className="btn btn-secondary">
                <i className="fa fa-file-excel" /> Export to CSV
              </button>
            </Col>
            <Col>
              <button onClick={resetFilters} className="btn btn-light border">
                🔄 Reset Filters
              </button>
            </Col>
          </Row>

          <RangePicker
            style={{ marginBottom: "20px" }}
            onChange={(dates) => setDateRange(dates || [])}
            format="YYYY-MM-DD"
            value={dateRange}
          />

          {/* Page Size Control */}
          <div style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "10px" }}>Show:</span>
            <Select defaultValue={5} style={{ width: 80 }} onChange={setPageSize}>
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
            dataSource={filteredData}
            rowKey={(record) => record.id}
            pagination={{ pageSize }}
          />
        </div>
      </div>

      {/* Modals */}
      <DeleteModal Name="Delete" />
      <SupportTicketsModal tickets={tickets} editingTicket={editingTicket} />

    </>
  );
};

export default SupportTickets;
