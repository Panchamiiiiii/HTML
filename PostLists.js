import React, { useEffect, useState } from "react";

function PostLists() {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);
  function handleDel(delItem) {
    setPosts((prevPosts) =>
      prevPosts.filter((post) => post.id !== delItem)
    );
  }
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Issue!!");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched successfully!!!", data);
        setPosts(data);
      })
      .catch((err) => {
        console.log("Oops issue with the url!!", err);
      });
  }, []);
  return (
    <div className="container">
      <h1 className="display-1">Posts</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDel(post.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default PostLists;