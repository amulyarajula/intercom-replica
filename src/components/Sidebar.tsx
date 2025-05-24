import React from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, collapsed, setCollapsed }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "conversations", label: "Conversations", icon: "💬" },
    { id: "users", label: "Users", icon: "👥" },
    { id: "analytics", label: "Analytics", icon: "📈" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        width: collapsed ? "60px" : "240px",
        backgroundColor: "#0f0f23",
        borderRight: "1px solid #2a2a3e",
        transition: "width 0.3s ease",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          padding: "20px",
          borderBottom: "1px solid #2a2a3e",
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "space-between",
        }}
      >
        {!collapsed && (
          <div
            style={{
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Intercom
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{
            background: "none",
            border: "none",
            color: "#8b8ba7",
            cursor: "pointer",
            fontSize: "16px",
            padding: "4px",
          }}
        >
          {collapsed ? "→" : "←"}
        </button>
      </div>

      <nav style={{ padding: "20px 0" }}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{
              width: "100%",
              padding: collapsed ? "12px" : "12px 20px",
              border: "none",
              backgroundColor: activeTab === item.id ? "#2a2a3e" : "transparent",
              color: activeTab === item.id ? "#ffffff" : "#8b8ba7",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: collapsed ? "0" : "12px",
              justifyContent: collapsed ? "center" : "flex-start",
              transition: "all 0.2s ease",
              fontSize: "14px",
            }}
            onMouseEnter={(e) => {
              if (activeTab !== item.id) {
                e.currentTarget.style.backgroundColor = "#1a1a2e";
                e.currentTarget.style.color = "#ffffff";
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== item.id) {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#8b8ba7";
              }
            }}
          >
            <span style={{ fontSize: "16px" }}>{item.icon}</span>
            {!collapsed && <span>{item.label}</span>}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;