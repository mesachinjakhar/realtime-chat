import ChatSection from "./components/ChatSection";
import Auth from "./components/Auth";
import "bootstrap-icons/font/bootstrap-icons.css";
import CreateJoinRoom from "./components/CreateJoinRoom";

function App() {
  return (
    <div className="flex">
      <ChatSection />
      <CreateJoinRoom />
    </div>
  );
}

export default App;
