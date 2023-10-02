// let a = [1,2,3,4,5,6,7,8,9];
// let b = [3,6,8,9];

// let c = a.filter((n)=>!b.includes(n));

// console.log(c);

enrolled = [{
    courseId: {
        cid: 50
    },
    id: 100,
},{
    courseId: {
        cid: 51
    },
    id: 200,
},{
    courseId: {
        cid: 52
    },
    id: 300,
},{
    courseId: {
        cid: 53
    },
    id: 400,
}]

let trg = 54;

let result = enrolled.filter( (num) => {
    if(num.courseId.cid === trg)
    {
        let ccid = num.courseId.cid;
        return ccid;
    }
});

console.log(result);