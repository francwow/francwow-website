const Footer = (props) => {
  return (
    <div className="footer-container">
      <span
        style={
          props.color ? { color: "var(--bg-color-two)" } : { color: "white" }
        }
        className="footer"
      >
        Copyright © 2023 fos.com
      </span>
    </div>
  );
};

export default Footer;
