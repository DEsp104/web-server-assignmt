/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/no-unresolved
// This make sure our service worker is ready to be used on the page
import { registerSW } from 'virtual:pwa-register';

// eslint-disable-next-line prettier/prettier
const updateSw = registerSW({
  onNeedRefresh() {
    console.log('Need Refresh');
  },
  onOfflineReady() {
    console.log('Offline Ready');
  },
  onRegistered() {
    console.log('Registered');
  },
  onRegisterError(e) {
    console.log('Register Error');
    console.error(e);
  },
});
