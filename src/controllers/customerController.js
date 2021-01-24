const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  loginValidation,
  registrationValidation
} = require("../../handlers/validations.js");

//=========== Customer Registration route ============

exports.registerCustomer = async (req, res) => {
  try {
    //validation
    const { error } = registrationValidation(req.body);
    if (error) {
      return res.status(400).json({
        error: error.details[0].message
      });
    }

    //check if the customer exist
    const isCustomerExist = await db.Customer.findOne({
      email: req.body.email
    });

    if (isCustomerExist) {
      return res.status(400).json({
        error: `Customer ${req.body.email} already exist`
      });
    }

    //hashing the password
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    if (!hashedPassword) {
      return res.status(500).json({
        error: "Oops something went wrong"
      });
    }

    const customer = new db.Customer({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword
    });

    const newCustomer = await db.Customer.create(customer);

    //save the created customer
    const savedCustomer = await newCustomer.save();

    if (!savedCustomer) {
      return res.status(500).json({
        error: "Registration faild please try again!"
      });
    }

    return res.status(201).json({
      message: `Customer ${newCustomer._id} is created successfully`
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: "something went wrong please try again!"
    });
  }
};

//============= Login ===============

exports.loginCustomer = async (req, res) => {
  try {
    //validation
    const { error } = loginValidation(req.body);
    if (error) {
      return res.status(400).json({
        error: error.details[0].message
      });
    }

    //checking if the customer exist in the database
    const customerExist = await db.Customer.findOne({ email: req.body.email });
    if (!customerExist) {
      return res.status(404).json({
        error: `Credentails doesn't exist. please register first`
      });
    }

    //if custome exist compare the password
    const validPassword = await bcrypt.compare(
      req.body.password,
      customerExist.password
    );

    if (!validPassword) {
      return res.status(400).json({
        error: "Incorrect Password"
      });
    }

    const payload = {
      firstName: customerExist.firstName,
      customerId: customerExist._id
    };

    //creating a token for login in Customer from the frontend
    const token = jwt.sign(payload, process.env.SECRET_KEY);

    req.headers.authorization = token;

    res.status(200).json({ token });

    //
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: "something went wrong please try again!"
    });
  }
};

// This is the same as loginCustomer
exports.login = (req, res) => {
  //validation
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).json({
      error: error.details[0].message
    });
  }

  //checking if the customer exist in the database
  db.Customer.findOne({ email: req.body.email })
    .then(data => {
      if (!data) {
        return res.status(404).json({
          error: `Credentails doesn't exist. please register first`
        });
      }

      //if custome exist compare the password
      bcrypt
        .compare(req.body.password, data.password)
        .then(valid => {
          if (!valid) {
            return res.status(400).json({
              error: "Incorrect Password"
            });
          }

          const payload = {
            firstName: data.firstName,
            customerId: data._id
          };

          //creating a token for login in Customer from the frontend
          const token = jwt.sign(payload, process.env.SECRET_KEY);
          req.headers.authorization = token;
          return res.status(200).json({ token });
          //
        })
        .catch(error => {
          console.log(error);
          return res.status(500).json({
            error
          });
        });
    })
    .catch(error => {
      console.log(error);
      return res.status(500).json({
        error
      });
    });
};

/* 

=========== getAllCustomers ===========

*/

exports.getAllCustomers = (req, res) => {
  db.Customer.find({})
    .then(data => {
      if (!data) {
        return res.status(404).json({
          error: "Customer not found"
        });
      }
      return res.status(200).json(data);
    })
    .catch(error => {
      console.log(error.message);
      return res.status(500).json({
        error: "Something went wrong"
      });
    });
};
