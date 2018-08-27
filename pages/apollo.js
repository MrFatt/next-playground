import { Query } from "react-apollo";
import gql from "graphql-tag";

const ExchangeRates = () => (
  <Query
    query={gql`
      {
        organization(login: "TWNTF") {
          members(first: 100) {
            nodes {
              id
              login
              name
              bio
              email
              avatarUrl
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
          {data.organization.members.nodes.map(node => (
            <div>{`${node.id},${node.login},${node.name},${node.email},${
              node.bio
            }`}</div>
          ))}
        </div>
      );
    }}
  </Query>
);

export default ExchangeRates;
