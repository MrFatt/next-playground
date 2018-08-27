import MyLayout from "../components/MyLayout";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Members from "../components/Members";

export default () => (
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
        <MyLayout>
          <Members nodes={data.organization.members.nodes}/>
        </MyLayout>
      );
    }}
  </Query>
);
