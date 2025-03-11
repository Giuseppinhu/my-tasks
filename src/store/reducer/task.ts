import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

const TaskSlice = createSlice({
  name: 'tasks',
  initialState: [
    new Task(
      'Estudar JS',
      enums.Priority.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      6
    ),
    new Task(
      'Estudar Youtube',
      enums.Priority.URGENTE,
      enums.Status.CONCLUIDA,
      'testeste',
      7
    ),
    new Task(
      'Estudar Photoshop',
      enums.Priority.URGENTE,
      enums.Status.PENDENTE,
      'teststew12',
      8
    )
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((t) => t.id !== action.payload)
    }
  }
})

export const { remove } = TaskSlice.actions

export default TaskSlice.reducer
