var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "38119Peej!!",
  database: "bamazonDB"
});

function showStuff() {
  var stuff = "SELECT * FROM products";
  connection.query(stuff, function (err, res) {
    if (err) throw err;
    var table = new Table({
      head: ['Item ID', 'Product Name', 'Department', 'Price', 'Qty in Stock'],
      colWidths: [10, 40, 20, 10, 15]
  });
    for (var i = 0; i < res.length; i++) {
      table.push(
        [res[i].item_id, res[i].product_name, res[i].dept_name, res[i].price, res[i].stock_qty]
      );
    }
    console.log(table.toString());
  })
};

connection.connect(function (err) {
  if (err) throw err;
  console.log("Welcome to Bamazon!")
  showStuff();
  shopSearch();
});

  function shopSearch() {
    inquirer
      .prompt({
        name: "purchase",
        message: "Please enter the Item ID of the item you would like to buy.",
        type: "number"
      })
      .then(function(answer) {
        if (answer.purchase === NaN) {
          inquirer
            .prompt({
              name: "purchase",
              message: "Invalid input. Please enter the Item ID as a number.",
              type: "number"
            })
        }
        else
        inquirer
          .prompt({
            name: "qty_buy",
            message: "How many would you like to buy?",
            type: "number"
          })
          //connection.end();
        }
      );
 } 