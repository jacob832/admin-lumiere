import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Texteditor from "../../Ui_Interface/Elements/Texteditor.jsx";


const dummyCourses = [
  {
    id: 1,
    name: "Course name",
    description: "A short description goes here to describe your course content.",
    level: "Beginner",
    language: "English",
    category: "Marketing",
    timezone: "UTC +03:00",
    accessType: "Draft",
    startDate: "Thu Oct 24 2024",
    endDate: "Mon Dec 09 2024",
    instructor:
      "Jane Doe, Marketing Expert with 10+ years of experience in digital marketing and social media strategies",
    status: "Draft",
    imageUrl: "", // empty to show the icon
  },
];

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(
    dummyCourses.find((c) => c.id === parseInt(id))
  );

  const [comments, setComments] = useState("");

  const handleApprove = () => {
    setCourse({ ...course, status: "Approved" });
    alert(`Course "${course.name}" approved successfully!`);
    setTimeout(() => navigate("/"), 1000);
  };

  if (!course)
    return <div className="page-wrapper">Course not found</div>;

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
                <p><strong>Access Type</strong><br />{course.accessType}</p>
              </div>
              <div className="col-6">
                <p><strong>Category</strong><br />{course.category}</p>
                <p><strong>Timezone</strong><br />{course.timezone}</p>
                <p><strong>Start Date</strong><br />{course.startDate}</p>
              </div>
            </div>

            <p><strong>End Date</strong><br />{course.endDate}</p>

            <p className="mt-4 fw-bold">Course Settings</p>
            <p>
              <strong>Instructor</strong><br />
              {course.instructor}
            </p>

            {/* Texteditor for comments */}
            {/* Texteditor for comments */}
            <div className="mt-4">
              <h6 className="fw-bold">Reviewer Comments</h6>
              <Texteditor value={comments} onChange={setComments} />
              <button
                className="btn btn-primary mt-3"
                onClick={() => alert(`Saved comment: \n${comments}`)}
              >
                Save Comments
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3 rounded-3">
            <div className="mb-2">
              <span className={`badge ${course.status === "Approved" ? "bg-success" : "bg-warning text-dark"}`}>
                {course.status}
              </span>
            </div>

            <div
              className="bg-light d-flex align-items-center justify-content-center rounded mb-3"
              style={{ height: "130px" }}
            >
              {course.imageUrl ? (
                <img src={course.imageUrl} alt="Course" className="img-fluid rounded" style={{ maxHeight: "100%" }} />
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
              <p><strong>Level:</strong> {course.level}</p>
              <p><strong>Category:</strong> {course.category}</p>
              <p><strong>Language:</strong> {course.language}</p>
              <p>
                <strong>Duration:</strong> {course.startDate} - {course.endDate}
              </p>
            </div>

            <hr />

            <div className="small">
              <p className="mb-1 fw-bold">Instructor</p>
              <p className="mb-2">{course.instructor}</p>
            </div>

            <button className="btn btn-success w-100 mt-2" onClick={handleApprove}>
              Approve Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
