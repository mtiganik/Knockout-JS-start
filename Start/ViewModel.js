function AppViewModel() {
    this.firstName = ko.observable("Mihkel");
    this.lastName = ko.observable("Tiganik");

    this.fullName = ko.computed(function(){
        return this.firstName() + " " + this.lastName();
    }, this);

    this.capitalizeLastName = function(){
        var currentVal = this.lastName();
        this.lastName(currentVal.toUpperCase());
    };
}
// Activates knockout.js
ko.applyBindings(new AppViewModel());