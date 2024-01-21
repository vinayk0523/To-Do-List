function resetFields() {
            
    document.getElementById('task').value = '';
    document.getElementById('date').value = '';
}


function addTask() {


        var task = document.getElementById('task').value;
        var date = document.getElementById('date').value;

        if (task && date) {
            var table = document.getElementById('taskTable');
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);

            cell1.innerHTML = task;
            cell2.innerHTML = date;

            document.getElementById('task').value = '';
            document.getElementById('date').value = '';
        } else {
            alert('Please enter both task and date.');
        }
    
}


