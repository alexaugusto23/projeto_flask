from flask import Flask, render_template
app = Flask(__name__)

@app.route('/inicio')
@app.route('/')
def inicio():
    return render_template('index.html')