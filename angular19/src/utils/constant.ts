// angular19/src/utils/constant.ts

export const currentUrl = window.location.href;

export const isLocalhost =
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1');

export const apiBaseURL = isLocalhost
  ? 'http://localhost:3000'
  : window.location.hostname === 'vite.fgp.one'
  ? 'https://back.fgp.one'
  : '';

console.log({ isLocalhost, apiBaseURL, currentUrl });
