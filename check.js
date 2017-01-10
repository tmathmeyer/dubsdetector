ops = document.getElementsByClassName("post op");
replys = document.getElementsByClassName("post reply");
//elements = Array.prototype.concat(ops, replys); //doesnt work idk lol
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
Array.prototype.forEach.call(ops, function(post) {
    funct = funcs[dubslevel(post.id)];
    funct(post);
});

Array.prototype.forEach.call(replys, function(post) {
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
//  post.style.backgroundImage = "radial-gradient(ellipse at center, #feffff 0%,#04c914 300%)"
    jej = post.getElementsByClassName("postNum desktop");
    jej[0].style.backgroundColor = "#04c914";
    kek = jej[0].getElementsByTagName("a");
    lel = kek[1].textContent;
    kek[1].innerHTML = lel.slice(0, lel.length-2) + "<b>" + lel.slice(lel.length-2) + "</b>";
}
function trips(post) {
//  post.style.backgroundImage = "radial-gradient(ellipse at center, #feffff 0%,#0473c9 300%)"
    jej = post.getElementsByClassName("postNum desktop");
    jej[0].style.backgroundColor = "#0473c9";
    kek = jej[0].getElementsByTagName("a");
    lel = kek[1].textContent;
    kek[1].innerHTML = lel.slice(0, lel.length-3) + "<b>" + lel.slice(lel.length-3) + "</b>";
}
function quads(post) {
//  post.style.backgroundImage = "radial-gradient(ellipse at center, #feffff 0%,#7704c9 300%)"
    jej = post.getElementsByClassName("postNum desktop");
    jej[0].style.backgroundColor = "#7704c9";
    kek = jej[0].getElementsByTagName("a");
    lel = kek[1].textContent;
    kek[1].innerHTML = lel.slice(0, lel.length-4) + "<b>" + lel.slice(lel.length-4) + "</b>";
}
function quints(post) {
//  post.style.backgroundImage = "radial-gradient(ellipse at center, #feffff 0%,#f4bf42 300%)"
    jej = post.getElementsByClassName("postNum desktop");
    jej[0].style.backgroundColor = "#f4bf42";
    kek = jej[0].getElementsByTagName("a");
    lel = kek[1].textContent;
    kek[1].innerHTML = lel.slice(0, lel.length-5) + "<b>" + lel.slice(lel.length-5) + "</b>";
}
function sexs(post) {
//  post.style.backgroundImage = "radial-gradient(ellipse at center, #feffff 0%,#f44242 300%)"
    jej = post.getElementsByClassName("postNum desktop");
    jej[0].style.backgroundColor = "#f44242";
    kek = jej[0].getElementsByTagName("a");
    lel = kek[1].textContent;
    kek[1].innerHTML = lel.slice(0, lel.length-6) + "<b>" + lel.slice(lel.length-6) + "</b>";
}
function septs(post) {
    alert("HOLY SHIT >>"+post.id);
    jej = post.getElementsByClassName("postNum desktop");
    kek = jej[0].getElementsByTagName("a");
    lel = kek[1].textContent;
    kek[1].innerHTML = lel.slice(0, lel.length-7) + "<b>" + lel.slice(lel.length-7) + "</b>";
}
function octs(post) {
    alert("HOLY SHIT >>"+post.id);
    jej = post.getElementsByClassName("postNum desktop");
    kek = jej[0].getElementsByTagName("a");
    lel = kek[1].textContent;
    kek[1].innerHTML = lel.slice(0, lel.length-8) + "<b>" + lel.slice(lel.length-8) + "</b>";
}
function nons(post) {
    alert("HOLY SHIT >>"+post.id);
    jej = post.getElementsByClassName("postNum desktop");
    kek = jej[0].getElementsByTagName("a");
    lel = kek[1].textContent;
    kek[1].innerHTML = lel.slice(0, lel.length-9) + "<b>" + lel.slice(lel.length-9) + "</b>";
}
