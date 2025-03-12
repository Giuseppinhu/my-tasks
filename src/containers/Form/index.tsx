import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ButtonSave, MainContainer, Title } from '../../styles'
import { Input } from '../../styles'
import { FormDiv, OptionCase, Options } from './styles'

import * as enums from '../../utils/enums/Task'
import Task from '../../models/Task'
import { register } from '../../store/reducer/task'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const registerTask = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      register({
        title,
        priority,
        description,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>Nova Tarefa</Title>
      <FormDiv onSubmit={registerTask}>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Titulo"
        />
        <Input
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as="textarea"
          placeholder="Descrição da Tarefa"
        />
        <Options>
          <p>Prioridade</p>
          {Object.values(enums.Priority).map((priority) => (
            <OptionCase key={priority}>
              <input
                value={priority}
                name="prioridade"
                type="radio"
                id={priority}
                onChange={(e) => setPriority(e.target.value as enums.Priority)}
                defaultChecked={priority === enums.Priority.NORMAL}
              />{' '}
              <label htmlFor={priority}>{priority}</label>
            </OptionCase>
          ))}
        </Options>
        <ButtonSave type="submit">Cadastrar</ButtonSave>
      </FormDiv>
    </MainContainer>
  )
}

export default Form
