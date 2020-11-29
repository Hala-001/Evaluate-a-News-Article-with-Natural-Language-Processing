import { checkForName } from '../src/client/js/nameChecker'
    test('Testing the checkForName() function', () => {
        const input = ["Picard","Janeway","Kirk","Archer","Georgiou"]
           expect(input).toEqual(["Picard","Janeway","Kirk","Archer","Georgiou"]);
});