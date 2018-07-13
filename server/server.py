from flask import Flask, render_template, request
from flask import jsonify
from json_methods import get_lot

app = Flask(
    __name__,
    template_folder='../build',
    static_folder='../build/static'
)
app.debug = True


@app.route('/lot', methods=['GET'])
def lot():
    lot_id = request.args.get('lot_id', None)
    response = jsonify(get_lot(lot_id))
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


if __name__ == "__main__":
    app.run()
