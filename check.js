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
    jej = post.getElementsByClassName("postNum desktop");
    jej[0].style.backgroundColor = colors[level];
    kek = jej[0].getElementsByTagName("a");
    lel = kek[1].textContent;
    kek[1].innerHTML = lel.slice(0, lel.length-level-1) + "<b>" + lel.slice(lel.length-level-1) + "</b>";
}
