import Head from "next/head";
import Navbar from "./Navbar";

const Layout = props => (
  <div>
    <Head>
      <title>What Next?</title>
    </Head>
    <Navbar />
    <div className="container">{props.children}</div>
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        height: 100vh;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.8;
        background-color: #000;
        color: #fff;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
      }

      h1 {
        font-weight: 700;
      }

      p {
        margin-bottom: 10px;
      }

      .container {
        margin-right: auto;
        margin-left: auto;
        max-width: 960px;
        padding-right: 10px;
        padding-left: 10px;
      }
    `}</style>
  </div>
);

export default Layout;
