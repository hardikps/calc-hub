function showCalculator(calculatorId) {
    document.getElementById('noticePeriod').style.display = 'none';
    document.getElementById('increment').style.display = 'none';
    document.getElementById(calculatorId).style.display = 'block';
}

function calculateEndDate() {
    const startDate = new Date(document.getElementById('startDate').value);
    const noticeDays = parseInt(document.getElementById('noticeDays').value);
    
    if (isNaN(startDate.getTime()) || isNaN(noticeDays) || noticeDays <= 0) {
        document.getElementById('noticeResult').textContent = 'Please enter a valid start date and notice period.';
        return;
    }

    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + noticeDays);
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('noticeResult').textContent = `The Last Working Day is ${endDate.toLocaleDateString(undefined, options)}.`;

    
    let message = '';
    if (noticeDays <= 30) {
        message = 'Maje hai bhai tumhare to.';
    } else if (noticeDays > 30 && noticeDays <= 60) {
        message = 'Try hard to negotiate & get early release ASAP, azadi ab dur nhi hai.';
    } else if (noticeDays > 61 && noticeDays <= 90) {
        message = 'Kuch nhi ho sakta tera, offer to dur ki baat hai, tujhe to calls bhi hardly aayenge.';
    }

    document.getElementById('additionalMessage').textContent = message;
    document.getElementById('additionalMessage').style.display = 'block';
}


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

function showCalculator(calculatorId) {
    document.getElementById('noticePeriod').style.display = 'none';
    document.getElementById('increment').style.display = 'none';
    document.getElementById(calculatorId).style.display = 'block';
}

function showCalculator(calculatorId) {
    document.getElementById('noticePeriod').style.display = 'none';
    document.getElementById('increment').style.display = 'none';
    document.getElementById(calculatorId).style.display = 'block';
}

function calculateIncrement() {
    const currentSalary = parseFloat(document.getElementById('currentSalary').value);
    const incrementType = document.getElementById('incrementType').value;

    if (isNaN(currentSalary) || currentSalary <= 0) {
        document.getElementById('incrementResult').textContent = 'Please enter a valid current salary.';
        return;
    }

    let newSalary = 0;
    if (incrementType === 'percentage') {
        const percentageIncrease = parseFloat(document.getElementById('percentageIncrease').value);
        if (isNaN(percentageIncrease) || percentageIncrease <= 0) {
            document.getElementById('incrementResult').textContent = 'Please enter a valid percentage increase.';
            return;
        }
        newSalary = currentSalary * (1 + percentageIncrease / 100);
    } else {
        newSalary = parseFloat(document.getElementById('newSalary').value);
        if (isNaN(newSalary) || newSalary <= 0) {
            document.getElementById('incrementResult').textContent = 'Please enter a valid new salary.';
            return;
        }
    }

    const incrementAmount = newSalary - currentSalary;
    document.getElementById('incrementResult').textContent = `The new salary is ${newSalary.toFixed(2)}, which is an increase of ${incrementAmount.toFixed(2)}.`;

    
    const percentageIncrease = (incrementAmount / currentSalary) * 100;

    
    let message = '';
    if (percentageIncrease < 10) {
        message = 'Switch kar de job kuch nhi rakha yaha!';
    } else if (percentageIncrease >= 10 && percentageIncrease <= 40) {
        message = 'Interview preparations chalu kar de, bahar isse acha mil jayega tujhe!';
    } else {
        message = 'Kya kijiyega itni dhanrashi ka, thodi chite gareebono pe bhi udao!';
    }

    document.getElementById('additionalMessage2').textContent = message;
    document.getElementById('additionalMessage2').style.display = 'block';
    document.getElementById('additionalMessage2').style.display = 'block';
}