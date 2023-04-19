// script.js

    // Fetch the DOM elements
    const searchForm = document.getElementById('searchForm');
    const empIdInput = document.getElementById('empId');
    const resultContainer = document.getElementById('resultContainer');
    const resultStatus = document.getElementById('resultStatus');
    const resultList = document.getElementById('resultList');
    
    // Add event listener for form submission
    searchForm.addEventListener('submit', async (event) => {
      event.preventDefault();
    
      // Get the employee ID from the input field
      const empId = empIdInput.value;
    
      // Clear previous results
      resultStatus.textContent = '';
      resultList.innerHTML = '';
    
      // Make API call to fetch employee data based on empId
      try {
        const response = await fetch(`http://localhost:4000/findemp/${empId}`);
        const data = await response.json();
        if (response.ok) {
          // Display employee data in result container
          resultStatus.textContent = 'Employee Details:';
          resultList.innerHTML = `
            <li><strong>Employee ID:</strong> <span>${data.empid}</span></li>
            <li><strong>Name:</strong> <span>${data.name}</span></li>
            <li><strong>Salary:</strong> <span>${data.salary}</span></li>
            <li><strong>Designation:</strong> <span>${data.designation}</span></li>
          `;
          resultContainer.style.display = 'block';
        } else {
          // Display error message in result container
          resultStatus.textContent = 'Error:';
          resultList.innerHTML = `<li>${data.message}</li>`;
          resultContainer.style.display = 'block';
        }
      } catch (error) {
        // Display error message in result container
        resultStatus.textContent = 'Error:';
        resultList.innerHTML = `<li>Failed to fetch employee data. Please try again later.</li>`;
        resultContainer.style.display = 'block';
      }
    });
    
    
