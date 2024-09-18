exports.allContrllers=(req,res,next)=>{
    res.send("This is the response from the controllers file");
}

exports.loginController=(req,res,next)=>{
    const user={name:"Iftikar Jahan", role:"Father"};
    // setting the cookie
    res.cookie("user",JSON.stringify(user),{
        maxAge:30000,
        httpOnly:true
    })

    res.send("<h1>User logged in and Cookie is set</h1>");
}