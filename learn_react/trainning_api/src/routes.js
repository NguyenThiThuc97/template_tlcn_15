import React from 'react'
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import HomePage from './pages/homePage/homePage';

import ProductListPage from './pages/product/productListPage/productListPage';
import ProductActionPage from './pages/product/productActionPage/productActionPage';

import CompanyActionPage from './pages/company/companyActionPage/companyActionPage'
import CompanyListPage from './pages/company/companyListPage/companyListPage'

import CustomerListPage from './pages/customer/customerListPage/customerListPage';
import CustomerActionPage from './pages/customer/customerActionPage/customerActionPage';

import EmployeeListPage from './pages/employee/employeeListPage/employeeListPage';
import EmployeeActionPage from './pages/employee/employeeActionPage/employeeActionPage';

import LoginPage from './pages/loginPage/loginPage'
import LogOut from './components/logout/logOut';

import ProductDetailListPage from './pages/product/productDetailListPage/productDetailListPage';
import ProductDetailActionPage from './pages/product/productDetailActionPage/productDetailActionPage'

import CategoryActionPage from './pages/category/categoryActionPage/categoryActionPage';
import CategoryListPage from './pages/category/categoryListPage/categoryListPage'
import UserInfor from './pages/profilePage/userInfor';
import OrdersPage from './pages/ordersPage/ordersPage';

const routes = [
    {
        path : "/admin",
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
        main : ({history}) => <ProductActionPage history = {history}/>
    },
    {
        path : "/product/edit/:id",
        exact : false,
        main : ({match, history}) => <ProductActionPage match = {match} history = {history}/>
    },
    {//product detail
        path : '/product-detail-list/:id',
        exact : false,
        main : ({match, history}) => <ProductDetailListPage match = {match} history = {history}/>
    },
    {
        path : "/product-detail/add/:product_id",
        exact : false,
        main : ({history, match}) => <ProductDetailActionPage history = {history} match = {match}/>
    },
    {
        path : "/product-detail/edit/:product_id/:size/:color",
        exact : false,
        main : ({match, history}) => <ProductDetailActionPage match = {match} history = {history}/>
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
    {//employee
        path : '/employee-list',
        exact : false,
        main : () => <EmployeeListPage/>
    },
    {
        path : "/employee/add",
        exact : false,
        main : ({history}) => <EmployeeActionPage history = {history}/>
    },
    {
        path : "/employee/edit/:id",
        exact : false,
        main : ({match, history}) => <EmployeeActionPage match = {match} history = {history}/>
    },
    {//category
        path : '/category-list',
        exact : false,
        main : () => <CategoryListPage/>
    },
    {
        path : "/category/add",
        exact : false,
        main : ({history}) => <CategoryActionPage history = {history}/>
    },
    {
        path : "/category/edit/:id",
        exact : false,
        main : ({match, history}) => <CategoryActionPage match = {match} history = {history}/>
    },
    {//orders
        path : '/orders-list',
        exact : false,
        main : ({history}) => <OrdersPage history = {history}/>
    },
    // {
    //     path : "/category/add",
    //     exact : false,
    //     main : ({history}) => <CategoryActionPage history = {history}/>
    // },
    // {
    //     path : "/category/edit/:id",
    //     exact : false,
    //     main : ({match, history}) => <CategoryActionPage match = {match} history = {history}/>
    // },
    //login
    {
        path : "/login",
        exact : false,
        main : ({history}) => <LoginPage history = {history}/>
    },
    //logout
    {
        path : "/logout",
        exact : false,
        main : ({history}) => <LogOut history = {history}/>
    },
    //edit-profile//employee
    {
        path : "/edit-profile",
        exact : false,
        main : ({history}) => <UserInfor history = {history}/>
    },
    {
        path : "",
        exact : false,
        main : () => <NotFoundPage/>
    }
]

export default routes