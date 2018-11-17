//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
    for (var i = 0; i<contacts.length; i++) {

        if(!(contacts[i].firstName == firstName)) {
            document.write("No such contact");
        }else if (contacts[i].firstName ==firstName && contacts[i][prop] != null) {
            document.write(contacts[i][prop]);
        }else if(contacts[i].firstName ==firstName && !contacts[i].hasOwnProperty(prop)){
            document.write("No such property") ;
        }

        // for (var j=0;j<contacts[i].length;j++){ //对象是键值对，不能用下标来遍历
        // }

        document.write(i+" :"+contacts[i].firstName+"<br>");

        if (contacts[i].firstName == firstName && contacts[i].hasOwnProperty(prop)){
            // document.write("No such contact!<br>");

            return document.write(contacts[i][prop]);
        }
    }

// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Harry", "likes");
