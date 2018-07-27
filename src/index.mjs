import server from './configs/express.config';
import connect2db from './configs/mongoose.config.mjs'


    connect2db(() => {
        const app = server.init();

        app.listen(3000, () => {
            console.log('app started, listening on port 3000');
        });
    });
    
