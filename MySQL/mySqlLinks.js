const links = ["mysql_intro","mysql_TypeOfQuery"]
const title = ["Intro","Type Of Query"]
let totallinks = '<div class="topic">Topic</div>'
for(i = 0; i < links.length;i++){
    let linksTitle = '<a class="if_link" href="' + links[i] + '.html' + '" target="_parent">' + title[i]+ '</a>'

    document.getElementsByClassName('sideBar')[0].innerHTML = totallinks = totallinks + linksTitle
};