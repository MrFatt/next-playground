import MyLayout from "../components/MyLayout";
import PostContent from "../components/PostContent";

const Post = props => (
  <MyLayout>
    <PostContent {...props} />
  </MyLayout>
);

Post.getInitialProps = async req => {
  const query = req.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${query.id}`);
  const show = await res.json();

  return { show };
};

export default Post;
