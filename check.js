elements = document.getElementsByClassName("post reply");
funcs = [
    function(){}
    ,dubs
    ,trips
    ,quads
    ,quints
    ,sexs
    ,septs
    ,octs
    ,nons
];
Array.prototype.forEach.call(elements, function(post) {
    funct = funcs[dubslevel(post.id)];
    funct(post);
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
function dubs(post) {
    post.style.backgroundImage = "radial-gradient(ellipse at center, #feffff 0%,#04c914 300%)"
}
function trips(post) {
    post.style.backgroundImage = "radial-gradient(ellipse at center, #feffff 0%,#0473c9 300%)"
}
function quads(post) {
    post.style.backgroundImage = "radial-gradient(ellipse at center, #feffff 0%,#7704c9 300%)"
}
function quints(post) {
    post.style.backgroundImage = "radial-gradient(ellipse at center, #feffff 0%,#f4bf42 300%)"
}
function sexs(post) {
    post.style.backgroundImage = "radial-gradient(ellipse at center, #feffff 0%,#f44242 300%)"
}
function septs(post) {
    alert("HOLY SHIT >>"+post.id);
}
function octs(post) {
    alert("HOLY SHIT >>"+post.id);
}
function nons(post) {
    alert("HOLY SHIT >>"+post.id);
}
