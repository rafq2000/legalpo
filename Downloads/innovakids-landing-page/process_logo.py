
from PIL import Image

def process_logo():
    input_path = "public/logo-innovakids.png"
    output_path = "public/logo-innovakids-final.png"
    
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # item is (R, G, B, A)
            r, g, b, a = item
            
            # If pixel is essentially white (background), make it transparent
            if r > 200 and g > 200 and b > 200:
                newData.append((255, 255, 255, 0))
            else:
                # If pixel is dark (text/logo), make it PURE WHITE or very light Cyan
                # Original logo is dark. Let's make it White (#FFFFFF) to stand out on dark header.
                newData.append((255, 255, 255, 255))
                
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Successfully saved to {output_path}")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    process_logo()
