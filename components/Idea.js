const Idea = props => {
  let { name, description } = props.idea;

  return (
    <div>
      <div className="idea">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>

      <style jsx>{`
        .idea {
          margin-top: 2rem;
          border: 2px solid rgb(51, 51, 51);
          border-radius: 10px;
          padding: 2rem;
        }

        .idea:hover {
          transition: border 0.2s ease 0s;
          border: 2px solid #fff;
        }
      `}</style>
    </div>
  );
};

export default Idea;
