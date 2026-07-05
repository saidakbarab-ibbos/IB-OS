import { useState } from "react"
import "./App.css"
import Dashboard from './pages/Dashboard'
import CRM from './pages/CRM'
import Orders from "./pages/Orders"
import Production from "./pages/Production"
import MaterialRequest from "./pages/MaterialRequest"
import ProjectLocation from "./pages/ProjectLocation"
import Finance from "./pages/Finance"
import Settings from "./pages/Settings"
function App() {
    const [page, setPage] = useState("dashboard")
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">IB OS</div>
        <nav>
          <a
  className={page === "dashboard" ? "active" : ""}
  onClick={() => setPage("dashboard")}
>
  Dashboard
</a>
          <a onClick={() => setPage("crm")}>CRM</a>
          <a onClick={() => setPage("orders")}>Buyurtmalar</a>
          <a onClick={() => setPage("production")}>Ishlab chiqarish</a>
          <a onClick={() => setPage("material")}>Material Request</a>
          <a onClick={() => setPage("location")}>
  Project Location
</a>
          <a onClick={() => setPage("finance")}>Moliya</a>
          <a onClick={() => setPage("settings")}>Sozlamalar</a>
        </nav>
      </aside>

      <main className="main">
         {page === "dashboard" && <Dashboard />}
  {page === "crm" && <CRM />}
  {page === "orders" && <Orders />}
  {page === "production" && <Production />}
  {page === "material" && <MaterialRequest />}
  {page === "location" && <ProjectLocation />}
  {page === "finance" && <Finance />}
  {page === "settings" && <Settings />}
      </main>
    </div>
  )
}

export default App
