import React, { Component } from 'react';
import HomePage from './pages/client/homePage/homePage';
import ContactPage from "./pages/client/contactPage/contactPage"
import ProductCategoryPage from './pages/client/productCategoryPage/productCategoryPage'

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
    {
        path : "/category/:id",
        exact : false,
        main : ({match, history}) => <ProductCategoryPage match = {match} history = {history}/>
    },
]

export default RoutesClient;