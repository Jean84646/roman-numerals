# Pig-Latin

##### A little program that coverts Numbers to Roman Numerals.

#### By Anousone Kaseumsouk,Lan Dam, and Jean Jia

## Description

This application takes allows a user to enter a number  and converts it to Roman Numerals.

## Setup

Install Roman-Numerals by cloning this repository.

## Technologies Used

Application: JavaScript and jQuery-3.3.1

## Support and Contact

For any questions or support details, please email:
anousonekaseumsouk@icloud.com
ldam77@yahoo.com
jean84646@gmail.com

## Spec

* Conversion table for numbers to Roman Numerals.

|Symbol  | Value    |
|--------|----------|
|I       |1         |
|V       |5         |
|X       |10        |
|L       |50        |
|C       |100       |
|D       |500       |
|M       |1,000     |

* Add the value of the symbols together: 2 = II
* Separate ones, tens, hundreds, thousands, 99 is XCIX, not IC.
* If more than three of the same characters in a row, switch to subtraction from the next higher value: 4 = IV
* Number cannot go higher than 3,999.

| Input           | Expected Output      |
| --------------- |--------------------  |
| 2               | II                   |
| 99              | XCIX                 |
| 4               | IV                   |
| 3,999           | Out of Range         |

### Legal

Copyright (c) 2018 **Anousone Kaseumsouk,Lan Dam, and Jean Jia**

This software is licensed under the MIT license.
