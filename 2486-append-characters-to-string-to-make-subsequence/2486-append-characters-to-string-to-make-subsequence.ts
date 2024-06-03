function appendCharacters(s: string, t: string): number {
  let sIterator = 0;
  let tIterator = 0;
  let prefixLen = 0;

  while(sIterator < s.length && tIterator < t.length){
    if(s[sIterator] === t[tIterator]){
        prefixLen++;
        tIterator++;
        sIterator++;
    }else{
        sIterator++;
    }
  }
    return t.length - prefixLen;
};