import { ButtonBase } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const logoStyle = {
  maxHeight: 40
};

const styles = () => ({
  button: {
    marginRight: 20,
    marginLeft: 20
  }
});

const Header = props => {
  const backendurl = process.env.BACKEND_URL;
  const {
    classes: { button }
  } = props;
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
        <ButtonBase className={button} href={`${backendurl}/`}>
          首页
        </ButtonBase>
        <ButtonBase className={button} href={`${backendurl}/about`}>
          关于我们
        </ButtonBase>
      </div>
      <a href="https://github.com/TWNTF">
        <img src={`${backendurl}/static/GitHub-Mark-32px.png`} />
      </a>
      <style global jsx>{`
        .header-container {
          display: flex;
        }
        .nav-button {
          margin-right: 40;
        }
      `}</style>
    </div>
  );
};

export default withStyles(styles)(Header);
