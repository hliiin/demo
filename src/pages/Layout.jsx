import React from 'react'
import { Outlet,Link } from 'react-router-dom'

export default function Layout() {
  console.log('1111');

  return (
    <div>
      <h1>这是layout页面</h1>
      
      {/* 路由有参数 路由传参 那跳转的时候也要携带参数才能成功跳转 */}
      <Link to='/artical/01/news'>点击跳转到文章页面</Link>
      <Outlet />
    </div>
  )
}
