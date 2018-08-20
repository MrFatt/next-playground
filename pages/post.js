import { withRouter } from "next/router";
import Markdown from "react-markdown";

import MyLayout from "../components/MyLayout";

const Content = props => (
  <div>
    <h1>{props.router.query.title}</h1>
    <div className="markdown">
      <Markdown
        source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
     `}
      />
    </div>
    <style jsx global>{`
      .markdown {
        font-family: "Arial";
      }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </div>
);

const Post = props => (
  <MyLayout>
    <Content {...props} />
  </MyLayout>
);

// Post.getInitialProps = async ({query}) => {
//   const res = await fetch(`https://api.tvmaze.com/shows/${query.id}`);
//   const show = await res.json();
//
//   console.log(`Fetched show: ${show.name}`)
//
//   return { show }
// }

export default withRouter(Post);
