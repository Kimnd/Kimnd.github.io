
document.addEventListener('DOMContentLoaded', function() {

    var linkedinnode = document.createElement('a');
    var githubnode = document.createElement('a');
    var emailnode = document.createElement('a');
    var itchionode = document.createElement('a');
    var copyrightnode = document.createElement('p');
    
    linkedinnode.href="https://www.linkedin.com/in/frankie-gallag-8374371a5";
    githubnode.href="https://github.com/Kimnd";
    emailnode.href="mailto:frankgallagherthe2nd@gmail.com";
    itchionode.href="https://thefifth.itch.io/"

    var linkedintext = document.createTextNode("Linkedin");
    var githubtext = document.createTextNode("Github");
    var emailtext = document.createTextNode("Email");
    var itchiotext = document.createTextNode("Itch.io");
    var copyrighttext = document.createTextNode("© 202X by Frankie Gallagher");

    linkedinnode.appendChild(linkedintext);
    githubnode.appendChild(githubtext);
    emailnode.appendChild(emailtext);
    itchionode.appendChild(itchiotext);
    copyrightnode.appendChild(copyrighttext);

    document.getElementById("foot").appendChild(linkedinnode);
    document.getElementById("foot").appendChild(githubnode);
    document.getElementById("foot").appendChild(emailnode);
    document.getElementById("foot").appendChild(itchionode);
    document.getElementById("foot").appendChild(copyrightnode);
    // document.getElementById("foot").appendChild(faqnode);

});
        // <a href="https://www.linkedin.com/in/frankie-gallag-8374371a5">Linkedin</a>
        // <a href="https://github.com/Kimnd">Github</a>
        // <a href="mailto:frankgallagherthe2nd@gmail.com">Gmail</a>

