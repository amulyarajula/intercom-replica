import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
  });

  const [autoResponses, setAutoResponses] = useState(true);
  const [workingHours, setWorkingHours] = useState({
    start: "09:00",
    end: "17:00",
  });

  return (
    <div style={{ padding: "24px", maxWidth: "800px" }}>
      <h2
        style={{
          color: "#ffffff",
          fontSize: "24px",
          fontWeight: "600",
          marginBottom: "24px",
          margin: "0 0 24px 0",
        }}
      >
        Settings
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* General Settings */}
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
            General Settings
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div>
              <label
                style={{
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: "500",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                Company Name
              </label>
              <input
                type="text"
                defaultValue="Acme Corp"
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  backgroundColor: "#1a1a2e",
                  border: "1px solid #3a3a4e",
                  borderRadius: "8px",
                  color: "#ffffff",
                  fontSize: "14px",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: "500",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                Support Email
              </label>
              <input
                type="email"
                defaultValue="support@acme.com"
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  backgroundColor: "#1a1a2e",
                  border: "1px solid #3a3a4e",
                  borderRadius: "8px",
                  color: "#ffffff",
                  fontSize: "14px",
                }}
              />
            </div>
          </div>
        </div>

        {/* Notifications */}
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
            Notifications
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {Object.entries(notifications).map(([key, value]) => (
              <div
                key={key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 0",
                }}
              >
                <div>
                  <div
                    style={{
                      color: "#ffffff",
                      fontSize: "14px",
                      fontWeight: "500",
                      marginBottom: "2px",
                    }}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)} Notifications
                  </div>
                  <div
                    style={{
                      color: "#8b8ba7",
                      fontSize: "12px",
                    }}
                  >
                    Receive notifications via {key}
                  </div>
                </div>
                <button
                  onClick={() => setNotifications((prev) => ({ ...prev, [key]: !value }))}
                  style={{
                    width: "44px",
                    height: "24px",
                    borderRadius: "12px",
                    border: "none",
                    backgroundColor: value ? "#4f46e5" : "#3a3a4e",
                    cursor: "pointer",
                    position: "relative",
                    transition: "background-color 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "#ffffff",
                      position: "absolute",
                      top: "2px",
                      left: value ? "22px" : "2px",
                      transition: "left 0.2s ease",
                    }}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* AI Settings */}
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
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 0",
              }}
            >
              <div>
                <div
                  style={{
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: "500",
                    marginBottom: "2px",
                  }}
                >
                  Auto Responses
                </div>
                <div
                  style={{
                    color: "#8b8ba7",
                    fontSize: "12px",
                  }}
                >
                  Enable AI-powered automatic responses
                </div>
              </div>
              <button
                onClick={() => setAutoResponses(!autoResponses)}
                style={{
                  width: "44px",
                  height: "24px",
                  borderRadius: "12px",
                  border: "none",
                  backgroundColor: autoResponses ? "#4f46e5" : "#3a3a4e",
                  cursor: "pointer",
                  position: "relative",
                  transition: "background-color 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#ffffff",
                    position: "absolute",
                    top: "2px",
                    left: autoResponses ? "22px" : "2px",
                    transition: "left 0.2s ease",
                  }}
                />
              </button>
            </div>

            <div>
              <label
                style={{
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: "500",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                Response Tone
              </label>
              <select
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  backgroundColor: "#1a1a2e",
                  border: "1px solid #3a3a4e",
                  borderRadius: "8px",
                  color: "#ffffff",
                  fontSize: "14px",
                }}
              >
                <option value="professional">Professional</option>
                <option value="friendly">Friendly</option>
                <option value="casual">Casual</option>
              </select>
            </div>
          </div>
        </div>

        {/* Working Hours */}
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
            Working Hours
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            <div>
              <label
                style={{
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: "500",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                Start Time
              </label>
              <input
                type="time"
                value={workingHours.start}
                onChange={(e) => setWorkingHours((prev) => ({ ...prev, start: e.target.value }))}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  backgroundColor: "#1a1a2e",
                  border: "1px solid #3a3a4e",
                  borderRadius: "8px",
                  color: "#ffffff",
                  fontSize: "14px",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: "500",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                End Time
              </label>
              <input
                type="time"
                value={workingHours.end}
                onChange={(e) => setWorkingHours((prev) => ({ ...prev, end: e.target.value }))}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  backgroundColor: "#1a1a2e",
                  border: "1px solid #3a3a4e",
                  borderRadius: "8px",
                  color: "#ffffff",
                  fontSize: "14px",
                }}
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
          }}
        >
          <button
            style={{
              padding: "12px 24px",
              backgroundColor: "transparent",
              color: "#8b8ba7",
              border: "1px solid #3a3a4e",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            style={{
              padding: "12px 24px",
              backgroundColor: "#4f46e5",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;