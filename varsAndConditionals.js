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
    console.log("Wow, they're evenly matched!")
}

let pikachuHealth = 100;
let pikachuDefense = 0;

if(pikachuHealth <= onixAttack){
    console.log('Pikachu has fainted!')
} else {
    // These do the same thing, the second way is just quicker to type.

    // Long Way
    // pikachuHealth = pikachuHealth - onixAttack

    // Shorthand
    pikachuHealth -= onixAttack
    console.log(`Pikachu's health is down to ${pikachuHealth}.`)
}

pikachuDefense += 25;

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

console.log(`Pikachu was healed, his health is now ${pikachuHealth}.`)

// These if statments do the same thing, just with slightly different logic.
let ironTailHits = true;

// With ===
if(ironTailHits === true){
    console.log('The battle continues!')
} else {
    console.log('Pikachu flees the battle!')
}

// With !==
if(ironTailHits !== false){
    console.log('The battle continues!')
} else {
    console.log('Onix fled the battle!')
}

// These loops so the same thing, just with different syntax.

// For Loop
for(let i = 0; i < 5; i++){
    if(pikachuHealth <= 0){
        console.log('Pikachu has fainted!')
    } else {
        pikachuHealth -= (onixAttack - pikachuDefense)
        console.log(`Pikachu's health is down to ${pikachuHealth}.`)
    }
}

// While Loop
while(pikachuHealth > 0){
    pikachuHealth -= (onixAttack - pikachuDefense)
    console.log(`Pikachu's health is down to ${pikachuHealth}.`)
    if(pikachuHealth <= 0){
        console.log('Pikachu has fainted!')
    }
}