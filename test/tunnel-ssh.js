//MySQL
import mysql from 'mysql2';
import tunnel from 'tunnel-ssh';
import dotenv from 'dotenv';
dotenv.config();

/*
const ssh_config = {
  username: process.env.SSH_USER,
  //password: process.env.SSH_PASSWORD,
  host: process.env.SSH_HOST,
  port: process.env.SSH_PORT,
  dstHost: process.env.SSH_DATABASE_HOST,
  dstPort: process.env.SSH_DATABASE_PORT,
}

tunnel(ssh_config, (error, server) => {
  if (error) {
    throw error;
  } else if (server !== null) {
    mysql
    .createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    })
    .execute('SHOW TABLES from playwith_db;', (err, result, field) => {
      if (err) throw err;
      console.log(result);
    });
  }
});
*/

const ssh_config = {
  username: 'ubuntu',
  //password: process.env.SSH_PASSWORD,
  host: '15.164.288.184',
  //port: process.env.SSH_PORT,
  dstHost: 'playiwth-db-instance.cqtagxkl3688.ap-northeast-2.rds.amazonaws.com',
  dstPort: 4040,
}

tunnel(ssh_config, (error, server) => {
  if (error) {
    throw error;
  } else if (server !== null) {
    mysql
    .createConnection({
      host: '0.0.0.0',
      user: 'withplay',
      password: 'playwith123',
      database: 'playwith_db',
    })
    .execute('SHOW TABLES from playwith_db;', (err, result, field) => {
      if (err) throw err;
      console.log(result);
    });
  }
});