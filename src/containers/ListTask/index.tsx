import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListTasks = () => {
  const { tasks } = useSelector((state: RootReducer) => state)

  return (
    <Container>
      <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <Task
              description={t.description}
              title={t.title}
              status={t.status}
              priority={t.priority}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListTasks
