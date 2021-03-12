 var o = Object.assign(Object.create(null), { a: 1 }, { a: 2 }, { a: 3 });
 Object.assign(Object.prototype, { f: function() {} });
 
 for (var i in o) {
 console.log(o[i]);
 }