# REACTO Approach to Whiteboard Problems

The REACTO approach as described in [Sarah Katz’s Medium article](https://medium.com/@sarahscode/reacto-technical-interview-prep-the-fullstack-way-706929a44e90)

<table>
  <tr>
    <td><strong>Step</strong></td>
    <td><strong>Description</strong></td>
    <td><strong>Suggestions</strong></td>
  </tr>
  <tr>
    <td><strong>Repeat</td>
    <td>Repeat the question, in your own words, to make sure you understand the problem. You are also encouraged to ask questions during this portion of the interview, to ensure that you have all of the information necessary to solve the problem.</td>
    <td>Seriously… your own words. This step might bleed into the next one and that’s okay</td>
  </tr>
  <tr>
    <td><strong>Examples</td>
    <td>Examples. At this point you are encouraged to create some example inputs and what the expected output would be. It’s important to also create examples of any edge cases you might expect to encounter.</td>
    <td>Try to get specific. Think about the quirks of your language (what’s truthy?) and nil cases especially.</td>
  </tr>
  <tr>
    <td><strong>Approach</td>
    <td>Approach. The next step is to plan (and communicate) your approach to the problem. There is no coding involved in this step, just thinking out (and articulating) what you plan to do.</td>
    <td>Do some pseudocoding and don’t forget to talk out loud. If you’re unsure of something, it doesn’t hurt to say you’ve thought of a case and are still considering it.</td>
  </tr>
  <tr>
    <td><strong>Code</td>
    <td>Code out your solution. Trying as best as you can to following your approach from step #4, write code (actual or pseudo) to solve the problem.</td>
    <td>DON’T STOP TALKING. If you need to blackbox a part of your code in order to keep making progress, do that and come back to it. </td>
  </tr>
  <tr>
    <td><strong>Test</td>
    <td>Test your code. Using the examples you wrote earlier, run each example through your code (making sure you’re running it through the code you actually wrote, not what you think you wrote) and see if you get the expected output.</td>
    <td>Use at least one typical/easy case and at least one edge case. </td>
  </tr>
  <tr>
    <td><strong>Optimize</td>
    <td>Optimize your code. Once you’ve found a working solution, you can go back and optimize it — make it DRY, improve the time and/or space complexity, and do anything else that will improve your code.</td>
    <td>Talk through the Big O of your solution. It doesn’t hurt to mention Big O earlier, especially if you know your strategy is not the best but want to use it first. Even if you’re not sure the best way to optimize, demonstrate that you know where optimizations need to be. </td>
  </tr>
</table>

## Example Problem
```
Write a function called
`hasTargetSum` that receives two arguments:
  * an array of integers
  * a target integer

The function should return all pairs of numbers found in the array that add up to the target number.
hasTargetSum([-1, 3, 8, 12, 4, 11, 7], 10) ==>  [[-1, 11], [3, 7]]

```


## Time to Optimize! Switch to **Big OOOOOOO**

### Convo Time
- What is an algorithm? 



- How do we measure time? 



- What cases are we concerned with?



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
  - TL;DR: know the Big O of list methods (like map, sort, find, etc) and utilize objects for constant time look up



## Get to Practicing!
- [Leet Code](https://leetcode.com/)
- [Hacker Rank](https://www.hackerrank.com/auth/signup?h_r=home&h_l=body_middle_left_button&h_v=1)
- [codewars](https://www.codewars.com/)
- [pramp](https://www.pramp.com/#/)
- [edabit](https://edabit.com/)
- [Cracking the Coding Interview book](http://www.crackingthecodinginterview.com/)
- [Big O Explained with Examples](https://developerinsider.co/big-o-notation-explained-with-examples/)


![](data:image/png;base64,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)