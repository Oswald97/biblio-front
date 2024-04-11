import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { adherentRoutes } from "./pages/Adherent/routes/routes";
import { authRoutes } from "./pages/Auth/routes";
import { checkAuth } from "./utils/_helper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Custom Error Page 💔</h1>,
    loader: checkAuth,
    children: [
      adherentRoutes,
      {
        path: "oeuvres",
        element: <h1>Oeuvres</h1>
      }
    ],
  },
  authRoutes
]);
