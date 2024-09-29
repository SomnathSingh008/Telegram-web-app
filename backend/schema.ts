import { makeExecutableSchema } from '@graphql-tools/schema';
import { supabase } from './supabaseClient';


const typeDefs = `
  type User {
    id: String!
    coins: Int!
  }
    interface User {
  id: string;
  coins: number;
}
  type Query {
    getUserCoins(userId: String!): User
  }

  type Mutation {
    updateCoins(userId: String!, coins: Int!): User
  }
`;
interface User {
  id: string;
  coins: number;
}

const resolvers = {
  Query: {
    getUserCoins: async (_: any, { userId }: { userId: string }) => {
      const { data, error } = await supabase
        .from('users')
        .select('coins')
        .eq('id', userId)
        .single();

      if (error) throw new Error(error.message);
      return { id: userId, coins: data.coins };
    },
  },
  Mutation: {
    updateCoins: async (_: any, { userId, coins }: { userId: string, coins: number }) => {
      const { data, error } = await supabase
        .from('users')
        .update({ coins })
        .eq('id', userId)
        .single();

      if (error) throw new Error(error.message);
      return { id: userId, coins: data.Coins };
    },
  },
};

export const schema = makeExecutableSchema({ typeDefs, resolvers });
