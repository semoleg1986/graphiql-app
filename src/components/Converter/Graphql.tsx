import React, { useState, useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buildClientSchema, getIntrospectionQuery } from 'graphql';
import CodeMirror from '@uiw/react-codemirror';
import { GraphQLSchema } from 'graphql/type';
import { graphql } from 'cm6-graphql';
import './Graphql.css';
import {
  setVariables,
  setHeaders,
  setQuery,
  setResponce,
  setDocsButtonActive,
} from '../../store/slices/graphiqlSlice';
import { RootState } from '../../store';
import 'react-toastify/dist/ReactToastify.css';
import WarningMessage from '../WarningMessage';

const DocsExplorer = React.lazy(() => import('./DocsExplorer'));

const endpoint = 'https://swapi-graphql.netlify.app/.netlify/functions/index';

const GraphiQL = () => {
  const [schema, setSchema] = useState<GraphQLSchema | null>(null);
  const [showDocs, setShowDocs] = useState(false);
  const [activeEditor, setActiveEditor] = useState('variables');
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');

  const dispatch = useDispatch();
  const variables = useSelector((state: RootState) => state.graphiql.variables);
  const headers = useSelector((state: RootState) => state.graphiql.headers);
  const query = useSelector((state: RootState) => state.graphiql.query);
  const result = useSelector((state: RootState) => state.graphiql.responce);
  const isDocsButtonActive = useSelector((state: RootState) => state.graphiql.isDocsButtonActive);

  const handleClick = () => {
    setShowDocs(true);
  };

  const handleClose = () => {
    setShowDocs(false);
  };
  const onChangeVariables = (value: string) => {
    dispatch(setVariables(value));
  };

  const onChangeHeaders = (value: string) => {
    dispatch(setHeaders(value));
  };

  const onChangeValue = (value: string) => {
    dispatch(setQuery(value));
  };

  useEffect(() => {
    const fetchSchema = async () => {
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
    };

    fetchSchema();
  }, []);

  const executeQuery = async () => {
    try {
      const variablesObj = variables ? JSON.parse(variables) : {};
      const headersObj = headers ? JSON.parse(headers) : {};

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headersObj,
        },
        body: JSON.stringify({ query, variables: variablesObj }),
      });

      const result = await response.json();
      if (response.ok) {
        dispatch(setResponce(JSON.stringify(result, null, 2)));
        if (!isDocsButtonActive) {
          dispatch(setDocsButtonActive(true));
        }
      } else {
        throw new Error(result.errors[0].message);
      }
    } catch (err) {
      setWarningMessage(`${err}`);
      setShowWarning(true);
    }
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const closeWarning = () => {
    setShowWarning(false);
    setWarningMessage('');
  };

  if (!schema) {
    return <div>Loading...</div>;
  }

  return (
    <div className="query-container">
      {showWarning && <WarningMessage message={warningMessage} onClose={closeWarning} />}

      <div className="column">
        <Suspense fallback={<div>Lodaing Docs...</div>}>
          {showDocs ? (
            <div>
              <button onClick={handleClose}>&#x00D7;</button>
              <DocsExplorer />
            </div>
          ) : (
            <button className="docs-button" onClick={handleClick} disabled={!isDocsButtonActive}>
              Docs
            </button>
          )}
        </Suspense>
      </div>
      <div className="column">
        <div className={`editor-container ${isCollapsed ? 'collapsed' : ''}`}>
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
          <div className="editor-controls">
            <button
              className={`control-button ${activeEditor === 'variables' ? 'active' : ''}`}
              onClick={() => setActiveEditor('variables')}
            >
              Variables
            </button>
            <button
              className={`control-button ${activeEditor === 'headers' ? 'active' : ''}`}
              onClick={() => setActiveEditor('headers')}
            >
              Headers
            </button>
            <button className="collapse-button" onClick={toggleCollapse}>
              {isCollapsed ? <>&#x25BC;</> : <>&#x25B2;</>}
            </button>
          </div>
          {activeEditor === 'variables' && (
            <CodeMirror
              className="variable-editor"
              value={variables}
              height="100px"
              width="100%"
              onChange={onChangeVariables}
            />
          )}
          {activeEditor === 'headers' && (
            <CodeMirror
              className="headers-editor"
              value={headers}
              height="100px"
              width="100%"
              onChange={onChangeHeaders}
            />
          )}
        </div>
      </div>
      <div className="column">
        <CodeMirror className="response-field" value={result} height="500px" width="100%" />
      </div>
    </div>
  );
};

export default GraphiQL;
