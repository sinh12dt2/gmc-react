import {
  GET_MEMBER
} from 'src/actions/types';

const initialState = {
  title: 'Welcome to GMC ERP Web',
  members: [
    {
      id: 1,
      name: 'Phuong',
      role: 'Leader'
    },
    {
      id: 2,
      name: 'Sinh',
      role: 'Developer'
    },
    {
      id: 3,
      name: 'Hoang',
      role: 'Developer'
    },
  ]
};

function welcomeReducer(welcome = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MEMBER:
      return { ...welcome, members: payload };
    default:
      return welcome;
  }
}

export default welcomeReducer;
