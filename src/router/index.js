// 引入页面
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Artical from "../pages/Artical";
import Cart from "../pages/Cart";

import ProtectedRoute from "../components/ProtectedRoute";
import { Route, Routes } from "react-router-dom";
// 配置路由数组
const router = [
  // 一级路由
  {
    path: "/",
    element: <Layout />,
    // requiresAuth: false ,
    // 二级路由
    children: [
      {
        path: "",
        element: <Home />,
        index:true,
        requiresAuth: false,
      },
      {
        path: "/about",
        element: <About />,
        requiresAuth: true,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    requiresAuth: false,
  },
  {
    path: "/artical/:id/:name",
    element: <Artical />,
    requiresAuth: true,
  },
  {
    path: "*",
    element: <NotFound />,
    requiresAuth: false,
  },
  {
    path: "/cart",
    element: <Cart />,
    requiresAuth: false,
  },
];
// 确保一级路由渲染自己的内容：通过 <Outlet /> 渲染子路由，同时确保父路由的其他内容（例如导航栏、头部等）也渲染。
const RouterList = () => {
  return (
    <Routes>
      {router.map((route, index) => {
        // 如果是一级路由并且有 children
        if (route.children) {
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <ProtectedRoute
                  element={route.element}
                  requiresAuth={route.requiresAuth}
                />
              }
            >
              {route.children.map((childRoute, childIndex) => (
                <Route
                  key={childIndex}
                  path={childRoute.path}
                  element={
                    <ProtectedRoute
                      element={childRoute.element}
                      requiresAuth={childRoute.requiresAuth}
                    />
                  }
                />
              ))}
            </Route>
          );
        }
        // 处理没有 children 的一级路由
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <ProtectedRoute
                element={route.element}
                requiresAuth={route.requiresAuth}
              />
            }
          />
        );
      })}
    </Routes>
    
  );
};

export default RouterList;

// <Routes>
    //   {router.map((route, index) => {
    //     // 处理没有子路由的一级路由
    //     if (!route.children) {
    //       return (
    //         <Route
    //           key={index}
    //           path={route.path}
    //           element={
    //             <ProtectedRoute
    //               element={route.element}
    //               requiresAuth={route.requiresAuth}
    //             />
    //           }
    //         />
    //       );
    //     }

    //     // 处理有子路由的父路由
    //     return (
    //       <Route
    //         key={index}
    //         path={route.path}
    //         element={
    //           <ProtectedRoute
    //             element={route.element}
    //             requiresAuth={route.requiresAuth}
    //           />
    //         }
    //       >
    //         {route.children.map((childRoute, childIndex) => (
    //           <Route
    //             key={childIndex}
    //             path={childRoute.path}
    //             element={
    //               <ProtectedRoute
    //                 element={childRoute.element}
    //                 requiresAuth={childRoute.requiresAuth}
    //               />
    //             }
    //           />
    //         ))}
    //       </Route>
    //     );
    //   })}
    // </Routes>

    <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>}/>