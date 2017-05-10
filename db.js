
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  newUser: newUser
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users').where('users.id', id)
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
