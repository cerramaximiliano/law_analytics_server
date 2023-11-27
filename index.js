const retrieveSecrets = require('./server/config/env');
const fsPromises = require('fs').promises;
const dotenv = require('dotenv');
dotenv.config();

(async () => {
    try{
        const secretsString = await retrieveSecrets();
        await fsPromises.writeFile(".env", secretsString);
        const {db} = require('./server/db');
        const server = require('./server/server');
        db.once('open', async () => {
            const app = server.listen(process.env.PORT || 3000, async () => {
            console.log(`Server listen on PORT ${app.address().port}`);
            const tasks = require('./server/tasks/tasasUpdateTasks');
        });
        });
    }catch(err){
        console.log(err);
        process.exit(-1)
    }
})();