/*
* Find the greatest product of K consecutive digits in the N digit number.
*/

const input = `10 5
3675356291
10 5
2709361626`

greatestProduct = (input) => {
  let arr = input.match(/\d+\s\d+\s\d+/g)
  let maxProducts = []
  for(let i = 0; arr !== null && i<arr.length;i++){
    let max = 0
    const k = parseInt(arr[i].match(/(\d+\n)/g))
    const n = arr[i].match(/\n(\d+)/g).toString().replace('\n', '')
      for(let j = 0; j<=n.length-k;j++){
        let check = n.slice(j, j+k)
        let temp;
        if(check.includes('0')){
          temp = 0
        }else{
          temp = 1
        }
        for(let k = 0;temp != 0 && k < check.length; k++){
          temp = temp*parseInt(check[k])
        }
        if(temp != 1 && temp > max){max = temp}
        temp = 1
      }
      maxProducts.push(max)
  }
  return maxProducts
}

console.log(greatestProduct(input))
