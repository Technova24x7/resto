require('dotenv').config();
var createError = require('http-errors');
const session = require('express-session');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
const userRouter = require('./routes/UserRouter');
const restaurantRouter = require('./routes/restaurantRouter');
const menuItemRouter = require('./routes/menuItemRouter');
const inventoryItemRouter = require('./routes/inventoryItemRouter');
const orderRouter = require('./routes/orderRouter');
const reviewRouter = require('./routes/reviewRouter');
const menuItemCategoryRouter =require('./routes/menuItemCategoryRouter');

const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL;
var app = express();

app.use(session({
  secret: '123456', // Change this to a secret key of your choice
  resave: false,
  saveUninitialized: false
}));

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// connect to db
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB server');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB server', error);
  });



// Routes

//app.use('/', indexRouter);
app.use(userRouter);
app.use(restaurantRouter);
app.use(menuItemRouter);
app.use(inventoryItemRouter);
app.use(orderRouter);
app.use(reviewRouter);
app.use(menuItemCategoryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
