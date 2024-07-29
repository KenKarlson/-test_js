const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

function giveParcel(name) {
  peopleWaiting.shift();
  alert(`${name} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);
}
function leaveQueueWithoutParcel(name) {
  peopleWaiting.shift();
  alert(`${name} не получил(а) посылку и ушел(ла) из очереди. В очереди осталось ${peopleWaiting.length} человек.`);
}
giveParcel('Кристина');
giveParcel('Олег');
giveParcel('Кирилл');
leaveQueueWithoutParcel('Мария');
leaveQueueWithoutParcel('Светлана');
leaveQueueWithoutParcel('Артем');
leaveQueueWithoutParcel('Глеб');

console.log('В очереди осталось '+ peopleWaiting.length +' человек.');
console.log(peopleWaiting);