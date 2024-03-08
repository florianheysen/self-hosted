import { db } from "@/lib/db";

export default async function Home() {
  const users = await db.user.findMany();

  return (
    <div>
      <p>Users:</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id}:{user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
