import Sidebar from "./components/features/sidebar/Sidebar";
import "bootstrap-icons/font/bootstrap-icons.css";
import UsernameForm from "./components/features/form/UsernameForm";
import ChatDashboard from "./components/features/chat/ChatDashboard";

function App() {
  return (
    <div className="flex items-center bg-[#232e36]">
      <Sidebar />
      <UsernameForm />
      <ChatDashboard />
    </div>
  );
}

export default App;
