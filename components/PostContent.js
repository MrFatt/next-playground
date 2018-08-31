const markdownIt = require("markdown-it");

const PostContent = props => {
  const markdownConfig = {
    html: true
  };
  const postHTML = markdownIt(markdownConfig).render(props.data.text);

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
