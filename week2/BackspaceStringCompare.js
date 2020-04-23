/* 
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space?
*/

var backspaceCompare = function (S, T) {
    S = S.split('');
    T = T.split('');
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '#' && S[i - 1]) {
            S.splice(i - 1, 2);
            i -= 2;
        } else if (S[i] === '#') {
            S.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < T.length; i++) {
        if (T[i] === '#' && T[i - 1]) {
            T.splice(i - 1, 2)
            i -= 2;
        } else if (T[i] === '#') {
            T.splice(i, 1);
            i--;
        }
    }

    S = S.join('');
    T = T.join('');

    if (S === T) {
        return true;
    }

    return false;

};