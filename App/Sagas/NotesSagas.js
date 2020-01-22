import {call,put} from 'redux-saga/effects'
import AsyncStorage from '@react-native-community/async-storage'
import * as shortid from 'shortid'
import NotesActions from '../Redux/NotesRedux'

export function * saveNote ({noteId,noteText}) {
  const isSuccess = yield call(saveNoteStorage,{noteId,noteText})
  if (isSuccess) {
    yield put(NotesActions.saveNoteSuccess())
  } else { 
    yield put(NotesActions.saveNoteFailure())
  }
}
export function * getNotes () {
  console.log(111)
  const {isSuccess, notes} = yield call(getNotesStorage)
  if (isSuccess) {
    yield put(NotesActions.getNotesSuccess(notes))
  } else {
    yield put(NotesActions.getNotesFailure())
  }
}

async function saveNoteStorage({noteId,noteText}) {
  try{
    const stringValue = await AsyncStorage.getItem('notes')
    const value = stringValue ? JSON.parse(stringValue) : {}
    if (noteId) {
      value[noteId]={noteId,noteText,createDate: new Date()}
    } else {
      shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_')
      const id = shortid.generate()
      value[id]={noteId: id, noteText,createDate: new Date()}
    }
    await AsyncStorage.setItem('notes',JSON.stringify(value))
    return true
  } catch(e) {
    return false
  }
}

async function getNotesStorage () {
  try {

    const stringValue = await AsyncStorage.getItem('notes')
    const value = stringValue ? JSON.parse(stringValue) : {}
    const notes = Object.values(value)
    console.log('stringValue',stringValue)
    console.log('value',value)
    console.log('notes',notes)
    return {
      isSuccess: true,
      notes
    }
  } catch (e) {
    return {
      isSuccess: false
    }
  }
}