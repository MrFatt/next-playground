import { Tab, Button } from "@material-ui/core";
import Link from "next/link";

const logoStyle = {
  maxHeight: 40
};

const Header = () => {
  const backendurl = process.env.BACKEND_URL;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <div className="header-container">
        <img style={logoStyle} src={`${backendurl}/static/logo.png`} />
      </div>
      <div className="header-container">
        <Button href={`${backendurl}/`}>
          首页
        </Button>
        <Button href={`${backendurl}/about`}>
          关于我们
        </Button>
      </div>
      <a href="https://github.com/TWNTF">
        <img src={`${backendurl}/static/GitHub-Mark-32px.png`} />
      </a>
      <style global jsx>{`
        .header-container {
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default Header;
