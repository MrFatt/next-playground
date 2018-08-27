import { Avatar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    maxWidth: 1000,
    display: "flex",
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center"
  },
  login: {
    marginLeft: 10,
    "&:hover": {
      color: "blue",
      opacity: 0.6,
      cursor: "pointer"
    }
  }
};

export default withStyles(styles)(props => {
  const {
    classes,
    member: { login, avatarUrl }
  } = props;

  return (
    <div>
      <a href={`https://github.com/${login}`}>
        <div className={classes.container}>
          <Avatar src={avatarUrl} />
          <div className={classes.login}>{login}</div>
        </div>
      </a>
      <style jsx>{`
        a {
          cursor: default;
          text-decoration: none;
          color: black;
        }
      `}</style>
    </div>
  );
});
