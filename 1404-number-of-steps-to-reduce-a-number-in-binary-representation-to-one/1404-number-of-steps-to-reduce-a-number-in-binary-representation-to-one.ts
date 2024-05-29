function numSteps(s: string): number {
    let count = 0;
    while (s.length > 1) {
        let N = s.length;
        //even number
        if (s.charAt(N - 1) === '0') {
            s = divideByTwo(s);
        } else {
            s = addOne(s);
        }
        count++;
    }
    return count;
};

function divideByTwo(s: string) {
    return s.substring(0, s.length - 1);
}

function addOne(s: string) {
    /* 
        start from last find the rightmost 0 or first 0 from right
         Flip all the set bits until we find a 0
        at last flip the rightmost 0 we fiound earlier to 1.
     */
    let i = s.length - 1;
    let result = '';
    let carry = true;

    while (i >= 0) {
        if (s[i] === '1' && carry) {
            result = '0' + result;
        } else if (s[i] === '0' && carry) {
            carry = false;
            result = '1' + result;
        } else {
            result = s[i] + result;
        }
        i--;
    }
    if (carry) {
        result = '1' + result;
    }
    return result;

}