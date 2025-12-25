#!/usr/bin/env python3
"""
Script to create a black image with the same dimensions as sorolla.jpg
"""

from PIL import Image
import os

def create_black_image():
    # Path to the original image
    original_image_path = "sorolla.jpg"
    output_image_path = "black_image.jpg"
    
    # Check if the original image exists
    if not os.path.exists(original_image_path):
        print(f"Error: {original_image_path} not found!")
        return
    
    # Open the original image to get its dimensions
    with Image.open(original_image_path) as img:
        width, height = img.size
        print(f"Original image dimensions: {width}x{height} pixels")
    
    # Create a new black image with the same dimensions
    # RGB mode with black color (0, 0, 0)
    black_image = Image.new('RGB', (width, height), color=(0, 0, 0))
    
    # Save the black image as JPEG
    black_image.save(output_image_path, 'JPEG', quality=95)
    print(f"Black image created successfully: {output_image_path}")
    print(f"Dimensions: {width}x{height} pixels")

if __name__ == "__main__":
    create_black_image()

