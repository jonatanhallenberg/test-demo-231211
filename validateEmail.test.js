function isThisValidEmail(email) {
    if (email.indexOf("@") <= 0) {
        return false;
    }

    if (email.indexOf("@") == email.length - 1) {
        return false;
    }
    
    return true;
}

// Vi skapar ett testfall för validering av e-post
describe('validate email tests', function () {

    //Test 1
    it('should return false when missing @', function () {

        //Förväntat värde
        const expectedValue = false;

        //Anropar funktionen och stoppar in i actualValue
        const actualValue = isThisValidEmail('jonatangmail.com');

        expect(actualValue).toBe(expectedValue);

    })

    //Test 2
    it('should return true when @ is present', function () {

        //Förväntat värde
        const expectedValue = true;

        //Anropar funktionen och stoppar in i actualValue
        const actualValue = isThisValidEmail('jonatan@gmail.com');

        expect(actualValue).toBe(expectedValue);

    })

    //Test 3
    it('should return false if @ is first character', function () {

        const expectedValue = false;

        const actualValue = isThisValidEmail('@jonatan.com');

        expect(actualValue).toBe(expectedValue);
    })

    //Test 4
    it('should return false if @ is last character', function () {

        const expectedValue = false;

        const actualValue = isThisValidEmail('jonatan.com@');

        expect(actualValue).toBe(expectedValue);
    })


})

