/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable prettier/prettier */
import { precacheAndRoute } from 'workbox-precaching';
import { offlineFallback, staticResourceCache, imageCache } from 'workbox-recipes';
import { setDefaultHandler } from 'workbox-routing';
import { NetworkOnly } from 'workbox-strategies';

// Set up the default handler for all files. This will let us use the offline fallback, and is set up to act like a normal browser
setDefaultHandler(new NetworkOnly());

// Inject our precache manifest into the service worker and set up routing for it
// eslint-disable-next-line no-restricted-globals
precacheAndRoute(self.__WB_MANIFEST);

// Cache our static resources (CSS, JS, erc)
staticResourceCache();

// Cache our images
imageCache();

// Provide an offline fallback
offlineFallback({
  pageFallback: '/404.html'
});