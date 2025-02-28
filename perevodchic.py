from flask import Flask, request, jsonify

from flask_cors import CORS
from mistralai import Mistral

app = Flask(__name__)
CORS(app)
key="U3kYJuSibxcKbQwQYMvpoyL8r1V9KDkW"



model = "mistral-large-latest"

client = Mistral(api_key=key)


@app.route('/translate', methods=['GET'])
def translate():
    text = request.args.get('text')
    lang = request.args.get('lang', 'en')
    if text:
        if lang=="tt":
            chat_response = client.chat.complete(
                model=model,
                messages=[
                    {
                        "role": "user",
                        "content": f'Переведи на татарский язык "{text}"'
                    },
                ]
            )
            res = chat_response.choices[0].message.content

        if lang=="en":
            chat_response = client.chat.complete(
                model=model,
                messages=[
                    {
                        "role": "user",
                        "content": f'Переведи на англиский язык "{text}"'
                    },
                ]
            )
            print(chat_response.choices[0].message.content)
            res = chat_response.choices[0].message.content
        if lang=="de":
            chat_response = client.chat.complete(
                model=model,
                messages=[
                    {
                        "role": "user",
                        "content": f'Переведи на немецкий язык "{text}"'
                    },
                ]
            )
            print(chat_response.choices[0].message.content)
            res = chat_response.choices[0].message.content
        if lang=="fr":
            chat_response = client.chat.complete(
                model=model,
                messages=[
                    {
                        "role": "user",
                        "content": f'Переведи на французский язык "{text}"'
                    },
                ]
            )
            print(chat_response.choices[0].message.content)
            res = chat_response.choices[0].message.content
        if lang=="zh-cn":
            chat_response = client.chat.complete(
                model=model,
                messages=[
                    {
                        "role": "user",
                        "content": f'Переведи на китайский язык "{text}"'
                    },
                ]
            )
            print(chat_response.choices[0].message.content)
            res = chat_response.choices[0].message.content
        if lang=="ru":
            chat_response = client.chat.complete(
                model=model,
                messages=[
                    {
                        "role": "user",
                        "content": f'Переведи на русский язык "{text}"'
                    },
                ]
            )
            print(chat_response.choices[0].message.content)
            res = chat_response.choices[0].message.content
        if '"' in res:
            return jsonify({'translated_text': chat_response.choices[0].message.content.split('"')[-2]})
        else:
            return jsonify({'translated_text': chat_response.choices[0].message.content})
    else:
        return jsonify({'error': 'No text provided'}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5001, host="0.0.0.0")