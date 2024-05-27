/* 
    * answer will be between 1(since size of array is starts from 1) to length of array
    1. create a freq array.
    2. start from end and count
 */

function specialArray(nums: number[]): number {
    const N = nums.length;
    const freq = new Array(N + 1).fill(0); // freq index is our all possible answers from 1 to N.
    for(let i = 0; i < N; ++i){
        if(nums[i] > N){ 
             freq[N]++;
        } // answer will be between 1 to N;
        else{
            freq[nums[i]]++;
        }
    }

    // now calculate prefix sum from end  or we can say suffix sum
    let numsGreaterthanorEqual = 0;
    for(let i = N; i >= 1; --i){
        numsGreaterthanorEqual += freq[i];
        if(numsGreaterthanorEqual === i){
            return i; // if no. of elements numsGreaterthanorEqual to i is equal to i thats our ans
        }
    }
    return -1;
};

/* 

    O(N2) SOLUTION

    function specialArray(nums: number[]): number {
    for(let i = 0; i <= 100; ++i){
        let count = 0;
        for(let j = 0; j < nums.length; ++j){
            if(i <= nums[j]){
                count++;
            }
        }
        if(count === i){
            return i;
        }
    }
    return -1;
};
 */

