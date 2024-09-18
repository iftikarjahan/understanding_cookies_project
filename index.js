//creating an express app
const express=require("express");
const app=express();  

// using the cookie parser
const cookieParser=require("cookie-parser");
app.use(cookieParser());  //for parsing the cookies from the request

//requiring the routes file
const allRoutes=require("./routes/allRoutes");



app.use(allRoutes);


//connecting and listening to the port
const port=3300;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
