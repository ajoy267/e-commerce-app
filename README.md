# E-Commerce App Day 1 ReadMe

## Product Page

### HTML
* Title
* Empty div for product list

### JavaScript
* Render Function file
    * a function that loops through the array file
    * returns the product info
* Array File
    * all the info for each product
* (Bonus) TDD Render Function
* App.js 
    * generates the product


# E-Commerce App Day 2 ReadMe

## Cart Page

### HTML 
* Title
* Table
    * Table head 
        * Product, Price, Qty, Total
    * Table Body
        * empty
    * Table footer
        * Order Total
        * Order Total Amount

### JavaScript
* Render Function File
    * render a function that loops through the array file
    * return product id and and quantity 
* Array File
    * Getting the product code (id) and quantity 
* App file 
    * generate the table


# E-Commerce App Day 3 ReadMe

### Basic Plan
* Add Product to shopping cart page
    * Add to cart button
        * gets product id and adds to the quantity
        * stores in local storage
        * tracks how qty of item and displays in shoe card
* Get Shopping cart from local storage on shopping cart page
* Place Order Button
    * if there are no items disable button
    * if there are items in cart 
        * button removes local storage (items in cart)
            * redirects back to home page
* TDD tests
    * for each function
        * getCart
        * addToCart
        * clearCart






# Alchemy Bootstrap Template

## Making a plan

(bolded steps are mandatory, unbolded are for more advanced projects)

1) **Make a drawing of your app. Simple "wireframes"**
2) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
3) **For each HTML element ask: Why do I need this?**
4) Ask which of out HTML elements are hard coded, and which are dynamically generated?
5) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
6) Is there some state we need to initialize?
7) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
8) **Think about how to validate each of your steps**
9) Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
10) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
11) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**


## To Run Cypress Tests
* `npm install`
* `npm test`
* Cypress will open -- you should then click "run <#> integration spec(s)"
    ![](cypress.png)
* Make sure all tests pass