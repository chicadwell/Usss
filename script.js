document.querySelector('.yes-btn').addEventListener('click', function() {
    document.querySelector('#yes-section').classList.remove('hidden');
    document.querySelector('.container').classList.add('hidden');
});

document.querySelector('.no-btn').addEventListener('click', function() {
    document.querySelector('#no-section').classList.remove('hidden');
    document.querySelector('.container').classList.add('hidden');
});
