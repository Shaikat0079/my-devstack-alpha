import Logo from "../assets/logo-text.png";
const Nav = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full">
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
          <button className="btn btn-soft btn-secondary bg-purple-400 mx-5">Sign In</button>
          <button className="btn btn-outline btn-secondary bg-red-400">Sign Up</button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
