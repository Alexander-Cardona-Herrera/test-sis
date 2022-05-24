#!/usr/bin/python3
"""
    Module to unlock a box
    box: list of lists 
"""


def desbloqueo(caja):
    """ this function recive as argument a list o lists
        return true if every box is unlocked, else return false
    """
    llaves = [0]
    for cerrojo, cajita in enumerate(caja):
        if not cajita:
            continue
        for llave in cajita:
            if llave < len(caja) and llave not in llaves and llave != cerrojo:
                llaves.append(llave)
    if len(llaves) == len(caja):
        return True
    return False
