//  JS for Updating database

const updateForm = document.querySelector('#update-form');
const updateBtn = document.querySelector('#update-btn');

updateForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const salary = document.querySelector('#salary').value;
    const designation = document.querySelector('#designation').value;
    const empid = document.querySelector('#empid').value;

    const url = `http://localhost:4000/upemp/${empid}`;
    const data = {};

    if (name !== '') {
        data.name = name;
    }

    if (salary !== '') {
        data.salary = salary;
    }

    if (designation !== '') {
        data.designation = designation;
    }

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            console.log(result);
            alert('Employee details updated successfully!');
        } else {
            alert('Failed to update employee details!');
        }
    } catch (error) {
        console.log(error);
    }
});
