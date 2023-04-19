 // Fetch employees data from API
 fetch('http://localhost:4000/allemp')
 .then(response => response.json())
 .then(employees => {
   // Loop through each employee and append to table
   employees.forEach(employee => {
     const tr = document.createElement('tr');
     tr.innerHTML = `
       <td>${employee.empid}</td>
       <td>${employee.name}</td>
       <td>${employee.salary}</td>
       <td>${employee.designation}</td>
     `;
     document.getElementById('employeeTableBody').appendChild(tr);
   });
 })
 .catch(error => console.error(error));