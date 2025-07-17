import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Table, Spin, Alert, Button, Select } from "antd"; // Added Select for accessType filter
import { useGetCoursesQuery, useApproveCourseMutation, useRejectCourseMutation } from "./coursesApi"; // Adjust path as per your project structure

const { Option } = Select; // Destructure Option from Select for convenience

const Courses = () => {
  const navigate = useNavigate();

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  // State for access type filter (using 'access_type' to match backend parameter)
  const [accessTypeFilter, setAccessTypeFilter] = useState("all"); // Default to 'all' or a suitable default

  // Fetch courses data using the RTK Query hook, passing pagination and filter parameters
  const { data: responseData, error, isLoading, refetch } = useGetCoursesQuery({
    page: currentPage,
    access_type: accessTypeFilter, // Use 'access_type' to match backend parameter
    // You can add other filters here if needed, e.g., searchText, statusFilter
  });

  // Extract courses array and total count from the fetched data
  // The courses list is now accessed via responseData?.data
  const courses = responseData?.data || [];
  // Assuming your backend might send a 'total' or 'totalCount' field at the top level for pagination.
  // If not, you might need to adjust this or have your backend send it.
  const totalCourses = responseData?.totalCount || responseData?.total || courses.length; // Fallback to array length if total count not provided

  // Mutations for approving and rejecting courses
  const [approveCourse, { isLoading: isApproving }] = useApproveCourseMutation();
  const [rejectCourse, { isLoading: isRejecting }] = useRejectCourseMutation();

  // State to manage loading for individual actions (optional, for finer control)
  const [actionLoadingId, setActionLoadingId] = useState(null);

  // Handle Approve action
  const handleApprove = async (courseId) => {
    setActionLoadingId(courseId);
    try {
      await approveCourse(courseId).unwrap();
      // Optionally show a success message
      console.log(`Course ${courseId} approved successfully.`);
      refetch(); // Refetch data to update the table
    } catch (err) {
      console.error("Failed to approve course:", err);
      // Optionally show an error message to the user
    } finally {
      setActionLoadingId(null);
    }
  };

  // Handle Reject action
  const handleReject = async (courseId) => {
    setActionLoadingId(courseId);
    try {
      await rejectCourse(courseId).unwrap();
      // Optionally show a success message
      console.log(`Course ${courseId} rejected.`);
      refetch(); // Refetch data to update the table
    } catch (err) {
      console.error("Failed to reject course:", err);
      // Optionally show an error message to the user
    } finally {
      setActionLoadingId(null);
    }
  };

  const columns = [
    {
      title: "#",
      dataIndex: "id",
    },
    {
      title: "Course Name",
      dataIndex: "name",
      render: (text, record) => (
        <Link
          to="#"
          onClick={() => navigate(`courses/${record.id}`)} // Assuming this navigates to a course detail page
        >
          {text}
        </Link>
      ),
    },
    {
      title: "Instructor",
      dataIndex: "instructor",
    },
    {
      title: "Level",
      dataIndex: "level",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
    },
    {
      title: "Enrollments",
      dataIndex: "enrollments", // Changed from enrollmentCount to enrollments
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <span
          className={`badge rounded-pill ${
            text === "Pending"
              ? "bg-warning text-dark"
              : text === "published" // Assuming 'published' is the equivalent of 'Approved'
              ? "bg-success"
              : "bg-secondary"
          }`}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Access Type", // New column for access type
      dataIndex: ["accessSettings", "accessType"], // Access nested property
      render: (text) => (
        <span className="badge rounded-pill bg-info text-dark">
          {text}
        </span>
      ),
    },
    {
      title: "Actions",
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
            <Link className="dropdown-item" to={`/courses/${record.id}`}>
              <i className="fa fa-eye m-r-5" /> Preview
            </Link>
            {record.status === "Pending" && ( // Only show Approve/Reject if status is Pending
              <>
                <Button
                  className="dropdown-item"
                  onClick={() => handleApprove(record.id)}
                  loading={actionLoadingId === record.id && isApproving}
                  disabled={actionLoadingId !== null && actionLoadingId !== record.id}
                  type="link" // Make it look like a link
                >
                  <i className="fa fa-check m-r-5" /> Approve
                </Button>
                <Button
                  className="dropdown-item text-danger"
                  onClick={() => handleReject(record.id)}
                  loading={actionLoadingId === record.id && isRejecting}
                  disabled={actionLoadingId !== null && actionLoadingId !== record.id}
                  type="link" // Make it look like a link
                >
                  <i className="fa fa-times m-r-5" /> Reject
                </Button>
              </>
            )}
          </div>
        </div>
      ),
    },
  ];

  if (isLoading) {
    return (
      <div className="page-wrapper">
        <div className="content container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 100px)' }}>
          <Spin size="large" tip="Loading Courses..." />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Alert
            message="Error"
            description={`Failed to load courses: ${error.message || 'Unknown error'}`}
            type="error"
            showIcon
          />
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <h4 className="mb-4">Courses Pending Approval</h4>

        {/* Access Type Filter */}
        <div className="mb-3">
          <label htmlFor="accessTypeFilter" className="form-label me-2">Filter by Access Type:</label>
          <Select
            id="accessTypeFilter"
            value={accessTypeFilter}
            style={{ width: 200 }}
            onChange={(value) => {
              setAccessTypeFilter(value);
              setCurrentPage(1); // Reset to first page when filter changes
            }}
          >
            <Option value="all">All</Option>
            <Option value="Free">Free</Option> {/* Updated to 'Free' */}
            <Option value="Paid">Paid</Option> {/* Added 'Paid' based on common access types */}
            {/* Add more options as per your access types, e.g., 'Private' */}
          </Select>
        </div>

        <Table
          className="table-striped"
          style={{ overflowX: "auto" }}
          columns={columns}
          dataSource={courses} // Use data from the API
          rowKey={(record) => record.id}
          pagination={{
            current: currentPage,
            pageSize: 10, // Assuming 10 items per page, adjust as needed or fetch from backend
            total: totalCourses, // Total count from backend
            onChange: (page) => setCurrentPage(page), // Update current page on change
            showSizeChanger: false, // Hide page size changer if not needed
          }}
        />
      </div>
    </div>
  );
};

export default Courses;
