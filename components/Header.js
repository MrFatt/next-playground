import Link from "next/link";

const lintStyle = {
  marginRight: 15
};

const Header = () => {
  return (
    <div>
      <Link href="/">
        <a style={lintStyle}>Home</a>
      </Link>
      <Link href={`/${process.env.BACKEND_URL}/about`}>
        <a style={lintStyle}>About</a>
      </Link>
    </div>
  );
};

export default Header;
