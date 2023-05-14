import React, { useState } from 'react';
import ApiService from '../../services/ApiServ';

const GraphiQL: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(event.target.value);
  };

  const executeQuery = async () => {
    try {
      // Здесь мы используем axios для выполнения запроса к серверу GraphQL
      const response = await ApiService.post('tv/popular', { query });

      // Получаем результат из ответа сервера
      const data = response.data;

      // Обновляем состояние с результатом запроса
      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
    }
  };

  return (
    <div>
      <textarea value={query} onChange={handleQueryChange} rows={10} cols={50} />
      <button onClick={executeQuery}>Выполнить запрос</button>
      <div>
        <h2>Результат:</h2>
        <pre>{result}</pre>
      </div>
    </div>
  );
};

export default GraphiQL;
