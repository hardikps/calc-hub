function toggleIncrementInput() {
    const incrementType = document.getElementById('incrementType').value;
    if (incrementType === 'percentage') {
        document.getElementById('percentageGroup').style.display = 'block';
        document.getElementById('newSalaryGroup').style.display = 'none';
    } else {
        document.getElementById('percentageGroup').style.display = 'none';
        document.getElementById('newSalaryGroup').style.display = 'block';
    }
}

function calculateIncrement() {
    const currentSalary = parseFloat(document.getElementById('currentSalary').value);
    const incrementType = document.getElementById('incrementType').value;

    if (isNaN(currentSalary) || currentSalary <= 0) {
        document.getElementById('result').textContent = 'Please enter a valid current salary.';
        return;
    }

    let newSalary = 0;
    if (incrementType === 'percentage') {
        const percentageIncrease = parseFloat(document.getElementById('percentageIncrease').value);
        if (isNaN(percentageIncrease) || percentageIncrease <= 0) {
            document.getElementById('result').textContent = 'Please enter a valid percentage increase.';
            return;
        }
        newSalary = currentSalary * (1 + percentageIncrease / 100);
    } else {
        newSalary = parseFloat(document.getElementById('newSalary').value);
        if (isNaN(newSalary) || newSalary <= 0) {
            document.getElementById('result').textContent = 'Please enter a valid new salary.';
            return;
        }
    }

    const incrementAmount = newSalary - currentSalary;
    document.getElementById('result').textContent = `The new salary is ${newSalary.toFixed(2)}, which is an increase of ${incrementAmount.toFixed(2)}.`;
}
