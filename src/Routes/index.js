import React from "react";
import { Route, Routes } from 'react-router-dom';
import {Home, Album} from '../Pages';

function RoutesComponent() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<Album />} />
        </Routes>       
      </div>
    );
  }

export default RoutesComponent;
