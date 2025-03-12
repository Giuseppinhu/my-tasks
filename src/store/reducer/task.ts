import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

type TaskState = {
  itens: Task[]
}

const initialState: TaskState = {
  itens: [
    {
      id: 1,
      title: 'Estudar Booststrap',
      description: 'Criar uma nova pagina web',
      priority: enums.Priority.NORMAL,
      status: enums.Status.CONCLUIDA
    },
    {
      id: 2,
      title: 'Estudar Figma',
      description: 'Criar o Layout',
      priority: enums.Priority.IMPORTANTE,
      status: enums.Status.CONCLUIDA
    },
    {
      id: 3,
      title: 'Estudar JS',
      description: 'Desenvolver a interatividade',
      priority: enums.Priority.URGENTE,
      status: enums.Status.PENDENTE
    }
  ]
}

const TaskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((t) => t.id !== action.payload)
    },
    edit: (state, action: PayloadAction<Task>) => {
      const indexTask = state.itens.findIndex((t) => t.id === action.payload.id)

      if (indexTask >= 0) {
        state.itens[indexTask] = action.payload
      }
    },
    register: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const TaskExist = state.itens.find(
        (t) => t.title.toLowerCase() === action.payload.title.toLowerCase()
      )
      if (TaskExist) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        const lastTask = state.itens[state.itens.length - 1]

        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1
        }
        state.itens.push(newTask)
      }
    },
    editing: (
      state,
      action: PayloadAction<{ id: number; finish: boolean }>
    ) => {
      const indexTask = state.itens.findIndex((t) => t.id === action.payload.id)

      if (indexTask >= 0) {
        state.itens[indexTask].status = action.payload.finish
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remove, edit, register, editing } = TaskSlice.actions

export default TaskSlice.reducer
