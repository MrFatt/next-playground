import { ButtonBase } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  button: {
    marginRight: 20,
    marginLeft: 20
  }
});

const Navigation = props => {
  const {
    classes: { button }
  } = props;
  const backendurl = process.env.BACKEND_URL;

  return (
    <div>
      <ButtonBase className={button} href={`${backendurl}/`}>
        首页
      </ButtonBase>
      <ButtonBase className={button} href={`${backendurl}/about`}>
        关于我们
      </ButtonBase>
    </div>
  );
};

export default withStyles(styles)(Navigation);
