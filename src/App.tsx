import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import GlobalStyled, { Container } from './styles'

import store from './store'
import Home from './pages/Home'
import Register from './pages/Register'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/register',
    element: <Register />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
