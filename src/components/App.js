import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Container } from 'react-bootstrap'

import Dashboard from './Dashboard'
import Signup from './Signup'
import Login from './Login'
import ForgotPassword from './ForgotPasword'
import UpdateProfile from './UpdateProfile'

import PrivateRoute from './PrivateRoute' //! private HOC

import { AuthProvider } from '../context/AuthContext' // context

// App componenet
const App = () => {
    return (
        <Container 
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Router>
                    <AuthProvider>
                        <Routes>
                            <Route
                                path="/"
                                element={<PrivateRoute component={Dashboard} />}
                            />
                            <Route path="/update-profile" element={<PrivateRoute component={UpdateProfile}/>}/>
                            <Route path="/signup" element={<Signup/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/forgot-password" element={<ForgotPassword/>} />
                        </Routes>
                    </AuthProvider>
                </Router>
            </div>
        </Container>
    )
}

export default App
