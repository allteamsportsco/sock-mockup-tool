from flask import Flask, render_template, request, send_file
from PIL import Image, ImageDraw, ImageFont
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    team_name = request.form['team_name']
    team_colors = request.form['team_colors'].split('/')
    mascot = request.form['mascot']
    sock_style = request.form['sock_style']

    template_path = f"static/images/{sock_style}.png"
    if not os.path.exists(template_path):
        return "Template not found.", 404

    sock_image = Image.open(template_path).convert("RGBA")
    draw = ImageDraw.Draw(sock_image)
    font = ImageFont.load_default()

    draw.text((50, 30), team_name.upper(), fill=team_colors[1], font=font)

    output_path = "static/images/mockup_result.png"
    sock_image.save(output_path)
    return send_file(output_path, mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True)
