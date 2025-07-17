import React, { useState } from "react";
import { Table, Input, Select, Button, Row, Col } from "antd";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import InstructorModal from "./InstructorModal";

const { Option } = Select;

const Instructors = () => {
  const [filterId, setFilterId] = useState("");
  const [filterName, setFilterName] = useState("");
  const [filterRole, setFilterRole] = useState(null);
  const [pageSize, setPageSize] = useState(10);

  const data = [
    { id: 1,  name: "Dr. Alice Brown",    instructorId: "IN-1001", email: "alice.brown@uni.edu",    mobile: "600123456", joinDate: "10 Feb 2020", role: "Professor" },
    { id: 2,  name: "Prof. Bob Smith",     instructorId: "IN-1002", email: "bob.smith@uni.edu",       mobile: "600234567", joinDate: "15 Mar 2019", role: "Associate Professor" },
    { id: 3,  name: "Dr. Carol Johnson",  instructorId: "IN-1003", email: "carol.johnson@uni.edu",  mobile: "600345678", joinDate: "1 Sep 2018",  role: "Assistant Professor" },
    { id: 4,  name: "Dr. David Lee",       instructorId: "IN-1004", email: "david.lee@uni.edu",       mobile: "600456789", joinDate: "23 Jan 2018", role: "Lecturer" },
    { id: 5,  name: "Dr. Emma Davis",      instructorId: "IN-1005", email: "emma.davis@uni.edu",      mobile: "600567890", joinDate: "5 May 2017",  role: "Professor" },
    { id: 6,  name: "Dr. Frank Miller",    instructorId: "IN-1006", email: "frank.miller@uni.edu",    mobile: "600678901", joinDate: "12 Jun 2016", role: "Associate Professor" },
    { id: 7,  name: "Dr. Grace Wilson",    instructorId: "IN-1007", email: "grace.wilson@uni.edu",    mobile: "600789012", joinDate: "30 Jul 2015", role: "Assistant Professor" },
    { id: 8,  name: "Dr. Henry Moore",     instructorId: "IN-1008", email: "henry.moore@uni.edu",     mobile: "600890123", joinDate: "18 Aug 2014", role: "Lecturer" },
    { id: 9,  name: "Dr. Ivy Taylor",      instructorId: "IN-1009", email: "ivy.taylor@uni.edu",      mobile: "600901234", joinDate: "2 Oct 2013",  role: "Professor" },
    { id: 10, name: "Dr. Jack Anderson",   instructorId: "IN-1010", email: "jack.anderson@uni.edu",   mobile: "601012345", joinDate: "27 Nov 2012",role: "Associate Professor" },
    { id: 11, name: "Dr. Karen Thomas",    instructorId: "IN-1011", email: "karen.thomas@uni.edu",    mobile: "601123456", joinDate: "14 Dec 2011",role: "Assistant Professor" },
    { id: 12, name: "Dr. Leo Jackson",     instructorId: "IN-1012", email: "leo.jackson@uni.edu",     mobile: "601234567", joinDate: "6 Feb 2011", role: "Lecturer" },
    { id: 13, name: "Dr. Mia White",       instructorId: "IN-1013", email: "mia.white@uni.edu",       mobile: "601345678", joinDate: "19 Mar 2010",role: "Professor" },
    { id: 14, name: "Dr. Noah Harris",     instructorId: "IN-1014", email: "noah.harris@uni.edu",     mobile: "601456789", joinDate: "5 May 2009", role: "Associate Professor" },
    { id: 15, name: "Dr. Olivia Martin",   instructorId: "IN-1015", email: "olivia.martin@uni.edu",   mobile: "601567890", joinDate: "11 Jul 2008",role: "Assistant Professor" },
    { id: 16, name: "Dr. Paul Thompson",   instructorId: "IN-1016", email: "paul.thompson@uni.edu",   mobile: "601678901", joinDate: "29 Sep 2007",role: "Lecturer" },
    { id: 17, name: "Dr. Quinn Garcia",    instructorId: "IN-1017", email: "quinn.garcia@uni.edu",    mobile: "601789012", joinDate: "3 Nov 2006", role: "Professor" },
    { id: 18, name: "Dr. Rose Martinez",   instructorId: "IN-1018", email: "rose.martinez@uni.edu",   mobile: "601890123", joinDate: "17 Jan 2005",role: "Associate Professor" },
    { id: 19, name: "Dr. Sam Robinson",    instructorId: "IN-1019", email: "sam.robinson@uni.edu",    mobile: "602001234", joinDate: "25 Mar 2004",role: "Assistant Professor" },
    { id: 20, name: "Dr. Tina Clark",      instructorId: "IN-1020", email: "tina.clark@uni.edu",      mobile: "602112345", joinDate: "9 Jun 2003",  role: "Lecturer" },
  ];

  const filteredData = data.filter(item =>
    item.instructorId.toLowerCase().includes(filterId.toLowerCase()) &&
    item.name.toLowerCase().includes(filterName.toLowerCase()) &&
    (filterRole ? item.role === filterRole : true)
  );

  const columns = [
    { title: "Name",           dataIndex: "name",          sorter: (a,b) => a.name.localeCompare(b.name) },
    { title: "Instructor ID",  dataIndex: "instructorId",  sorter: (a,b) => a.instructorId.localeCompare(b.instructorId) },
    { title: "Email",          dataIndex: "email",         sorter: (a,b) => a.email.localeCompare(b.email) },
    { title: "Mobile",         dataIndex: "mobile",        sorter: (a,b) => a.mobile.localeCompare(b.mobile) },
    { title: "Join Date",      dataIndex: "joinDate",      sorter: (a,b) => new Date(a.joinDate) - new Date(b.joinDate) },
    {
      title: "Role",
      dataIndex: "role",
      render: text => (
        <Select defaultValue={text} style={{ width: 150 }}>
          <Option value="Professor">Professor</Option>
          <Option value="Associate Professor">Associate Professor</Option>
          <Option value="Assistant Professor">Assistant Professor</Option>
          <Option value="Lecturer">Lecturer</Option>
        </Select>
      ),
    },
  ];

  const clearAll = () => {
    setFilterId("");
    setFilterName("");
    setFilterRole(null);
  };

  return (
    <>
      <div className="page-wrapper">
      <div className="content container-fluid">
        <Breadcrumbs
          maintitle="Instructors"
          title="Dashboard"
          subtitle="Instructors"
          modal="#add_instructors"
          name="Add Instructors"
        />

        {/* Filters */}
        <Row gutter={16} style={{ marginBottom: 20 }}>
          <Col span={5}>
            <Input
              placeholder="Instructor ID"
              value={filterId}
              onChange={e => setFilterId(e.target.value)}
            />
          </Col>
          <Col span={5}>
            <Input
              placeholder="Instructor Name"
              value={filterName}
              onChange={e => setFilterName(e.target.value)}
            />
          </Col>
          <Col span={6}>
            <Select
              allowClear
              placeholder="Select Designation"
              value={filterRole}
              onChange={value => setFilterRole(value)}
              style={{ width: "100%" }}
            >
              <Option value="Professor">Professor</Option>
              <Option value="Associate Professor">Associate Professor</Option>
              <Option value="Assistant Professor">Assistant Professor</Option>
              <Option value="Lecturer">Lecturer</Option>
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

        {/* Instructors Table */}
        <Table
          className="table-striped"
          style={{ overflowX: "auto" }}
          columns={columns}
          dataSource={filteredData}
          rowKey={record => record.id}
          pagination={{ pageSize }}
        />
      </div>
    </div>
    <InstructorModal/>
    </>
  );
};

export default Instructors;
