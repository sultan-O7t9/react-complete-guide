import axios from "axios";
import React, { useEffect, useState } from "react";

import "./FullPost.css";

//By passing posts from parent to this component
// const FullPost = (props) => {
//   let post;
//   if (props.id) {
//     const index = props.posts.findIndex((post) => post.id === props.id);
//     const selectedPost = props.posts[index];
//     post = (
//       <div className="FullPost">
//         <h1>{selectedPost.title}</h1>
//         <p>{selectedPost.body}</p>
//         <div className="Edit">
//           <button className="Delete">Delete</button>
//         </div>
//       </div>
//     );
//   } else post = <p>Please select a Post!</p>;
//   return post;
// };
//.
//.
//.
//.
//.
//By fetching the selected post from server based on given props.id
const FullPost = (props) => {
  const [selectedPost, setSelectedPost] = useState(null);
  useEffect(() => {
    if (props.id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
        .then((post) => {
          console.log(post);
          setSelectedPost(post.data);
        });
    }
  }, [props.id]);

  const delPostHandler = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
      .then((response) => console.log(response));
  };

  let post = <p>Please select a Post!</p>;
  if (props.id) post = <p>Loading...</p>;
  if (selectedPost) {
    post = (
      <div className="FullPost">
        <h1>{selectedPost.title}</h1>
        <p>{selectedPost.body}</p>
        <div className="Edit">
          <button className="Delete" onClick={delPostHandler}>
            Delete
          </button>
        </div>
      </div>
    );
  }

  return post;
};
//.
//.
//.
//.
//.
// class FullPost extends Component {
//     render () {
//         let post = <p>Please select a Post!</p>;
//         post = (
//             <div className="FullPost">
//                 <h1>Title</h1>
//                 <p>Content</p>
//                 <div className="Edit">
//                     <button className="Delete">Delete</button>
//                 </div>
//             </div>

//         );
//         return post;
//     }
// }

export default FullPost;
