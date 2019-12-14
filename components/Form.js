import React from "react";

class Form extends React.Component {
  state = {
    title: null,
    description: null,
    url: null,
    author: null
  };
  //onClick={props.submitIdea}
  render() {
    return (
      <form className="card container">
        <div className="form-info">
          <input placeholder="Idea Title" />
          <input placeholder="Url" />
          <input placeholder="Author" />
        </div>
        <textarea placeholder="Description of the idea.." />
        <div className="btn">
          <span>submit</span>
        </div>
        <style jsx>{`
          input,
          textarea {
            background: black;
            color: white;
            font-size: 14px;
            border: none;
            border-bottom: 1px solid rgb(51, 51, 51);
          }

          textarea {
            margin-top: 15px;
            width: 100%;
            height: 17px;
            transition: height 0.2s ease;
          }

          input:focus,
          textarea:focus {
            outline: 0;
            border-bottom: 1px solid white;
          }

          textarea:focus {
            height: 90px;
          }

          .card {
            margin-top: 2rem;
            max-width: 100%;
            border: 2px solid rgb(51, 51, 51);
            border-radius: 10px;
            padding: 1rem 2rem;
            text-align: center;
          }

          .form-info {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            grid-gap: 20px;
          }

          .btn {
            margin-top: 5px;
            color: gray;
            border: 2px solid rgb(51, 51, 51);
            border-radius: 5px;
            font-size: 14px;
            width: 100px;
            height: 25px;
            text-align: center;
            webkit-touch-callout: none;
            -webkit-user-select: none;
            user-select: none;
          }

          .btn:hover {
            transition: border 0.2s ease 0s;
            border: 2px solid #fff;
            color: white;
            cursor: pointer;
          }

          @media only screen and (max-width: 600px) {
            form {
              margin-right: auto;
              margin-left: auto;
              max-width: 960px;
              padding-right: 10px;
              padding-left: 10px;
            }

            .form-info {
              display: grid;
              grid-template-columns: 1fr;
              grid-gap: 20px;
            }

            textarea {
              margin-top: 17px;
              width: 99%;
            }

            .btn {
              width: 100%;
            }
          }
        `}</style>
      </form>
    );
  }
}

export default Form;
