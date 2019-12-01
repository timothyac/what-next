import React from "react";
import Layout from "../components/Layout";
import Idea from "../components/Idea";

const array = [
  {
    name: "project generator"
  },
  {
    name: "short-cut generator"
  },
  {
    name: "short generator"
  },
  {
    name: "cut generator"
  },
  {
    name: "generator generator"
  },
  {
    name: "number generator"
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
          <p>Press space to generate a new project idea!</p>
          <Idea idea={this.state.idea} />
        </div>
      </Layout>
    );
  }
}
