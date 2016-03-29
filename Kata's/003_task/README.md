# Harshad or Niven numbers

> Harshad numbers are positive numbers that can be divided (without remainder) by the sum of their digits.

**Examples**

```js
10, because 1 + 0 = 1 and 10 equals 1 * 10
27, because 2 + 7 = 9 and 27 equals 9 * 3
588, because 5 + 8 + 8 = 21 and 588 equals 21 * 28
```

>Your task is to complete the skeleton Harshad object ("static class") which has 3 functions.

* `isValid` that checks if the number is a Harshad number or not // Harshad.isValid( 1 ) returns true
* `getNext` that returns the next Harshad number // Harshad.getNext( 0 ) returns 1
* `getSerie` that returns a serie of n Harshad number, optional start value not included // Harshad.getSerie( 3, 1000 ) returns [ 1002, 1008, 1010 ], while // Harshad.getSerie( 3 ) returns [ 1, 2, 3 ]

### Categories

* `Fundamentals`
* `Numbers`
* `Basic Language Features`
* `Mathematics`
* `Algorithms`