import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Spin, Alert, Button, message } from "antd"; // Import Ant Design components for better UX
import Texteditor from "../../Ui_Interface/Elements/Texteditor.jsx"; // Assuming this path is correct
import {
  useGetSpecificCourseQuery,
  useApproveCourseMutation,
  useRejectCourseMutation,
  useUpdateCourseMutation // Assuming you might want to save comments via an update
} from "./coursesApi"; // Adjust path as per your project structure

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id)
  // Fetch specific course data using the RTK Query hook
  const {
    data: courseData,
    error,
    isLoading,
    refetch: refetchCourse,
  } = useGetSpecificCourseQuery(id);

  // Mutations for approving, rejecting, and potentially updating the course
  const [approveCourse, { isLoading: isApproving }] = useApproveCourseMutation();
  const [rejectCourse, { isLoading: isRejecting }] = useRejectCourseMutation();
  const [updateCourse, { isLoading: isSavingComments }] = useUpdateCourseMutation();

  // State for comments, initialized from course data if available
  const [comments, setComments] = useState("");

  // Update comments state when courseData changes (e.g., on initial load or refetch)
  useEffect(() => {
    if (courseData && courseData.data && courseData.data.reviewerComments) {
      setComments(courseData.data.reviewerComments); // Assuming a 'reviewerComments' field in your backend response
    }
  }, [courseData]);

  // Handle Approve action
  const handleApprove = async () => {
    try {
      await approveCourse(id).unwrap();
      message.success(`Course "${courseData.data.name}" approved successfully!`);
      refetchCourse(); // Refetch to update the status displayed
      // Optionally navigate away after a short delay
      // setTimeout(() => navigate("/courses"), 1000);
    } catch (err) {
      console.error("Failed to approve course:", err);
      message.error(`Failed to approve course: ${err.data?.message || 'Unknown error'}`);
    }
  };

  // Handle Reject action
  const handleReject = async () => {
    try {
      await rejectCourse(id).unwrap();
      message.info(`Course "${courseData.data.name}" rejected.`);
      refetchCourse(); // Refetch to update the status displayed
      // Optionally navigate away after a short delay
      // setTimeout(() => navigate("/courses"), 1000);
    } catch (err) {
      console.error("Failed to reject course:", err);
      message.error(`Failed to reject course: ${err.data?.message || 'Unknown error'}`);
    }
  };

  // Handle Save Comments action
  const handleSaveComments = async () => {
    try {
      // Assuming your backend has a field to store reviewer comments
      // and updateCourse mutation can handle partial updates
      await updateCourse({
        courseId: id,
        reviewerComments: comments, // Send comments to backend
      }).unwrap();
      message.success(`Comments saved successfully!`);
      refetchCourse(); // Refetch to ensure comments are updated
    } catch (err) {
      console.error("Failed to save comments:", err);
      message.error(`Failed to save comments: ${err.data?.message || 'Unknown error'}`);
    }
  };

  if (isLoading) {
    return (
      <div className="page-wrapper">
        <div className="content container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 100px)' }}>
          <Spin size="large" tip="Loading Course Details..." />
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
            description={`Failed to load course details: ${error.message || 'Unknown error'}`}
            type="error"
            showIcon
          />
        </div>
      </div>
    );
  }

  // Extract the course object from the nested 'data' property
  const course = courseData?.data;

  if (!course) {
    return (
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Alert
            message="Not Found"
            description="Course not found or data is missing."
            type="warning"
            showIcon
          />
        </div>
      </div>
    );
  }

  // Helper to format duration if 'duration' field is a number of minutes/hours
  const formatDuration = (durationInMinutes) => {
    if (typeof durationInMinutes !== 'number' || isNaN(durationInMinutes)) {
      return "N/A";
    }
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    let durationString = "";
    if (hours > 0) {
      durationString += `${hours} hr`;
    }
    if (minutes > 0) {
      durationString += `${hours > 0 ? ' ' : ''}${minutes} min`;
    }
    return durationString || "0 min";
  };

  return (
    <div className="page-wrapper">
      <div className="row g-4">
        {/* Left Side */}
        <div className="col-md-8">
          <div className="card shadow-sm p-4 rounded-3">
            <h5 className="fw-bold mb-4">Course Information</h5>

            <p className="mb-2">
              <strong>Course Name</strong><br />
              {course.name}
            </p>

            <p className="mb-4">
              <strong>Course Description</strong><br />
              {course.description || "No description provided"}
            </p>

            <div className="row">
              <div className="col-6">
                <p><strong>Course Level</strong><br />{course.level}</p>
                <p><strong>Language</strong><br />{course.language}</p>
                <p><strong>Access Type</strong><br />{course.accessSettings?.accessType || 'N/A'}</p>
              </div>
              <div className="col-6">
                <p><strong>Category ID</strong><br />{course.category_id || 'N/A'}</p> {/* Displaying ID as no category name mapping is available */}
                <p><strong>Timezone</strong><br />{course.timezone || 'N/A'}</p>
                <p><strong>Start Date</strong><br />{course.startDate || 'N/A'}</p>
              </div>
            </div>

            <p><strong>End Date</strong><br />{course.endDate || 'N/A'}</p>
            <p><strong>Duration</strong><br />{formatDuration(course.duration)}</p> {/* Display formatted duration */}


            <p className="mt-4 fw-bold">Course Settings</p>
            <p>
              <strong>Instructor ID</strong><br /> {/* Displaying ID as no instructor name mapping is available */}
              {course.instructor_id || 'N/A'}
            </p>

            {/* Texteditor for comments */}
            <div className="mt-4">
              <h6 className="fw-bold">Reviewer Comments</h6>
              <Texteditor value={comments} onChange={setComments} />
              <Button
                type="primary"
                className="mt-3"
                onClick={handleSaveComments}
                loading={isSavingComments}
              >
                Save Comments
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3 rounded-3">
            <div className="mb-2">
              <span className={`badge ${course.status === "published" ? "bg-success" : "bg-warning text-dark"}`}>
                {course.status}
              </span>
            </div>

            <div
              className="bg-light d-flex align-items-center justify-content-center rounded mb-3"
              style={{ height: "130px" }}
            >
              {course.coverImage ? (
                <img src={course.coverImage} alt="Course Cover" className="img-fluid rounded" style={{ maxHeight: "100%" }} />
              ) : (
                <i className="bi bi-image" style={{ fontSize: "2rem", color: "#bbb" }}></i>
              )}
            </div>

            <div className="bg-dark text-white py-2 px-3 rounded-top mb-2">
              <h6 className="mb-0">{course.name}</h6>
            </div>

            <p className="text-muted small">
              {course.description || "A short description goes here to describe your course content."}
            </p>

            <div className="small mb-3">
              <p><strong>Level:</strong> {course.level || 'N/A'}</p>
              <p><strong>Category ID:</strong> {course.category_id || 'N/A'}</p>
              <p><strong>Language:</strong> {course.language || 'N/A'}</p>
              <p>
                <strong>Duration:</strong> {course.startDate || 'N/A'} - {course.endDate || 'N/A'}
              </p>
            </div>

            <hr />

            <div className="small">
              <p className="mb-1 fw-bold">Instructor ID</p>
              <p className="mb-2">{course.instructor_id || 'N/A'}</p>
            </div>

            {/* Action buttons for approval/rejection */}
            {course.status === "Pending" && ( // Only show if status is Pending
              <>
                <Button
                  type="success" // Assuming you have a 'success' type or custom style for success
                  className="w-100 mt-2"
                  onClick={handleApprove}
                  loading={isApproving}
                >
                  Approve Course
                </Button>
                <Button
                  type="danger" // Assuming you have a 'danger' type or custom style for danger
                  className="w-100 mt-2"
                  onClick={handleReject}
                  loading={isRejecting}
                >
                  Reject Course
                </Button>
              </>
            )}
            {/* You might want to show different buttons or disable them if status is not Pending */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
