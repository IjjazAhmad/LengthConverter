const getValueFun = (id) => {
    return document.getElementById(id).value;
}

const SetvalueFun = (id, value) => {
    document.getElementById(id).value = value;
}

const ConverterFunkm = () => {
    let kmValue = + getValueFun("km")
    let meter = kmValue * 1000
    let cm = kmValue * 100000
    let mm = kmValue * 1000000
    let micro = kmValue * 1e+9
    let nnm = kmValue * 1e+12
    let mile = kmValue / 1.609
    let yard = kmValue * 1094
    let inc = kmValue * 3281
    let foot = kmValue * 39370
    let nm = kmValue / 1.852
    SetvalueFun("m", meter)
    SetvalueFun("cm", cm)
    SetvalueFun("mm", mm)
    SetvalueFun("micro", micro)
    SetvalueFun("nnm", nnm)
    SetvalueFun("mile", mile)
    SetvalueFun("yard", yard)
    SetvalueFun("inc", inc)
    SetvalueFun("foot", foot)
    SetvalueFun("nm", nm)
}
const ConverterFunm = () => {
    let meterValue = + getValueFun("m")
    let km = meterValue / 1000
    let cm = meterValue * 100000
    let mm = meterValue * 1000000
    let micro = meterValue * 1e+9
    let nnm = meterValue * 1e+12
    let mile = meterValue / 1.609
    let yard = meterValue * 1094
    let inc = meterValue * 3281
    let foot = meterValue * 39370
    let nm = meterValue / 1.852
    SetvalueFun("km", km)
    SetvalueFun("cm", cm)
    SetvalueFun("mm", mm)
    SetvalueFun("micro", micro)
    SetvalueFun("nnm", nnm)
    SetvalueFun("mile", mile)
    SetvalueFun("yard", yard)
    SetvalueFun("inc", inc)
    SetvalueFun("foot", foot)
    SetvalueFun("nm", nm)
}
const ConverterFuncm = () => {
    let cmValue = + getValueFun("cm")
    let km = cmValue / 100000
    let m = cmValue / 100
    let mm = cmValue * 10
    let micro = cmValue * 10000
    let nnm = cmValue * 1e+7
    let mile = cmValue / 160900
    let yard = cmValue / 91.44
    let inc = cmValue / 2.54
    let foot = cmValue / 30.48
    let nm = cmValue / 185200


    SetvalueFun("km", km)
    SetvalueFun("m", m)
    SetvalueFun("mm", mm)
    SetvalueFun("micro", micro)
    SetvalueFun("nnm", nnm)
    SetvalueFun("mile", mile)
    SetvalueFun("yard", yard)
    SetvalueFun("inc", inc)
    SetvalueFun("foot", foot)
    SetvalueFun("nm", nm)

}
const ConverterFunmm = () => {
    let mmValue = + getValueFun("mm")
    let km = mmValue / 1000000
    let m = mmValue / 1000
    let cm = mmValue / 10
    let micro = mmValue * 1000
    let nnm = mmValue * 1e+6
    let mile = mmValue / 1.609e+6
    let yard = mmValue / 914.4
    let inc = mmValue / 25.4
    let foot = mmValue / 304.8
    let nm = mmValue / 1.852e+6
    SetvalueFun("km", km)
    SetvalueFun("m", m)
    SetvalueFun("cm", cm)
    SetvalueFun("micro", micro)
    SetvalueFun("nnm", nnm)
    SetvalueFun("mile", mile)
    SetvalueFun("yard", yard)
    SetvalueFun("inc", inc)
    SetvalueFun("foot", foot)
    SetvalueFun("nm", nm)
}
const ConverterFunmi = () => {
    let microValue = + getValueFun("micro")
    let km = microValue / 1e+9
    let m = microValue / 1e+6
    let cm = microValue / 10000
    let mm = microValue / 1000
    let nnm = microValue * 1000
    let mile = microValue / 1.609e+9
    let yard = microValue / 914400
    let inc = microValue / 25400
    let foot = microValue / 304800
    let nm = microValue / 1.852e+9
    SetvalueFun("km", km)
    SetvalueFun("m", m)
    SetvalueFun("cm", cm)
    SetvalueFun("mm", mm)
    SetvalueFun("nnm", nnm)
    SetvalueFun("mile", mile)
    SetvalueFun("yard", yard)
    SetvalueFun("inc", inc)
    SetvalueFun("foot", foot)
    SetvalueFun("nm", nm)

}
const ConverterFunni = () => {
    let nnmValue = + getValueFun("nnm")
    let km = nnmValue / 1e+12
    let m = nnmValue / 1e+9
    let cm = nnmValue / 1e+7
    let mm = nnmValue / 1e+6
    let micro = nnmValue / 1000
    let mile = nnmValue / 1.609e+12
    let yard = nnmValue / 9.144e+8
    let inc = nnmValue / 2.54e+7
    let foot = nnmValue / 3.048e+8
    let nm = nnmValue / 1.852e+12
    SetvalueFun("km", km)
    SetvalueFun("m", m)
    SetvalueFun("cm", cm)
    SetvalueFun("mm", mm)
    SetvalueFun("micro", micro)
    SetvalueFun("mile", mile)
    SetvalueFun("yard", yard)
    SetvalueFun("inc", inc)
    SetvalueFun("foot", foot)
    SetvalueFun("nm", nm)

}

