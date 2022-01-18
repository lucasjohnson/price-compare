export class Query {
  public static Post = async (
    query: string,
    variables?: object
  ): Promise<any> => {
    return await fetch('https://graphql.fauna.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.FAUNA_CLIENT_SECRET}`,
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    })
      .then((result) => result.json())
      .then((result) => result.data);
  };
}
