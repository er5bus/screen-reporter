export const SCREEN_CAPTRUE_STORAGE_KEY = "SCREEN_CAPTRUE_STORAGE_KEY"
export const SETTINGS_STORAGE_KEY = "SETTINGS_STORAGE_KEY"

export const PAGES = {
  RECEIVER:  {
    PATH: "receiver.html",
    PARAM_NAME: "identifier"
  },
  OPTIONS: {
    PATH: "options.html"
  }
}

export const TRELLO = {
  AUTH_URL: "https://trello.com/1/authorize",
  TOKEN: "22ac062e43a16df65c5325dd965f3d1a",
  APP_NAME:  "Screen reporter App",
  RESPONSE_TYPE: "token",
  CALLBACK_METHOD: "fragment",
  SCOPE: "read,write",
  EXPIRATION: 'never' // 1hour, 1day, 30days 
}

export const CAPTURE_OPTIONS = {
  format: 'jpeg'
}
