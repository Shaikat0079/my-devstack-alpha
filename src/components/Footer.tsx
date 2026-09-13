import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <hr className="my-15 border-gray-200" />
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <img src={Logo} alt="" />
          <p>
            Created tools,technologies, and resources for developers building
            modern software.
          </p>
          <nav className="flex gap-10">
            <a className="link link-hover">Github</a>
            <a className="link link-hover">Twitter</a>
            <a className="link link-hover">LinkedIn</a>
          </nav>
        </aside>
        <nav>
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Technologies</a>
          <a className="link link-hover">Design</a>
          {/* <a className="link link-hover">Advertisement</a> */}
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
          {/* <a className="link link-hover">Press kit</a> */}
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <hr className="border-gray-200 my-15" />
      <div className="text-gray-400 text-sm my-5 flex justify-between">
        <p>&copy; 2026 Dev Stack. All rights reserved.</p>
        <pre>Privacy Terms</pre>
      </div>
    </div>
  );
};

export default Footer;
