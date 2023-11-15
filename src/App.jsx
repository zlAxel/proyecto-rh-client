import { Navigate, Route, Routes } from "react-router-dom"
import LayoutAuth from "./layouts/LayoutAuth"
import Login from "./views/Auth/Login"

function App() {
  const Home = () => <h1>Home</h1>
  const Register = () => <h1>Register</h1>

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/auth" element={<LayoutAuth />} >
        <Route index element={<Navigate to="login" />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      
    </Routes>

  )
}

export default App
