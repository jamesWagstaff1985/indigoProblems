# indigoProblems



## largestPalindromeProduct.js

#### input format
###### (hardcoded at the beginning of the file)

``const input = `2\
101110\
800000` ``

(Use the swept back accent marks `` ` `` to allow multiline strings in javascript)

The first line is the number of inputs to be evaluated `2`

The follwing lines are the numbers to be evaluated `101110` and `800000`

*The numbers to be evaluated must be a length of 6 digits as the output has to be two integers of length 3*

The function will evaluate numbers from `101101` (The first possible palindrome) and `906609` (The last possible palindrome)

Running numbers lower than the first possible palindrome will give back a result of undefined 

## largestProductInSeries.js

#### input format
###### (hardcoded at the beginning of the file)

``const input = `10 5&nbsp;
                3675356291&nbsp;
                10 5&nbsp;
                2709361626` ``

(Use the swept back accent marks ````` to allow multiline strings in javascript)

The first line has a new entry marker `10` and a serie size marker `5`

The follwing line is the number to be evaluated `3675356291`

*The numbers to be evaluated must be larger than the size of the serie*

The function will return the largest possible product in a given series of each test case as an array  

Running series of size larger than the length of the number to be evaluated will return a result of 0 
