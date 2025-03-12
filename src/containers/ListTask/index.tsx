import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListTasks = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)

  return (
    <Container>
      <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
      <ul>
        {itens.map((t) => (
          <li key={t.id}>
            <Task
              id={t.id}
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
