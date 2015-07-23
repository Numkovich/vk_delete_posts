var i = 0;
var posts = document.getElementsByClassName('post_delete_button');
var next = document.getElementById('wall_more_link');
var inval_id;
var flag = 0;

function removeposts() {
    if (i == posts.length) {
        next.click();
        flag++;
        if (flag > 3) {
            clearInterval(inval_id);
            alert('Удаление постов завершено!');
        }
    } else {
        posts[i].click();
        i++;
        flag = 0;
    }
}
inval_id = setInterval(removeposts, 800);