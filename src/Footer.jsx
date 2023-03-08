const Footer = (props) => {
  return (
    <div className="footer-container">
      <small
        style={
          props.color ? { color: "var(--bg-color-two)" } : { color: "white" }
        }
        className="footer"
      >
        Copyright © 2023 fos.com
      </small>
    </div>
  );
};

export default Footer;
