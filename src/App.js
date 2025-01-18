import ChatSection from "./components/ChatSection";
import Auth from "./components/Auth";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="flex">
      <ChatSection />
      <Auth />
    </div>
  );
}

export default App;
