function calculateEndDate() {
    const startDate = new Date(document.getElementById('startDate').value);
    const noticeDays = parseInt(document.getElementById('noticeDays').value);
    
    if (isNaN(startDate.getTime()) || isNaN(noticeDays)) {
        document.getElementById('result').textContent = 'Please enter a valid start date and notice period.';
        return;
    }

    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + noticeDays);
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('result').textContent = `The end date is ${endDate.toLocaleDateString(undefined, options)}.`;
}
