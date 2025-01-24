import ChatSection from "./components/ChatSection";
import "bootstrap-icons/font/bootstrap-icons.css";
import CreateJoinRoom from "./components/CreateJoinRoom";
import Username from "./components/Username";

function App() {
  return (
    <div className="flex items-center bg-[#232e36]">
      <ChatSection />
      <Username />
    </div>
  );
}

export default App;
