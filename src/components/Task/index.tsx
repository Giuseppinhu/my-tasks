import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remove, edit, editing } from '../../store/reducer/task'
import { Button, ButtonSave } from '../../styles'
import TaskClass from '../../models/Task'

import * as enums from '../../utils/enums/Task'

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

  const editStatusTask = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(editing({ id, finish: event.target.checked }))
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          onChange={editStatusTask}
          checked={status === enums.Status.CONCLUIDA}
          id={title}
        />
        <S.Title>
          {isEdit && <em>Editando: </em>}
          {title}
        </S.Title>
      </label>
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
            <ButtonSave
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
            </ButtonSave>
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
            <Button onClick={() => setIsEdit(true)}>Editar</Button>
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
