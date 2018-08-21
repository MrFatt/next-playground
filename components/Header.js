import Link from "next/link";

const lintStyle = {
  marginRight: 15
};

const Header = () => {
  const backendUrl = process.env.BACKEND_URL;
  return (
    <div>
      <Link href="/" as={backendUrl + "/about"}>
        <a style={lintStyle}>Home</a>
      </Link>
      <Link href="/about" as={backendUrl + "/about"}>
        <a style={lintStyle}>About</a>
      </Link>
    </div>
  );
};

export default Header;
