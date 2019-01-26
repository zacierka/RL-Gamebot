var queue = []; //intitial queue
//queue.push({name: "Mike", game: {win: true, goals: 5, against: 4}});
//            specify name, game object: win, goals, against/opp


function add2Queue() {
  var ul = document.getElementById("queue");
  var li = document.createElement("li");
  var username = document.getElementById("username").value;
  queue.push({name: username, game: {win: false, goals: 0, against: 0}});
  li.appendChild(document.createTextNode(queue.shift().name));
  ul.appendChild(li);
}

function createList() {
    queue.push({name: "Mike", game: {win: true, goals: 5, against: 4}});
    queue.push({name: "Ninja", game: {win: false, goals: 3, against: 5}});
    queue.push({name: "Timthetatman", game: {win: true, goals: 5, against: 4}});
    queue.push({name: "doctordis", game: {win: true, goals: 5, against: 4}});
    queue.push({name: "R3D", game: {win: true, goals: 5, against: 4}});
    queue.push({name: "Cloak", game: {win: true, goals: 5, against: 4}});
    queue.push({name: "Lit_3d", game: {win: true, goals: 5, against: 4}});
    queue.push({name: "Yung Kiwi", game: {win: true, goals: 5, against: 4}});
    var ul = document.getElementById("queue");
    for(var i = 0; i < queue.length; i++) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(queue[i].name));
      ul.appendChild(li);
    }
}