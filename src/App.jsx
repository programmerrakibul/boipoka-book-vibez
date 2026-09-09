import router from "@/app/router";
import store from "@/redux/store";
import makeServer from "@/server/server";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";

makeServer({
  environment: import.meta.env.NODE_ENV ?? "development",
});

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
