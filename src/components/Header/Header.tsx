import "./Header.css";
import logoSvg from "../../assets/server.svg";
import CustomRadio from "../CustomRadio/CustomRadio";
import { useApi } from "../../context/ApiContext";

const Header = () => {
  const { selectedApi, setSelectedApi } = useApi();

  return (
    <header className="header">
      <div className="logo-wrapper">
        <img src={logoSvg} alt="Logo" className="logo" />
        <h1 className="logo-text">Logs Monitor</h1>
      </div>

      <CustomRadio
        name="selectedApi"
        value={selectedApi}
        options={[
          { label: "game-api", value: "game-api" },
          { label: "report-api", value: "report-api" },
          { label: "report-cron", value: "report-cron" },
        ]}
        onChange={(val) => setSelectedApi(() => val)}
      />
    </header>
  );
};

export default Header;
