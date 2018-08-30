import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";

const styles = {
  card: {
    maxWidth: 1000,
    display: "flex",
    marginBottom: 30,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    height: 100
  },
  content: {
    paddingTop: 0,
    paddingBottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "&:last-child": { paddingBottom: 0 }
  },
  hover: {
    "&:hover": {
      color: "blue",
      opacity: 0.6,
      cursor: "pointer"
    }
  },
  name: {
    fontSize: "xx-large"
  },
  meta: {
    marginTop: 10,
    height: 20
  }
};

export default withStyles(styles)(props => {
  const {
    classes,
    data: { name, oid }
  } = props;

  const backendurl = process.env.BACKEND_URL;

  return (
    <Card elevation={0} className={classes.card}>
      <CardContent className={classes.content}>
        <Link href={`${backendurl}/post/${oid}`}>
          <Typography
            gutterBottom
            variant="title"
            component="h2"
            className={[classes.hover, classes.name]}
          >
            {name}
          </Typography>
        </Link>
        <Link href={`${backendurl}/post/${oid}`}>
          <Typography component="p" className={[classes.hover, classes.meta]}>
            阅读更多
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
});
