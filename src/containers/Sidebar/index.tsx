import FilterCard from '../../components/FilterCard'

import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <div>
      <S.Input type="text" placeholder="Procurar" />
      <S.Filtros>
        <FilterCard contador={1} legenda="pendente" />
        <FilterCard contador={2} legenda="concluidas" />
        <FilterCard contador={3} legenda="urgentes" />
        <FilterCard contador={4} legenda="importantes" />
        <FilterCard contador={5} legenda="normal" />
        <FilterCard contador={15} legenda="todas" ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default SideBar
