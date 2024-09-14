import { mult, splitIntoWords, sum } from "./01-01";

let a:number;
let b:number;
let c:number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test ('sum shood be corected', () => { 
    //data
    //action
    const result0 = sum(a,b);
    b = 100
    const result1 = sum(b,c);

    //expect result
    expect(result0).toBe(3);
    expect(result1).toBe(103);
})
test ('mult shood be corected', () => { 
    //data
    //action
    const result0 = mult(a,b);
    const result1 = mult(b,c);

    //expect result
    expect(result0).toBe(2);
    expect(result1).toBe(6);
})

const sentence0 = "Hello my friends!";
const sentence1 = "JS - the best programming language";

test ('splitting into words shood be correct', () => {
    //data
    //action
    const result0 = splitIntoWords(sentence0);
    const result1 = splitIntoWords(sentence1);
    //exepct reslt0
    expect(result0.length).toBe(3);
    expect(result0[0]).toBe("hello");
    expect(result0[1]).toBe("my");
    expect(result0[2]).toBe("friends");
    //
    expect(result1.length).toBe(5);
    expect(result1[0]).toBe("js");
    expect(result1[1]).toBe("the");
    expect(result1[2]).toBe("best");
    expect(result1[3]).toBe("programming");
    expect(result1[4]).toBe("language");

});



