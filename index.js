// Date July 7 2021
// Word Chain
// A word-chain is an array of words, where the next word is formed by changing exactly one letter from the previous word. We do not add or subtract letters from words, only change them.
// Create a function that returns true if an array is a word-chain and false otherwise.




isWordChain(["meal", "seal", "seat", "beat", "beet"]) 
// ➞ true
// Change "m" in "meal" to get "seal", "l" to get "seat", etc.

isWordChain(["red", "bed", "bet", "bat", "sat"]) 
// ➞ true

isWordChain(["red", "bat", "cat", "sat"]) 
// ➞ false
// Do not change more than one letter ("red" and "bat").

isWordChain(["read", "red", "led", "lad", "lady"]) 
// ➞ false
// Do not add or subtract letters.