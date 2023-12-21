game.splash("\"welcome to my pepperoni PIZZAS\"")
PIZZA = game.ask_for_number("how many pizzas do you want?")
inches = game.ask_for_number("\"how big do you want your pizza to be (inches)?\"")
HST = 0.13
labor = 1
rent = 0.75
cost_per_inch = 0.5
subtotal = PIZZA * (rent + labor + inches * cost_per_inch)
tax = subtotal * HST
total = subtotal + tax
game.splash("The pizzas you want yum! " + str(PIZZA) + "Pizzas of " + str(inches) + "inches " + "it will cost a total of " + str(total))