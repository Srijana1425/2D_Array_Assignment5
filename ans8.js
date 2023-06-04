let changed = [1,3,4,2,6,8]
var OriginalArray = function(changed) 
{
    let map ={};
    let arr =[];
    changed.sort((a,b)=>a-b);
    for (let i = 0; i < changed.length; i++)
    {
        if (map[changed[i]])
        {
            map[changed[i]] === 1 ? delete map[changed[i]] : map[changed[i]]--;
        } 
        else 
        {
            map[changed[i]*2] = map[changed[i]*2] ? map[changed[i]*2]+1 : 1 ;
            arr.push(changed[i])
        }
    }
    if (Object.keys(map).length) return []
    return arr
};
console.log(OriginalArray(changed))