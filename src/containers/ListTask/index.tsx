import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { MainContainer, Title } from '../../styles'
import { RootReducer } from '../../store'

const ListTasks = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term, criterio, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterTasks = () => {
    let taskFiltred = itens
    if (term !== undefined) {
      taskFiltred = taskFiltred.filter(
        (item) =>
          item.title.toLocaleLowerCase().search(term.toLocaleLowerCase()) >= 0
      )

      if (criterio === 'priority') {
        taskFiltred = taskFiltred.filter((item) => item.priority === value)
      } else if (criterio === 'status') {
        taskFiltred = taskFiltred.filter((item) => item.status === value)
      }

      return taskFiltred
    } else {
      return itens
    }
  }

  const showResultFilter = (amount: number) => {
    let mensage = ''
    const completion =
      term !== undefined && term.length > 0 ? `e "${term}"` : ''

    if (criterio === 'todas') {
      mensage = `${amount} tarefa(s) encontradas como: todas ${completion}`
    } else {
      mensage = `${amount} tarefa(s) encotradas como: "${`${criterio}: ${value}`}" ${completion} `
    }

    return mensage
  }

  const task = filterTasks()
  const mensage = showResultFilter(task.length)

  return (
    <MainContainer>
      <Title as="p">{mensage}</Title>
      <ul>
        {task.map((t) => (
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
    </MainContainer>
  )
}

export default ListTasks
