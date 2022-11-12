function receivesAFunction(pharse) {
  console.log(pharse());
}

receivesAFunction(function () { return 'Hey'});

 function returnsANamedFunction() {
  return function Hey(){

  };

 }

 returnsANamedFunction();

 function returnsAnAnonymousFunction() {
  return function () {

  };
 }
