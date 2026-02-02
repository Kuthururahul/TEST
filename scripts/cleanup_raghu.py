from PIL import Image

INPUT = "assets/Raghu.jfif"
OUTPUT = "assets/Raghu.png"
THRESHOLD = 60 * 60

img = Image.open(INPUT).convert("RGBA")
pixels = list(img.getdata())
bg = pixels[0][:3]

new_pixels = []
for r, g, b, a in pixels:
    dr = r - bg[0]
    dg = g - bg[1]
    db = b - bg[2]
    if dr * dr + dg * dg + db * db < THRESHOLD:
        new_pixels.append((r, g, b, 0))
    else:
        new_pixels.append((r, g, b, a))

img.putdata(new_pixels)
img.save(OUTPUT)
