var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "classpass2019!",
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
    console.log("\n");
    console.log(table.toString());
    shopSearch();
  });
};

connection.connect(function (err) {
  if (err) throw err;
  console.log("Welcome to Bamazon!")
  showStuff();

});

function shopSearch() {
  inquirer
    .prompt({
      name: "purchase",
      message: "Please enter the Item ID of the item you would like to buy.",
      type: "number"
    })
    .then(function (answer1) {
      inquirer
        .prompt({
          name: "qty_buy",
          message: "How many would you like to buy?",
          type: "number"
        })
        .then(function (answer2) {
          var cost = "SELECT * FROM products WHERE item_id = ?";
          connection.query(cost, [answer1.purchase], function (err, res) {
            if (err) throw err;
            var total = res[0].price * answer2.qty_buy;
            if (answer2.qty_buy > res[0].stock_qty) {
              console.log("Insufficient stock. Only " + res[0].stock_qty + " available.");
              inquirer.prompt({
                name: "cont_shop",
                message: "Would you like to continue shopping?",
                type: "confirm"
              }).then(function (answer3) {
                if (answer3.cont_shop === true) {
                  showStuff();
                } else {
                  console.log("Thanks for shopping with us!");
                  connection.end();
                }
              })
            }
            else {
              connection.query(
                "UPDATE products SET stock_qty = stock_qty - ? WHERE item_id = ?",
                [answer2.qty_buy, answer1.purchase],
                function (err, res) {
                  console.log('Thank-you for your purchase. Your total is ' + total + ' dollars.');
                  inquirer.prompt({
                    name: "cont_shop",
                    message: "Would you like to continue shopping?",
                    type: "confirm"
                  }).then(function (answer3) {
                    if (answer3.cont_shop === true) {
                      showStuff();
                    } else {
                      console.log("Thanks for shopping with us!");
                      connection.end();
                    }
                  })
                });
            }
          });
        })
    })

}
;