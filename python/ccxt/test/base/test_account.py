import os
import sys

root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
sys.path.append(root)

# ----------------------------------------------------------------------------

# PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
# https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

# ----------------------------------------------------------------------------
# -*- coding: utf-8 -*-


from ccxt.test.base import test_shared_methods  # noqa E402


def test_account(exchange, method, entry):
    format = {
        'info': {},
        'code': 'BTC',
        'type': 'spot',
        'id': '12345',
    }
    empty_not_allowed_for = ['type']
    test_shared_methods.assert_structure(exchange, method, entry, format, empty_not_allowed_for)
    test_shared_methods.assert_currency_code(exchange, method, entry, entry['code'])
