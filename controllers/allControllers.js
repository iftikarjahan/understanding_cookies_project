exports.allContrllers=(req,res,next)=>{
    res.send("This is the response from the controllers file");
}

exports.loginController=(req,res,next)=>{
    const user={name:"Iftikar Jahan", role:"Father"};
    // setting the cookie
    res.cookie("user",JSON.stringify(user),{
        maxAge:3000000,
    })

    res.send("<h1>User logged in and Cookie is set</h1>");
}

exports.displayCookieDataController=(req,res,next)=>{
    // The cookie is present in the req.cookies object
    console.log(req.cookies['user']);
    res.send(`Cookie data: ${req.cookies['user']}`);
}

exports.logoutController=(req,res,next)=>{
    /*
    ->For deleting a cookie, use res.clearCookie
    ->Deleting a cookie is server action and the server effectively instructs the browser
    to delete the cookie by sending a cookie header that sets the expiration time to the 
    past
    */ 
   res.clearCookie("user");
   res.send("<h1>All the cookie data has been removed</h1>");
}