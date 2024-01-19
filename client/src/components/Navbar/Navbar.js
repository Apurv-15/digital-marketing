// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'

const Navbar = () => {
  return (
    <nav>
      <div>
        {/* <Brand /> */}
      </div>
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
