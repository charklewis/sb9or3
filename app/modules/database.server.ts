import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("http://some-graphql-api.com/api/graphql", {});

const fetchQuery = async (query: any, variables: any) => {
  try {
    const response = await client.request(query, variables || {});
    return response;
  } catch (error) {
    return {};
  }
};

export { fetchQuery };
