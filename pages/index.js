import React from "react";
import Layout from "../components/Layout";
import Idea from "../components/Idea";

const array = [
  {
    name: "project generator",
    description:
      "Generate random projects for people who can't think of projects to start."
  },
  {
    name: "short-cut generator",
    description: "Generate random short-cuts based on cut."
  },
  {
    name: "generator generator",
    description:
      "Generate a random generator so that you can generate new generators"
  },
  {
    name: "Number generator",
    description: "Generate random numbers based on nothing."
  }
];

// Generates new ideas
const generateNewIdea = () => {
  let numberOfIdeas = array.length;
  let randomIdea = Math.floor(Math.random() * numberOfIdeas);
  return array[randomIdea];
};

export default class Index extends React.Component {
  state = {
    idea: {
      name: "test"
    }
  };

  // Catches use pressing space bar button
  catchSpaceButton = event => {
    if (event.keyCode === 32) this.setState({ idea: generateNewIdea() });
  };

  componentDidMount() {
    // Generate new idea on mount
    this.setState({ idea: generateNewIdea() });

    // Listen for keydown events
    document.addEventListener("keydown", this.catchSpaceButton, false);
  }

  componentWillUnmount() {
    // Remove event listener
    document.removeEventListener("keydown", this.catchSpaceButton, false);
  }

  render() {
    return (
      <Layout>
        <div>
          <h1>What Next?</h1>
          <p>
            Press <span className="highlight">space</span> to generate a new
            project idea!
          </p>
          <Idea idea={this.state.idea} />
        </div>
      </Layout>
    );
  }
}
