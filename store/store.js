import { configureStore } from '@reduxjs/toolkit'
import reducer from './combineReducers'
import { createWrapper } from 'next-redux-wrapper'

const makeStore = () => configureStore({ reducer })

export const wrapper = createWrapper( makeStore )
