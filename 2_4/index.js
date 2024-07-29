for (let i = 0; i < 3; i += 1) {
  let newStudent = prompt('Введите имя нового студента!');
  if (newStudent) {
    newStudent = newStudent.trim();
    alert(`Добро пожаловать, ${newStudent}!`)
  }
}

let j = 0;
while (j < 3) {
  j++;
  let newStudent = prompt('Введите имя нового студента!');
  if (newStudent) {
    newStudent = newStudent.trim();
    alert(`Добро пожаловать, ${newStudent}!`)
  }  
}

let x = 0;
do {
  let newStudent = prompt('Введите имя нового студента!');
  if (newStudent) {
    newStudent = newStudent.trim();
    alert(`Добро пожаловать, ${newStudent}!`)
  }  
  x++;
} while (x < 3);