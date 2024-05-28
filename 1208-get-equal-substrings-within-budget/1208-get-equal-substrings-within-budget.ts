function equalSubstring(s: string, t: string, maxCost: number): number {
    let left = 0;
    let right = 0;
    let maxLenSoFar = 0;
    let currWindowCost = 0;

    for (let right = 0; right < s.length; ++right) {
        currWindowCost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));

        while (currWindowCost > maxCost) {
            currWindowCost -= Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
            left++;
        }
        maxLenSoFar = Math.max(maxLenSoFar, right - left + 1);
    }

    return maxLenSoFar;

};