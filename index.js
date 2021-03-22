//    COMMENTS
//    The two forward slashes at the begging of a line keep
//    the line from being executed when the code runs.
//    This is good for adding documentation within your code.

/* 
      You can comment multiple lines of code 
*/

//    LOGGING
//    You can output to the terminal console.
console.log('I am output to the console.')

//    RUN THE CODE AND SEE THE OUTPUT (F5)
//    When you're reading to continue comment out the logging above

//    FUNCTIONS
//    functions are routines that stand ready to run when you call them.
//    Below we've commented out a call to a function named 'variables'
//    Remove the forward slashes before variables() to allow it to execute
//    the function named 'variables'

//variables('strings')
//variables('numbers')
//variables('arrays')
variables('objects')



// VARIABLES
function variables (type) {
  //  Variables are containers that hold data.  There are different types of variables/containers.
  var string = 'world world' // this is a String variable
  var anything = 'another string' // this is a String variable named 'anything'
  if (type === 'strings') {
    console.log(string)
    console.log(anything)
    // You can join (concatenate) strings together with a '+' symbold
    console.log(string + ', I am ' + anything)
  }
  var number = 1 // this is a Number variable
  var float = 1.5 // this is a Float (decimal) variable

  if (type === 'numbers') {
    console.log(number)
    console.log(float)
    console.log(number + float) // when the variable is of type 'number' you can do math with them.
    console.log(string + number) // If you try to join a string with a number, the number becomes a string.
  }

  var array = [] // An array is a container that holds a list.  That list can of differnt types of variables.
  var strings = ['a', 'list', 'of', 'strings.'] // An array of strings
  var numbers = [2, 4, 6, 8, 10] // An array of numbers
  var mixed = ['a', 1, 'b', 2, 'c', 3] // An array can contain a mixture of variable types

  if (type === 'arrays') {
    console.log('\nArray - Joins --------------')
    console.log(array.join()) // .join tells your code how to output the items of the array
    console.log(strings.join(' ')) // here we tell it to join the items with a space
    console.log(numbers.join(', ')) // here we tell it to join the items with a comma and space
    console.log(mixed.join(', '))

    array.push('a string') // you can add items to the end of an array by pushing them into the array
    array.push('is text')

    console.log('\nArray - Indexes --------------')
    console.log(array.join()) // if you don't specify, it will join with a comma
    console.log(array[0]) // you can also reference individual items of an array by their 'index'
    console.log(strings[1]) // index count starts at 0 'zero'
    console.log(numbers[2])

    console.log('\nArray - Functions --------------')
    // There are other array functions you can play with...
    // .pop removes and returns the last item of an array...
    console.log(strings.pop())
    console.log(strings.shift()) // removes and returns the first item of an array
    strings.unshift('wow') // Adds an item to the beginning of an array
    console.log(strings.join(' - '))
  }

  var object = {}
  var object2 = { id: '123', name: 'Elmer'}
  var objArray = [ { id: '456', name: 'Paolo'}, { id: '789', name: 'Justin'} ]

  if (type === 'objects') {
    console.log(object)
    console.log(object2)
    console.log(object2.id)
    console.log(object2.name)
    console.log(objArray[0])
    console.log(objArray[1])
    objArray.push(object2)
    console.log(objArray)

  }
  
  
}
