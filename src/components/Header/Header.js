import "./Header.css";
import url from "./images/BVM_logo.png";
import udaan from "./images/udaann.png";
const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      {/* <div className="bvmlogo">
        <img src={url} />
      </div> */}
      {/* <div className="tag">Udaan'22</div> */}
      <div className="udann">
        <img src={udaan}></img>
      </div>
      {/* <div className="udaanlogo">
        <img src={url} />
      </div> */}
    </span>
  );
};

export default Header;
