import { configureStore } from "@reduxjs/toolkit"
import authReducer from './modules/authSlice'
import cartReducer from './modules/cartSlice'
// 在入口文件 我们拼接我们的modiles模块
// 配置Redux Store
const store = configureStore({
  reducer: {
    //引入子模块儿
    auth:authReducer,
    cart:cartReducer
  }
})

export default store;