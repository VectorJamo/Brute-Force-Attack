function generate_passwords(no_of_passwords) {
    const domain = 'abcdefghijklmnopqrstuvwxyz0123456789' // This is the 'domain' out of which password to be created
    const domain_size = domain.length
    
    const length = 5 // Feel free to change this value to adjust the length of password to generate

    let password_array = [] 
    for (let k = 0 ; k < no_of_passwords; k++){
        let password = ''
        for(let i = 0; i < length; i++){
            password += domain[Math.floor(Math.random() * (domain_size))]    
        }
        password_array.push(password)
    }
    return password_array
}

module.exports = generate_passwords