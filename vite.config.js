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
    }
});