const NewIdeaBtn = props => {
  return (
    <div>
      <div className="btn" onClick={props.generateNewIdea}>
        <h2>next</h2>
      </div>

      <style jsx>{`
        h2 {
          margin: 0;
        }

        .btn {
          margin-top: 2rem;
          border: 2px solid rgb(51, 51, 51);
          color: gray;
          border-radius: 10px;
          width: 100px;
          text-align: center;
          webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
        }

        .btn:hover {
          color: white;
          transition: border 0.2s ease 0s;
          border: 2px solid #fff;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default NewIdeaBtn;
