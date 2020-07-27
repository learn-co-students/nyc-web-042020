# Whiteboarding and Big O

## How this is gonna go down
1. I need volunteers for each letter. Be brave, be ready to unmute and maybe take remote access of my computer 0.o, and be ready to seem super smart and cool to all of the other folks on the call yeaaaaahhh!
- [ ] R - Ramon
- [ ] E - Kyle T. & James
- [ ] A - Gary
- [ ] C - Grant
- [ ] T - Srishti & Jallen
- [ ] O - Caryn & 

2. We'll talk about a process for handling whiteboarding problems.

3. We'll break down a sample problem using that method

4. When we get to a certain part of that process, we'll talk optimizations and Big O. 




# Lets do this!!


# Example Problem
```
Write a function called
`hasTargetSum` that receives two arguments:
  * an array of integers
  * a target integer

The function should return all pairs of numbers found in the array that add up to the target number.
hasTargetSum([-1, 3, 8, 12, 4, 11, 7], 10) ==>  [[-1, 11], [3, 7]]

```

## R - Repeat
Function called hasTargetSum. Will take in 2 args - array of ints, target int - returns an array of arrays of pairs that add to target num. 
Working in JS; can expect negative and positive numbers. No floats, only whole integers. 


## E - Examples
[-1, 3, 8, 12, 4, 11, 7], 10 ==>  [[-1, 11], [3, 7]]
[], 10 ====> []
[0,1,2,3], 3 ===> [ [0,3], [1,2] ]
        NOT three alone [ [3] ] NOT [0,1,2]
returns with specifically two elements paired (no sets of 3)
[0,1,2,3], 3 ===> [ [0,3], [1,2], [3,0], [2,1] ] NO THANK YOU, NO DUPLICATES
[2,2,3,7,6,7,5], 14 ===> [[7,7]] duplicates in array are allowed
[2,2,3,7,6,7,5], 8 ===> [[2,6], [2,6], [3,5]]  allowed b/c there are two 2's
[2,2,3,7,6,7,5], 48 ===> []





































## Convo Time
- What is an algorithm? 
   a set of instructions
   Procedure of doing things
   Any sort of tool you create to accomplish a task











- How do we measure time? Complexity? 
run time or compile time but in what?
milliseconds  ---- diff computers run code at different speeds 
Loops 
the number of computations / the amount of computations 









- What cases are we concerned with?
All of them! Depending on what you're assessing... yes. 
     Bubble v. merge sort (I'll send a video)
WORST CASE!!!!!!!

1000 data points 
100000000000000000000000000000000000000000000000000 data points 







- How to write our Big O Notation 
- Types of Big O to cover 
  - Constant O(1) 
  - Logarithmic O(log(n))
  - Linear O(n) 
  - Quadratic O(n^2) 
  - Exponential O(2^n) 
    ... ie recursive fibonacci 
  - Factorial O(n!) 
    ... ie traveling salesman problem



- Lists & Objects && Big O Notation


# Before we go, some advice
0. Start with HackerRank, LeetCode, CodeWars, etc. https://www.codingame.com/start
1. Build this into your practice 
2. Do this in community 

