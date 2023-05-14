import React, { useState } from 'react';

const GraphiQL: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(event.target.value);
  };

  const executeQuery = () => {
    // Здесь можно выполнить запрос к вашему серверу GraphQL с использованием выбранного клиента или библиотеки, например, Apollo Client или Axios.
    console.log('Executing query:', query);
  };

  return (
    <div>
      <textarea value={query} onChange={handleQueryChange} rows={10} cols={50} />
      <button onClick={executeQuery}>Выполнить запрос</button>
    </div>
  );
};

export default GraphiQL;
