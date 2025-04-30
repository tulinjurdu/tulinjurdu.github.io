function showResult() {

    const rollNumber = document.getElementById('inputRollNumber').value;

    fetch('data/students_result.json')
        .then(response => response.json())
        .then(data => {
            const student = data.find(student => student.RollNo === rollNumber);

            const resultContainer = document.getElementById('resultContainer');

            if (student) {
                const table = `
                    <table class="table table-bordered">
                    <tr class="text-start">
                        <th>Name</th>
                        <td>${student.Name}</td>
                    </tr>
                    <tr class="text-start">
                    <th>Roll Number</th>
                    <td>${student.RollNo}</td>
                    </tr>
                    <tr class="text-start">
                        <th>Marks Obtained</th>
                        <td>${student.Total}/900</td>
                    </tr>
                    <tr class="text-start">
                        <th>Percentage</th>
                        <td>${student.Percentage}&nbsp;%</td>
                    </tr>
                    <tr class="text-start">
                        <th>Grade</th>
                        <td>${student.Grade}</td>
                    </tr>
                </table>
                `;
                resultContainer.innerHTML = table;
            } else {
                resultContainer.innerHTML = 'Incorrect Roll Number!';
            }
        })
        .catch(error => {
            console.error('Error fetching student records:', error);
        });
}


