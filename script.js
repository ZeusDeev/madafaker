document.getElementById('showMessageBtn').addEventListener('click', function() {
    var messageDiv = document.getElementById('message');
    var image = document.getElementById('image');
    var audio = document.getElementById('audio');

    messageDiv.classList.remove('hidden');
    image.classList.remove('hidden');
    image.classList.add('visible');
    audio.play();
});
