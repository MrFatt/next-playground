import MyLayout from "../components/MyLayout";
import PostContent from "../components/PostContent";
import { Query } from "react-apollo";
import { withRouter } from "next/router";
import gql from "graphql-tag";

const getPath = name => `master:docs/${name}/README.md`;

export default withRouter(props => {
  const { name } = props.router.query;
  return (
    <Query
      query={gql`
        {
          organization(login: "TWNTF") {
            repository(name: "Translations") {
              object(
                expression: "${getPath(name)}"
              ) {
                ... on Blob {
                  text
                }
              }
            }
          }
        }
      `}
    >
      {({ data }) => {
        return (
          <MyLayout>
            <PostContent data={data.organization.repository.object} />
          </MyLayout>
        );
      }}
    </Query>
  );
});
