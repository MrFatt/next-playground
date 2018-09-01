import apolloClient from "../lib/init-apollo";
import gql from "graphql-tag";

const getOid = async name => {
  const data = await apolloClient().query({
    query: gql`
        {
          organization(login: "TWNTF") {
            repository(name: "Translations") {
              object(
                expression: "master:docs/${decodeURI(name)}"
              ) {
                oid 
              }
            }
          }
        }
      `
  });
  return data.data.organization.repository.object.oid;
};

const replaceImageRefs = (text, name) => {
  const imageRegex = new RegExp(/\!\[(.*)\]\(images\/(.*)\)/);
  let imageExecArray = imageRegex.exec(text);

  while (imageExecArray) {
    text = text.replace(
      imageExecArray[0],
      `![${
        imageExecArray[1]
      }](https://github.com/TWNTF/Translations/raw/master/docs/${encodeURI(
        name
      )}/images/${imageExecArray[2]}/)`
    );
    imageExecArray = imageRegex.exec(text);
  }
  return text;
};

const replacePostRefs = async text => {
  const postRegex = new RegExp(/\[(.*)\]\(\.\.\/(.*)\/README\.md\)/);
  let postExecArray = postRegex.exec(text);

  while (postExecArray) {
    const oid = await getOid(postExecArray[2]);
    text = text.replace(
      postExecArray[0],
      `[${postExecArray[1]}](${oid})`
    );
    postExecArray = postRegex.exec(text);
  }
  return text;
};

export default async (text,name) => {
  let replacedText = replaceImageRefs(text,name);

  replacedText = await replacePostRefs(replacedText);

  return replacedText;
};
