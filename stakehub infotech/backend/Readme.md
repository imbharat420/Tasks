Below are the steps of the `/new-order` API with conditions:

1. Receive a POST request with `side`, `qty`, and `price` in the request body.
2. Determine the opposite side (either 'Buy' or 'Sell') based on the provided side.
3. Set up the matching condition for the orders based on the side and price.
4. Find the matching order from the PendingOrder collection in the database with the opposite side and matching condition. Sort the orders by price.
5. If a matching order is found:
   a. Calculate the completed quantity by taking the minimum of the provided quantity and the matching order's quantity.
   b. Set the completed price to the matching order's price.
   c. Create a new CompletedOrder with the completed price and completed quantity, then save it to the database.
   d. If the provided quantity is greater than the matching order's quantity, create a new PendingOrder with the remaining quantity and save it to the database.
   e. If the provided quantity is less than the matching order's quantity, update the matching order's quantity and save it to the database.
   f. If the provided quantity is equal to the matching order's quantity, delete the matching order from the PendingOrder collection in the database.
   g. Send a 201 status response with a message indicating that the order has been matched and processed.
6. If no matching order is found:
   a. Create a new PendingOrder with the provided side, quantity, and price, then save it to the database.
   b. Send a 201 status response with a message indicating that the order has been added to pending orders.
7. If any error occurs during the process, forward the error to the error handling middleware.