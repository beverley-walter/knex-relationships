exports.up = function (knex, Promise) {
  return knex.schema.table('profile', function (table) {
    table.integer('user_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('profile', function (table) {
    table.dropColumn('user_id')
  })
}
