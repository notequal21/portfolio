import React, { useEffect } from 'react';

function Fluid({ className }) {
  const style = {
    color: 'white',
    height: '100%',
    width: '100%',
    margin: 0,
    position: 'fixed',
    zIndex: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  const fluidLoaded = () => {
    console.log(
      'WebGL Canvas Loaded // also a callback function if you need it.'
    );
  };

  useEffect(() => {
    if (document.querySelector('#fluid-script')) {
    } else {
      const script = document.createElement('script');
      script.src = './lib/fluid-init.js';
      script.id = 'fluid-script';
      script.async = true;
      // script.onload = fluidLoaded;
      document.body.appendChild(script);
      // return () => {
      //   // Clean up code (if needed) when the component unmounts
      //   document.body.removeChild(script);
      // };
    }
  }, []);

  return (
    <canvas className={`fluid-canvas ${className}`} style={style}></canvas>
  );
}

export default Fluid;
