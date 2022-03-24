import {dateProcess} from '../src/client/js/date';
describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the checkUrl() function", () => {
        expect(dateProcess("02/01/2022", "02/03/2022")).toEqual(2);
    })

    test("Testing the checkUrl() function", () => {
         expect(dateProcess("02/01/2022", "02/03/2022")).toBeDefined();
    })
});