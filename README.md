# intercom-replica
Intercom Admin Panel
Overview
The Intercom Admin Panel is a single-page React application designed as a customer support dashboard. It provides an intuitive interface for managing user conversations, viewing analytics, configuring settings, and monitoring user activity. The application features a responsive design with a dark theme, built using React, React Router, and Tailwind CSS for styling.
Features

Dashboard: Displays key metrics (e.g., total conversations, active users, response time, satisfaction) and recent conversations with an AI suggestion panel.
Conversations: Allows viewing and responding to user messages with a chat interface and conversation list.
Users: Provides a searchable table of users with details like status, conversations, satisfaction, and tags.
Analytics: Shows performance metrics and a weekly overview chart of messages and resolved issues, along with top-performing agents.
Settings: Configures general settings, notifications, AI assistant preferences, and working hours.
Responsive Sidebar: Collapsible sidebar for navigation with support for mobile responsiveness.
Header: Includes a search bar and user profile indicator.

Technologies Used

React: Frontend library for building the user interface.
React Router: Handles client-side routing for navigating between different sections.
Tailwind CSS: Utility-first CSS framework for styling.
Babel: Transpiles JSX for browser compatibility.
CDN Dependencies: Uses CDN-hosted React, React Router, and Tailwind CSS for simplicity.

Project Structure
intercom-admin-panel/
├── public/
│   └── index.html         # Main HTML file with CDN dependencies
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx    # Sidebar navigation component
│   │   ├── Header.jsx     # Header with search and user profile
│   │   ├── Dashboard.jsx  # Dashboard with metrics and conversations
│   │   ├── Conversations.jsx # Chat interface for user conversations
│   │   ├── Users.jsx      # User management table
│   │   ├── Analytics.jsx  # Analytics with charts and agent performance
│   │   └── Settings.jsx   # Settings for configuration
│   ├── App.jsx            # Main App component with routing
│   └── App.css            # Global CSS styles
├── README.md              # Project documentation

Setup Instructions

Clone the Repository:
git clone https://github.com/your-username/intercom-admin-panel.git
cd intercom-admin-panel


Serve the Application:

The application uses CDN-hosted dependencies, so no build step is required.
Use a local server to serve the public/index.html file. For example, with Python:python -m http.server 8000


Open your browser and navigate to http://localhost:8000.


Development:

To modify the application, edit the files in the src/ directory.
Ensure you have a local development environment with a file watcher or use a tool like Vite or Create React App for a more robust setup.



Usage

Navigation: Use the sidebar to switch between Dashboard, Conversations, Users, Analytics, and Settings. Click the arrow button to collapse/expand the sidebar.
Conversations: Select a conversation from the list to view messages and send responses.
Users: Search for users by name or email and view their details or initiate a message.
Analytics: Monitor key metrics and visualize weekly message trends.
Settings: Configure company details, notification preferences, AI response settings, and working hours.

Notes

The application is designed to run in any modern browser with JavaScript enabled.
The Users component includes a searchable table with mock data for demonstration.
The application avoids <form> elements due to sandbox restrictions, as per guidelines.
CSS includes responsive design for mobile devices and custom scrollbar styling.

Future Improvements

Add backend integration for real-time data fetching.
Implement state management (e.g., Redux) for complex state handling.
Enhance the chart in the Analytics section with a library like Chart.js.
Add authentication and role-based access control.

