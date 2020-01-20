import {createReducer, createActions } from 'reduxsauce' 
import Immutable from 'seamless-immutable'

const {Types, Creators}=createActions({
  saveNoteRequest: ['noteId','noteText'],
  saveNoteSuccess: [],
  saveNoteFailure: []
})

export default Creators
export const NotesTypes = Types

export const INITIAL_STATE=Immutable({
  noteSaveFetching: false
})

export const NotesSelector = {
  getNoteSaveFetching: state => state.notes.noteSaveFetching
}

const saveNoteRequest = (state, {noteId,noteText}) =>{
  return state.merge({noteSaveFetching: true})
}
const saveNoteSuccess = (state) =>{
  return state.merge({noteSaveFetching:false})
}
const saveNoteFailure=(state) =>{
  return state.merge({noteSaveFetching:false})
}
export const reducer=createReducer(INITIAL_STATE,{
  [Types.SAVE_NOTE_REQUEST]: saveNoteRequest,
  [Types.SAVE_NOTE_SUCCESS]: saveNoteSuccess,
  [Types.SAVE_NOTE_FAILURE]: saveNoteFailure
})
