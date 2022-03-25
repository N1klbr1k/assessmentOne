
    function constraintChecker( aWord){
        // function should take a string as an argument and return a boolean value
        // passes begins as false, passes is modified to the valus of aWord 3 time
        // and if any of these are true it will return true. otherwise it will return the initial value of false.
        let passes = false;

            passes = aWord.includes('!');
                if(passes){ return passes};
            passes = aWord.includes('?')
                if(passes){ return passes};
            passes = aWord.includes('9')
                if(passes){ return passes};
        return passes;
    }
    
    
    const readline = require('readline');

    const reader = readline.createInterface({
        input: process.stdin,
        output:process.stdout,

    });



    console.log("Password must be at least 10 characters long, and contain a ?, !, or 9")
    reader.question( 'Welcome to the password validator tool \n please enter a password to validate: ' , function(input){
    let newPassword = input;
    let doesPass = false;
    doesPass = constraintChecker(newPassword);

    if(newPassword.length >= 10 && doesPass){
        console.log(`${newPassword} is an acceptable password.` );
        console.log( `                      __________      _________        __________     ___________
                     / _________|    / ________\\     / ________ \\    | __________\\
                     | |             | |      | |    ||         | |  | |         ||
                     | |    _____    | |      | |    ||         | |  | |         ||
                     | |    |__  |   | |      | |    ||         | |  | |         ||
                     | |       | |   | |      | |    ||         | |  | |         || 
                     \\ \\_______/ /   \\ \\_____/ /     \\\\________/ /   | |________//
                      \\_________/     \\________/      \\_________/    |__________/ `);
    } else {
        console.log(`${newPassword} is not an acceptable password.`);
        console.log(`         ____          _____  
        |  _ \\  //\\   |  __ \\ 
        | |_)|  /  \\  | |  | |
        |  _ < / /\\ \\ | |  | |
        | |_) / ____ \\| |__| |
        |____/_/    \\_\\_____/ `);
    } 


    reader.close();
    });
