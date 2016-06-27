const state = {};
const props = {};
state.list = [
    {
        "a01": ""
    },
    {
        "a02": ""
    },
    {
        "b03": ""
    },
    {
        "b05": "value02"
    }
];
props.key = ['a01', 'a02', 'b03', 'b05'][Math.floor(Math.random() * 4)];

const findObj = state.list.find((obj) => {
    return props.key in obj;
});

console.log(findObj);   //=>{ b05: 'value02' }
