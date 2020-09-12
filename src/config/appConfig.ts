require('dotenv').config()

export const HOST_WEB_CLIENT = process.env.HOST_WEB_CLIENT || 'http://localhost:4000'
export const IS_OFFLINE = process.env.IS_OFFLINE || true
