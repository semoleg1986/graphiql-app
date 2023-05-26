import { GraphQLSchema, buildClientSchema, getIntrospectionQuery } from 'graphql';
import React, { useState, useEffect } from 'react';
const endpoint = 'https://swapi-graphql.netlify.app/.netlify/functions/index';

interface DocsExplorerProps {
  onClose: () => void;
}

const DocsExplorer: React.FC<DocsExplorerProps> = ({ onClose }) => {
  const [schema, setSchema] = useState<GraphQLSchema | null>(null);

  useEffect(() => {
    const fetchSchema = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: getIntrospectionQuery() }),
        });
        const result = await response.json();
        if (result.errors) {
          throw new Error(result.errors[0].message);
        }

        const builtSchema = buildClientSchema(result.data);
        setSchema(builtSchema);
      } catch (err) {}
    };

    fetchSchema();
  }, []);

  if (!schema) {
    return null; // or return a loading indicator if needed
  }

  return (
    <div>
      <button onClick={onClose}>&#x00D7;</button>
      <iframe
        style={{ width: '100%', height: '600px' }}
        src="/doc/docs.html"
        title="GraphQL documentation"
      ></iframe>
    </div>
  );
};

export default DocsExplorer;

// const DocsExplorer = () => {
//   return <div>Here is docs</div>;
// };

// export default DocsExplorer;
