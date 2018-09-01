const markdownIt = require("markdown-it");

const PostContent = props => {
  const markdownConfig = {
    html: true
  };

  const postHTML = markdownIt(markdownConfig).render(props.text);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: postHTML }} />
      <style global jsx>
        {`
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
            font-size: 18px;
            line-height: 1.58;
            letter-spacing: -0.003em;
          }
        `}
      </style>
    </div>
  );
};

export default PostContent;
