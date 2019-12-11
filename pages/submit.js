import Layout from "../components/Layout";

const submit = () => (
  <Layout>
    <div className="pt mb">
      <h1>What Next? Submit an idea!</h1>
      <div className="card-holder">
        <div className="card container">
          <h2>Be Concise</h2>
          <p>
            Try to summarize the point and the tools to work with. Point the
            user in the right direction and let them discover the rest.
          </p>
        </div>
        <div className="card container">
          <h2>Be Helpful</h2>
          <p>
            No one can predict the future, but since this site is aimed at
            people who are just starting their careers. Let's help them discover
            new technologies with a great community.
          </p>
        </div>
        <div className="card container">
          <h2>Be Original</h2>
          <p>
            Push the envelope. Create a new trend. Very easy to think up a to-do
            app, so let's do better than that. Let's dream big and be ambitious.
          </p>
        </div>
      </div>
    </div>
    <style jsx>{`
      h2 {
        text-align: center;
      }

      .card-holder {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }

      .card {
        margin-top: 2rem;
        max-width: 175px;
        border: 2px solid rgb(51, 51, 51);
        border-radius: 10px;
        padding: 2rem;
        text-align: center;
      }

      @media only screen and (max-width: 600px) {
        .card-holder {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </Layout>
);

export default submit;
