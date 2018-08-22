import { Tab, Tabs, Icon } from "@material-ui/core";

const logoStyle = {
  maxHeight: 40
};

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <div className="header-container">
        <img style={logoStyle} src={`${process.env.BACKEND_URL}/static/logo.png`} />
      </div>
      <div className="header-container">
        <Tabs value={false}>
          <Tab label="主页" href={`${process.env.BACKEND_URL}/`} />
          <Tab label="关于我们" href={`${process.env.BACKEND_URL}/about`} />
        </Tabs>
      </div>
      <a href="https://github.com/TWNTF">
        <img src={`${process.env.BACKEND_URL}/static/GitHub-Mark-32px.png`} />
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
