import {call,put} from 'redux-saga/effects'
import AsyncStorage from '@react-native-community/async-storage'
import * as shortid from 'shortid'
import NotesActions from '../Redux/NotesRedux'

export function * saveNote ({noteId,noteText}){
  const isSuccess = yield call(saveNoteStorage,{noteId,noteText})
  if(isSuccess){
    console.log(111)
    yield put(NotesActions.saveNoteSuccess())
  } else { 
    console.log(222)
    yield put(NotesActions.saveNoteFailure())
  }
}

async function saveNoteStorage({noteId,noteText}){
  try{
    const stringValue = await AsyncStorage.getItem('notes')
    const value = stringValue ? JSON.parse(stringValue) : {}
    if (noteId) {
      value[noteId]={noteId,noteText}
    } else {
      shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_')
      const id = shortid.generate()
      value[id]={noteId: id, noteText}
    }
    await AsyncStorage.setItem('notes',JSON.stringify(value))
    return true
  } catch(e){
    return false
  }
}