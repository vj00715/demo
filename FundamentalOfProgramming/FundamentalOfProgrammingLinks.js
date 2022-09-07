const links = ["FOP_intro","ProgrammingEnvironment","BasicSyntax","DataTypesAndStructures","Variables","Keywords","BasicOperators","DecisionMaking","Loops","Functions","FileInputOutput","OPP","Debugging"]
const title = ["Intro","Programming Environment","Basic Syntax","Data Types and Structures","Variables","Keywords","Basic Operators","Decision Making","Loops","Functions","File I/O","Object-Oriented Programming","Debugging"]
let totallinks = '<div class="topic">Topic</div>'
for(i = 0; i < links.length;i++){
    let linksTitle = '<a class="if_link" href="' + links[i] + '.html' + '" target="_parent">' + title[i]+ '</a>'

    document.getElementsByClassName('sideBar')[0].innerHTML = totallinks = totallinks + linksTitle
};