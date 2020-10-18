class Object {
    constructor(a, b) {
        this.a = a
        this.b = b
    }

    osszead() {
        return this.a + this.b
    }

    kivon() {
        return this.a - this.b
    }

    absA() {
        var abs = -1
        if (this.a < 0)
            this.a *= abs
        return this.a
    }
}

function method(a) {
    //console.log("Az érték: " + a)
    return a + 1
}

//console.log("Hello World")

var valami = 5
var valami2 = 7

// concat = két string egymásbafűzése

//console.log(valami + valami2)

//console.log(`${valami} + ${valami2} = ${valami + valami2}`)

//console.log(method(valami))

var ob = new Object(-5, 6)
console.log(ob.absA())

var json = require("./message.json")
console.log(json.tulajdonsagok.hajszin)