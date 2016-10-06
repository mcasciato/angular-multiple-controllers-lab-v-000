function ContactController() {
  var vm = this;

  vm.name = "Mike"
  vm.email = "mike@m.com"
  vm.phone = "555-555-5555"

  this.changeName = function () {
    vm.name = "Mr. Michael"
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)
