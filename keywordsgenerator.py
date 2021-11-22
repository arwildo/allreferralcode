#!/bin/python3

exchanges = ["Binance", "Binance Futures", "KuCoin", "FTX", "Gate.io", "Tokocrypto", "Indodax"]
words = ["referral code, ", "discount code, ", "trading fee discount, ", "cashback code, ", "promo code, ", "bonus code", "referral link, "]

def keywordsgen(exchanges, words):
    for i in words:
        for j in exchanges:
            print(j + ' ' + i)

keywordsgen(exchanges, words)
