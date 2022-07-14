export const reposDataSetter = (reposData) => ({
  type: 'REPOS_DATA',
  payload: reposData,
});

export const profileDataSetter = (userDetails) => ({
  type: 'PROFILE_DATA',
  payload: userDetails,
});

export const singleRepoSetter = (reposData) => ({
  type: 'SINGLE_REPO',
  payload: reposData,
});

export const resetUser = () => ({ type: 'RESET_USER' });
