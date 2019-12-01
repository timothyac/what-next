import Link from "next/link";

const Navbar = () => (
  <div className="container pt flex-center ">
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/submit">
          <a>Submit</a>
        </Link>
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

    <style jsx>{`
      .pt {
        padding-top: 30px;
      }

      .flex-center {
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
