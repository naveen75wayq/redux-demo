import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AddPostForm from './features/posts/AddPostForm';
import EditPostForm from './features/posts/EditPostForm';
import PostList from './features/posts/PostList';
import Layout from './components/Layout';
import UserPage from './features/users/UserPage';
import UsersList from './features/users/UsersList';
// import TodoList from './features/todos/TodoList';


function App() {


  return (
    <Routes>
    <Route path="/" element={<Layout />}>

      <Route index element={<PostList />} />

      <Route path="post">
        <Route index element={<AddPostForm />} />
      
        <Route path="edit/:postId" element={<EditPostForm />} />
      </Route>

      <Route path="user">
        <Route index element={<UsersList />} />
        <Route path=":userId" element={<UserPage />} />
      </Route>

      {/* Catch all - replace with 404 component if you want */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Route>
  </Routes>
  );
}

export default App;
