function handleButtonClick(value) {
    document.getElementById('readonly').value += value;
}

function handleDelete() {
    const currentValue = document.getElementById('readonly').value;
    document.getElementById('readonly').value = currentValue.slice(0, -1);
}



function handleKeyDown(event) {
    event.preventDefault();
    const key = event.key.toUpperCase();
    const button = Array.from(document.querySelectorAll('.key')).find(
        (btn) => btn.innerText.toUpperCase() === key
    );

    if (button) {
        button.style.backgroundColor = 'lightblue';
        handleButtonClick(key);
    } else if (key === 'DELETE' || key === 'DEL') {
        // Handle the actual keyboard delete key
        handleDelete();
    }
}
function handleKeyUp(event) {
    const key = event.key.toUpperCase();
    const button = Array.from(document.querySelectorAll('.key')).find(
        (btn) => btn.innerText.toUpperCase() === key
    );

    if (button) {
        button.style.backgroundColor = '';
    }
}

document.querySelector('.keyboard').addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        if (event.target.id === 'delete') {
            handleDelete();
        } else {
            handleButtonClick(event.target.innerText);
        }
    }
});

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);
