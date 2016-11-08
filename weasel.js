var weasels = [
  'äußerst',
  'diverse',
  'einige',
  'ernorm',
  'exellent',
  'extrem',
  'ganz schön',
  'gewöhnlich',
  'größtenteils',
  'interessant',
  'interessanterweise',
  'komplett',
  'meistens',
  'offentsichtlich',
  'relatively',
  'remarkably',
  'riesig',
  'sehr',
  'selbstverständlich',
  'signifikant',
  'substantiell',
  'überaus',
  'überraschend',
  'überraschendderweise',
  'viel',
  'viele',
  'weitgehend',
  'wenige',
  'winzig',
  'zienlich'
];

// Allow "too many" and "too few"
var exceptions = [
  'viele',
  'wenige'
]


/* For the code below applies

The MIT License (MIT)

Copyright (c) 2014 Brian Ford

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/

var re = new RegExp('\\b(' + weasels.join('|') + ')\\b', 'gi');

module.exports = function (text, opts) {
  var suggestions = [];
  while (match = re.exec(text)) {
    var weasel = match[0].toLowerCase();
    if (exceptions.indexOf(weasel) === -1 ||
        text.substr(match.index-4, 4) !== 'zu ') {
      suggestions.push({
        index: match.index,
        offset: weasel.length,
      });
    }
  }
  return suggestions;
};
