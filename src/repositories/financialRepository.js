import connection from "../config/database.js"
async function getEvents(user){
        return  connection.query(
          `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
          [user.id]
        );
}

async function insertEvent(){
        return connection.query(
          `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
          [user.id, value, type]
        );
}
const financialRepository = {
  getEvents,
  insertEvent,
};
export default financialRepository