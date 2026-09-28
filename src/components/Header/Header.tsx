import "./Header.css";
import logoSvg from "../../assets/server.svg";
import CustomRadio from "../CustomRadio/CustomRadio";
import { useSource } from "../../context/SourceContext";
import type { SourceType } from "../../types/Source";

const Header = () => {
  const { source, setSource } = useSource();

  return (
    <header className="header">
      <div className="logo-wrapper">
        <img src={logoSvg} alt="Logo" className="logo" />
        <h1 className="logo-text">Logs Monitor</h1>
      </div>

      <CustomRadio
        name="source"
        value={source}
        options={[
          { label: "powerbi-cron", value: "powerbi-cron" },
          { label: "organizer-cron", value: "organizer-cron" },
        ]}
        onChange={(val) => setSource(val as SourceType)}
      />
    </header>
  );
};

export default Header;
