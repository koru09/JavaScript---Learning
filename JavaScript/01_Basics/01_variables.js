const accountId = 123412;

let accountEmail = "boku09@gmail.com";
var accountPassword = "123453dff";

/*
Prefer not to use var
because of issue in block scope and functional scope.

*/

accountCity = "Kolkata";

let accountStatus;

console.table([accountId, accountEmail, accountPassword, accountCity, accountStatus]);

