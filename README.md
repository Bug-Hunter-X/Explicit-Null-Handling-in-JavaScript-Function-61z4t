# Explicit Null Handling in JavaScript

This repository demonstrates a common error in JavaScript related to handling null or undefined values and presents a solution to prevent unexpected behavior.  The `bug.js` file showcases the problematic scenario, and `bugSolution.js` provides the corrected code.

**Problem:**
In JavaScript, attempting to perform arithmetic operations (such as addition) with `null` or `undefined` values will often lead to unexpected results like `NaN` (Not a Number).  Many functions implicitly assume input values are valid. This makes debugging difficult. 

**Solution:**
Always explicitly check for `null` or `undefined` values before proceeding with calculations to prevent unexpected behavior. This approach enhances the code's robustness and readability.  The code handles the case where either or both of the input values are null.