import React, { Component } from 'react';
import HomePage from './pages/client/homePage/homePage';
import ContactPage from "./pages/client/contactPage/contactPage"

const RoutesClient = [
    {
        path : "/",
        exact : true,
        main : () => <HomePage/>
    },
    {
        path : "/contact",
        exact : false,  
        main : () => <ContactPage/>
    },
    
]

export default RoutesClient;