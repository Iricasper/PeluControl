import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import ListaClientes from "./components/ListaClientes"
import "./css/index2.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ListaClientes />
  </StrictMode>
)
