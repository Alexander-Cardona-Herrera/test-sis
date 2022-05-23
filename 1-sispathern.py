#!/usr/bin/python3
"""
"""


number = int(input("Numero de entrada: "))
size = number*2 - 1

for i in range(size):
    for j in range(size):
        print(number - min(i, j, (size -1)-i, (size-1)-j), end = '')
    print()
