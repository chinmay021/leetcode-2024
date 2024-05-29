/* 
    O(N) solution
 */

function numSteps(s: string): number {
    let count = 0;
    let carry = 0;

    // Traverse from the last bit to the first bit (excluding the most significant bit initially)
    for(let i = s.length - 1; i > 0; --i){
        if(s.charAt(i) === '1'){
            if(carry === 0){
                count += 2; // Add 1 (turn to 0) + divide
                carry = 1;
            }else{
                count += 1; // just divide
            }
        }else{
            if(carry == 0){
                count += 1; // just divide
            }else{
                count += 2;  // Turn to 1 + divide
            }
        }
    }

    if(carry === 1){
        count += 1; // and at i = 0 its already 1 so 1 + 1 will turn 0 so divide i.e 1 more step.
    }

    return count;

};



/*
    O(N2) solution space - O(N) since strings are immutable in js so we are creating copy
 */

// function numSteps(s: string): number {
//     let count = 0;
//     while (s.length > 1) {
//         let N = s.length;
//         //even number
//         if (s.charAt(N - 1) === '0') {
//             s = divideByTwo(s);
//         } else {
//             s = addOne(s);
//         }
//         count++;
//     }
//     return count;
// };

// function divideByTwo(s: string) {
//     return s.substring(0, s.length - 1);
// }

// function addOne(s: string) {
//     /* 
//         start from last find the rightmost 0 or first 0 from right
//          Flip all the set bits until we find a 0
//         at last flip the rightmost 0 we fiound earlier to 1.
//      */
//     let i = s.length - 1;
//     let result = '';
//     let carry = true;

//     while (i >= 0) {
//         if (s[i] === '1' && carry) {
//             result = '0' + result;
//         } else if (s[i] === '0' && carry) {
//             carry = false;
//             result = '1' + result;
//         } else {
//             result = s[i] + result;
//         }
//         i--;
//     }
//     if (carry) {
//         result = '1' + result;
//     }
//     return result;

// }