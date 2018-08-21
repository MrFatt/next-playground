import Link from "next/link";

const lintStyle = {
  marginRight: 15
};

const logoStyle = {
  maxHeight: 40,
  width: 82
};

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <img style={logoStyle} src="/static/logo.png" />
      </div>
      <div className="header-container">
        <Link href="/">
          <a style={lintStyle}>Home</a>
        </Link>
        <Link href={`${process.env.BACKEND_URL}/about`}>
          <a style={lintStyle}>About</a>
        </Link>
      </div>
      <style global jsx>{`
        .header-container {
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default Header;
