const { getCollection } = require('./db');
const collectionName = 'tickets';

async function getAllTickets() {
  const collection = await getCollection(collectionName);
  const cursor = await collection.find();
  const result = cursor.toArray();
  return result;
}

async function setTicket(body) {
  const collection = await getCollection(collectionName);
  await collection.insertOne({ ...body });
}
exports.getAllTickets = getAllTickets;
exports.setTicket = setTicket;
