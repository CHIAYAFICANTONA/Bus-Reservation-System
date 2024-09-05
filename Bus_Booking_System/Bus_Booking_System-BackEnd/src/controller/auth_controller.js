const dbconnection = require('../database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs')

const privateKey = fs.readFileSync('private.pem', 'utf8');

// Helper function to hash passwords using bcrypt
const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (err) {
    throw new Error('Error hashing password with bcrypt: ' + err.message);
  }
};

// Helper function to verify password using bcrypt
const verifyPassword = async (password, hash) => {
  try {
    const isValid = await bcrypt.compare(password, hash);
    return isValid;
  } catch (err) {
    throw new Error('Error verifying password with bcrypt: ' + err.message);
  }
};

exports.signup = async (req, res) => {
  try {
    const { name, email, phoneNumber, password } = req.body;

    const [existingUser] = await dbconnection.query('SELECT * FROM users WHERE email = ?', [email]);
    if (existingUser.length > 0) {
      return res.status(400).send({
        success: false,
        data: [],
        message: 'User with this email already exists.',
      });
    }

    const hashedPassword = await hashPassword(password);

    const [insertResult] = await dbconnection.query(
      'INSERT INTO users(name, email, phoneNumber, password, roleId) VALUES (?, ?, ?, ?, 3)',
      [name, email, phoneNumber, password]
    );

    const insertedId = insertResult.insertId;

    const [user_inserted] = await dbconnection.query(
      'SELECT * FROM users WHERE id = ?',
      [insertedId]
    );

    res.status(201).send({
      success: true,
      data: user_inserted[0],
      message: 'Saved Successfully',
    });
  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).send({
      success: false,
      data: [],
      message: 'Error on server: ' + error.stack,
    });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const [found] = await dbconnection.query('SELECT * FROM users WHERE email = ?', [email]);

    if (!Array.isArray(found) || found.length === 0) {
      return res.status(401).send({
        success: false,
        data: [],
        message: 'Wrong email',
      });
    }

    const user = found[0];

    if(user.password !== password){
      return res.status(401).send({
        success: false,
        data: [],
        message: 'Wrong Password',
      });
    }

    /*const userPass = await dbconnection.query('SELECT password FROM user WHERE email = ?', [email]);

    if (!userPass) {
      console.error('Password field is missing in the user record.');
      return res.status(500).send({
        success: false,
        data: [],
        message: 'Server error: password field missing.',
      });
    }

    const isPasswordValid = await verifyPassword(password, userPass);

    if (!isPasswordValid) {
      return res.status(401).send({
        success: false,
        data: [],
        message: 'Wrong Password',
      });
    }*/

    const token = jwt.sign(
        { id: user.id }, privateKey, { algorithm: 'RS256', expiresIn: '1h' }
    );

    res.status(200).send({
      success: true,
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        },
        token: token
      },
      message: 'Successfully Logged In',
    });
  } catch (error) {
    console.error('Signin Error:', error);
    res.status(500).send({
      success: false,
      data: [],
      message: 'Error on server: ' + error.stack,
    });
  }
};
