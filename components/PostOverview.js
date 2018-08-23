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
    height: 160
  },
  media: {
    width: "100%",
    maxWidth: 140
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
    height: 20
  },
  summary: {
    lineClamp: 3,
    boxOrient: "vertical",
    display: "box",
    height: "auto",
    overflow: "hidden"
  },
  meta: {
    marginTop: 10,
    height: 20,
    "&:hover": {
      cursor: "default"
    }
  }
};

export default withStyles(styles)(props => {
  const {
    classes,
    show: {
      image: { medium },
      summary,
      name,
      id,
      premiered
    }
  } = props;

  const backendurl = process.env.BACKEND_URL;

  return (
    <Link href={`${backendurl}/post/${id}`}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={medium || "/static/GitHub-Mark-64px.png"}
        />
        <CardContent className={classes.content}>
          <Typography
            gutterBottom
            variant="title"
            component="h2"
            className={[classes.hover, classes.name]}
          >
            {name}
          </Typography>
          <Typography
            component="p"
            className={[classes.hover, classes.summary]}
          >
            {summary.replace(/<[/]?[pb]>/g, "")}
          </Typography>
          <Typography component="p" className={classes.meta}>
            premiered at: {premiered}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
});
