# simpleuid


The probability of generating a duplicate UID with this algorithm is very low, but it is still possible.

The algorithm randomly selects characters from the alphabet array and the numbers array, so there is a chance that the same character may be selected multiple times during the generation of a UID.

To minimize the chance of generating a duplicate UID, you can check if the generated UID already exists in the database or array of existing UIDs, and if it does, generate a new one. You can also increase the length of the UID to further decrease the probability of duplicates.


I created check.js file which is check if UID already exists.

