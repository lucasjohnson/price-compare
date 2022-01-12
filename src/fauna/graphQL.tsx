export class graphQL {
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
