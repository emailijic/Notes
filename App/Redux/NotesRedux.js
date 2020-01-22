import {createReducer, createActions } from 'reduxsauce' 
import Immutable from 'seamless-immutable'

const {Types, Creators}=createActions({
  saveNoteRequest: ['noteId','noteText'],
  saveNoteSuccess: [],
  saveNoteFailure: [],

  getNotesRequest: [],
  getNotesSuccess: ['data'],
  getNotesFailure:[]

})

export default Creators
export const NotesTypes = Types

export const INITIAL_STATE=Immutable({
  noteSaveFetching: false,
  notesGetFetching: false,
  notes: []
})

export const NotesSelector = {
  getNoteSaveFetching: state => state.notes.noteSaveFetching,
  getNotes: state => state.notes.notes
}

const saveNoteRequest = (state, { noteId,noteText }) =>{
  return state.merge({noteSaveFetching: true})
}
const saveNoteSuccess = (state) =>{
  return state.merge({noteSaveFetching:false})
}
const saveNoteFailure=(state) =>{
  return state.merge({noteSaveFetching:false})
}

const getNotesRequest = (state) =>{
  return state.merge({notesGetFetching: true})
}
const getNotesSuccess = (state, { data }) =>{
  return state.merge({notesGetFetching: false, notes: data})
}
const getNotesFailure = (state) =>{
  return state.merge({notesGetFetching: false})
}

export const reducer=createReducer(INITIAL_STATE,{
  [Types.SAVE_NOTE_REQUEST]: saveNoteRequest,
  [Types.SAVE_NOTE_SUCCESS]: saveNoteSuccess,
  [Types.SAVE_NOTE_FAILURE]: saveNoteFailure,

  [Types.GET_NOTES_REQUEST]: getNotesRequest,
  [Types.GET_NOTES_SUCCESS]: getNotesSuccess,
  [Types.GET_NOTES_FAILURE]: getNotesFailure

})
