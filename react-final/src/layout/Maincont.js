import { Route, Routes } from 'react-router-dom';
import React from "react";
import Home from '../pages/Home';
import User from '../pages/User';
import List from '../pages/List';
import Hooks from '../pages/Hooks';
import RegistrationPage from '../pages/RegistrationPage';
import LoginPage from '../pages/LoginPage';
import UserListPage from '../pages/UserListPage';


export default class MainLayout extends React.Component {

    render() {
        return (
            <div className="thbs-main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/hooks" element={<Hooks />} />
                    <Route path="/reg" element={<RegistrationPage />}/>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/listuser" element={<UserListPage/>} />
                </Routes>
            </div>
        )
    }
}