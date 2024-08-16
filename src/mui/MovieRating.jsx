import React from 'react';
import { Rating } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';

const MovieRating = ({ ratingValue }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <Rating
        name="customized-rating"
        value={ratingValue}
        readOnly
        icon={<Star fontSize="inherit" style={{ color: '#ffcc00' }} />}
        emptyIcon={<StarBorder fontSize="inherit" style={{ color: '#ffcc00' }} />}
      />
    </div>
  );
};

export default MovieRating;
