const app = require('./index');
const connect = require('./config/db');

app.listen(8000, async()=>{
    await connect();
    console.log('Listening to port 8000');
})
