import Sidebar from "./components/Sidebar";
import "bootstrap-icons/font/bootstrap-icons.css";
import UsernameForm from "./components/UsernameForm";

function App() {
  return (
    <div className="flex items-center bg-[#232e36]">
      <Sidebar />
      <UsernameForm />
    </div>
  );
}

export default App;
