import styled from 'styled-components'
import variables from '../../styles/variables'

import * as enums from '../../utils/enums/Task'

type TagProps = {
  priority?: enums.Priority
  status?: enums.Status
  parametro: 'status' | 'priority'
}

const returnBgColor = (props: TagProps) => {
  if (props.parametro === 'priority') {
    if (props.priority === enums.Priority.URGENTE) return variables.vermelho
    if (props.priority === enums.Priority.IMPORTANTE) return variables.amarelo2
  } else {
    if (props.status === enums.Status.PENDENTE) return variables.amarelo
    if (props.status === enums.Status.CONCLUIDA) return variables.verde
  }

  return '#ccc'
}

export const Card = styled.div`
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #fcfcfc;
  padding: 16px;
  margin-bottom: 32px;
`
export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  display: inline-block;
  padding: 4px 8px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => returnBgColor(props)};
  border-radius: 8px;
  margin-right: 16px;
`

export const Description = styled.textarea`
  display: block;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  resize: none;
  border: none;
  background-color: transparent;
`
export const BarAction = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const Button = styled.button`
  padding: 8px 12px;
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
export const ButtonSave = styled(Button)`
  background-color: ${variables.verde};
`
export const ButtonCancel = styled(Button)`
  background-color: ${variables.vermelho};
`
