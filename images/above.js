var output = [];
var count = 1;
// this is javascript loops
 function fizzBuzz() {

    while (count <=100) {
   if (count % 3 === 0 && count % 5 === 0) {
        output.push("fizzBuzz")    
 }
else if (count % 3 === 0) {
    output.push("fizz");
    
}
else if (count % 5 === 0 ) {
    output.push("buzz");
    
} 
else{
    output.push(count);
    
    
}
count++;   


}

console.log(output
    );
}

function GetCookie (name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
    var j = i + alen;
    if (document.cookie.substring(i, j) == arg)
    return getCookieVal (j);
    i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0) break;
    }
    return null;
    }
    function SetCookie (name, value) {
    var argv = SetCookie.arguments;
    var argc = SetCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    var path = (argc > 3) ? argv[3] : null;
    var domain = (argc > 4) ? argv[4] : null;
    var secure = (argc > 5) ? argv[5] : false;
    document.cookie = name + "=" + escape (value) +
    ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
    ((path == null) ? "" : ("; path=" + path)) +
    ((domain == null) ? "" : ("; domain=" + domain)) +
    ((secure == true) ? "; secure" : "");
    }
    function DeleteCookie (name) {
    var exp = new Date();
    exp.setTime (exp.getTime() - 1);
    var cval = GetCookie (name);
    document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
    }
    var expDays = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + (expDays*24*60*60*1000));
    function amt(){
    var count = GetCookie('count')
    if(count == null) {
    SetCookie('count','1')
    return 1
    }
    else {
    var newcount = parseInt(count) + 1;
    DeleteCookie('count')
    SetCookie('count',newcount,exp)
    return count
       }
    }
    function getCookieVal(offset) {
    var endstr = document.cookie.indexOf (";", offset);
    if (endstr == -1)
    endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
    }
    // End -->
    </SCRIPT>
    </HEAD>
    
    document.write("You've been here <b>" + amt() + "</b> times.")
  
var bottles = ["99"];
function bottleowall(){

    while (bottles) {
        bottles
        
    }
}

var output = [];
var count = 1;
// this is javascript loops
 function fizzBuzz() {

    while (count <=100) {
   if (count % 3 === 0 && count % 5 === 0) {
        output.push("fizzBuzz")    
 }
else if (count % 3 === 0) {
    output.push("fizz");
    
}
else if (count % 5 === 0 ) {
    output.push("buzz");
    
} 
else{
    output.push(count);
    
    
}
count++;   


}

console.log(output
    );
}
var output = [];
var count = 1;
// this is javascript loops
 function fizzBuzz() {

    while (count <=100) {
   if (count % 3 === 0 && count % 5 === 0) {
        output.push("fizzBuzz")    
 }
else if (count % 3 === 0) {
    output.push("fizz");
    
}
else if (count % 5 === 0 ) {
    output.push("buzz");
    
} 
else{
    output.push(count);
    
    
}
count++;   


}

console.log(output
    );
}
