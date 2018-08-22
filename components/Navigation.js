import { ButtonBase } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Link from 'next/link';

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
      <Link href={`${backendurl}/`}>
        <ButtonBase className={button}>首页</ButtonBase>
      </Link>
      <Link href={`${backendurl}/about`}>
        <ButtonBase className={button}>关于我们</ButtonBase>
      </Link>
    </div>
  );
};

export default withStyles(styles)(Navigation);
