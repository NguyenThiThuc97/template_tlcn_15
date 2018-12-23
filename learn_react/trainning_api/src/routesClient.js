import React, { Component } from 'react';
import HomePage from './pages/client/homePage/homePage';
import ContactPage from "./pages/client/contactPage/contactPage"
import ProductCategoryPage from './pages/client/productCategoryPage/productCategoryPage'
import CartPage from './pages/client/cartPage/cartPage';

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
    {
        path : "/cart",
        exact : false,
        main : () => <CartPage />
    },
]

export default RoutesClient;