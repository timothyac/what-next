import React from "react";
import Axios from "axios";
import Layout from "../components/Layout";
import Idea from "../components/Idea";
import NewIdeaBtn from "../components/NewIdeaBtn";

export default class Index extends React.Component {
  state = {
    ideas: [],
    idea: {
      name: "loading.."
    }
  };

  // Catches use pressing space bar button
  catchSpaceButton = event => {
    if (event.keyCode === 32) this.generateNewIdea();
  };

  // Generates new ideas
  generateNewIdea = () => {
    let ideas = this.state.ideas;
    let numberOfIdeas = ideas.length;
    let randomIdea = Math.floor(Math.random() * numberOfIdeas);
    this.setState({ idea: ideas[randomIdea] });
  };

  fetchIdeas = async () => {
    //https://m9yoh7rz1m.execute-api.us-east-1.amazonaws.com/prod

    try {
      const res = await Axios.get(
        "https://m9yoh7rz1m.execute-api.us-east-1.amazonaws.com/prod/ideas"
      );
      await this.setState({ ideas: res.data });
      await this.generateNewIdea();
    } catch (error) {
      console.warn(`An error has occured ${error}`);
    }
  };

  componentDidMount() {
    this.fetchIdeas();

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
        <div className="pt">
          <h1>What Next?</h1>
          <p>
            Press <span className="highlight">space</span> to generate a new
            project idea!
          </p>
          <Idea idea={this.state.idea} />
          <NewIdeaBtn generateNewIdea={this.generateNewIdea} />
        </div>
      </Layout>
    );
  }
}
