import { Query } from "react-apollo";
import gql from "graphql-tag";
import PostOverview from "./PostOverview";

export default () => (
  <Query
    query={gql`
      {
        organization(login: "TWNTF") {
          repository(name: "Translations") {
            object(expression: "master:docs") {
              ... on Tree {
                entries {
                  oid
                  name
                }
              }
            }
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) {
        console.log(error);
        return <p>error</p>;
      }
      return (
        <div>
          <h1>文章列表：</h1>
          <ul>
            {data.organization.repository.object.entries.map(entry => (
              <PostOverview key={entry.oid} data={entry} />
            ))}
          </ul>
          <style global jsx>{`
            ul {
              padding: 0;
            }

            li {
              list-style: none;
              margin: 5px 0;
            }
          `}</style>
        </div>
      );
    }}
  </Query>
);
