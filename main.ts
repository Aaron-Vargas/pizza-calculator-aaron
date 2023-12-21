game.splash("\"welcome to my pepperoni PIZZAS\"")
let PIZZA = game.askForNumber("how many pizzas do you want?")
let inches = game.askForNumber("\"how big do you want your pizza to be (inches)?\"")
let HST = 0.13
let labor = 1
let rent = 0.75
let cost_per_inch = 0.5
let subtotal = PIZZA * (rent + labor + inches * cost_per_inch)
let tax = subtotal * HST
let total = subtotal + tax
game.splash("The pizzas you want yum! " + ("" + PIZZA) + "Pizzas of " + ("" + inches) + "inches " + "it will cost a total of " + ("" + total))
