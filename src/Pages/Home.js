import * as React from 'react';
import { useTranslation } from 'react-i18next';
import {Container, CssBaseline, Grid} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {MainFeaturedPost, FeaturedPost, Footer} from '../Components';

const defaultTheme = createTheme();

export default function Blog() {

  const { t } = useTranslation();

const mainFeaturedPost = {
  title: t("Home_Top_Head"),
  description: t("Home_Top_Content"),
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: t("ReadMore"),

};

const featuredPosts = [
  {
    title: t('PostHead1'),
    date: 'Nov 12',
    description: t('PostBody1'),
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    read: t('ReadMore')
  },
  {
    title: t('PostHead2'),
    date: 'Nov 11',
    description: t('PostBody1'),
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    read: t('ReadMore')

  },
  {
    title: t('PostHead1'),
    date: 'Nov 11',
    description: t('PostBody1'),
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    read: t('ReadMore')

  },
  {
    title: t('PostHead2'),
    date: 'Nov 12',
    description: t('PostBody1'),
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    read: t('ReadMore')

  },
];

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}