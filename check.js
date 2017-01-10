ops = document.getElementsByClassName("post op");
replys = document.getElementsByClassName("post reply");

colors = [
    "#000000",
    "#04c914",
    "#0473c9",
    "#7704c9",
    "#f4bf42",
    "#f44242",
    "#00ff00",
    "#00ff00",
    "#00ff00"
];


Array.prototype.forEach.call(ops, function(post) {
    if((level = dubslevel(post.id)) >0)
        get(post, level);
});

Array.prototype.forEach.call(replys, function(post) {
    if((level = dubslevel(post.id)) >0)
        get(post, level);
});
function dubslevel(postid) {
    last = postid[postid.length - 1];
    incr = 0;
    for(i=postid.length-2; i>=0; i--) {
        if (postid[i] == last) {
            incr++;
        } else {
            return incr;
        }
    }
    return 0;
}
function get(post, level) {
    id = post.getElementsByClassName("postNum desktop")[0].getElementsByTagName("a")[1];
    idtext = id.textContent;
    id.style.backgroundColor = colors[level];
    id.innerHTML = idtext.slice(0, idtext.length-level-1) + "<b>" + idtext.slice(idtext.length-level-1) + "</b>";
}
