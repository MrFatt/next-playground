import Link from "next/link";
import fetch from "isomorphic-unfetch";

import MyLayout from "../components/MyLayout";

const PostLink = ({ show }) => (
  <div>
    <li>
      <Link prefetch href={`/p/${show.id}`}>
        <a>{show.name}</a>
      </Link>
    </li>
    <style jsx>{`

    `}</style>
  </div>
);

const Index = ({ shows }) => (
  <MyLayout>
    <h1>Batman TV Shows</h1>
    <ul>
      {shows.map(({ show }) => (
        <PostLink key={show.id} show={show} />
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

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
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
