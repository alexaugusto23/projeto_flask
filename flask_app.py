from flask import Flask, render_template
app = Flask(__name__)

@app.route('/inicio')
@app.route('/')
def inicio():
    return render_template('index.html')

@app.route('/inicio-alternativo')
def outro_inicio():
    return render_template('alternative_index.html')