import { createContext, useState } from "react";

export const PostsContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const globalState = {
    posts: posts,
    setPosts: setPosts,
    title:"hola!"
  };

  return (
    <PostsContext.Provider value={globalState}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostProvider;
