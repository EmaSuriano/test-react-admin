import schemaFromGraphql from './schemaGraphqlCool.js';
import schemaFromHasura from './schemaHasura';

const schema = schemaFromGraphql;

const queries = schema.types.reduce((acc, type) => {
  if (type.name !== 'Query' && type.name !== 'Mutation') return acc;
  console.log(type.name);
  return [...acc, ...type.fields];
}, []);

console.log(queries);

// queries
// console.log(queries[0])
