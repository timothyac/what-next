import Head from "next/head";
import Helmet from "./Helmet";
import Navbar from "./Navbar";

const Layout = props => (
  <div>
    <Head>
      <title>What Next?</title>
    </Head>
    <Helmet />
    <Navbar />
    <div className="container">{props.children}</div>
    <style global jsx>{`
      body {
        margin: 0;
        padding: 0;
        height: 100vh;
        font-size: 18px;
        font-weight: 300;
        line-height: 1.8;
        background-color: #000;
        color: #fff;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
      }

      h1 {
        font-weight: 700;
        margin: 0px;
      }

      p {
        margin: 0px;
        margin-bottom: 20px;
        font-size: 14px;
        line-height: 24px;
        color: rgb(204, 204, 204);
      }

      .container {
        margin-right: auto;
        margin-left: auto;
        max-width: 960px;
        padding-right: 10px;
        padding-left: 10px;
      }

      .pt {
        padding-top: 30px;
      }

      .cyan {
        color: #79ffe1;
      }

      .blue {
        color: #0070f3;
      }

      .pink {
        color: #f81ce5;
      }

      .purple {
        color: #7928ca;
      }

      .orange {
        color: #f5a623;
      }

      ::selection {
        background-color: #7a43a8;
        color: #fff;
      }
    `}</style>
  </div>
);

export default Layout;
