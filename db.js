
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  newUser: newUser,
  deleteUser: deleteUser,
  deleteProfile
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users')
  .join('profile', 'users.id', 'profile.user_id')
  .select('*','users.id as user_id')
  .where('users.id', id)
  .first()
}

function newUser (data, connection){
  return connection('users')
  .insert ({name: data.name, email:data.email})
  .then((user_ids) =>{
    return connection ('profile')
    .insert({
      user_id: user_ids[0],
      url: data.url,
      photo: data.photo,
      info: data.info
    })
  })
}

function deleteUser(user_id, connection) {
  return connection('users')
    .where('users.id', user_id)
    .del()
}

function deleteProfile(user_id, connection) {
  return connection('profile')
    .where('profile.user_id', user_id)
    .del()
}
