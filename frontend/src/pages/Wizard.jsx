import { Box } from '@mui/material';
import { useLocation, useSearchParams } from 'react-router-dom';
import ConfigurationStepper from '../components/ConfigurationStepper';

const style = {
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(128, 128, 128, 0.5)), url("/images/google-earth-3D.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed', /* Keeps the background fixed during scrolling */
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
};

const requirementsArray = [
  {}
]

const Wizard = () => {
  const accordionList = [];
  const location = useLocation()
 console.log({location });
  return (
    <>
      <Box sx={style}>
        <ConfigurationStepper desc={location.state.descs} title={location.state.title}/>
      </Box>
    </>
  );
};

export default Wizard;
