/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Pikachu and
    Onix.
*/ 

let pikachuAttack = 25;
let onixAttack = 35;

if(pikachuAttack > onixAttack){
    console.log('Pikachu appears to be stronger.')
} else if(onixAttack > pikachuAttack){
    console.log('Onix is obviously the stronger pokemon.')
} else {
    console.log("Wow, they're evenely matched!")
}

let pikachuHealth = 100;
let pikachuDefense = 0;

if(pikachuHealth <= onixAttack){
    console.log('Pikachu has fainted!')
} else {
    // pikachuHealth = pikachuHealth - onixAttack
    pikachuHealth -= onixAttack
    console.log(`Pikachu's health is down to ${pikachuHealth}.`)
}

pikachuDefense += 25;

// pikachuHealth = 10;

if(pikachuHealth <= onixAttack - pikachuDefense){
    console.log('Pikachu has fainted!')
} else {
    pikachuHealth -= (onixAttack - pikachuDefense)
    console.log(`Pikachu's health is down to ${pikachuHealth}.`)
}

if((pikachuHealth + 50) >= 100){
    pikachuHealth = 100
} else {
    pikachuHealth += 50
}

let ironTailHits = true;

if(ironTailHits === true){
    console.log('The battle continues!')
} else {
    console.log('Pikachu flees the battle!')
}

// for(let i = 0; i < 5; i++){
//     pikachuHealth -= (onixAttack - pikachuDefense)
//     console.log(`Pikachu's health is down to ${pikachuHealth}.`)
// }

// for(let i = 0; i < 5; i++){
//     if(pikachuHealth <= 0){
//         console.log('Pikachu has fainted!')
//     } else {
//         pikachuHealth -= (onixAttack - pikachuDefense)
//         console.log(`Pikachu's health is down to ${pikachuHealth}.`)
//     }
// }

while(pikachuHealth > 0){
    pikachuHealth -= (onixAttack - pikachuDefense)
    console.log(`Pikachu's health is down to ${pikachuHealth}.`)
    if(pikachuHealth <= 0){
        console.log('Pikachu has fainted!')
    }
}