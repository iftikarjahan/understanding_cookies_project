const express=require("express");
const router=express.Router();
const controllers=require("../controllers/allControllers");

router.get("/",controllers.allContrllers);

/*
->this is the initial get request that would set the cookie
->before this get request, there would be no cookie, so we have to set the cookie
and send it as a response to the client(browser) that would then store the cookie in the 
browser itself
*/ 
router.get("/login",controllers.loginController);

module.exports=router;

