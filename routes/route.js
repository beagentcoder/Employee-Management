// All the Routes are defined here

const express = require("express");
const router = express.Router();
const handler = require("../handlers/handler");


router.get("/", handler.home);
router.get("/contact", handler.contact);
router.get("/services", handler.services);
router.get("/users", handler.users);
router.get("employees", handler.employees);
router.post("/register", handler.register);

                                                      // router Paths for emp management**************

router.post("/insertemp", handler.insertEmp);
router.get("/allemp",handler.allEmp);
router.get("/findemp/:id", handler.findEmp);
router.delete("/delemp/:id", handler.deleteEmp);
router.put("/upemp/:id", handler.updateEmp);

                                                       //  invalid request handler
router.all("*", handler.invalid);

module.exports = router;
