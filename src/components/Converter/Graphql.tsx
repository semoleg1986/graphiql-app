import React, { useState } from 'react';
import ApiService from '../../services/ApiServ';
import i18next from 'i18next';

const GraphiQL: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(event.target.value);
  };

  const executeQuery = async () => {
    try {
      const response = await ApiService.post('tv/popular', { query });

      const data = response.data;

      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
    }
  };

  return (
    <div>
      <textarea value={query} onChange={handleQueryChange} rows={10} cols={50} />
      <button onClick={executeQuery}>{i18next.t('request')}</button>
      <div>
        <h2>{i18next.t('result')}:</h2>
        <pre>{result}</pre>
      </div>
    </div>
  );
};

export default GraphiQL;
