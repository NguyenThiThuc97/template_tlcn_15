import React, { Component } from 'react';
import HomePage from './pages/client/homePage/homePage';
import ContactPage from "./pages/client/contactPage/contactPage"
import ProductCategoryPage from './pages/client/productCategoryPage/productCategoryPage'
import CartPage from './pages/client/cartPage/cartPage';
import UserInfor from './pages/profilePage/userInfor'
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import LogOutClient from './components/logout/logOutClient';
import ProductSearch from './pages/product/productSearchPage/productSearch';
import ProductAgeTypePage from './pages/client/productAgeTypePage/productAgeTypePage';

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
        path : "/age_type/:age_type",
        exact : false,
        main : ({match, history}) => <ProductAgeTypePage match = {match} history = {history}/>
    },
    {
        path : "/search/:id",
        exact : false,
        main : ({match, history}) => <ProductSearch match = {match} history = {history}/>
    },
    {
        path : "/edit-profile",
        exact : false,
        main : ({match, history}) => <UserInfor match = {match} history = {history}/>
    },
    {
        path : "/cart",
        exact : false,
        main : () => <CartPage />
    },
    //logout
    {
        path : "/logout",
        exact : false,
        main : ({history}) => <LogOutClient history = {history}/>
    },
    {
        path : "",
        exact : false,
        main : () => <NotFoundPage/>
    }
]

export default RoutesClient;