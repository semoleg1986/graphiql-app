import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GraphiQLState {
  variables: string;
  headers: string;
  query: string;
  responce: string;
}

const initialState: GraphiQLState = {
  variables: '{}',
  headers: '',
  query: '',
  responce: '',
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
  },
});

export const { setVariables, setHeaders, setQuery, setResponce } = graphiqlSlice.actions;
export default graphiqlSlice.reducer;
