function computer(options)
{
    var options = options || {};
    this.name = options.name || "Computer";
    this.type = options.type;
    this.brand = options.brand;
    this.quantity = options.quantity || 1;
    this.decrease = options.decrease || 1;
    this.increase = options.increase || 1;
    this.buy = function()
    {
        this.quantity -= this.decrease;
        if (this.quantity <= 0)
        {
            console.log("Out of Stock!");
        }
        else
        {
            console.log("Currently in stock " + this.quantity);
        }
    }
    this.sell = function()
    {
        this.quantity += this.increase;
        if (this.quantity >= 1)
        {
            console.log("Currently in stock " + this.quantity);
        }
    }
}

var desktop = new computer
(
    {
        name: "Used Desktop",
        type: "Desktop",
        brand: "Generic",
        quantity: 1
    }
)

var laptop = new computer
(
    {
        name: "Used Laptop",
        type: "Laptop",
        brand: "Generic",
        quantity: 1
    }
)

desktop.buy();
desktop.sell();
laptop.buy();
laptop.sell();
