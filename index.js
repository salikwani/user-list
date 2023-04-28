var arr = [];
var j = 1;

document.getElementById("add-btn").addEventListener('click',addEmployee);

function addEmployee() {
    var name = document.getElementById("name");
    var profession = document.getElementById("profession");
    var age = document.getElementById("age");

    if(name.value && profession.value && age.value) {
        var obj = {id: j, name: name.value, profession: profession.value, age: age.value};
        arr.push(obj);
        console.log(arr);
        j++;
        displayData();
        addDetails(arr);
        success();
        name.value = ""; profession.value = ""; age.value = "";
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

function addDetails() {
    var eData = document.getElementById("data");
    var add = "";
    for(var i=0;i<arr.length;i++) {
        add += `<div class="e-data" id="u-${arr[i].id}">
                                <div class="details">
                                    <p>${arr[i].id}.</p>
                                    <p>Name: ${arr[i].name}</p>
                                    <p>Profession: ${arr[i].profession}</p>
                                    <p>Age: ${arr[i].age}</p>
                                </div>
                                <button class="delete-btn" onclick="delUser('u-${arr[i].id}')">Delete User</button>
                            </div>`
    }
    eData.innerHTML = add;
}

function delUser(id) {
    for(var i in arr) {
        if(id === `u-${arr[i].id}`) {
            arr.splice(i,1);
            break;
        }
    }
    j = 1;
    for(var user of arr) {
        user.id = j;
        j++;
    }
    addDetails();
}

