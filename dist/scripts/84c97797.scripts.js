angular.module("scrabblejsApp",["ngCookies","ngRoute"]).config(["$routeProvider",function(a){"use strict";a.when("/",{templateUrl:"views/wordList.html",controller:"WordListCtrl"}).otherwise({redirectTo:"/"})}]);var bag=function(a){"use strict";a=a||"";for(var b={blanks:0,dict:{},length:0,word:a},c=0,d=a.length;d>c;c+=1){var e=a.charAt(c);e>="a"&&"z">=e?(b.dict[e]=(b.dict[e]||0)+1,b.length+=1):"."===e&&(b.blanks+=1,b.length+=1)}return b.contains=function(a){if(typeof a!=typeof this)return!1;var c=b.blanks;for(var d in a.dict){if(a.dict.hasOwnProperty(d)===!1)return!1;var e=a.dict[d];if(b.dict.hasOwnProperty(d)&&(e-=b.dict[d]),e>0&&(c-=e,0>c))return!1}return!0},b.add=function(a){if(typeof a!=typeof this)return this;var c,d=bag();for(c in b.dict)b.dict.hasOwnProperty(c)&&(d.dict[c]=b.dict[c]);for(c in a.dict)a.dict.hasOwnProperty(c)&&(d.dict[c]=(d.dict[c]||0)+a.dict[c]);return d.length=b.length+a.length,d.blanks=b.blanks+a.blanks,d},b.equal=function(a){return _.isEqual(b.dict,a.dict)},b.toString=function(){return _.chain(b.dict).map(function(a,b){for(var c=[],d=a;d>0;)d-=1,c[d]=b;return c.join("")}).sort().join("").value()},b};angular.module("scrabblejsApp").controller("WordListCtrl",["$scope","Words",function(a,b){"use strict";a.wordsBag=_.map(b,bag),a.rack=a.rack||"abcdefi",a.rackBag=bag(a.rack),a.$watch("rack",function(){var b=bag(a.board);b.blanks=0,a.rackBag=bag(a.rack).add(b)}),a.$watch("board",function(){var b=bag(a.board);b.blanks=0,a.rackBag=bag(a.rack).add(b);try{a.boardMatcher=new RegExp(a.board)}catch(c){if(!(c instanceof SyntaxError))throw c;a.boardMatcher=void 0}}),a.$watch("regex",function(){try{a.regExpMatcher=new RegExp(a.regex)}catch(b){if(!(b instanceof SyntaxError))throw b;a.regExpMatcher=void 0}}),a.wordFilter=function(b){var c=a.rackBag.length;return b.length>c?!1:a.rackBag.contains(b)===!1?!1:void 0!==a.regExpMatcher&&a.regExpMatcher.test(b.word)===!1?!1:void 0!==a.boardMatcher&&a.boardMatcher.test(b.word)===!1?!1:!0}}]),angular.module("scrabblejsApp").factory("Words",function(){"use strict";return csw12});