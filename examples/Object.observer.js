var model = {
    "name": "novaline",
    "job": "coder"
};

Object.observe(model, observer);

function observer(changes) {
    changes.forEach(function (change) {
        console.log(change);
    });
}

model.name = "lin.du";
model.job = "搬砖";
Object.unobserve(model, observer);

setTimeout(function () {
    model.name = "搬砖者";
    model.job = "";
}, 3000);
