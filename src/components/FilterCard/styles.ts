import styled from 'styled-components'

import { Props } from '.'

type PropsAnyAtributes = Omit<Props, 'legenda' | 'contador'>

export const Card = styled.div<PropsAnyAtributes>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1E90FF' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1E90FF' : '#5e5e5e')};
  border-radius: 8px;
`

export const Contador = styled.span`
  display: block;
  font-size: 24px;
  font-weight: bold;
`

export const Label = styled.span`
  font-size: 14px;
`
