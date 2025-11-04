import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./css/index.css"
import ListaClientes from "./components/ListaClientes"
import CampoBúsqueda from "./components/CampoBúsqueda"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CampoBúsqueda />
    <ListaClientes />
  </StrictMode>
)
