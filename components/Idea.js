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

const generateNewIdea = () => {
  let numberOfIdeas = array.length;
  let randomIdea = Math.floor(Math.random() * numberOfIdeas);
  return array[randomIdea];
};

const Idea = () => (
  <div>
    <div className="card">
      <p>{generateNewIdea().name}</p>
    </div>

    <style jsx>{`
      .card {
        border: 2px solid rgb(51, 51, 51);
        border-radius: 10px;
        padding: 2rem;
      }

      .card:hover {
        cursor: pointer;
        transition: border 0.2s ease 0s;
        border: 2px solid #fff;
      }
    `}</style>
  </div>
);

export default Idea;
