'use strict';

let Person = {
    name: "Shahan's Diary",
    sayName: function() {
        console.log(this);
    }
};

Person.sayName();