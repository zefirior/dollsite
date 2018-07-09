import json
from flask import jsonify


def get_lot(lot_id=None):
    with open('lot.json') as jf:
        data = json.load(jf)
    if lot_id:
        data = [lot for lot in data if lot['id'] == int(lot_id)]
    return jsonify(data)


if __name__ == '__main__':
    from pprint import pprint

    pprint(get_lot())
