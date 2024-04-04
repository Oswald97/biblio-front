import { PageTitle } from "@/components/shared"
import { Outlet } from "react-router-dom"

const Adherent = () => {
  return (
    <div>
        <PageTitle>Adherent</PageTitle>
        <Outlet />
    </div>
  )
}

export default Adherent