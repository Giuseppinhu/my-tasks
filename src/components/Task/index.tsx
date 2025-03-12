import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remove, edit } from '../../store/reducer/task'
import TaskClass from '../../models/Task'

type Props = TaskClass

const Task = ({
  description: descriptionOrigin,
  priority,
  status,
  title,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEdit, setIsEdit] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (descriptionOrigin.length > 0) {
      setDescription(descriptionOrigin)
    }
  }, [descriptionOrigin])

  const cancelEdit = () => {
    setDescription(descriptionOrigin)
    setIsEdit(false)
  }

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parametro="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!isEdit}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <S.BarAction>
        {isEdit ? (
          <>
            <S.ButtonSave
              onClick={() => {
                dispatch(
                  edit({
                    description,
                    priority,
                    status,
                    title,
                    id
                  })
                )
                setIsEdit(false)
              }}
            >
              Salvar
            </S.ButtonSave>
            <S.ButtonCancel
              onClick={() => {
                cancelEdit()
              }}
            >
              Cancelar
            </S.ButtonCancel>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEdit(true)}>Editar</S.Button>
            <S.ButtonCancel onClick={() => dispatch(remove(id))}>
              Remover
            </S.ButtonCancel>
          </>
        )}
      </S.BarAction>
    </S.Card>
  )
}

export default Task
