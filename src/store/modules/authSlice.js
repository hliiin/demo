import { createSlice } from "@reduxjs/toolkit";

// 创建子模块儿 创建一个用于管理特定状态的 Reducer
const authSlice  = createSlice({
  name:'auth',
  initialState: { isLogin:false},
  reducers: {
    // 设置改变状态isLlogin的方法
    login: (state) => {
      state.isLogin = true
    },
    logout: (state) => {
      state.isLogin = false
    }
  }
})
// console.log(authSlice,'登陆状态模块');

// 抛出方法
export const {login, logout} = authSlice.actions;
export default authSlice.reducer