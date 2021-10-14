---
showonindex: true
title: The Free Formula
description: This is a Sunday noon tinker wherein I tried finding a way to get
  anything of monetary value effectively for free using the stock market.
date: 27.09.2021
datestamp: "09.2021"
readtime: 2 minute read
slug: the-free-formula
---
# The Free Formula

> A mathematical approach to get anything of monetary value effectively for free using the stock market.

![](images/uploads/thefreeformula2.png)

## The Goal

Interest earned per month should be greater than/equal to the cost of each installment with inflation adjustment. At the end of the purchase, you should have your principal amount adjusted to inflation and the good you purchased hence making it effectively free without incurring any monetary loss.

## The Math

### Factors and variables

1. A = Price of item
2. e = Price hike due to EMI
3. m = EMI/month
4. n = Number of EMI payments
5. i = Inflation
6. P = Principal amount invested
7. r = Annual interest earned on the principal
8. d = Down payment percentage

### Without factoring in any down-payment

![](images/uploads/thefreeformula.png)

Effective cost of item after EMI = A(1+e/100)

⇒ m = A/n(1+e/100)

⇒ Condition: Monthly interest earned ≥ A/n(1+e/100)

⇒ P(1+(r-i)/100)^(1/12) ≥ A/n(1+e/100)

## The Code

You can find the functional code (factoring in any down-payment) at [KrishSkywalker/theFreeFormula](https://github.com/KrishSkywalker/theFreeFormula).