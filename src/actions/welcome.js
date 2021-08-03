import {
  GET_MEMBER
} from 'src/actions/types';

import WelcomeService from '../services/welcome.service';

export const getMembers = () => async (dispatch) => {
  try {
    const res = await WelcomeService.getMembers();
    dispatch({
      type: GET_MEMBER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
