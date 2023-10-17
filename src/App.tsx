import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './paginas/home/Home'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/NavBar'
import ListaCategorias from './components/categoria/listCategoria/ListCategoria'
import DeletarCategory from './components/categoria/deleteCategoria/deleteCategoria'
import FormularioCategory from './components/categoria/formCategoria/formCategorias'

function App() {

  return (
    <BrowserRouter>
     <ToastContainer />
     <Navbar />
     <div className='min-h-[80vh]'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/categories' element={<ListaCategorias/>} />
        <Route path="/cadastroCategory" element={<FormularioCategory />} />
        <Route path="/editarCategory/:id" element={<FormularioCategory />} />
        <Route path="/deletarCategory/:id" element={<DeletarCategory />} />
      </Routes>
     </div>
     <Footer />
    </BrowserRouter>
  )
}

export default App