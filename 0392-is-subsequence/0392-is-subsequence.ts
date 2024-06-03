function isSubsequence(s: string, t: string): boolean {
    let sIterator = 0;
    let tIterator = 0;

    while(sIterator < s.length && tIterator < t.length){
        if(s[sIterator] === t[tIterator]){
            sIterator++;
            tIterator++;
        }else{
            tIterator++;
        }
    }
    if(sIterator === s.length){
        return true;
    }
    return false;
};