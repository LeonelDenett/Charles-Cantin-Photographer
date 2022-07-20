import '../styles/globals.css';
import Layout from '../components/Layout';
import { ThemeProvider, createTheme, responsiveFontSizes  } from '@mui/material/styles';

let theme = createTheme({
    palette: {
      primary: {main: '#fff',},
      beigeDark: {main: '#F9EBC8'},
      whiteDark: {main: '#FEFBE7'},
      greenDark: {main: '#DAE5D0'},
      blueDark: {main: '#A0BCC2'},
      brown: {main: '#C2986E'},
      brownDark: {main: '#393737'},
    },
    typography: {
        fontFamily: [
            'Rokkitt',
        ].join(','),
        title: {
            fontSize: '2rem',
            padding: '0.5rem',
            fontWeight: 600,
            letterSpacing: '0.1rem',
            color: '#393737'
        },
        description: {
            fontSize: '1.1rem',
            fontWeight: 400,
            color: '#393737'
        },
        subtitle: {
            marginBottom: '1rem',
            fontWeight: 600,
            color: '#393737'
        },
        infos: {
            fontSize: '1rem',
            fontWeight: 400,
            color: '#393737'
        },
        link: {
            cursor: 'pointer',
            textTransform: 'uppercase',
            fontWeight: 700,
            letterSpacing: '0.2rem',
            color: '#393737'
        },
        drawerTitle: {
            color: '#FEFBE7',
            ['@media (min-width:1200px)']: {
                fontSize: '1rem',
            }
        },
        footer: {
            textTransform: 'uppercase',
            fontWeight: 400,
            color: '#393737',
            fontSize: '0.8rem',
            ['@media (min-width:1200px)']: {
                fontSize: '1rem',
            }
        }
    }
});

theme = responsiveFontSizes(theme);

function MyApp({ Component, pageProps }) {
    return(
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}

export default MyApp
