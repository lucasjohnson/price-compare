import faunadb from 'faunadb';
const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNA_CLIENT_SECRET,
});

export class FQL {
  public static createItem = (title: string, type: string): void => {
    client
      .query(
        q.Create(q.Collection('Item'), {
          data: { title: title, type: type },
        })
      )
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };
}
