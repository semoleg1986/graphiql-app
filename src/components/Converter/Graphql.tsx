import React, { useState, useEffect } from 'react';
import { buildClientSchema, getIntrospectionQuery } from 'graphql';
import CodeMirror from '@uiw/react-codemirror';
import { GraphQLSchema } from 'graphql/type';
import { graphql } from 'cm6-graphql';
import './Graphql.css';

const endpoint = 'https://swapi-graphql.netlify.app/.netlify/functions/index';

const GraphiQL = () => {
  const [schema, setSchema] = useState<GraphQLSchema | null>(null); // Update the type to `any`
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [showDocs, setShowDocs] = useState(false);
  const [variables, setVariables] = useState('{}');
  const [headers, setHeaders] = useState('');

  const handleClick = () => {
    setShowDocs(true);
  };

  const handleClose = () => {
    setShowDocs(false);
  };
  const onChangeVariables = React.useCallback((value: string) => {
    setVariables(value);
  }, []);

  const onChangeHeaders = React.useCallback((value: string) => {
    setHeaders(value);
  }, []);

  useEffect(() => {
    const fetchSchema = async () => {
      try {
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
      const variablesObj = variables ? JSON.parse(variables) : {}; // Преобразование переменных в объект JSON
      const headersObj = headers ? JSON.parse(headers) : {}; // Преобразование заголовков в объект JSON

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headersObj, // Применение заголовков
        },
        body: JSON.stringify({ query, variables: variablesObj }), // Применение переменных
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
    <div className="query-container">
      <div className="column">
        {showDocs ? (
          <div>
            <button onClick={handleClose}>x</button>
            <iframe
              style={{ width: '100%', height: '600px' }}
              src="/doc/index.html"
              title="GraphQL documentation"
            ></iframe>
          </div>
        ) : (
          <button className="docs-button" onClick={handleClick}>
            Docs
          </button>
        )}
      </div>
      <div className="column">
        <CodeMirror
          className="query-editor"
          value={query}
          height="500px"
          width="100%"
          extensions={[graphql(schema)]}
          onChange={onChangeValue}
        />
        <button className="run-button" onClick={executeQuery}>
          Run
        </button>
        <h3>Variables</h3>
        <CodeMirror
          className="variable-editor"
          value={variables}
          height="100px"
          width="100%"
          onChange={onChangeVariables}
        />
        <h3>Headers</h3>
        <CodeMirror
          className="headers-editor"
          value={headers}
          height="100px"
          width="100%"
          onChange={onChangeHeaders}
        />
      </div>
      <div className="column">
        <CodeMirror className="response-field" value={result} height="500px" width="100%" />
      </div>
    </div>
  );
};

export default GraphiQL;
