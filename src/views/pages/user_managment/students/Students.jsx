import React, { useState } from "react";
import { Table, Input, Select, Button, Row, Col } from "antd";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import { Link } from "react-router-dom";
const { Option } = Select;
const handleDeactivate = (id) => {
  console.log(`Deactivating student with ID: ${id}`);
  // You can update state here or call your backend API
};

const Students = () => {
  const [searchId, setSearchId] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchRole, setSearchRole] = useState(null);
  const [pageSize, setPageSize] = useState(10);

  const data = [
    { id: 1,  name: "John Doe",        studentId: "FT-0001", email: "johndoe@example.com",       mobile: "9876543210", joinDate: "1 Jan 2023",    role: "Web Developer" },
    { id: 2,  name: "Richard Miles",   studentId: "FT-0002", email: "richardmiles@example.com", mobile: "9876543210", joinDate: "18 Mar 2014",  role: "Web Developer" },
    { id: 3,  name: "John Smith",      studentId: "FT-0003", email: "johnsmith@example.com",    mobile: "9876543210", joinDate: "1 Apr 2014",   role: "Android Developer" },
    { id: 4,  name: "Mike Litorus",    studentId: "FT-0004", email: "mikelitorus@example.com",  mobile: "9876543210", joinDate: "1 Apr 2014",   role: "IOS Developer" },
    { id: 5,  name: "Sara Connor",     studentId: "FT-0005", email: "saraconnor@example.com",   mobile: "9123456780", joinDate: "12 Feb 2022",  role: "Team Leader" },
    { id: 6,  name: "Bruce Wayne",     studentId: "FT-0006", email: "brucewayne@example.com",   mobile: "9234567891", joinDate: "5 May 2021",   role: "Web Developer" },
    { id: 7,  name: "Peter Parker",    studentId: "FT-0007", email: "peterparker@example.com",  mobile: "9345678912", joinDate: "14 Jul 2020",  role: "Android Developer" },
    { id: 8,  name: "Tony Stark",      studentId: "FT-0008", email: "tonystark@example.com",    mobile: "9456789123", joinDate: "30 Sep 2019",  role: "Web Developer" },
    { id: 9,  name: "Natasha Romanov", studentId: "FT-0009", email: "natashar@example.com",     mobile: "9567891234", joinDate: "22 Nov 2018",  role: "IOS Developer" },
    { id: 10, name: "Steve Rogers",    studentId: "FT-0010", email: "steverogers@example.com",  mobile: "9678912345", joinDate: "15 Jan 2017",  role: "Team Leader" },
    { id: 11, name: "Clark Kent",      studentId: "FT-0011", email: "clarkkent@example.com",    mobile: "9789123456", joinDate: "3 Mar 2016",   role: "Web Developer" },
    { id: 12, name: "Diana Prince",    studentId: "FT-0012", email: "dianaprince@example.com",  mobile: "9891234567", joinDate: "8 Aug 2015",   role: "Android Developer" },
    { id: 13, name: "Barry Allen",     studentId: "FT-0013", email: "barryallen@example.com",   mobile: "9902345678", joinDate: "19 Dec 2014",  role: "Web Developer" },
    { id: 14, name: "Hal Jordan",      studentId: "FT-0014", email: "haljordan@example.com",    mobile: "9013456789", joinDate: "27 Feb 2013",  role: "IOS Developer" },
    { id: 15, name: "Arthur Curry",    studentId: "FT-0015", email: "arthurcurry@example.com",  mobile: "9124567890", joinDate: "11 Jun 2012",  role: "Team Leader" },
    { id: 16, name: "Victor Stone",    studentId: "FT-0016", email: "victorstone@example.com",  mobile: "9235678901", joinDate: "9 Sep 2011",   role: "Web Developer" },
    { id: 17, name: "Bruce Banner",    studentId: "FT-0017", email: "brucebanner@example.com",  mobile: "9346789012", joinDate: "24 Apr 2010",  role: "Android Developer" },
    { id: 18, name: "Wanda Maximoff",  studentId: "FT-0018", email: "wandam@example.com",       mobile: "9457890123", joinDate: "6 Oct 2009",   role: "Web Developer" },
    { id: 19, name: "Scott Lang",      studentId: "FT-0019", email: "scottlang@example.com",    mobile: "9568901234", joinDate: "17 Feb 2008",  role: "IOS Developer" },
    { id: 20, name: "Hope Pym",        studentId: "FT-0020", email: "hopepym@example.com",      mobile: "9679012345", joinDate: "29 Dec 2007",  role: "Team Leader" },
  ];


  const filteredData = data.filter((s) =>
    s.studentId.toLowerCase().includes(searchId.toLowerCase()) &&
    s.name.toLowerCase().includes(searchName.toLowerCase()) &&
    (searchRole ? s.role === searchRole : true)
  );

  const columns = [
    { title: "Name",       dataIndex: "name",      sorter: (a,b) => a.name.localeCompare(b.name) },
    { title: "Student ID", dataIndex: "studentId", sorter: (a,b) => a.studentId.localeCompare(b.studentId) },
    { title: "Email",      dataIndex: "email",     sorter: (a,b) => a.email.localeCompare(b.email) },
    { title: "Mobile",     dataIndex: "mobile",    sorter: (a,b) => a.mobile.localeCompare(b.mobile) },
    { title: "Join Date",  dataIndex: "joinDate",  sorter: (a,b) => new Date(a.joinDate) - new Date(b.joinDate) },
    // {
    //   title: "Role",
    //   dataIndex: "role",
    //   render: (text) => (
    //     <Select defaultValue={text} style={{ width: 150 }}>
    //       <Option value="Web Developer">Web Developer</Option>
    //       <Option value="Android Developer">Android Developer</Option>
    //       <Option value="IOS Developer">IOS Developer</Option>
    //       <Option value="Team Leader">Team Leader</Option>
    //     </Select>
    //   ),
    // },
    {
      title: "Action",
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
            <Button
              type="text"
              className="dropdown-item"
              onClick={() => handleDeactivate(record.id)}
            >
              <i className="fa fa-ban m-r-5" /> Deactivate
            </Button>
          </div>
        </div>
      )
    }
    
  ];

  const clearAll = () => {
    setSearchId("");
    setSearchName("");
    setSearchRole(null);
  };

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Breadcrumbs
          maintitle="Students"
          title="Dashboard"
          subtitle="Students"
          modal="#add_students"
          name="Add Students"
        />

        {/* Filters */}
        <Row gutter={16} style={{ marginBottom: 20 }}>
          <Col span={5}>
            <Input
              placeholder="Student ID"
              value={searchId}
              onChange={e => setSearchId(e.target.value)}
            />
          </Col>
          <Col span={5}>
            <Input
              placeholder="Student Name"
              value={searchName}
              onChange={e => setSearchName(e.target.value)}
            />
          </Col>
          <Col span={6}>
            <Select
              allowClear
              placeholder="Select Designation"
              value={searchRole}
              onChange={value => setSearchRole(value)}
              style={{ width: "100%" }}
            >
              <Option value="Web Developer">Web Developer</Option>
              <Option value="Android Developer">Android Developer</Option>
              <Option value="IOS Developer">IOS Developer</Option>
              <Option value="Team Leader">Team Leader</Option>
            </Select>
          </Col>
          <Col span={8} style={{ textAlign: "right" }}>
            <Button size="large" onClick={clearAll} style={{ marginRight: 8 }}>
              Clear
            </Button>
            <Button
              type="primary"
              size="large"
              style={{ backgroundColor: "#00d084", borderColor: "#00d084" }}
            >
              Search
            </Button>
          </Col>
        </Row>

        {/* Show entries */}
        <div style={{ marginBottom: 10 }}>
          <span style={{ marginRight: 8 }}>Show</span>
          <Select
            value={pageSize}
            style={{ width: 80 }}
            onChange={value => setPageSize(value)}
          >
            <Option value={5}>5</Option>
            <Option value={10}>10</Option>
            <Option value={15}>15</Option>
            <Option value={20}>20</Option>
          </Select>
          <span style={{ marginLeft: 8 }}>entries</span>
        </div>

        {/* Table */}
        <Table
          className="table-striped"
          style={{ overflowX: "auto" }}
          columns={columns}
          dataSource={filteredData}
          rowKey={r => r.id}
          pagination={{ pageSize }}
        />
      </div>
    </div>
  );
};

export default Students;
