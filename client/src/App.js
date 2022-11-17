import React from 'react'
import PostCreate from './components/PostCreate';
import PostList from './components/PostList';
function App() {
  return (
    <div>
      <h1>Blog app</h1>
      <PostCreate />
      <PostList />
    </div>
  );
}

export default App;
