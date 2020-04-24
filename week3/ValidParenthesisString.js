/* 
Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
An empty string is also valid.
Example 1:
Input: "()"
Output: True
Example 2:
Input: "(*)"
Output: True
Example 3:
Input: "(*))"
Output: True
Note:
The string size will be in the range [1, 100].
*/

// O(n)

const checkValidString = (s) => {
    let sArr = s.split('');
    let balanceLeft = 0;
    let balanceRight = 0;

    if (sArr.length === 1 && sArr[0] != '*') {
        return false;
    }

    if (sArr[sArr.length - 1] === '(' || sArr[0] === ')') {
        return false;
    }

    for (let i = 0; i < sArr.length; i++) {

        if (sArr[i] === '(' || sArr[i] === '*') {
            balanceRight++;
        } else if (sArr[i] === ')') {
            balanceRight--;
            if (balanceRight === -1) {
                return false;
            }
        }

    };


    for (let j = sArr.length - 1; j >= 0; j--) {

        if (sArr[j] === ')' || sArr[j] === '*') {
            balanceLeft++;
        } else if (sArr[j] === '(') {
            balanceLeft--;
            if (balanceLeft === -1) {
                return false;
            }
        }
    };

    return true;
};