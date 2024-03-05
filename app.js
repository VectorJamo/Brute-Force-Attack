const puppeteer = require('puppeteer')
const generate_passwords = require('./cracker.js')

// Generates random passwords
async function scrape(url) {

    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()

    await page.goto(url)

    const text_field = "#inputField" // ID of the input field
    const submit_button = "#submitButton" // ID of the submit button
    
    const passwords = generate_passwords(5) // 5 = No of passwords to generate and test on

    // Must use a standard for loop and not a forEach loop for asynchronous tasks
    for (let i = 0; i < passwords.length; i++){
        await page.type(text_field, passwords[i], {delay: 500}) // Type the password's letters every 0.5sec
        await page.click(submit_button) // Click the submit button
    }
}

scrape('http://127.0.0.1:5500/Password%20Brute%20Force/test.html') // IMP: Host the site before running the web scraper