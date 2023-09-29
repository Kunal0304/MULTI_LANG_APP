import * as React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Container} from '@mui/material';
import { useTranslation } from 'react-i18next';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function AlbumPost() {

  const { t } = useTranslation();

  return (
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">                     
                      {t("Card_Head")}
                    </Typography>
                    <Typography>                    
                      {t("Card_Content")}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">{t("View")}</Button>
                    <Button size="small">{t("Edit")}</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
  );
}
