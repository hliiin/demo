import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// 引入store
import store from "./store/store";
import RouterList from "./router";
function App() {
  return (
    <div>
      {/* // 使用 Provider 将 Redux Store 传递给 React 应用的组件 */}
      <Provider store={store}>
        <BrowserRouter>
          <RouterList />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
