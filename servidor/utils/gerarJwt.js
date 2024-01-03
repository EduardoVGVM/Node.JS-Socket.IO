import Jwt from "jsonwebtoken";

function gerarJwt(payload) {
    const tokenJwt = Jwt.sign(payload, process.env.SEGREDO_JWT, {
        expiresIn: "1h"
    })
    return tokenJwt;
}

export default gerarJwt;