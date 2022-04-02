const express = require('express'),
  sequelize = require('./src/config/db'),
  { port } = require('./src/config/index');

app = express();

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`)});
    } catch (e) {
        console.log(e)
    }
}

start()
