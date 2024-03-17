import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'alpr-client',
  webDir: 'dist',
  server: {
    androidScheme: 'http'
  },
  android: {
    allowMixedContent: true,

  },
};

export default config;
