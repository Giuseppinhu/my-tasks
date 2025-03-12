import { configureStore } from '@reduxjs/toolkit'

import taskReducer from './reducer/task'
import filterReducer from './reducer/filter'

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
