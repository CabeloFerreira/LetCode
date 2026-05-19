const sub = function(nums){
    let output = [];
    function back(start, path){
        output.push([...path]);
        for(let i = start; i < nums.length; i++){
            path.push(nums[i]);
            back(i+1,path);
            path.pop();
        }
        
    }
    back(0, []);
    return output;
}

console.log(sub([1,2]));