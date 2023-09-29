import * as React from 'react';
import {Button, Stack, Box, Typography, Container} from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function AlbumHead() {

  const { t } = useTranslation();

  return (
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {/* Album layout */}
              {t("Album")}
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              {t("Album_Content")}
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">{t("Button1")}</Button>
              <Button variant="outlined">{t("Button2")}</Button>
            </Stack>
          </Container>
        </Box>
  );
}
