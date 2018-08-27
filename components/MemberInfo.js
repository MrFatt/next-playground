import { Avatar } from "@material-ui/core";

export default props => {
  const {
    member: { login, avatarUrl }
  } = props;

  return (
    <div>
      <a href={`https://github.com/${login}`}>
        <div className="member-container">
          <Avatar src={avatarUrl} />
          <div className="member-login">{login}</div>
        </div>
      </a>
      <style jsx>{`
        a {
          cursor: default;
          text-decoration: none;
          color: black;
        }

        .member-container {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .member-login {
          margin-left: 15px;
        }

        .member-login:hover {
          color: blue;
          opacity: 0.6;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
