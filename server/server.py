from flask import Flask, render_template, request
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
    return get_lot(lot_id)


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


if __name__ == "__main__":
    app.run()
