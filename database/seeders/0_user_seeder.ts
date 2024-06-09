import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import hash from '@adonisjs/core/services/hash';
import { DateTime } from 'luxon';

export default class extends BaseSeeder {
  public async run() {
    const password = '$argon2id$v=19$t=3,m=65536,p=4$aMvVVajDsJqzLb+YZWiNTw$RozKtq9UIh3EnM++xosVglyrTdbGCps/+VbqZ6YT8Ow'
    await User.createMany([
      { id: 1, username: 'client', password , email: 'client@client.fr', role: 0, activated: true, created_at: DateTime.now(), updated_at: DateTime.now() }
    ]);
  }
}
