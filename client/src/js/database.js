import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => 
{
  console.log('Post to the database');
 if (content ==null || content == undefined)
  {
  console.log ('content is null, ignore');
  return;
 }
 else
  {
    console.log( 'does the database have to be reset?');
  const contacDb= await openDB('jate',1);
  const tx = contacDb.transaction('jate','readwrite');
  const store= tx.objectStore('jate');
  const request= store.put({id:1, content: content});
  const result= await request;
  console.log('Data saved to the database', result);
  }
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
 console.log('Attempting to grab from database');
  const contacDb= await openDB('jate',1);
  const tx = contacDb.transaction('jate','readonly');
  const store= tx.objectStore('jate');
  const request= store.get(1);
  const result= await request;
  console.log('result.value', result);
  return result;

};

console.log('-----------------------------------------------------------------------------------------------Now openeing DB---------------------------------------------------------------------------------------------------------------------------------------');

initdb();
