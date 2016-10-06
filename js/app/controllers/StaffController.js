function StaffController() {
  var vm = this;

  vm.name = "Bob"
  vm.email = "bob@bob.com"
  vm.phone = "123-456-7890"
}

angular
  .module('app')
  .controller('StaffController', StaffController)
