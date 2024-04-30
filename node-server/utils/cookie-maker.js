//  after login we will create a cookie and send it to the client
//  cookie contains the jwt token of loginToken 

const cookieMaker = async (res, statuscode, user) => {
    const loginToken = await user.getJwtToken();
    const options = {
        expires: new Date(
            Date.now() + process.env.Cookie_Expire * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,  //accessible only by web server 
        secure: true, //https
        sameSite: 'None', //cross-site cookie 
    };

    console.log("loginToken", loginToken);

    res.status(200).cookie("loginToken", loginToken, options).json({
        success: true,
        user,
        loginToken,
    });

};

export default cookieMaker;
//  these cookies are stored in the browser and sent to the server.
//  cookies contain the jwt token of loginToken which we decode give back
//  the id of the user  