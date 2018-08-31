const updateImageRef = (text, name) => {
  const imageRegex = new RegExp(/\!\[(.*)\]\(images\/(.*)\)/g);

  let regExpExecArray = imageRegex.exec(text);
  while (regExpExecArray) {
    text = text.replace(
      regExpExecArray[0],
      `![${
        regExpExecArray[1]
      }](https://github.com/TWNTF/Translations/raw/master/docs/${encodeURI(
        name
      )}/images/${regExpExecArray[2]}/)`
    );
    regExpExecArray = imageRegex.exec(text);
  }
  return text;
};

const updatePostRef = text => {
  const postRegex = new RegExp(/\[(.*)\]\(\.\.\/(.*)\/README\.md\)/);

  let regExpExecArray = postRegex.exec(text);
  while (regExpExecArray) {
    text = text.replace(
      regExpExecArray[0],
      `[${regExpExecArray[1]}](${regExpExecArray[2]})`
    );
    regExpExecArray = postRegex.exec(text);
  }
  return text;
};

export default (text, name) => {
  let updatedText = updateImageRef(text, name);
  return updatePostRef(updatedText);
};
