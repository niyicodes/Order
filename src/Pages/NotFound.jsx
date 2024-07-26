import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ErrorImage from '../assets/notfound.png';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center my-[30px] p-4">
      <div className="max-w-md w-full text-center">
        <img src={ErrorImage} alt="404 Not Found" className="mx-auto w-full h-auto" />
        <Typography variant="h3" component="h1" className="text-gray-800 font-bold" sx={{marginBottom:2}}>
          Oops! Page Not Found
        </Typography>
        <Typography variant="body1" component="p" className="text-gray-600" sx={{marginBottom:2}}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </Typography>
        <Link to="/" className="text-white">
          <Button variant="contained" color="primary">
            Go to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
