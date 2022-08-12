import React from "react";
import Calendar from "react-calendar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from 'react-bootstrap/Badge';
import Accordion from "react-bootstrap/Accordion";
import { BsMegaphoneFill, BsBellFill } from "react-icons/bs";

const Dashboard = ({ profilePic }) => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <Card className="shadow">
            <Card.Body>
              <div className="text-center mb-3">
                <img
                  src={profilePic}
                  alt="grumpy cat"
                  className="rounded-circle border border-primary border-2 mb-2"
                  width="auto"
                  height="120"
                />
                <h4>Grumpy Cat</h4>
                <Button variant="secondary">Edit Profile</Button>
              </div>
              <h5>Student Information</h5>
              <table className="table table-sm">
                <tbody>
                  <tr>
                    <td>Student ID no:</td>
                    <td>2022M1234</td>
                  </tr>
                  <tr>
                    <td>Student Name:</td>
                    <td>Tardar Sauce</td>
                  </tr>
                  <tr>
                    <td>Program/Degree</td>
                    <td>BACHELOR OF SCIENCE IN COMPUTER SCIENCE</td>
                  </tr>
                  <tr>
                    <td>Year Level:</td>
                    <td>First Year</td>
                  </tr>
                  <tr>
                    <td>Student Status:</td>
                    <td>Enrolled for A.Y. 2022-2023 First Semester</td>
                  </tr>
                  <tr>
                    <td>Email Address:</td>
                    <td>someone@example.com</td>
                  </tr>
                  <tr>
                    <td>Phone Number:</td>
                    <td>09912345678</td>
                  </tr>
                  <tr>
                    <td>Address:</td>
                    <td>123 Taft Avenue, Manila</td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
          </Card>
        </div>
        <div className="col">
          <Accordion defaultActiveKey="0" className="mb-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <BsMegaphoneFill className="me-2" />
                Announcements
                <Badge bg='danger' className="ms-1" pill>1</Badge>
              </Accordion.Header>
              <Accordion.Body>
                <h5 className="card-title">Enrollment Period</h5>
                <h6 className="card-subtitle mb-2 text-muted">3 hours ago</h6>
                <p className="card-text">
                  Please be informed that the Enrollment Period for all campuses
                  is open until September 15, 2022.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <BsBellFill className="me-2" />
                Notifications
              </Accordion.Header>
              <Accordion.Body>
                <p className="card-text text-center text-muted">
                  You're all caught up!
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Calendar className="w-auto mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
