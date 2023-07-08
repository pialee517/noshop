import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
 
import React from "react";

//page - common
import Login from './features/pages/common/Login'
//pages - customer
import Home from './features/pages/customer/Home'
import Products from './features/pages/customer/Products'
import ProductDetail from './features/pages/customer/ProductDetail'
import Payment from './features/pages/customer/Payment'
import Cart from './features/pages/customer/Cart'

//pages - admin
import AdminDashboard from './features/pages/admin/AdminDashboard'

//pages - supplier

//errors
import Error from "./features/components/Error";

//layouts
import Layout from './features/Outline/Layout';
import AdminLayout from './features/Outline/AdminLayout'


const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='home' element={<Home />} />
            <Route path='cart' element={<Cart />} />
            <Route path='payment' element={<Payment />} />
            <Route path='products' element={<Products />} />
            <Route path='products/:id' element={<ProductDetail />} />
        </Route>
        <Route path='admin' element={<AdminLayout />} >
            <Route index element={<AdminDashboard />} />
            {/* <Route path='uers' element={<AdminUsers />}/> */}
        </Route>
        {/* <Route path='supplier' element={<SupplierLayout />} > */}
            {/* <Route index element={<SupplierDashboard />} /> */}
            {/* <Route path='productmanagement' elements={<ProductMangement />} /> */}
        {/* </Route> */}
        <Route path='*'element={<Error />} />
    </Route>
))

export default router