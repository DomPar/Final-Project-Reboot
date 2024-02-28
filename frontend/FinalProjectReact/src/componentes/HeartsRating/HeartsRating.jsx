import './HeartsRating.css'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

const VerticalHeartsWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  });

export default function HeartsRating() {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 }
      }}
    >
      <VerticalHeartsWrapper>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      </VerticalHeartsWrapper>
    </Box>
  );
}