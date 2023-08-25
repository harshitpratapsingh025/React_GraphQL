import { Backdrop, CircularProgress } from '@mui/material';

// eslint-disable-next-line react/prop-types
export default function Loader({ isLoading }) {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} style={{ zIndex: 999 }} open={isLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
