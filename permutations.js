/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permutation = function(nums){
    let resultado = [];
    function back(path){
        if(path.length === nums.length){
            resultado.push([...path]);
            return;
        }
        for(let i = 0; i < nums.length; i++){
            if(path.includes(nums[i])){
                continue;
            }
            path.push(nums[i]);
            back(path);
            path.pop();
        }
    }
    back([]);
    return resultado;
}

console.log(permutation([1,2,3]));