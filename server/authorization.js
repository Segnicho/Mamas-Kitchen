import jwt  from "jsonwebtoken";


export const verifyToken = (req, res, next)=>{
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT, (err, user)=>{
            if (err) {
                return res.status(403).json("Invalid token")
            }
            req.user = user;
            next();
        })

    }
    else{
        return res.status(401).json("You are not authenticated")
    }
}


export const verifyTokenAndAuthorize = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if (req.user.id === req.params.id || req.user.isAdmin){
            next();
        }
        else{
            res.status(403).json("You r not Allowed")
        }
    })
}

export const verifyTokenAndAdmin = (req, res, next)=>{

    verifyToken(req, res, ()=>{

        if (req.user.isAdmin){
            next();
        }
        else{
            res.status(403).json("You are not Allowed")
        }
    })
}
