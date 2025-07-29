import os

folder = "public/images/nature"

count = 1
for filename in os.listdir(folder):
    if filename.lower().endswith(('.jpg', '.jpeg', '.png', '.gif')):
        old_path = os.path.join(folder, filename)
        new_name = f"photo{count}.jpg" 
        new_path = os.path.join(folder, new_name)
        os.rename(old_path, new_path)
        print(f"Renamed {filename} to {new_name}")
        count += 1
