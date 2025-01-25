import Sidebar from "./components/Sidebar";
import "bootstrap-icons/font/bootstrap-icons.css";
import UsernameForm from "./components/UsernameForm";
import ChatDashboard from "./components/ChatDashboard";

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
