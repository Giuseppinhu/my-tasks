import { useState } from 'react'
import * as S from './styles'

import * as enums from '../../utils/enums/Task'

type Props = {
  title: string
  priority: enums.Priority
  status: enums.Status
  description: string
}

const Task = ({ description, priority, status, title }: Props) => {
  const [isEdit, setIsEdit] = useState(false)

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parametro="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Description value={description} />
      <S.BarAction>
        {isEdit ? (
          <>
            <S.ButtonSave>Salvar</S.ButtonSave>
            <S.ButtonCancel onClick={() => setIsEdit(false)}>
              Cancelar
            </S.ButtonCancel>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEdit(true)}>Editar</S.Button>
            <S.ButtonCancel>Remover</S.ButtonCancel>
          </>
        )}
      </S.BarAction>
    </S.Card>
  )
}

export default Task
