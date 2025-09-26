let IS_PROD = true;
const server = IS_PROD ?
    "https://apna-video-conferencing-irh7.vercel.app/" :

    "http://localhost:8000"


export default server;
