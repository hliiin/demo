import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

// 创建路由保护组件
// export default function ProtectedRoute({children}) {
//   const isLogin = useSelector((state) => state.auth.isLogin )
//   return isLogin ? children : <Navigate to='/login' /> 
// }

// 这个组件用于判断当前路由是否需要登录权限，如果需要则根据 isLogin 来决定是否跳转到登录页。

const ProtectedRoute = ({ element, requiresAuth }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  console.log('isLogin:', isLogin);  // 查看isLogin的值
  // 功能：如果页面需要登录且用户未登录，重定向到登录页。
  if (requiresAuth && !isLogin) {
    return <Navigate to="/login" />;
  }
  return element;
};
export default ProtectedRoute;
// 1.功能：定义 ProtectedRoute 组件，接收需要渲染的组件 (element) 和是否需要登录 (requiresAuth) 两个参数。
// 2.功能：从 Redux 中获取用户的登录状态 (isLogin)。
// 3.功能：调试，输出当前登录状态。
// 4.功能：如果页面需要登录且用户未登录，重定向到登录页。
// 5.功能：如果页面不需要登录或用户已登录，渲染目标组件。
// 组件作用：
// 保护受限路由：如果用户未登录且访问受保护的页面，则重定向到 /login。
// 允许访问公开路由：如果页面不需要登录或用户已登录，则正常渲染页面。


