import axios from 'axios'

const initialState = {
  id: 0,
  price: 0,
  item: '',
  city: '',
  state: '',
  img: ''
}

const SET_ID = 'SET_ID'
const SET_PRICE = 'SET_PRICE'
const SET_ITEM = 'SET_ITEM'
const SET_CITY = 'SET_CITY'
const SET_STATE = 'SET_STATE'
const SET_IMG = 'SET_IMG'