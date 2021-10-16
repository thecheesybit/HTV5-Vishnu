import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://Ayush:trouble$7A@cluster0.o4mmf.mongodb.net/Vishnu?retryWrites=true&w=majority'
  );

  return client;
}
