python
import sympy as sp
import numpy as np
from calculator import handle_expression
def evaluate_fraction(expr):
    # Evaluate fractional expressions using Sympy
    return sp.sympify(expr).evalf()
def evaluate_vector(expr):
    # Evaluate vector expressions using NumPy
    return np.array(eval(expr))
def calculate_result(expr):
    # Call handle_expression from calculator.py
    result = handle_expression(expr)
    if '/' in expr:
        result = evaluate_fraction(result)
    elif '[' in expr and ']' in expr:
        result = evaluate_vector(result)
    return result
