import React from 'react';

const Analytics: React.FC = () => {
  const metrics = [
    { label: "Total Messages", value: "45,231", change: "+12.5%", trend: "up" },
    { label: "Avg Response Time", value: "2.3m", change: "-8.2%", trend: "down" },
    { label: "Resolution Rate", value: "94.2%", change: "+3.1%", trend: "up" },
    { label: "Customer Satisfaction", value: "4.8/5", change: "+0.2", trend: "up" },
  ];

  const chartData = [
    { day: "Mon", messages: 120, resolved: 110 },
    { day: "Tue", messages: 150, resolved: 140 },
    { day: "Wed", messages: 180, resolved: 165 },
    { day: "Thu", messages: 160, resolved: 155 },
    { day: "Fri", messages: 200, resolved: 185 },
    { day: "Sat", messages: 90, resolved: 85 },
    { day: "Sun", messages: 70, resolved: 68 },
  ];

  const maxValue = Math.max(...chartData.map((d) => Math.max(d.messages, d.resolved)));

  return (
    <div style={{ padding: "24px" }}>
      <h2
        style={{
          color: "#ffffff",
          fontSize: "24px",
          fontWeight: "600",
          marginBottom: "24px",
          margin: "0 0 24px 0",
        }}
      >
        Analytics
      </h2>

      {/* Metrics Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "32px",
        }}
      >
        {metrics.map((metric, index) => (
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
              {metric.label}
            </div>
            <div
              style={{
                color: "#ffffff",
                fontSize: "28px",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            >
              {metric.value}
            </div>
            <div
              style={{
                color: metric.trend === "up" ? "#10b981" : "#ef4444",
                fontSize: "14px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span>{metric.trend === "up" ? "↗" : "↘"}</span>
              {metric.change}
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
        {/* Chart */}
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
            Weekly Overview
          </h3>

          <div
            style={{
              display: "flex",
              alignItems: "end",
              gap: "16px",
              height: "200px",
              padding: "20px 0",
            }}
          >
            {chartData.map((data, index) => (
              <div
                key={index}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "end",
                    gap: "4px",
                    height: "160px",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: `${(data.messages / maxValue) * 160}px`,
                      backgroundColor: "#4f46e5",
                      borderRadius: "4px 4px 0 0",
                    }}
                  />
                  <div
                    style={{
                      width: "20px",
                      height: `${(data.resolved / maxValue) * 160}px`,
                      backgroundColor: "#10b981",
                      borderRadius: "4px 4px 0 0",
                    }}
                  />
                </div>
                <div
                  style={{
                    color: "#8b8ba7",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  {data.day}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              marginTop: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#4f46e5",
                  borderRadius: "2px",
                }}
              />
              <span
                style={{
                  color: "#8b8ba7",
                  fontSize: "14px",
                }}
              >
                Messages
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#10b981",
                  borderRadius: "2px",
                }}
              />
              <span
                style={{
                  color: "#8b8ba7",
                  fontSize: "14px",
                }}
              >
                Resolved
              </span>
            </div>
          </div>
        </div>

        {/* Top Agents */}
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
            Top Agents
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {[
              { name: "John Smith", avatar: "JS", resolved: 45, rating: 4.9 },
              { name: "Lisa Wang", avatar: "LW", resolved: 38, rating: 4.8 },
              { name: "Mike Johnson", avatar: "MJ", resolved: 32, rating: 4.7 },
            ].map((agent, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px",
                  backgroundColor: "#1a1a2e",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#4f46e5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  {agent.avatar}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      color: "#ffffff",
                      fontSize: "14px",
                      fontWeight: "500",
                      marginBottom: "2px",
                    }}
                  >
                    {agent.name}
                  </div>
                  <div
                    style={{
                      color: "#8b8ba7",
                      fontSize: "12px",
                    }}
                  >
                    {agent.resolved} resolved • ⭐ {agent.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;