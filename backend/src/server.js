const express = require('express');
const routes = require('./routes')
const cors = require('cors');

const sequelize = require('./config/database');

const app = express();
const port = 3000;


async function initApp(){
  app.use(express.json());
  app.use(cors());
  app.use(routes);

  try{
    await sequelize.authenticate();
    console.log('Db connected successfull !');

    await sequelize.sync({ alter: true });
    app.listen(port, () => {
      console.log(`Run backend on  http://localhost:${port}/`);
    })
  }catch(error){
    console.log(`Exception ${error.message}`);
    sequelize.close();
  }
}

initApp()


