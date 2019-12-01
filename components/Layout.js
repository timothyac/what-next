import Head from "next/head";
import Navbar from "./Navbar";

const Layout = props => (
  <div>
    <Head>
      <title>What Next?</title>
    </Head>
    <Navbar />
    {props.children}
  </div>
);

export default Layout;
