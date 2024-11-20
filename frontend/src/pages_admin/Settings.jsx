import React, { useState } from "react";
import Sidebar from "../Components_admin/Sidebar";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import "../CSS/AdminDashbord.css"

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "Admin Name",
    email: "admin@example.com",
    password: "",
  });

  const [appSettings, setAppSettings] = useState({
    theme: "Light",
    notifications: true,
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleAppSettingsChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAppSettings({
      ...appSettings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const saveProfile = () => {
    alert("Profile settings saved successfully!");
  };

  const saveAppSettings = () => {
    alert("Application settings saved successfully!");
  };

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="main-content p-4">
        <h1>Settings</h1>
        <Row>
          <Col md={6}>
            <Card className="mb-4 shadow-sm">
              <Card.Header>
                <h5>Profile Settings</h5>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={profile.name}
                      onChange={handleProfileChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleProfileChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter new password"
                      value={profile.password}
                      onChange={handleProfileChange}
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={saveProfile}>
                    Save Profile
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4 shadow-sm">
              <Card.Header>
                <h5>Application Settings</h5>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Theme</Form.Label>
                    <Form.Select
                      name="theme"
                      value={appSettings.theme}
                      onChange={handleAppSettingsChange}
                    >
                      <option>Light</option>
                      <option>Dark</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="Enable Notifications"
                      name="notifications"
                      checked={appSettings.notifications}
                      onChange={handleAppSettingsChange}
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={saveAppSettings}>
                    Save Settings
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Settings;
