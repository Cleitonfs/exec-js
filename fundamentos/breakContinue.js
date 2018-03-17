const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (x in nums){
    if (x == 5) {
        break
    }
    console.log(`indice ${x} = ${nums[x]}`)
}

externo:
for (a in nums){
    for (b in nums){
        if (a == 2 && b == 3)
            continue externo
            console.log(`Par = ${a},${b}`)
    }
}
