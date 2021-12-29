require('dotenv').config()

import {  Ingredient } from './models'

const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV !== 'test'

const dbInit = () => Promise.all([
    Ingredient.sync({ alter: isDev || isTest }),
  ])

export default dbInit 
