import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import {routes} from "./routes";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(item => {
                return <Route path={item.path} element={<item.element/>} key={item.path}/>
            })}
            <Route path="*" element={<Navigate to="/bio" replace />}></Route>
        </Routes>
    );
};

export default AppRouter;