import React from 'react';
import './App.css';
import Login from './components/authentication/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Layout from './components/layout/layout';
import CourseList from './components/courses/CourseList';
import CourseDetails from './components/courses/CourseDetails';
import UserList from './components/users/UserList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path="dashboard" element={<Layout><Dashboard/></Layout>} />
            <Route path="courses" element={<Layout><CourseList/></Layout>} />
            <Route path="courses-details/:id" element={<Layout><CourseDetails/></Layout>} />
            <Route path="users" element={<Layout><UserList/></Layout>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
