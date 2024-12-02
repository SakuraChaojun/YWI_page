import { RouterProvider } from "react-router-dom";
import router from './router';
import { Provider } from "react-redux";
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
