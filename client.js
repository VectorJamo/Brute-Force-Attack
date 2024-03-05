function handleSubmit() {

    const field = document.querySelector('#inputField')
    const password = field.value
    field.value = ''

    const pen = document.querySelector('div')
    const new_element = document.createElement('p')
    const node = document.createTextNode(password)
    new_element.appendChild(node)

    pen.appendChild(new_element)
}

