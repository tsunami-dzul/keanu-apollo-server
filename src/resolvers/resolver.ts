import { config } from '../config/config.js';
import { QueryArgs } from '../interfaces/IQueryArgs.js';

export const resolvers = {
  Query: {
    async keanu(_: any, args: QueryArgs) {
      const width = args.width;
      const height = args.height;
      const young = args.young ? args.young : '';
      const gray = args.gray ? args.gray : '';

      const response = await fetch(`${config.endPoint}${width}/${height}${young}${gray}`);
      const data = await response.text();

      return {
        id: 1,
        image: data,
      };
    },
  },
};
