import * as Actions from '../Types';
export const userData = val => {
  console.log('action val', val);
  return {type: Actions.USER_DATA, payload: val};
};
