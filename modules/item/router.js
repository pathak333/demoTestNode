const { tryCatch } = require("../../helpers/global_try_catch");
const ItemController = require("../item/controller")
const router = require("express").Router();

router.post("/item-list",tryCatch(ItemController.AddItem))
router.get("/get-item",tryCatch(ItemController.getAllItem))

module.exports = router;