import React from 'react'
import CommentCreate from './components/CommentCreate';
import PostCreate from './components/PostCreate';
import PostList from './components/PostList';
import CommentList from './components/CommentList';
function App() {
  return (
    <div>
      <div className='container'>
        <h1>Create Post</h1>
        <PostCreate />
        <hr />
        <PostList />
      </div>
    </div>
  );
}

export default App;
