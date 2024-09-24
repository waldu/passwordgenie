
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const generateBtn = document.getElementById('generateBtn');
    const useNumbers = document.getElementById('useNumbers');
    const useSymbols = document.getElementById('useSymbols');
    const passwordElements = [
        document.getElementById('password1'),
        document.getElementById('password2'),
        document.getElementById('password3')
    ];

    // Word lists for password generation
    let words = []; // Array to hold words from the file

    // Load the words from dict.txt
    fetch('dict.txt')
        .then(response => response.text())
        .then(data => {
               // Split the content by commas, trim spaces from each word, and filter out any empty words
               words = data.split(',').map(word => word.trim()).filter(word => word.length > 0);
        })
        .catch(error => {
            console.error('Error loading the words:', error);
        });

    // Symbols and numbers
    const symbols = "_ !@#$%^&*()£-";
    const numbers = "0123456789";

    // Generate button click event
    generateBtn.addEventListener('click', generatePasswords);

    // Generate passwords
    function generatePasswords() {
        passwordElements.forEach(el => {
            const randomPassword = generatePassword();
            el.textContent = randomPassword;
        });
    }

    // Password generation logic
    function generatePassword() {
        let firstWord = getRandomWord().toLowerCase();
        let secondWord = getRandomWord().toUpperCase();
        let thirdWord = getRandomWord().toLowerCase();
        
        let password = `${firstWord}#${secondWord}#${thirdWord}#`;
        
        if (useNumbers.checked) {
            password += getRandomNumber();
        }
        
        if (useSymbols.checked) {
            const symbol = getRandomSymbol();
            password = password.split('#').join(symbol); // Add the same symbol between every character
        }
        else{            
            password = password.replace(/#/g, ''); // remove temp placeholder
        }
        
        return password;
    }

    // Utility functions
    function getRandomWord() {
        return words[Math.floor(Math.random() * words.length)];
    }

    function getRandomSymbol() {
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    function getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }

    // Copy to clipboard functionality
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const target = document.getElementById(button.dataset.target);
            navigator.clipboard.writeText(target.textContent);
            //        alert("Password copied!");
            button.innerHTML = "Copied"
        });
    });
});
