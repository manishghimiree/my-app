import React from "react";

const Blog = () => {
  const [posts, setPosts] = React.useState([
    {
      id: 1,
      title: "My First Blog Post",
      content: "This is my first blog post. Welcome to my blog!",
      date: "April 1, 2023",
    },
    {
      id: 2,
      title: "The Importance of React Hooks",
      content:
        "React Hooks have revolutionized the way we write React components. In this post, I discuss the importance of React Hooks and how they can improve your development process.",
      date: "April 10, 2023",
    },
    {
      id: 3,
      title: "My Favorite JavaScript Libraries",
      content:
        "In this post, I share some of my favorite JavaScript libraries and explain why they are useful.",
      date: "April 20, 2023",
    },
  ]);

  return (
    <div>
      <h1>My Blog</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>{post.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
