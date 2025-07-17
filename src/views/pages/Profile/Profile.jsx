import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, Button } from "antd";
import avatarImage from "./avatar.jpg";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { selectCurrentUser } from "../Authentication/store/authSlice";


const Profile = () => {
  const user = useSelector(selectCurrentUser);
  useEffect(() => {
    console.log('User from Redux store:', user);
  }, [user]);
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Breadcrumbs */}
          <Breadcrumbs
            maintitle="Admin"
            title="Dashboard"
            subtitle="Profile"
          />

          {/* Centered Card */}
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "80vh" }}
          >
            <Card
              title="Admin Profile"
              style={{
                width: 400,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                textAlign: "center",
              }}
              cover={
                <img
                  alt="avatar"
                  src={avatarImage}
                  style={{
                    width: "150px",
                    margin: "1rem auto",
                    borderRadius: "50%",
                  }}
                />
              }
            >
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <Button
                type="primary"
                onClick={() => {
                  alert("Reset password functionality is not implemented yet.");
                }}
                style={{ marginTop: "1rem" }}
              >
                Reset Password
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
