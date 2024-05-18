import os

from flask import Flask, send_file, request, jsonify
from explain import get_explanation
from optimize import get_optimized_code
from debug import debug_code
from generate import generate_code

app = Flask(__name__)

@app.route("/")
def index():
    return send_file('index.html')

@app.route("/explain")
def explain():
    user_code = request.json.get("code")
    response = get_explanation(user_code)
    return jsonify({'response': response})

@app.route("/optimize")
def optimize():
    user_code = request.json.get("code")
    response = get_optimized_code(user_code)
    return jsonify({'response': response})

@app.route("/debug")
def debug():
    user_code = request.json.get("code")
    response = debug_code(user_code)
    return jsonify({'response': response})

@app.route("/generate")
def generate():
    user_prompt = request.json.get("query")
    response = generate_code(user_prompt)
    return jsonify({'response': response})

def main():
    app.run(port=int(os.environ.get('PORT', 80)))

if __name__ == "__main__":
    main()