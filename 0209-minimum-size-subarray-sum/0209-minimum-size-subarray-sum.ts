function minSubArrayLen(target: number, nums: number[]): number {
    let left = 0;
    let right = nums.length;
    let currWindowSum = 0;
    let answer = Infinity;

    for (right = 0; right < nums.length; ++right) {
        currWindowSum += nums[right];
        while(currWindowSum >= target){
            answer = Math.min(answer, right - left + 1);
            currWindowSum -= nums[left++];
        }
    }
    return answer === Infinity ? 0 : answer;
};