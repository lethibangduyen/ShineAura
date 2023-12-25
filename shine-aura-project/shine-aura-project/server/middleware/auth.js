const jwt = require('jsonwebtoken');
const util = require('util');

const verifyAsync = util.promisify(jwt.verify);

const authenticateToken = async (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Không có token xác thực' });
  }

  try {
    const user = await verifyAsync(token, 'shineaura');
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token hết hạn', error: error.message });
    } else {
      return res.status(401).json({ message: 'Token không hợp lệ', error: error.message });
    }
  }
};

module.exports = authenticateToken;
