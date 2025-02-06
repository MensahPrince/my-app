import { db } from '@/lib/db';

export default async function Page() {
    const database = await db;
    const allUsers = await database.all('SELECT * FROM users');
    
    return (
      <ul>
        {allUsers.map((user) => (
          <li key={user.id}>{user.username} -- {user.email}</li>
        ))}
      </ul>
    )
}

