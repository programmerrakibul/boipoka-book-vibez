import router from "@/app/router";
import makeServer from "@/server/server";
import { RouterProvider } from "react-router";

makeServer({
  environment: import.meta.env.NODE_ENV ?? "development",
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
