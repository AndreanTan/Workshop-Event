const { QueryTypes } = require("sequelize");
const db = require("../models");

async function getListItemByIdUser(userId) {
  const items = await db.sequelize.query(
    `
    SELECT
        workshop.id,
        workshop.workshop_name,
        workshop.address,
        workshop.price,
        workshop.workshop_duration,
        workshop.description,
        workshop.ratings,
        carts.quantity,
        lang.languange,
        workshop.price * carts.quantity as subTotal,
        carts.id as cartId
    FROM
        carts
            LEFT JOIN
        workshops workshop ON carts.workshop_id = workshop.id
            LEFT JOIN
        workshop_languanges lang ON workshop.languange_id = lang.id
    WHERE
        carts.user_id = ${userId}
    `,
    { type: QueryTypes.SELECT }
  );
  return items;
}

async function updateQuantityCart(qty, userId) {
  const query = await db.sequelize.query(
    `
    UPDATE carts SET quantity = ${qty} WHERE id = ${userId}
    `,
    { type: QueryTypes.UPDATE }
  );
  return query;
}

module.exports = {
  getListItemByIdUser,
  updateQuantityCart,
};
