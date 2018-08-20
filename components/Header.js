import Link from 'next/link';

const lintStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={lintStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={lintStyle}>About</a>
    </Link>
  </div>
);

export default Header;
