import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Task'

type filterState = {
  term?: string
  criterio: 'priority' | 'status' | 'todas'
  value?: enums.Priority | enums.Status
}

const initialState: filterState = {
  term: '',
  criterio: 'todas'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    editTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    editFilter: (state, action: PayloadAction<filterState>) => {
      state.criterio = action.payload.criterio
      state.value = action.payload.value
    }
  }
})

export const { editTerm, editFilter } = filterSlice.actions

export default filterSlice.reducer
