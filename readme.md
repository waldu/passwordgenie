# Password Generator Web Tool

## Overview

This is a simple web-based password generator tool that generates three random passwords based on a list of customizable words, with options to include numbers and symbols. The generated passwords follow the format of three unrelated words combined with numbers and symbols to enhance security.

Each password follows these rules:
1. The first word is lowercase.
2. The second word is uppercase.
3. The third word is lowercase.
4. Optionally, a random number and a symbol can be included for extra security.
5. A copy button is provided to easily copy the generated password to the clipboard.

The tool is packaged as an HTML, CSS, and JavaScript project, and can be run locally by opening the `index.html` file in any modern web browser.

## Project Structure

The project consists of the following files and folders:

/password-generator 
├── /css 
│ ├── style.css # CSS for basic styling 
├── /js 
│ ├── scripts.js # JavaScript logic for password generation and clipboard copy 
├── dict.txt # Text file containing comma-separated words used for password generation 
├── index.html # Main HTML file for the web app 
└── README.md # This documentation file

## Features

- **Password Generation**: Generates three random passwords using words from `dict.txt`.
- **Customizable Options**:
  - Include numbers in the password (checkbox).
  - Include symbols in the password (checkbox).
- **Copy to Clipboard**: Easily copy any generated password using the provided "Copy" button next to each password.

## How to Use

1. **Open the Tool**: Download the project and open the `index.html` file in your web browser.
2. **Generate Passwords**: Click the "Generate Passwords" button to generate three random passwords.
3. **Customize Options**: You can choose to include numbers and symbols using the checkboxes before generating passwords.
4. **Copy Passwords**: After generating passwords, you can click the "Copy" button next to each password to copy it to your clipboard.

## Customizing the Words List (dict.txt)

The words used for password generation are stored in the `dict.txt` file located in the root of the project directory. This file contains a list of comma-separated words that will be randomly selected when generating passwords. By updating the words in `dict.txt`, you can control which words are used in the generated passwords.

### Steps to Update the Words List:

1. **Open `dict.txt`**: Open the `dict.txt` file using any text editor (e.g., Notepad, VS Code).
2. **Add or Remove Words**: Modify the list of words in the file. Each word should be separated by a comma.
   - Example: If you want to add new words like `fire`, `water`, and `earth`, you can modify `dict.txt` to look like this:
     ```
     blue, sky, river, sun, moon, star, cloud, mountain, forest, ocean, fire, water, earth
     ```
3. **Save the File**: After making changes, save the `dict.txt` file.
4. **Reload the Tool**: Open or reload the `index.html` file in your browser to ensure the tool loads the updated list of words.
5. **Generate Passwords**: The new list of words will now be used to generate passwords.

### Notes:
- Ensure there are no extra spaces before or after words in the `dict.txt` file, as the tool automatically trims them.
- The tool will ignore any empty entries in the `dict.txt` file.
- Words are case-insensitive in the file, but will be formatted (lowercase or uppercase) as per the password generation rules in the app.

## Running Locally

This tool is designed to run locally, meaning no server is required. Simply download the project folder, open `index.html` in your browser, and start using the password generator.

### Steps to Run Locally:

1. **Download the project files** (as a ZIP or by cloning from a repository, if applicable).
2. **Extract the ZIP file** (if downloaded as a compressed folder).
3. **Open `index.html`** in your browser to run the tool.

## Future Enhancements

Here are some potential future enhancements for this password generator tool:
- Add more customization options such as minimum/maximum password length.
- Provide more flexibility in symbol usage (e.g., allowing users to choose specific symbols).
- Expand the word list dynamically from an online source.

## License

This project is open-source and free to use. Feel free to modify and distribute it as needed.
