const initState = {
  repoData: { repos: [{repoName: "Name ", link: "Link ", languages: "Languages ", stargazers: "Stargazers ", forks: "Forks ", updated: "Last Updated"}], error: ""},
  profileData: {},
  showProfile: false,
};

const userDataReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REPO_DATA':
      return { ...state, repoData: action.payload };
    case 'PROFILE_DATA':
      return {
        ...state,
        profileData: action.payload,
        showProfile: !state.showProfile,
      };
    case 'RESET_USER':
      return initState;
    default:
      return state;
  }
};

export default userDataReducer;
