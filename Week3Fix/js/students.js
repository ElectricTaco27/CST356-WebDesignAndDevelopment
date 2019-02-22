function initializeStudents() {
    var data = getTestStudents();
    displayStudents(data.students);
}

function getTestStudents() {
    return JSON.parse(testStudents);
}

function displayStudents(students) {

    for(i = 0; i < students.length; i++) {

        console.log('email: ' + students[i].email);
        
        var email = students[i].email;
        var id = students[i].id;
        var markup = "<tr><td>" + id + "</td><td>$" + email + "</td><td>";

        $("table tbody").append(markup);
    }
}

var testStudents = '{"students": [{"id": 1,"email": "SAO@Gmail.com"},{"id": 2,"email": "DanMachi@Gmail.com"}, {"id": 3,"email": "Apex@Gmail.com"}, {"id": 4,"email": "Abec@Gmail.com"}]}'