const ConverterFunmil = () => {
    let milValue = + getValueFun("mile")
    let km = milValue * 1.609
    let m = milValue * 1609
    let cm = milValue * 160900
    let mm = milValue * 1.609e+6
    let micro = milValue * 1.609e+9
    let nnm = milValue * 1.609e+12
    let yard = milValue * 1760
    let inc = milValue * 63360
    let foot = milValue * 5280
    let nm = milValue / 1.151
    SetvalueFun("km", km)
    SetvalueFun("m", m)
    SetvalueFun("cm", cm)
    SetvalueFun("mm", mm)
    SetvalueFun("micro", micro)
    SetvalueFun("nnm", nnm)
    SetvalueFun("yard", yard)
    SetvalueFun("inc", inc)
    SetvalueFun("foot", foot)
    SetvalueFun("nm", nm)

}
const ConverterFunyard = () => {
    let yarValue = + getValueFun("yard")
    let km = yarValue / 1094
    let m = yarValue / 1.094
    let cm = yarValue * 91.44
    let mm = yarValue * 914.4
    let micro = yarValue * 914400
    let nnm = yarValue * 9.144e+8
    let mile = yarValue * 1760
    let inc = yarValue * 36
    let foot = yarValue * 3
    let nm = yarValue / 2025
    SetvalueFun("km", km)
    SetvalueFun("m", m)
    SetvalueFun("cm", cm)
    SetvalueFun("mm", mm)
    SetvalueFun("micro", micro)
    SetvalueFun("nnm", nnm)
    SetvalueFun("mile", mile)
    SetvalueFun("inc", inc)
    SetvalueFun("foot", foot)
    SetvalueFun("nm", nm)

}
const ConverterFunfoo = () => {
    let footValue = + getValueFun("foot")
    let km = footValue / 3281
    let m = footValue / 3.281
    let cm = footValue * 3.281
    let mm = footValue * 304.8
    let micro = footValue * 304800
    let nnm = footValue * 3.048e+8
    let mile = footValue / 5280
    let inc = footValue * 12
    let yard = footValue / 3
    let nm = footValue / 6076
    SetvalueFun("km", km)
    SetvalueFun("m", m)
    SetvalueFun("cm", cm)
    SetvalueFun("mm", mm)
    SetvalueFun("micro", micro)
    SetvalueFun("nnm", nnm)
    SetvalueFun("mile", mile)
    SetvalueFun("inc", inc)
    SetvalueFun("yard", yard)
    SetvalueFun("nm", nm)

}
const ConverterFunin = () => {
    let incValue = + getValueFun("inc")
    let km = incValue / 39370
    let m = incValue / 39.37
    let cm = incValue * 2.54
    let mm = incValue * 25.4
    let micro = incValue * 25400
    let nnm = incValue *  2.54e+7
    let mile = incValue / 63360
    let foot = incValue * 12
    let yard = incValue / 36
    let nm = incValue / 72910
    SetvalueFun("km", km)
    SetvalueFun("m", m)
    SetvalueFun("cm", cm)
    SetvalueFun("mm", mm)
    SetvalueFun("micro", micro)
    SetvalueFun("nnm", nnm)
    SetvalueFun("mile", mile)
    SetvalueFun("foot", foot)
    SetvalueFun("yard", yard)
    SetvalueFun("nm", nm)

}

const ConverterFunnm = () => {
    let nmValue = + getValueFun("nm")
    let km = nmValue * 1.852
    let m = nmValue * 1852
    let cm = nmValue * 185200
    let mm = nmValue * 1.852e+6
    let micro = nmValue * 1.852e+9
    let nnm = nmValue *  1.852e+12
    let mile = nmValue * 1.151
    let foot = nmValue * 6076
    let yard = nmValue * 2025
    let inc = nmValue * 72910
    SetvalueFun("km", km)
    SetvalueFun("m", m)
    SetvalueFun("cm", cm)
    SetvalueFun("mm", mm)
    SetvalueFun("micro", micro)
    SetvalueFun("nnm", nnm)
    SetvalueFun("mile", mile)
    SetvalueFun("foot", foot)
    SetvalueFun("yard", yard)
    SetvalueFun("inc", inc)

}