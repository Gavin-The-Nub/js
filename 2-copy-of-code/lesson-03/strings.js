'hello'
alert('hello');

'some' + 'text'
'some' + 'more' + 'text'

typeof 2
typeof 'hello'

'hello' + 3
'$' + 20.95 + 7.99
'$' + (20.95 + 7.99)
'$' + (2095 + 799) / 100

'Items (' + (1 + 1) + '): $' + (2095 + 799) / 100
alert('Items (' + (1 + 1) + '): $' + (2095 + 799) / 100);

"hello"
"I'm learning JavaScript"
'I\'m learning JavaScript'
alert('some\ntext');

`hello`
'Items (${1 + 1}): $${(2095 + 799) / 100}' // no arithmetic opertions will be performed (it is taken as a string)
`Items (${1 + 1}): $${(2095 + 799) / 100}` //Interpolation (values can be inserted into the string directly)
`some
text`
