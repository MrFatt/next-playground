import MyLayout from "../components/MyLayout";
import PostContent from "../components/PostContent";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const getPath = title => title;

export default props => {
  const { title } = props;
  return (
    <Query
      query={gql`
        {
          organization(login: "TWNTF") {
            repository(name: "Translations") {
              resourcePath
              object(
                # expression: ${getPath(title)}
                expression: "master:docs/React Native at Airbnb/blogs/React-Native-at-Airbnb.md"
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
};
