import connection from "../config/database.js"
async function verifyUserExist(){
        connection.query(`SELECT * FROM "users" WHERE "email"=$1`, [email]);
}


const authRepository = {
  verifyUserExist,
};

export default authRepository;