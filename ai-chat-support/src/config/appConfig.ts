export const appConfig = {
  name: import.meta.env.VITE_APP_NAME || 'AI Customer Support',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1',
  features: {
    chat: import.meta.env.VITE_FEATURE_CHAT === 'true',
    auth: import.meta.env.VITE_FEATURE_AUTH === 'true',
  },
};