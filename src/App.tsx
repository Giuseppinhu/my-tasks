import { Provider } from 'react-redux'
import ListTasks from './containers/ListTask'
import SideBar from './containers/Sidebar'
import GlobalStyled, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <Container>
        <SideBar></SideBar>
        <ListTasks></ListTasks>
      </Container>
    </Provider>
  )
}

export default App
