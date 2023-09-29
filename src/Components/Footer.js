import * as React from 'react';
import {Box, Typography} from '@mui/material';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          {t("Footer")}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >        
          {t("Footer_Content")}
        </Typography>
      </Box>
  );
}

export default Footer;
