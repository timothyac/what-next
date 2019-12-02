import Link from "next/link";
import Icon from "./Icon";
import NavLink from "./NavLink";

const Navbar = () => (
  <div className="container pt nav-grid">
    <Icon />
    <div className="nav-flex-center">
      <ul>
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="/submit">Submit</NavLink>
        </li>
        <li>
          <a
            href="https://github.com/SunstroUS/what-next"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
    </div>

    <style jsx>{`
      .pt {
        padding-top: 30px;
      }

      .nav-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }

      .nav-flex-center {
        display: flex;
        justify-content: center;
      }

      ul {
        margin: 0px;
        padding: 0px;
        list-style: none;
        display: flex;
      }

      ul li {
        font-size: 14px;
        margin-right: 30px;
      }

      ul li a {
        color: rgb(153, 153, 153);
        text-decoration: none;
      }

      ul li a:hover {
        color: #fff;
        transition: color 0.2s ease;
      }
    `}</style>
  </div>
);

export default Navbar;
