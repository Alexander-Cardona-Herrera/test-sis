#!/usr/bin/python3
"""
"""


def desbloqueo(caja):
    """
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
