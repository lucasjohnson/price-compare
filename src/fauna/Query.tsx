import faunadb from 'faunadb';
const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNA_CLIENT_SECRET,
});

export class Query {
  public static createItem = (data: any): void => {
    client
      .query(
        q.Create(q.Collection('Item'), {
          data: data,
        })
      )
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  public static getItems = async (): Promise<any> => {
    return await fetch('https://graphql.fauna.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.FAUNA_CLIENT_SECRET}`,
      },
      body: JSON.stringify({
        query: `
          query {
            all_items {
              data {
                _id
                _ts
                title

              }
            }
          }
        `,
      }),
    })
      .then((result) => result.json())
      .then((result) => result.data.all_items.data);
  };
}
