import "./App.css";
import Header from "./components/Header/Header";
import LogViewer from "./components/LogViewer/LogViewer";
import { useLogs } from "./hooks/useLogs";
import Loader from "./components/Loader/Loader";

function App() {
  const { loading } = useLogs();

  return (
    <div className="app">
      {loading && (
        <div className="loader-overlay">
          <Loader size={20} />
        </div>
      )}

      <Header />
      <LogViewer />
    </div>
  );
}

export default App;
