import React from 'react';

const Header: React.FC = () => {
  return (
    <header
      style={{
        height: "60px",
        backgroundColor: "#1a1a2e",
        borderBottom: "1px solid #2a2a3e",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <h1
          style={{
            color: "#ffffff",
            fontSize: "20px",
            fontWeight: "600",
            margin: 0,
          }}
        >
          Admin Panel
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Search..."
            style={{
              backgroundColor: "#2a2a3e",
              border: "1px solid #3a3a4e",
              borderRadius: "8px",
              padding: "8px 12px",
              color: "#ffffff",
              fontSize: "14px",
              width: "200px",
            }}
          />
        </div>

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
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          JD
        </div>
      </div>
    </header>
  );
};

export default Header;