function receivesAFunction(cb){
    console.log(cb());
}

function returnsANamedFunction(){
    return function hello(){
        console.log('Hello')
    };
}

function returnsAnAnonymousFunction(){
    return () => console.log('Hiya')
}