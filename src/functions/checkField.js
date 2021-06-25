import {ToastAndroid} from 'react-native';
import {EMPTY_FIELD} from '../helper/config.js';
export default function checkField(textField) {
  if (textField === '') {
    ToastAndroid.show(EMPTY_FIELD, ToastAndroid.SHORT);
  } else {
    let champs = textField;
    let motif = /\d/g;
    return !motif.test(champs);
  }
}
