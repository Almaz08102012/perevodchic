from flask import Flask, request, jsonify
from googletrans import Translator
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/translate', methods=['GET'])
def translate():
    text = request.args.get('text')
    lang = request.args.get('lang', 'en')
    if text:
        translator = Translator()
        tr = translator.translate(text, dest=lang)
        return jsonify({'translated_text': tr.text})
    else:
        return jsonify({'error': 'No text provided'}), 400

if __name__ == '__main__':
    app.run(debug=True)