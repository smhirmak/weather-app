import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

const DownloadAppButton = () => {
  const [installPromptEvent, setInstallPromptEvent] = useState<Event | null>(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e: Event) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setInstallPromptEvent(e);
    });
  }, []);

  const handleInstallClick = () => {
    if (!installPromptEvent) return;
    // Show the prompt
    (installPromptEvent as any).prompt();
    // Wait for the user to respond to the prompt
    (installPromptEvent as any).userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
    });
  };

  return (
    <Button variant="outlined" onClick={handleInstallClick}>
      Install App
    </Button>
  );
};

export default DownloadAppButton;