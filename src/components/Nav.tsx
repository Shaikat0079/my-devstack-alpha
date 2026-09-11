import Logo from "../assets/logo-text.png";
const Nav = () => {
  return (
    <div>
      <nav className="flex justify-between container mx-auto">
        <img src={Logo} alt="" />
        <ul className="flex justify-between gap-5">
          <li>Home</li>
          <li>Technologies</li>
          <li>projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div>
          <button className="btn btn-soft btn-secondary">Sign In</button>
          <button className="btn btn-outline btn-secondary">Sign Up</button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
