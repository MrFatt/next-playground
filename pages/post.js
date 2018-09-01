import MyLayout from "../components/MyLayout";
import PostContent from "../components/PostContent";
import apolloClient from "../lib/init-apollo";
import replaceRefs from "../utils";
import { withRouter } from "next/router";
import gql from "graphql-tag";

const getPath = name => `master:docs/${name}/README.md`;

class Post extends React.Component {

  static async getInitialProps({query}) {
    const data = await apolloClient().query({
      query: gql`
        {
          organization(login: "TWNTF") {
            repository(name: "Translations") {
              object(
                expression: "${getPath(query.name)}"
              ) {
                ... on Blob {
                  text
                }
              }
            }
          }
        }
      `
    });
    const sourceText = data.data.organization.repository.object.text;

    const text = await replaceRefs(sourceText,query.name);
    return { text };
  }

  render() {
    const {router:{query:name}, text} = this.props;
    return (
      <MyLayout>
        <PostContent name={name} text={text} />
      </MyLayout>
    );
  }
};

export default withRouter(Post);
