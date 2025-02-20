import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: '443',
        https: {
            key: fs.readFileSync(path.resolve(__dirname, '/etc/letsencrypt/live/thh-fire.site/privkey.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, '/etc/letsencrypt/live/thh-fire.site/fullchain.pem'))
        },  
        hmr: {
            host: 'thh-fire.site'
        }

        // middlewareMode: true,
        // setupMiddlewares: (middlewares) => {
        //     middlewares.use((req, res, next) => {
        //         res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Replace with your frontend domain
        //         res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        //         res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        //         next();
        //     });
        //     return middlewares;
        // }
    }
});