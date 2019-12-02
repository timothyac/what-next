import { withRouter } from "next/router";
import Link from "next/link";

const ActiveLink = ({ children, router, href }) => (
  <Link href={href}>
    <a>
      {children}
      <style jsx>{`
        a {
          font-size: 14px;
          text-decoration: none;
          transition: color 0.2s ease;
          color: ${router.pathname === href
            ? "white"
            : "rgb(153, 153, 153)"}; /* If we are on the page, highlight the link */
        }
        a:hover {
          color: white;
        }
      `}</style>
    </a>
  </Link>
);

export default withRouter(ActiveLink);
