let form = document.querySelector('form');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let link = document.querySelector('a');
let res = document.querySelector('.result');

loadEvent();
let newArr = new Array;
function loadEvent() {
    form.addEventListener('submit', (e)=>{
        if(nameInput.value != ''){
            let user  = new Object;
            user.name = nameInput.value;
            user.email = emailInput.value;
            newArr.push(user)
            console.log(newArr);
            localStorage.setItem('users', JSON.stringify(newArr));
        }
        else{
            alert("Type valid information!")
        }
        nameInput.value = '';
        emailInput.value = '';
        e.preventDefault();
    })
};
let iconDel = "❌";
let iconEdit = "✍";
link.addEventListener('click', (e)=> {
    let output = localStorage.getItem('users');
    let avi = JSON.parse(output);
    let j = avi;
    let result = '<table width="900" cellspacing="0" cellpadding="5">';
    result = result + '<td style="background-color: rgb(255, 245, 172); font-weight: 700;">' + "Number" + "</td>";
    result = result + '<td style="background-color: rgb(255, 245, 172); font-weight: 700;">' + "Name" + "</td>";
    result = result + '<td style="background-color: rgb(255, 245, 172); font-weight: 700;">' + "Email" + "</td>";
    result = result + "<td>" + "Delete" + "</td>";
    result = result + "<td>" + "Edit" + "</td>";
    for(let i = 0; i < avi.length; i++){
        result = result + "<tr>";
        result = result + '<td style="background-color: rgb(255, 245, 172);">' + parseInt(i + 1) + "</td>";
        result = result + '<td style="background-color: rgb(255, 245, 172);">' + avi[i].name + "</td>";
        result = result + '<td style="background-color: rgb(255, 245, 172);">' + avi[i].email + "</td>";
        result = result + "<td>" + iconDel + "</td>";
        result = result + "<td>" + iconEdit + "</td>";
        result = result + "</tr>";
        j = avi;
    }
    result = result + "</table>";
    res.innerHTML = (result);
    iconEdit.addEventListener('click', (e)=>{
    alert("Are you sure? You are deleting your follower!");
    if(alert){
        console.log(e.target.parentElement.parentElement);
    }
    console.log(iconDel)
});

})
