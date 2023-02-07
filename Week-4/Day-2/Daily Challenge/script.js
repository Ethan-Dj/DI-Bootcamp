let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// // part 1 
// groceries["fruits"].forEach(elem => { console.log(elem)})

// part 2

const cloneGroceries = () => {
    let user = client
    user = "Betty"
    console.log(client)
    // John displayed as new adress adn value created on line 20 and 

    let shopping = groceries
    shopping["totalPrice"] = "35$"
    console.log(groceries["totalPrice"])
    // Both stack values point to the same heap adress, at this heap adress teh totalprice
    // was changed and so the totalprice for both variables is changed


    shopping["other"]["payed"] = false
    console.log(groceries["other"]["payed"])
}

cloneGroceries()