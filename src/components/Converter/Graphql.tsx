import React, { useState, useEffect } from 'react';
import { buildClientSchema, getIntrospectionQuery } from 'graphql';
import CodeMirror from '@uiw/react-codemirror';
import { GraphQLSchema } from 'graphql/type';
import { graphql } from 'cm6-graphql';

const endpoint = 'https://swapi-graphql.netlify.app/.netlify/functions/index';

const GraphiQL = () => {
  const [schema, setSchema] = useState<GraphQLSchema | null>(null); // Update the type to `any`
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    const fetchSchema = async () => {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: getIntrospectionQuery() }),
        });
        const result = await response.json();
        console.log(result);

        if (result.errors) {
          throw new Error(result.errors[0].message);
        }

        const builtSchema = buildClientSchema(result.data);
        setSchema(builtSchema);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSchema();
  }, []);
  const onChangeValue = React.useCallback((value: string) => {
    setQuery(value);
  }, []);
  const executeQuery = async () => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      const result = await response.json();
      setResult(JSON.stringify(result, null, 2));
    } catch (err) {
      console.error(err);
    }
  };

  if (!schema) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CodeMirror
        value={query}
        height="200px"
        width="100%"
        extensions={[graphql(schema)]}
        onChange={onChangeValue}
      />
      <button onClick={executeQuery}>Run Query</button>
      <h2>Result: </h2>
      <CodeMirror value={result} height="400px" width="100%" />
    </div>
  );
};

export default GraphiQL;
