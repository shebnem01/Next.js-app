import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
interface ModalState {
  loginModal: boolean
  registerModal: boolean
  reviewModal: boolean
}
const initialState: ModalState = {
  loginModal: false,
  registerModal: false,
  reviewModal: false
}
export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    loginModalFunc: (state) => {
      state.loginModal = !state.loginModal
    },
    registerModalFunc: (state) => {
      state.registerModal = !state.registerModal
    },
    reviewModalFunc: (state) => {
      state.reviewModal = !state.reviewModal
    }
  },
})

export const { loginModalFunc, registerModalFunc, reviewModalFunc } = modalSlice.actions
export const selectLoginModal = (state: RootState) => state.modal.loginModal
export const selectRegisterModal = (state: RootState) => state.modal.registerModal
export const selectReviewModal = (state: RootState) => state.modal.reviewModal
export default modalSlice.reducer