var arr = [];
function createObj(name, phase, gender) {

    var newObj = { name: name, phase: phase, gender: gender };

    arr.push(newObj);

}

function getData(name) {

    // Using array's built-in function
    // var result = arr.find(function(person) {

    //   return person.name === name;

    // });

    // Using linear search
    for (var i = 0; i < arr.length; i++) {

        if (arr[i].name === name) {

            return arr[i];

        }

    }

    return -1;

}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');

console.log(arr);
/*
[ { name: 'Akbar', phase: 1, gender: 'male' },
  { name: 'Icha', phase: 1, gender: 'female' },
  { name: 'Adhit', phase: 2, gender: 'male' },
  { name: 'Tama', phase: 2, gender: 'male' },
  { name: 'Rifky', phase: 3, gender: 'male' } ]
*/

console.log(getData('Icha'));
/*
  { name: 'Icha', phase: 1, gender: 'female' }
*/