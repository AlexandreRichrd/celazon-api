import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import hash from '@adonisjs/core/services/hash';
import { DateTime } from 'luxon';

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      { id: 3, username: 'toto', password: await hash.make('fdE4!Gfe'), email: 'toto@toto.to', role: 0, activated: true, created_at: DateTime.now(), updated_at: DateTime.now() },
      { id: 4, username: 'staffy', password: await hash.make('pwD3#sT4'), email: 'staffy@corp.com', role: 1, activated: true, created_at: DateTime.now(), updated_at: DateTime.now() },
      { id: 5, username: 'commu', password: await hash.make('hU89&Jk1'), email: 'com@service.com', role: 2, activated: true, created_at: DateTime.now(), updated_at: DateTime.now() },
      { id: 6, username: 'cheffy', password: await hash.make('98Gh^Tf0'), email: 'chef@kitchen.com', role: 3, activated: true, created_at: DateTime.now(), updated_at: DateTime.now() },
      { id: 7, username: 'root', password: await hash.make('SuPer#4dM'), email: 'admin@root.com', role: 9, activated: true, created_at: DateTime.now(), updated_at: DateTime.now() }
    ]);
  }
}
