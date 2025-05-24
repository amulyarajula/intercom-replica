import React, { useState } from 'react';

const Users: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      avatar: "SJ",
      status: "active",
      lastSeen: "2 minutes ago",
      conversations: 12,
      satisfaction: 95,
      tags: ["Premium", "VIP"],
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike.chen@email.com",
      avatar: "MC",
      status: "away",
      lastSeen: "1 hour ago",
      conversations: 8,
      satisfaction: 88,
      tags: ["Developer"],
    },
    {
      id: 3,
      name: "Emma Davis",
      email: "emma.davis@email.com",
      avatar: "ED",
      status: "offline",
      lastSeen: "2 days ago",
      conversations: 15,
      satisfaction: 92,
      tags: ["Enterprise"],
    },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div style={{ padding: "24px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <h2
          style={{
            color: "#ffffff",
            fontSize: "24px",
            fontWeight: "600",
            margin: 0,
          }}
        >
          Users
        </h2>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#4f46e5",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
          }}
        >
          Add User
        </button>
      </div>

      <div
        style={{
          backgroundColor: "#2a2a3e",
          borderRadius: "12px",
          border: "1px solid #3a3a4e",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid #3a3a4e",
          }}
        >
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "300px",
              padding: "10px 12px",
              backgroundColor: "#1a1a2e",
              border: "1px solid #3a3a4e",
              borderRadius: "8px",
              color: "#ffffff",
              fontSize: "14px",
            }}
          />
        </div>

        <div style={{ overflow: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#1a1a2e" }}>
                <th
                  style={{
                    padding: "16px 20px",
                    textAlign: "left",
                    color: "#8b8ba7",
                    fontSize: "12px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  User
                </th>
                <th
                  style={{
                    padding: "16px 20px",
                    textAlign: "left",
                    color: "#8b8ba7",
                    fontSize: "12px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Status
                </th>
                <th
                  style={{
                    padding: "16px 20px",
                    textAlign: "left",
                    color: "#8b8ba7",
                    fontSize: "12px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Conversations
                </th>
                <th
                  style={{
                    padding: "16px 20px",
                    textAlign: "left",
                    color: "#8b8ba7",
                    fontSize: "12px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Satisfaction
                </th>
                <th
                  style={{
                    padding: "16px 20px",
                    textAlign: "left",
                    color: "#8b8ba7",
                    fontSize: "12px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Tags
                </th>
                <th
                  style={{
                    padding: "16px 20px",
                    textAlign: "right",
                    color: "#8b8ba7",
                    fontSize: "12px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  style={{
                    borderBottom: "1px solid #3a3a4e",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#1a1a2e";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <td style={{ padding: "16px 20px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          backgroundColor: "#4f46e5",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#ffffff",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        {user.avatar}
                      </div>
                      <div>
                        <div
                          style={{
                            color: "#ffffff",
                            fontSize: "14px",
                            fontWeight: "500",
                            marginBottom: "2px",
                          }}
                        >
                          {user.name}
                        </div>
                        <div
                          style={{
                            color: "#8b8ba7",
                            fontSize: "12px",
                          }}
                        >
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: "16px 20px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor:
                            user.status === "active" ? "#10b981" : user.status === "away" ? "#f59e0b" : "#6b7280",
                        }}
                      />
                      <span
                        style={{
                          color: "#ffffff",
                          fontSize: "14px",
                          textTransform: "capitalize",
                        }}
                      >
                        {user.status}
                      </span>
                    </div>
                    <div
                      style={{
                        color: "#8b8ba7",
                        fontSize: "12px",
                        marginTop: "2px",
                      }}
                    >
                      {user.lastSeen}
                    </div>
                  </td>
                  <td style={{ padding: "16px 20px" }}>
                    <span
                      style={{
                        color: "#ffffff",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      {user.conversations}
                    </span>
                  </td>
                  <td style={{ padding: "16px 20px" }}>
                    <span
                      style={{
                        color: "#ffffff",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      {user.satisfaction}%
                    </span>
                  </td>
                  <td style={{ padding: "16px 20px" }}>
                    <div
                      style={{
                        display: "flex",
                        gap: "6px",
                        flexWrap: "wrap",
                      }}
                    >
                      {user.tags.map((tag, index) => (
                        <span
                          key={index}
                          style={{
                            padding: "2px 8px",
                            backgroundColor: "#3a3a4e",
                            color: "#ffffff",
                            borderRadius: "12px",
                            fontSize: "11px",
                            fontWeight: "500",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td style={{ padding: "16px 20px", textAlign: "right" }}>
                    <button
                      style={{
                        padding: "6px 12px",
                        backgroundColor: "transparent",
                        color: "#8b8ba7",
                        border: "1px solid #3a3a4e",
                        borderRadius: "6px",
                        fontSize: "12px",
                        cursor: "pointer",
                        marginRight: "8px",
                      }}
                    >
                      View
                    </button>
                    <button
                      style={{
                        padding: "6px 12px",
                        backgroundColor: "#4f46e5",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "12px",
                        cursor: "pointer",
                      }}
                    >
                      Message
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;