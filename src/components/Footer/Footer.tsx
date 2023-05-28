import './Footer.style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-content">
          <div className="footer-links">
            <span>Authors: </span>
            <a href="https://github.com/semoleg1986">semoleg1986</a>
            <span> | </span>
            <a href="https://github.com/NickIvn">NickIvn</a>
            <span> | </span>
            <a href="https://github.com/Uladziby">Uladziby</a>
          </div>
          <div className="footer-logo">
            <a href="https://rs.school/react/">
              <img src="https://rs.school/images/rs_school_js.svg" alt="Course Logo" />
            </a>
          </div>
          <div className="footer-year">&copy; 2023 GraphiQL. Final Task. All rights reserved. </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
