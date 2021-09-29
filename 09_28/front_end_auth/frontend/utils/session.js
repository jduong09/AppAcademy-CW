// session api util methods to fetch data from the backend 
// create user (sign up)
export const postUser = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);
// login user (sign in)
export const postSession = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);
// delete session (sign out)
export const deleteSession = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);