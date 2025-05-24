import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Conversations from './components/Conversations';
import Users from './components/Users';
import Analytics from './components/Analytics';
import Settings from './components/Settings';

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "conversations":
        return <Conversations />;
      case "users":
        return <Users />;
      case "analytics":
        return <Analytics />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#0f0f23",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          marginLeft: sidebarCollapsed ? "60px" : "240px",
          transition: "margin-left 0.3s ease",
        }}
      >
        <Header />
        <main
          style={{
            flex: 1,
            overflow: "auto",
            backgroundColor: "#1a1a2e",
          }}
        >
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;