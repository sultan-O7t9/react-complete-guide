import axios from "axios";
import React, { useState, useEffect } from "react";

import "./NewPost.css";

const NewPost = () => {
  const [state, setState] = useState({
    title: "",
    content: "",
    author: "Max",
  });

  const postData = () => {
    const post = {
      title: state.title,
      content: state.content,
      author: state.author,
      id: new Date().getTime(),
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then((successResponse) => console.log(successResponse));
  };

  return (
    <div className="NewPost">
      <h1>Add a Post</h1>
      <label>Title</label>
      <input
        type="text"
        value={state.title}
        onChange={(event) => setState({ ...state, title: event.target.value })}
      />
      <label>Content</label>
      <textarea
        rows="4"
        value={state.content}
        onChange={(event) =>
          setState({ ...state, content: event.target.value })
        }
      />
      <label>Author</label>
      <select
        value={state.author}
        onChange={(event) => setState({ ...state, author: event.target.value })}
      >
        <option value="Max">Max</option>
        <option value="Manu">Manu</option>
      </select>
      <button onClick={postData}>Add Post</button>
    </div>
  );
};

// class NewPost extends Component {
//   state = {
//     title: "",
//     content: "",
//     author: "Max",
//   };

//   render() {
//     return (
//       <div className="NewPost">
//         <h1>Add a Post</h1>
//         <label>Title</label>
//         <input
//           type="text"
//           value={this.state.title}
//           onChange={(event) => this.setState({ title: event.target.value })}
//         />
//         <label>Content</label>
//         <textarea
//           rows="4"
//           value={this.state.content}
//           onChange={(event) => this.setState({ content: event.target.value })}
//         />
//         <label>Author</label>
//         <select
//           value={this.state.author}
//           onChange={(event) => this.setState({ author: event.target.value })}
//         >
//           <option value="Max">Max</option>
//           <option value="Manu">Manu</option>
//         </select>
//         <button onClick={0}>Add Post</button>
//       </div>
//     );
//   }
// }

export default NewPost;
