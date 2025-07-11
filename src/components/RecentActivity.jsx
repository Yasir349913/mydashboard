import React from "react";
import { Table, Card } from "react-bootstrap";

const data = [
  {
    name: "Ali Raza",
    activity: "Purchased Course",
    date: "2025-07-09",
    status: "Completed",
  },
  {
    name: "Fatima Khan",
    activity: "Sent Message",
    date: "2025-07-08",
    status: "Pending",
  },
  {
    name: "Usman Tariq",
    activity: "Updated Profile",
    date: "2025-07-07",
    status: "Completed",
  },
  {
    name: "Zara Noor",
    activity: "Subscribed",
    date: "2025-07-07",
    status: "Completed",
  },
];

const RecentActivity = () => {
  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header className="bg-primary text-white">
        <h5 className="mb-0">Recent Activity</h5>
      </Card.Header>
      <Card.Body>
        <Table responsive hover>
          <thead>
            <tr>
              <th>User</th>
              <th>Activity</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, idx) => (
              <tr key={idx}>
                <td>{entry.name}</td>
                <td>{entry.activity}</td>
                <td>{entry.date}</td>
                <td>
                  <span
                    className={`badge ${
                      entry.status === "Completed"
                        ? "bg-success"
                        : "bg-warning text-dark"
                    }`}
                  >
                    {entry.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default RecentActivity;
