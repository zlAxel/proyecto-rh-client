import { Navigate, Route, Routes } from "react-router-dom"
import LayoutAuth from "./layouts/LayoutAuth"
import Login from "./views/Auth/Login"
import LayoutApp from "./layouts/LayoutApp"
import HomeApp from "./views/HomeApp"
import LayoutCandidato from "./layouts/LayoutCandidato"
import CrearCandidato from "./components/app/CrearCandidato"
import ListaCandidatos from "./views/ListaCandidatos"

function App() {
  const Register = () => <h1>Register</h1>
  const EditarCandidato = () => <h1>Editar Candidato</h1>
  const VisualizarCandidato = () => <h1>Visualizar Candidato</h1>

  return (
    <Routes>
      <Route path="/" element={<LayoutApp />} >
        <Route index element={<HomeApp />} />

        <Route path="/candidatos" element={<LayoutCandidato />} >
          <Route index element={<Navigate to="lista" />} />

          <Route path="crear" element={<CrearCandidato />} />
          <Route path="editar" element={<EditarCandidato />} />
          <Route path="visualizar" element={<VisualizarCandidato />} />
          <Route path="lista" element={<ListaCandidatos />} />
        </Route>
        <Route path="/informes" element={<LayoutCandidato />} >
          <Route index element={<Navigate to="lista" />} />

          <Route path="nomina" element={<CrearCandidato />} />
          <Route path="asistencia" element={<EditarCandidato />} />
          <Route path="evaluacion" element={<VisualizarCandidato />} />
        </Route>
  
      </Route>
      
      <Route path="/auth" element={<LayoutAuth />} >
        <Route index element={<Navigate to="login" />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

      </Route>
      
    </Routes>

  )
}

export default App
