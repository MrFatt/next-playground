import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
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
    maxHeight: 140
  },
  media: {
    width: "100%",
    maxWidth: 140
  },
  content: {
    lineClamp: 3,
    boxOrient: "vertical",
    display: "box",
    overflow: "hidden"
  }
};

export default withStyles(styles)(props => {
  const {
    classes,
    show: {
      image: { medium },
      summary,
      name,
      id
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
        <CardContent>
          <Typography gutterBottom variant="title" component="h2">
            {name}
          </Typography>
          <Typography component="p" className={classes.content}>
            {summary.replace(/<[/]?[pb]>/g, "")}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
});
