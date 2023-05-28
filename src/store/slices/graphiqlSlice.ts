import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GraphiQLState {
  variables: string;
  headers: string;
  query: string;
  responce: string;
  isDocsButtonActive: boolean;
}

const initialState: GraphiQLState = {
  variables: '{}',
  headers: '',
  query: 'query{allPlanets{planets{name}}}',
  responce: '',
  isDocsButtonActive: false,
};

const graphiqlSlice = createSlice({
  name: 'graphiql',
  initialState,
  reducers: {
    setVariables: (state, action: PayloadAction<string>) => {
      state.variables = action.payload;
    },
    setHeaders: (state, action: PayloadAction<string>) => {
      state.headers = action.payload;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setResponce: (state, action: PayloadAction<string>) => {
      state.responce = action.payload;
    },
    setDocsButtonActive: (state, action: PayloadAction<boolean>) => {
      state.isDocsButtonActive = action.payload;
    },
  },
});

export const { setVariables, setHeaders, setQuery, setResponce, setDocsButtonActive } =
  graphiqlSlice.actions;
export default graphiqlSlice.reducer;
