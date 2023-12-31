import clientPromise from ".";

let client;
let db;
let users;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db();
    users = await db.collection('users');
  } catch (error) {
    throw new Error('Fail');
  }
}

(async () => {
  await init();
})();

export async function getUsers() {
  try {
    if (!users) await init();
    const result = await users
      .find({})
      .limit(20)
      .map(user => ({ ...user, _id: user._id.toString() }))
      .toArray();

    return { users: result };
  } catch (error) {
    return { error: 'Fail' };
  }
}

export async function insertUser(user) {
  try {
    if (!users) await init();
    const result = await users
      .insertOne(user)
      .then(({ ops }) => ops[0]._id.toString())

    return { user: result };
  } catch (error) {
    return { error: 'Fail' };
  }
}
