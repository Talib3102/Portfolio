const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="flex flex-col justify-center">
        <a className="hover:text-white transition-colors" href="mailto:talibmohammadnaqiansari@gmail.com">talibmohammadnaqiansari@gmail.com</a>
      </div>
      <div className="socials">
        <a className="icon" href="https://github.com/Talib3102" target="_blank" rel="noreferrer" aria-label="GitHub profile">GH</a>
        <a className="icon" href="https://www.linkedin.com/in/abutalib-java" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">in</a>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-center md:text-end">© {new Date().getFullYear()} Abu Talib Ansari. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
