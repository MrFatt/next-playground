import { withRouter } from "next/router";

import MyLayout from "../components/MyLayout";

const Content = ({show}) => (
  <div>
    <h1>{show.name}</h1>
    <p>{show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    <img src={show.image.medium}/>
  </div>
);

const Post = props => (
  <MyLayout>
    <Content {...props} />
  </MyLayout>
);

Post.getInitialProps = async ({query}) => {
  const res = await fetch(`https://api.tvmaze.com/shows/${query.id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default withRouter(Post);
