function openModal(fileName, title) {
    var mobile = window.innerWidth < 801;
    var modal = document.getElementById('theModal');
    var body = document.getElementsByTagName('body');
    if (modal.style.display !== 'block' && !mobile){
        body[0].style.margin = 0;
        pic = document.createElement('img')
        pic.src = fileName;
        pic.setAttribute('class','slide');
        pic.setAttribute('id','theSlide');
        modal.appendChild(pic);
        var title = document.createTextNode(title);
        var heading = document.createElement('h1');
        heading.setAttribute('id','theHeading');
        heading.append(title);
        modal.appendChild(heading);
        modal.style.display = 'block';
        modal.addEventListener('click',closeModal);
    }
    
}

function closeModal() {
    var modal = document.getElementById('theModal');
    var pic = document.getElementById('theSlide');
    var heading = document.getElementById('theHeading');
    var body = document.getElementsByTagName('body');
    modal.removeEventListener('click',closeModal);
    modal.removeChild(pic);
    modal.removeChild(heading);
    modal.style.display = 'none';
    body[0].style.margin = '8px';
}

var imgs = document.getElementsByTagName('img');
var images = Array.from(imgs);
var filenames = [];

for (var i = 0; i < images.length; i++){
    filenames.push(images[i].src);
    images[i].addEventListener('click', function(e){
        openModal(this.src, this.alt, i);
    });
}

document.onkeydown = function(e){
    var modal = document.getElementById('theModal');
    if (modal.style.display === 'block'){
        var fileName = document.getElementById('theSlide').src;
        e = e || window.event;
        if (e.keyCode === 27){
            closeModal();
        } else if (e.keyCode === 39) {
            var i = images.findIndex(element => element.src === fileName);
            var newImage = images[i + 1] === undefined ? images[0] : images[i + 1];
            closeModal();
            openModal(newImage.src, newImage.alt, i);
        } else if (e.keyCode === 37) {
            var i = images.findIndex(element => element.src === fileName);
            var newImage = images[i - 1] === undefined ? images[images.length - 1] : images[i - 1];
            closeModal();
            openModal(newImage.src, newImage.alt, i);
        }
    }
}