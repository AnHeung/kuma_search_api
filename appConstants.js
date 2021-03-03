require('dotenv-flow').config({
    node_env: process.env.NODE_ENV || 'dev',
    silent: true
});


const GOOGLE_SEARCH_API_KEY = process.env.GOOGLE_SEARCH_API_KEY
const GOOGLE_SEARCH_ENGINE_ID = process.env.GOOGLE_SEARCH_ENGINE_ID
const GOOGLE_SEARCH_BASE_URL = process.env.GOOGLE_SEARCH_BASE_URL
const TMDB_BASE_URL = process.env.TMDB_BASE_URL
const TMDB_API_KEY = process.env.TMDB_API_KEY
const MAL_ACCESS_TOKEN = process.env.MAL_ACCESS_TOKEN
const MAL_REFRESH_TOKEN = process.env.MAL_REFRESH_TOKEN
const MAL_CLIENT_ID = process.env.MAL_CLIENT_ID
const MAL_CLIENT_SECRET = process.env.MAL_CLIENT_SECRET
const MAL_BASE_URL = process.env.MAL_BASE_URL
const NAVER_PAPAGO_CLIENT_ID = process.env.NAVER_PAPAGO_CLIENT_ID
const NAVER_PAPAGO_CLIENT_SECRET = process.env.NAVER_PAPAGO_CLIENT_SECRET
const NAVER_PAPAGO_API_URL = process.env.NAVER_PAPAGO_API_URL
const NAVER_PAPAGO_DETECT_API_URL = process.env.NAVER_PAPAGO_DETECT_API_URL

module.exports = {
    GOOGLE_SEARCH_API_KEY: GOOGLE_SEARCH_API_KEY,
    GOOGLE_SEARCH_ENGINE_ID: GOOGLE_SEARCH_ENGINE_ID,
    GOOGLE_SEARCH_BASE_URL: GOOGLE_SEARCH_BASE_URL,
    MAL_BASE_URL: MAL_BASE_URL,
    MAL_ACCESS_TOKEN: MAL_ACCESS_TOKEN,
    MAL_REFRESH_TOKEN: MAL_REFRESH_TOKEN,
    MAL_CLIENT_ID: MAL_CLIENT_ID,
    MAL_CLIENT_SECRET: MAL_CLIENT_SECRET,
    TMDB_API_KEY: TMDB_API_KEY,
    TMDB_BASE_URL: TMDB_BASE_URL,
    NAVER_PAPAGO_API_URL: NAVER_PAPAGO_API_URL,
    NAVER_PAPAGO_DETECT_API_URL: NAVER_PAPAGO_DETECT_API_URL,
    NAVER_PAPAGO_CLIENT_ID: NAVER_PAPAGO_CLIENT_ID,
    NAVER_PAPAGO_CLIENT_SECRET: NAVER_PAPAGO_CLIENT_SECRET

}