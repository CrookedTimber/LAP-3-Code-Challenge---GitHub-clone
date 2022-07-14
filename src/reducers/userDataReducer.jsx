const initState = {
  repoData: {},
  profileData: {},
  showProfile: false,
  isSingleRepo: false,
  userExists: true,
};

const userDataReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PROFILE_DATA':
      return {
        ...state,
        profileData: action.payload,
        showProfile: !state.showProfile,
      };
    case 'REPOS_DATA':
      return { ...state, repoData: action.payload, isSingleRepo: false, userExists: true };
    case 'SINGLE_REPO':
      return { ...state, repoData: action.payload, isSingleRepo: true };
    case 'ERROR404':
      return { ...state, userExists: false };
    case 'RESET_USER':
      return initState;
    default:
      return state;
  }
};

export default userDataReducer;
