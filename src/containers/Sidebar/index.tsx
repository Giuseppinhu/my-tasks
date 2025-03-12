import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { editTerm } from '../../store/reducer/filter'
import FilterCard from '../../components/FilterCard'

import * as S from './styles'
import * as enums from '../../utils/enums/Task'
import { Button, Input } from '../../styles'
import { useNavigate } from 'react-router-dom'

type Props = {
  showFilter: boolean
}

const SideBar = ({ showFilter }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {showFilter ? (
          <>
            <Input
              type="text"
              placeholder="Procurar"
              value={term}
              onChange={(e) => dispatch(editTerm(e.target.value))}
            />
            <S.Filtros>
              <FilterCard
                value={enums.Status.PENDENTE}
                criterio="status"
                legenda="pendente"
              />
              <FilterCard
                value={enums.Status.CONCLUIDA}
                criterio="status"
                legenda="concluidas"
              />
              <FilterCard
                value={enums.Priority.URGENTE}
                criterio="priority"
                legenda="urgentes"
              />
              <FilterCard
                value={enums.Priority.IMPORTANTE}
                criterio="priority"
                legenda="importantes"
              />
              <FilterCard
                value={enums.Priority.NORMAL}
                criterio="priority"
                legenda="normal"
              />
              <FilterCard criterio="todas" legenda="todas" />
            </S.Filtros>
          </>
        ) : (
          <Button onClick={() => navigate('/')}>
            Voltar a Lista de Tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  )
}

export default SideBar
