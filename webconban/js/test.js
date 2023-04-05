

function test(a){
    var a = this.length
    return a
}

test('123')
console.log(test())

