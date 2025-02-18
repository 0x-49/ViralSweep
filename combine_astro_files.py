import os
from pathlib import Path

def find_astro_files(directory: str) -> list:
    """Find all .astro files in the given directory and its subdirectories."""
    astro_files = []
    for root, _, files in os.walk(directory):
        # Skip node_modules directory
        if 'node_modules' in root:
            continue
        for file in files:
            if file.endswith('.astro'):
                astro_files.append(os.path.join(root, file))
    return astro_files

def combine_astro_files(project_dir: str):
    """Combine all Astro files into a single TempCombined.txt file."""
    # Get the src directory
    src_dir = os.path.join(project_dir, 'src')
    if not os.path.exists(src_dir):
        print(f"Error: src directory not found in {project_dir}")
        return
    
    # Get all .astro files from src directory
    astro_files = find_astro_files(src_dir)
    
    # Sort files for consistent output
    astro_files.sort()
    
    # Prepare the combined content
    combined_content = []
    
    # Process each file
    for file_path in astro_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # Get relative path for cleaner output
            rel_path = os.path.relpath(file_path, project_dir)
            
            # Add file header and content
            combined_content.append(f"\n{'='*80}")
            combined_content.append(f"FILE: {rel_path}")
            combined_content.append('='*80)
            combined_content.append(content)
            combined_content.append("\n")  # Add extra newline for separation
            
            print(f"Processed: {rel_path}")
        except Exception as e:
            print(f"Error processing {file_path}: {str(e)}")
    
    # Write the combined content to TempCombined.txt
    output_file = os.path.join(project_dir, 'TempCombined.txt')
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write('\n'.join(combined_content))
        print(f"\nSuccessfully created: {output_file}")
        print(f"Total files combined: {len(astro_files)}")
    except Exception as e:
        print(f"Error writing combined file: {str(e)}")

if __name__ == "__main__":
    # Get the project directory (where the script is located)
    project_dir = os.path.dirname(os.path.abspath(__file__))
    combine_astro_files(project_dir)
