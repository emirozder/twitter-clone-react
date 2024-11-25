import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentAccount: {
    id: 1,
    username: "slippinjimmy",
    fullname: "Jimmy McGill",
    email: "mcgill@exp.com",
    avatar: "https://i.pinimg.com/736x/fb/71/ca/fb71ca707c5ed6843f8d00bb4c150dce.jpg"
  },
  accounts: [
    {
      id: 1,
      username: "slippinjimmy",
      fullname: "Jimmy McGill",
      email: "mcgill@exp.com",
      avatar: "https://i.pinimg.com/736x/fb/71/ca/fb71ca707c5ed6843f8d00bb4c150dce.jpg"
    },
    {
      id: 2,
      username: "bettercallsaul",
      fullname: "Saul Goodman",
      email: "saulgoodman@exp.com",
      avatar: "https://i.pinimg.com/736x/ce/7f/1e/ce7f1ed7c73f49cad52e228288aeab02.jpg"
    }
  ],
}

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _addAccount: (state, action) => {
      state.accounts.push(action.payload)
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter((account) => account.id !== action.payload)
      if (state.currentAccount && state.currentAccount.id === action.payload) {
        state.currentAccount = false
        // this._setCurrentAccount(false)
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload
    },
  },
})

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions
export default auth.reducer