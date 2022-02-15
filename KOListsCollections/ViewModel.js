
// Class to represent row in the seat reservation grid
function SeatReservation(name, initialMeal){
    var self = this;
    self.name = name;
    self.meal = ko.observable(initialMeal);

    self.formattedPrice = ko.computed(function(){
        var price = self.meal().price;
        return price ? '$' + price.toFixed(2) : "None";
    });
}

// Overall viewmodel for this screen, along with initial state
function ReservationViewModel(){
    var self = this;





    // Non-editable catalog data - would come from the server
    self.availableMeals = [
        { mealName: "Standard (sandwich)", price: 0},
        { mealName: "Premium (Roasted chickpeas)", price: 34.95 },
        { mealName: "Ultimate (quinoa dumplings)", price: 290 }
    ];

    // Editable data
    self.seats = ko.observableArray([
        new SeatReservation("Mihkel", self.availableMeals[1]),
        new SeatReservation("Anngrett", self.availableMeals[2])
    ]);

    self.addSeat= function(){
        self.seats.push(new SeatReservation("",self.availableMeals[0]));
    }

    self.removeSeat = function(seat){
        self.seats.remove(seat);
    }

    self.totalSurcharge = ko.computed(function(){
        var total = 0;
        for(var i=0; i < self.seats().length; i++){
            total += self.seats()[i].meal().price;
        }
        return total;
    });

}
ko.applyBindings(new ReservationViewModel());

