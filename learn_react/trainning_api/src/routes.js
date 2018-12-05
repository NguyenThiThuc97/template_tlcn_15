import React from 'react'
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import HomePage from './pages/homePage/homePage';
import ProductListPage from './pages/productListPage/productListPage';
import ProductActionPage from './pages/productActionPage/productActionPage';
import CompanyActionPage from './pages/company/companyActionPage/companyActionPage'
import CompanyListPage from './pages/company/companyListPage/companyListPage'
import CustomerListPage from './pages/customer/customerListPage/customerListPage';
import CustomerActionPage from './pages/customer/customerActionPage/customerActionPage';

const routes = [
    {
        path : "/",
        exact : true,
        main : () => <HomePage/>
    },
    {//product
        path : '/product-list',
        exact : false,
        main : () => <ProductListPage/>
    },
    {
        path : "/product/add",
        exact : false,
        main : () => <ProductActionPage/>
    },
    {
        path : "/product/:id/edit",
        exact : false,
        main : ({match}) => <ProductActionPage match = {match}/>
    },
    {//company
        path : '/company-list',
        exact : false,
        main : () => <CompanyListPage/>
    },
    {
        path : "/company/add",
        exact : false,
        main : ({history}) => <CompanyActionPage history = {history}/>
    },
    {
        path : "/company/edit/:id",
        exact : false,
        main : ({match, history}) => <CompanyActionPage match = {match} history = {history}/>
    },
    {//customer
        path : '/customer-list',
        exact : false,
        main : () => <CustomerListPage/>
    },
    {
        path : "/customer/add",
        exact : false,
        main : ({history}) => <CustomerActionPage history = {history}/>
    },
    {
        path : "/customer/edit/:id",
        exact : false,
        main : ({match, history}) => <CustomerActionPage match = {match} history = {history}/>
    },
    {
        path : "",
        exact : false,
        main : () => <NotFoundPage/>
    }
]

export default routes