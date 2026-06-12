import jwt from "jsonwebtoken";


export const generateToken = (userId, res) => {
    const payload = { id: userId };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    });

    res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict", //strict = stops broswer from sending this cookies on cross site requests protects against CSRF attacks.
        maxAge: (1000 * 60 * 60 * 24) * 7 //set in milliseconds.
    })

    return token;
}