//sign up (ajax request that creates a new user)
export const signupUser = (user) => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);
//login (ajax request that creates a new session)
export const loginUser = (user) => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);
//logout (ajax request that deletes the current session)
export const logoutUser = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);