import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        name: 'Abilio Soares Coelho',
        email: 'abiliocoelho@gmail.com',
        password: 'secret',
      },
      {
        name: 'Mateus Soares Coelho',
        email: 'mateuscoelho@gmail.com',
        password: 'secret',
      },
    ])
  }
}
