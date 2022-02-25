import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      UDAAN'22
    </span>
  );
};

export default Header;
