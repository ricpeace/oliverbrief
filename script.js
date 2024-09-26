* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.phone-frame {
    width: 375px;
    height: 812px;
    background-color: #2c3e50;
    border-radius: 40px;
    padding: 20px;
    color: white;
    overflow-y: auto;
}

header {
    text-align: center;
    margin-bottom: 20px;
}

h1 {
    font-size: 28px;
    margin-bottom: 10px;
}

.decorative-line {
    width: 50px;
    height: 2px;
    background-color: white;
    margin: 0 auto;
}

.text-display {
    background-color: #34495e;
    border-radius: 10px;
    height: 60px;
    margin-bottom: 20px;
}

.button-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}

button {
    padding: 10px 15px;
    border-radius: 20px;
    border: none;
    font-size: 14px;
    cursor: pointer;
}

.outline-button {
    background-color: transparent;
    border: 1px solid white;
    color: white;
}

.dark-button {
    background-color: #34495e;
    color: white;
}

.submit-button {
    background-color: #1abc9c;
    color: white;
}

.input-field {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 20px;
    border: none;
    background-color: #34495e;
    color: white;
}

.input-field::placeholder {
    color: #bdc3c7;
}

.small {
    padding: 5px 10px;
    font-size: 12px;
}
