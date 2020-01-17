import chroma from 'chroma-js'

function generatePallet(staterPallet){
    const levels = [50,100,200,300,400,500,600,700,800,900]
    let newPallet ={
        paletteName : staterPallet.paletteName,
        id :staterPallet.id,
        emoji : staterPallet.emoji,
        colors :{}
    }
    for(let level of levels){
        newPallet.colors[level] = [];
    }
    for(let colors of staterPallet.colors){
        let scale = generateScale(colors.color,10).reverse();
        for(let i in scale){
            newPallet.colors[levels[i]].push({
                name :`${colors.name} ${levels[i]}`,
                id : colors.name.toLowerCase().replace(/ /g,"-"),
                hex : scale[i],
                rgb : chroma(scale[i]).css(),
                rgba : chroma(scale[i]).css().replace("rgb","rgba").replace(")",",1.0)"),

            })
        }
    }
    return newPallet
}

function getRange(hexColor){
    const end = "#fff"
    return [
        chroma(hexColor).darken(1.4).hex(),
        hexColor,
        end
    ]
}

function generateScale(hexcolor,numberOfColors){
    return chroma.scale(getRange(hexcolor)).mode("lab" ).colors(numberOfColors)
}

export {generatePallet};