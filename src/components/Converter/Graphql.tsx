import React, { useEffect } from 'react';
import { fetchSchema } from './fetchSchema';

const SchemaComponent: React.FC = () => {
  useEffect(() => {
    const getGraphQLSchema = async () => {
      const schema = await fetchSchema();
      console.log(schema);
    };

    getGraphQLSchema();
  }, []);

  return <div>Fetching GraphQL schema...</div>;
};

export default SchemaComponent;
