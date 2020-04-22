const nums = [5,6,1,7,8,9,5,23]
for (let i = 0; i < nums.length; i++) {

    console.log (nums[i])
    if (i>5) {
        break
    }
    console.log (nums[i])
}




for (let i = 0; i < nums.length; i++) {

    console.log (nums[i])
    if (i>5) {
        continue
    }
    console.log (nums[i])
}