import fetch from "isomorphic-unfetch";

import MyLayout from "../components/MyLayout";
import PostOverview from "../components/PostOverview";

const Index = ({ shows }) => (
  <MyLayout>
    <h1>Batman TV Shows</h1>
    <ul>
      {shows.map(({ show }) => (
        <PostOverview key={show.id} show={show} />
      ))}
    </ul>
    <style global jsx>{`
      h1,
      a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }
    `}</style>
  </MyLayout>
);

Index.getInitialProps = async () => {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`show data fetched. Count: ${data.length}`);

  return {
    shows: data
  };
};

export default Index;
