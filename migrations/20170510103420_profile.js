exports.up = function (knex, Promise) {
  return knex.schema.createTable('profile', function (table) {
    table.increments('id').primary()
    table.string('url')
    table.string('photo')
    table.string('info')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('profile')
}
