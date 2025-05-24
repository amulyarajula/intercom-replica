import React, { useState } from 'react';

const Conversations: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState("");

  const conversations = [
    {
      id: 1,
      user: "Sarah Johnson",
      avatar: "SJ",
      lastMessage: "I need help with my billing issue",
      time: "2m ago",
      unread: 2,
      status: "active",
    },
    {
      id: 2,
      user: "Mike Chen",
      avatar: "MC",
      lastMessage: "When will the new feature be available?",
      time: "5m ago",
      unread: 0,
      status: "pending",
    },
    {
      id: 3,
      user: "Emma Davis",
      avatar: "ED",
      lastMessage: "Thank you for the quick response!",
      time: "12m ago",
      unread: 0,
      status: "resolved",
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "user",
      content: "Hi, I'm having trouble with my billing. The charge seems incorrect.",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "agent",
      content: "Hello Sarah! I'd be happy to help you with your billing concern. Let me look into your account.",
      time: "10:32 AM",
    },
    {
      id: 3,
      sender: "user",
      content: "I was charged twice for the same month. Can you please check?",
      time: "10:33 AM",
    },
    {
      id: 4,
      sender: "agent",
      content: "I can see the duplicate charge in your account. I'll process a refund for the extra charge right away.",
      time: "10:35 AM",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        height: "calc(100vh - 60px)",
        backgroundColor: "#1a1a2e",
      }}
    >
      {/* Conversations List */}
      <div
        style={{
          width: "350px",
          backgroundColor: "#2a2a3e",
          borderRight: "1px solid #3a3a4e",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid #3a3a4e",
          }}
        >
          <h2
            style={{
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: "600",
              margin: "0 0 16px 0",
            }}
          >
            Conversations
          </h2>
          <input
            type="text"
            placeholder="Search conversations..."
            style={{
              width: "100%",
              padding: "8px 12px",
              backgroundColor: "#1a1a2e",
              border: "1px solid #3a3a4e",
              borderRadius: "8px",
              color: "#ffffff",
              fontSize: "14px",
            }}
          />
        </div>

        <div style={{ flex: 1, overflow: "auto" }}>
          {conversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => setSelectedConversation(conv.id)}
              style={{
                padding: "16px 20px",
                borderBottom: "1px solid #3a3a4e",
                cursor: "pointer",
                backgroundColor: selectedConversation === conv.id ? "#3a3a4e" : "transparent",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (selectedConversation !== conv.id) {
                  e.currentTarget.style.backgroundColor = "#1a1a2e";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedConversation !== conv.id) {
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
            >
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
                  {conv.avatar}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "4px",
                    }}
                  >
                    <div
                      style={{
                        color: "#ffffff",
                        fontSize: "14px",
                        fontWeight: "500",
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
                      {conv.time}
                    </div>
                  </div>
                  <div
                    style={{
                      color: "#8b8ba7",
                      fontSize: "13px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {conv.lastMessage}
                  </div>
                </div>
                {conv.unread > 0 && (
                  <div
                    style={{
                      backgroundColor: "#ef4444",
                      color: "#ffffff",
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    {conv.unread}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Chat Header */}
        <div
          style={{
            padding: "16px 24px",
            borderBottom: "1px solid #3a3a4e",
            backgroundColor: "#2a2a3e",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
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
              SJ
            </div>
            <div>
              <div
                style={{
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Sarah Johnson
              </div>
              <div
                style={{
                  color: "#10b981",
                  fontSize: "12px",
                }}
              >
                Online
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            <button
              style={{
                padding: "8px 16px",
                backgroundColor: "#4f46e5",
                color: "#ffffff",
                border: "none",
                borderRadius: "6px",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Resolve
            </button>
            <button
              style={{
                padding: "8px 16px",
                backgroundColor: "transparent",
                color: "#8b8ba7",
                border: "1px solid #3a3a4e",
                borderRadius: "6px",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Transfer
            </button>
          </div>
        </div>

        {/* Messages */}
        <div
          style={{
            flex: 1,
            padding: "24px",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {messages.map((message) => (
            <div
              key={message.id}
              style={{
                display: "flex",
                justifyContent: message.sender === "user" ? "flex-start" : "flex-end",
              }}
            >
              <div
                style={{
                  maxWidth: "70%",
                  padding: "12px 16px",
                  borderRadius: "12px",
                  backgroundColor: message.sender === "user" ? "#3a3a4e" : "#4f46e5",
                  color: "#ffffff",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    marginBottom: "4px",
                  }}
                >
                  {message.content}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: message.sender === "user" ? "#8b8ba7" : "#e0e7ff",
                    textAlign: "right",
                  }}
                >
                  {message.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div
          style={{
            padding: "16px 24px",
            borderTop: "1px solid #3a3a4e",
            backgroundColor: "#2a2a3e",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "flex-end",
            }}
          >
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: "12px",
                backgroundColor: "#1a1a2e",
                border: "1px solid #3a3a4e",
                borderRadius: "8px",
                color: "#ffffff",
                fontSize: "14px",
                resize: "none",
                minHeight: "40px",
                maxHeight: "120px",
              }}
              rows={1}
            />
            <button
              style={{
                padding: "12px 20px",
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
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversations;