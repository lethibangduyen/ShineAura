const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_SECRET } = require('../env');

function verifyToken(...roles) {
    return (req, res, next) => {
        let authHeader = req.headers['authorization'];
        let token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            res.status(401).json({ message: "Invalid token" });
            return;
        }

        try {
            const verified = jwt.verify(token, ACCESS_TOKEN_SECRET);
            if (!verified.exp || (verified.exp < (Date.now() / 1000))) {
                res.status(401).json({ message: "Token expired" });
                return;
            }
            if (roles.length > 0 && !roles.includes(verified.role)) {
                res.status(403).json({ message: "Access denied" });
                return;
            }
            req.user = verified;
            return next();
        }
        catch (err) {
            res.status(401).json({ message: "Token expired | Token is not still valid" });
            return;
        }
    }
}

module.exports = { verifyToken };