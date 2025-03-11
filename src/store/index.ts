import { configureStore } from '@reduxjs/toolkit'

import taskReducer from './reducer/task'

const store = configureStore({
  reducer: {
    tasks: taskReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
