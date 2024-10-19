const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Simulate user database (could be MongoDB, MySQL, etc.)
const users = [
  { number: 'admin', password: bcrypt.hashSync('admin123', 10), role: 'admin' },
  { number: 'user', password: bcrypt.hashSync('user123', 10), role: 'user' },
];

// Signin Function (Controller)
exports.signIn = (req, res) => {
  const { number, password } = req.body;

  // Find user by number
  const user = users.find(u => u.number === number);
  if (!user) return res.status(400).json({ message: 'User not found' });

  // Check password (bcrypt.compareSync checks if hashed password matches)
  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) return res.status(400).json({ message: 'Invalid password' });

  // Generate JWT token
  const token = jwt.sign({ number: user.number, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.status(200).json({
    message: 'Login successful',
    token,
    role: user.role,
  });
};
