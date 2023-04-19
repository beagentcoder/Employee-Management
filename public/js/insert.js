//  JS file for Insert

const form = document.getElementById('employeeForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const empid = document.getElementById('empid').value;
    const name = document.getElementById('name').value;
    const salary = document.getElementById('salary').value;
    const designation = document.getElementById('designation').value;

    // Convert form data to JSON
    const employeeData = {
        "empid": empid,
        "name": name,
        "salary": salary,
        "designation": designation
    };

    // Send POST request to server
    const response = await fetch('http://localhost:4000/insertemp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employeeData)
    });
    console.log(employeeData)
    if (response.ok) {
        alert('Employee record created successfully!');
        // Clear form fields
        form.reset();
    } else {
        alert('Failed to create employee record. Please try again later.');
    }
});