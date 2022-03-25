

    const readline = require('readline');

    const reader = readline.createInterface({
        input: process.stdin,
        output:process.stdout,

    });




    reader.question( 'Welcome to the password validator tool \n please enter a password to validate: ' , function(input){
    let newPassword = input;
    
    if(newPassword.length >= 10){
        console.log(`${newPassword} is an acceptable password.`);
    } else if(newPassword.length < 10){
        console.log(`${newPassword} is not an acceptable password.`);
    } else {
        console.log('error');
    }


    reader.close();
    });
