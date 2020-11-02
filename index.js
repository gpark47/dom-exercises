//add your code here
function runOnLoad () {
    $('h2').css('color','magenta');
    $('h3').css('color', 'rgb(200, 40, 20');
    $('ul').css('background-color', 'rgb(212,175,55)');
    document.querySelector('h1').textContent = "DOM Practice for Javascript";
    document.querySelector('li:nth-child(2)').textContent = "random noise";
   // $('article').first().append(<p></p>);
    $('article').first().append('<p>I am a paragraph with <em>italics</em> and <strong>bold</strong><p>');
    //document.querySelector('article.first-child').appendChild('<p>I am a paragraph with <em>italics</em> and <strong>bold</strong>.');
    ///document.querySelector('p.first-child').textContent = "I am a paragraph with <em>italics</em> and <strong>bold</strong>."
    document.querySelector('.instructions').remove();
    //('h1:nth-child(2)').append(<p></p>);
    //document.querySelectorAll('h2').style.color = '#cc35cc'
    //trying to undo those changes made to h2
}


///$('h2').css('color','red');
///$('ul').css('background-color','gold');
//$('h1').text('DOM Practice for JavaScript');
//$('li').eq(1).text('random noise');
//$('article').first().append('<p>I am a paragraph with <em>italics</em> and <strong>bold</strong><p>');
///$('.instructions').remove();
//document.querySelectorAll('h2').forEach((a)=>a.style.color = 'green')

//ALL OUR CODE IS AFTER LINE 2
//
// "listen" for the "DOMContentLoaded" event, and then run "runOnLoad()"
document.addEventListener('DOMContentLoaded', runOnLoad, false);
// AFTER THE DOM CONTENT HAS BEEN LOADED, ITS GONNA LOOK FOR SOMETHING TO HAPPEN IN THE WEB PAGE (RUNONLO

//if you use document.querySelectorAll('h1').textContent = "DOM Practice for Javascript";
//you get returned a NODE LIST, which does not have a text content propety, rather the element of the node has text property
