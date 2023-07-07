import { createKysely } from '@vercel/postgres-kysely';
 
const db = createKysely();
 
await db
  .insertInto('pet')
  .values({ name: 'Catto', species: 'cat', owner_id: id })
  .execute();
 
const person = await db
  .selectFrom('person')
  .innerJoin('pet', 'pet.owner_id', 'person.id')
  .select(['first_name', 'pet.name as pet_name'])
  .where('person.id', '=', id)
  .executeTakeFirst();