const db = require("../models");

async function getListItemByIdUser(userId) {
  const items = await db.sequelize.query(`
    SELECT 
        workshop.workshop_name,
        workshop.address,
        workshop.price,
        workshop.workshop_duration,
        workshop.description,
        workshop.ratings,
        carts.quantity,
        lang.languange
    FROM
        carts
            LEFT JOIN
        workshops workshop ON carts.workshop_id = workshop.id
            LEFT JOIN
        workshop_languanges lang ON workshop.languange_id = lang.id
    WHERE
        carts.user_id = ${userId}
    `);
  return items;
}

module.exports = {
  getListItemByIdUser,
};
