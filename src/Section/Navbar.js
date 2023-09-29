import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { AppBar, Select, MenuItem, Toolbar, Typography, Button, CssBaseline} from '@mui/material';

function Navbar() {
  const { i18n, ready } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language is 'en'

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    changeLanguage(newLanguage);
  };

  if (ready) {
    return (
      <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'white' }}>
            My Website
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/album">About</Button>
          <div style={{ flex: 1 }}></div> 
          <Select
            labelId="language-select-label"
            id="language-select"
            value={selectedLanguage}
            onChange={handleLanguageChange}
            style={{ color: 'white' }}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="tr">Turkish</MenuItem>
            <MenuItem value="hi">Hindi</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}

export default Navbar;
