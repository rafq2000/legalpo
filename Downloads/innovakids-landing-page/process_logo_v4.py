
from PIL import Image

def process_uploaded_logo():
    input_path = "C:/Users/rude_/.gemini/antigravity/brain/c493d8fa-cecd-4f1a-852a-76ed2ab0b1db/uploaded_image_1768448886034.png"
    output_path = "public/logo-innovakids-v4.png"
    
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # item is (R, G, B, A)
            r, g, b, a = item
            
            # Logic: Logo is Cyan (Low Red). Background starts at Gray (High Red, >200 or so)
            # Cyan #4DD0E1 has R=77.
            # Checkerboard gray is usually > 150. White is 255.
            # Threshold of 120 is safe.
            
            if r > 120:
                # This is likely the background (White or Gray checkerboard)
                newData.append((255, 255, 255, 0))
            else:
                # This is the logo (Cyan/Darker). Make it PURE WHITE for Dark Header.
                newData.append((255, 255, 255, 255))
                
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Successfully saved to {output_path}")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    process_uploaded_logo()
