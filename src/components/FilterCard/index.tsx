import { useDispatch, useSelector } from 'react-redux'
import { editFilter } from '../../store/reducer/filter'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'
import { RootReducer } from '../../store'

export type Props = {
  ativo?: boolean
  legenda: string
  criterio: 'priority' | 'status' | 'todas'
  value?: enums.Priority | enums.Status
}

const FilterCard = ({ legenda, criterio, value }: Props) => {
  const dispatch = useDispatch()
  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const checkIsActive = () => {
    const sameCriteiro = filter.criterio === criterio
    const sameValue = filter.value === value

    return sameCriteiro && sameValue
  }

  const conterTasks = () => {
    if (criterio === 'todas') return tasks.itens.length
    if (criterio === 'priority') {
      return tasks.itens.filter((item) => item.priority === value).length
    }
    if (criterio === 'status') {
      return tasks.itens.filter((item) => item.status === value).length
    }
  }

  const filtred = () => {
    dispatch(
      editFilter({
        criterio,
        value
      })
    )
  }

  const active = checkIsActive()
  const contador = conterTasks()

  return (
    <S.Card ativo={active} onClick={filtred}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FilterCard
