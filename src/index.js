import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { Grid } from '@mui/material'
import ReactDOM from 'react-dom/client';
import Memes from './components/Memes';
import './index.css'

const queryClient = new QueryClient();

const App = () => { 
    //const [memeUrls, setMemeUrls] = useState([]);

    return (
        <QueryClientProvider client={queryClient}>
            <Grid container spacing={3}>
                <Grid item xs></Grid>
                <Grid item xs={6}>
                    <h1 style={{textAlign: 'center'}}>Gallery of Memes</h1>
                </Grid>
                <Grid item xs></Grid>
            </Grid>
            <Memes/>
        </QueryClientProvider>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);