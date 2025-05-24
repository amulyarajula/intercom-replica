import React from 'react';

const Dashboard: React.FC = () => {
  const stats = [
    { label: "Total Conversations", value: "2,847", change: "+12%", color: "#10b981" },
    { label: "Active Users", value: "1,234", change: "+8%", color: "#3b82f6" },
    { label: "Response Time", value: "2.3m", change: "-15%", color: "#f59e0b" },
    { label: "Satisfaction", value: "94%", change: "+3%", color: "#8b5cf6" },
  ];

  const recentConversations = [
    { id: 1, user: "Sarah Johnson", message: "Need help with billing", time: "2m ago", status: "active" },
    { id: 2, user: "Mike Chen", message: "Product feature request", time: "5m ago", status: "pending" },
    { id: 3, user: "Emma Davis", message: "Technical support needed", time: "12m ago", status: "resolved" },
    { id: 4, user: "Alex Wilson", message: "Account access issue", time: "18m ago", status: "active" },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "32px",
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#2a2a3e",
              borderRadius: "12px",
              padding: "24px",
              border: "1px solid #3a3a4e",
            }}
          >
            <div
              style={{
                color: "#8b8ba7",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              {stat.label}
            </div>
            <div
              style={{
                color: "#ffffff",
                fontSize: "28px",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                color: stat.color,
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "24px",
        }}
      >
        <div
          style={{
            backgroundColor: "#2a2a3e",
            borderRadius: "12px",
            padding: "24px",
            border: "1px solid #3a3a4e",
          }}
        >
          <h3
            style={{
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "20px",
              margin: "0 0 20px 0",
            }}
          >
            Recent Conversations
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {recentConversations.map((conv) => (
              <div
                key={conv.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px",
                  backgroundColor: "#1a1a2e",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#3a3a4e";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#1a1a2e";
                }}
              >
                <div>
                  <div
                    style={{
                      color: "#ffffff",
                      fontSize: "14px",
                      fontWeight: "500",
                      marginBottom: "4px",
                    }}
                  >
                    {conv.user}
                  </div>
                  <div
                    style={{
                      color: "#8b8ba7",
                      fontSize: "12px",
                    }}
                  >
                    {conv.message}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "4px",
                  }}
                >
                  <div
                    style={{
                      color: "#8b8ba7",
                      fontSize: "12px",
                    }}
                  >
                    {conv.time}
                  </div>
                  <div
                    style={{
                      padding: "2px 8px",
                      borderRadius: "12px",
                      fontSize: "10px",
                      fontWeight: "500",
                      backgroundColor:
                        conv.status === "active" ? "#10b981" : conv.status === "pending" ? "#f59e0b" : "#6b7280",
                      color: "#ffffff",
                    }}
                  >
                    {conv.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#2a2a3e",
            borderRadius: "12px",
            padding: "24px",
            border: "1px solid #3a3a4e",
          }}
        >
          <h3
            style={{
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "20px",
              margin: "0 0 20px 0",
            }}
          >
            AI Assistant
          </h3>
          <div
            style={{
              backgroundColor: "#1a1a2e",
              borderRadius: "8px",
              padding: "16px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                color: "#8b8ba7",
                fontSize: "12px",
                marginBottom: "8px",
              }}
            >
              AI Suggestion
            </div>
            <div
              style={{
                color: "#ffffff",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              Consider setting up automated responses for common billing questions to reduce response time.
            </div>
          </div>
          <button
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#4f46e5",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#4338ca";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#4f46e5";
            }}
          >
            Configure AI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;