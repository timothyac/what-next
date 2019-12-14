import Layout from "../components/Layout";
import Form from "../components/Form";

const submit = () => (
  <Layout>
    <div className="pt mb">
      <h1>What Next? Submit an idea!</h1>
      <div className="card-holder">
        <div className="card">
          <h2>Be Concise</h2>
          <p>
            Try to summarize the point and the tools to work with. Point the
            user in the right direction and let them
            <span className="orange"> discover </span>the rest.
          </p>
        </div>
        <div className="card">
          <h2>Be Helpful</h2>
          <p>
            No one can predict the future, but this site is aimed at people who
            are just starting their careers. Let's help them discover
            <span className="cyan"> new </span>
            technologies with a great community.
          </p>
        </div>
        <div className="card">
          <h2>Be Original</h2>
          <p>
            Push the envelope. Create a new trend. Very easy to think up a to-do
            app, so let's do better than that. Let's dream big and be
            <span className="pink"> ambitious</span>.
          </p>
        </div>
      </div>
      <div className="submit-form container">
        <Form />
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
        padding: 1rem 2rem;
        text-align: center;
        margin-right: auto;
        margin-left: auto;
      }

      @media only screen and (max-width: 800px) {
        .card-holder {
          grid-template-columns: 1fr 1fr 1fr;
        }

        .card {
          max-width: 60%;
        }
      }

      @media only screen and (max-width: 600px) {
        .card-holder {
          grid-template-columns: 1fr;
        }

        .card {
          max-width: 75%;
        }
      }
    `}</style>
  </Layout>
);

export default submit;
