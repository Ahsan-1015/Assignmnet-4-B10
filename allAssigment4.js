function calculateTax(income, expense) {
    
    if (income < 0 || expense < 0 || income < expense) {
        return "Invalid Input";
    }

    const profit = income - expense;
    const tax = profit * 0.20;
    return tax;
}

function sendNotification(email) {
    
    if (!email.includes('@')) {
        return "Invalid Email";
    }
    const [username, domain] = email.split('@');   
    return username + "sent you an email from" + domain ;
} 

function checkDigitsInName(name) {
   
    if (typeof name !== 'string') {
        return "Invalid Input";
    }

    for (let char of name) {
        if (!isNaN(char)) {
            return true;
        }
    }
    return false; 
}

function calculateFinalScore(obj) {

    if (typeof obj !== 'object' || obj === null) {
        return "Invalid Input";
    }

    const { name, testScore, schoolGrade, isFFamily } = obj;

    if (typeof name !== 'string' ||
        typeof testScore !== 'number' || testScore > 50 ||
        typeof schoolGrade !== 'number' || schoolGrade > 30 ||
        typeof isFFamily !== 'boolean') {
        return "Invalid Input";
    }  

    let finalScore = testScore + schoolGrade;

    if (isFFamily) {
        finalScore += 20;
    }

    if(finalScore >= 80){
        return true;
    }
    return false;
}



function waitingTime(waitingTimes, serialNumber) {

    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    let total = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        total += waitingTimes[i];
    }

    const averageTime = Math.round(total / waitingTimes.length); 

    const anotherPeople = serialNumber - waitingTimes.length - 1;

 
    if (0 < anotherPeople) {
        return anotherPeople * averageTime;
    } else {
        return 0;
    }
}

