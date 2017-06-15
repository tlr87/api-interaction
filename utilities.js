function reloadPage() {
    location.reload();
}

$(document).ready(function(){
    var classCycle=['image1','image2', 'image3', 'image4'];

    var backImage = Math.floor(Math.random() * classCycle.length);
    var currentImage = classCycle[backImage];

    $('body').addClass(currentImage);

});
