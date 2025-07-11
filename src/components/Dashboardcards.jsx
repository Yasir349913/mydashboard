import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import {
  FaUser,
  FaDollarSign,
  FaChartLine,
  FaShoppingCart,
} from "react-icons/fa";

const stats = [
  { title: "Users", value: "1,200", icon: <FaUser />, color: "#e0f7fa" },
  {
    title: "Revenue",
    value: "$32,000",
    icon: <FaDollarSign />,
    color: "#e8f5e9",
  },
  { title: "Sales", value: "650", icon: <FaShoppingCart />, color: "#fff3e0" },
  { title: "Growth", value: "12%", icon: <FaChartLine />, color: "#ede7f6" },
];

const DashboardCards = () => {
  return (
    <Row className="mt-4">
      {stats.map((stat, idx) => (
        <Col key={idx} md={6} lg={3} className="mb-4">
          <Card style={{ backgroundColor: stat.color }} className="shadow-sm">
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div>
                <Card.Title>{stat.title}</Card.Title>
                <h4>{stat.value}</h4>
              </div>
              <div style={{ fontSize: "1.5rem" }}>{stat.icon}</div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default DashboardCards;
