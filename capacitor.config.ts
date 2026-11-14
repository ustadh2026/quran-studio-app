import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.quranstudio.luganda',
  appName: 'Quran Studio',
  webDir: 'www',
  backgroundColor: '#1E7A4C',
  android: {
    allowMixedContent: true
  }
};

export default config;
