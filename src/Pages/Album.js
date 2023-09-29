import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Footer, AlbumPost, AlbumHead} from '../Components'

const defaultTheme = createTheme();

export default function Album() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <main>
        <AlbumHead/>
        <AlbumPost/>
      </main>
      <Footer/>
    </ThemeProvider>
  );
}
