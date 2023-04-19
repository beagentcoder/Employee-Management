//  JS for Delete

document.getElementById('deleteForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const empId = document.getElementById('empId').value;
    
    try {
      const response = await fetch(`http://localhost:4000/delemp/${empId}`, {
        method:'DELETE',
      });
  
      if (response.ok) {
        document.getElementById('result').textContent = 'Employee record deleted successfully.';
      } else {
        document.getElementById('result').textContent = 'Failed to delete employee record. Please try again later.';
      }
    } catch (error) {
      document.getElementById('result').textContent = 'Failed to delete employee record. Please try again later.';
    }
  });
  