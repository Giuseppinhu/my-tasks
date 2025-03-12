import ButtonAdd from '../../components/ButtonAdd'
import ListTasks from '../../containers/ListTask'
import SideBar from '../../containers/Sidebar'

const Home = () => (
  <>
    <SideBar showFilter />
    <ListTasks />
    <ButtonAdd />
  </>
)

export default Home
