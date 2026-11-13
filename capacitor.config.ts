import type { CapacitorConfig } from '@capacitor/core';

const config: CapacitorConfig = {
  appId: 'com.quranstudio.luganda',
  appName: 'Quran Studio',
  webDir: '.',
  backgroundColor: '#0F0F0F',
  server: {
    androidScheme: 'https',
    cleartext: true
  },
  android: {
    allowMixedContent: true
  }
};

export default config;
