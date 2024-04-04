import { AdherentDetails, AdherentList } from "@/features/adherents/components";
import { RouteObject } from "react-router-dom";
import Adherent from "../Adherent";

export const adherentRoutes: RouteObject = {
  path: "adherents",
  element: <Adherent />,
  children: [
    {
      path: "",
      element: <AdherentList />,
    },
    {
      path: ":id",
      element: <AdherentDetails />,
    }
  ]

}