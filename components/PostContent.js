const markdownIt = require("markdown-it");

const PostContent = props => {
  const markdownConfig = {
    html: true
  };

  const imageRegex = new RegExp(/\!\[(.*)\]\(images\/(.*)\)/g);
  let text = props.data.text;
  let regExpExecArray = imageRegex.exec(text);
  while (regExpExecArray) {
    text = text.replace(
      regExpExecArray[0],
      `![${
        regExpExecArray[1]
      }](https://github.com/TWNTF/Translations/raw/master/docs/${encodeURI(
        props.name
      )}/images/${regExpExecArray[2]}/)`
    );
    regExpExecArray = imageRegex.exec(text);
  }

  const postHTML = markdownIt(markdownConfig).render(text);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: postHTML }} />
      <style global jsx>
        {`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: "Open Sans", "Microsoft YaHei", "微软雅黑", STXihei,
              "华文细黑", sans-serif;
          }
          p,
          ul,
          li,
          a {
            font-family: "Roboto", "Microsoft YaHei", "微软雅黑", STXihei,
              "华文细黑", serif;
          }

          img {
            max-width: 1000px;
          }

          blockquote {
            padding: 0 1em;
            color: #6a737d;
            border-left: 0.25em solid #dfe2e5;
            margin-left: 0;
            margin-bottom: 16px;
            margin-top: 0;
          }

          p,
          li {
            word-wrap: break-word;
            font-size: 21px;
            line-height: 1.58;
            letter-spacing: -0.003em;
          }
        `}
      </style>
    </div>
  );
};

export default PostContent;
