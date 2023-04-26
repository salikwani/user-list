var arr = [];
var i = 1;

document.getElementById("add-btn").addEventListener('click',addEmployee);

function addEmployee() {
    var name = document.getElementById("name").value;
    var profession = document.getElementById("profession").value;
    var age = document.getElementById("age").value;

    if(name && profession && age) {
        var obj = {id: i, name: name, profession: profession, age: age};
        arr.push(obj);
        console.log(arr);
        i++;
        displayData();
        addDetails(arr);
        success();
    } else {
        error();
    }
}

function displayData() {
    if(arr.length > 0) {
        document.getElementById("zero-e").style.display = "none";
    }
}

function error() {
    document.getElementById("success").style.display = "none";
    document.getElementById("error").style.display = "block";
}

function success() {
    document.getElementById("error").style.display = "none";
    document.getElementById("success").style.display = "block";
}

function addDetails(arr) {
    var eData = document.getElementById("data");
    for(var i=0;i<arr.length;i++) {
        eData.innerHTML += `<div class="e-data" id="u-${arr[i].id}">
                                <div class="details">
                                    <p>${arr[i].id}.</p>
                                    <p>Name: ${arr[i].name}</p>
                                    <p>Profession: ${arr[i].profession}</p>
                                    <p>Age: ${arr[i].age}</p>
                                </div>
                                <button class="delete-btn" onclick="delUser('u-${arr[i].id}')">Delete User</button>
                            </div>`
    }
    arr.splice(0);
}

function delUser(id) {
    document.getElementById(id).remove();
}

