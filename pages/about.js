import Layout from "../components/Layout";

const about = () => (
  <Layout>
    <div className="pt">
      <h1>What Next? A project idea generator!</h1>
      <p>
        As a younger developer, I often struggle between wanting to do cool
        things but not having the creativity to match it. It's easy to watch 'x'
        tutorial on youtube or follow a new technology's documentation. The hard
        part comes when you actually want to do something more than a to-do app.
        Best example is this site itself. I had wanted to learn Next.js for a
        while, but didn't know what project to start. Luckily I figured, why not
        make a web app that generates ideas for you!
      </p>
      <br />
      <h1>Under the hood</h1>
      <p>
        This site is still in the early stages, so I'm still very open to trying
        and learning new things. Core part of this project was to help me learn
        Next.js, a backend javascript framework that renders react on the server
        rather than the client. I also plan to integrate AWS for storing the
        ideas. More specifically, I will use DynamoDB, Lambda functions, and API
        Gateway. Also need to consider how I'm going to approach the submittal
        process. I'd love for ideas to be submitted. No matter what, this will
        always be open-source, under a MIT license.
      </p>
      <br />
      <h1>Want to contribute?</h1>
      <p>
        Feel free to reach on Twitter, or leave an issue/pull request on the
        github. As mentioned, I'm not sure how I'm going to set up idea
        submittal, but I do plan to add that at some point.
      </p>
    </div>
  </Layout>
);

export default about;
