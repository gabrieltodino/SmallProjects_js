var input_item = document.querySelector('#input')
var btn_insert = document.querySelector('.add_wrapper button')
var wrapper = document.querySelector('.list_wrapper')

var list = []//list of items
var list_id = []//list of items id

btn_insert.addEventListener("click", () => {
    if(input_item.value){//checking if have values inputed
        wrapper.innerHTML = ""//reseting list at screen

        //adding id's
        let last_id = list_id.slice(-1)
        last_id++
        list_id.push(last_id)

        list.push(input_item.value)//pushing value inputed to last list index
        for(counter=0; counter<=list.length-1; counter++){//rendering
            wrapper.innerHTML += `<div class="item"><p>${list[counter]}</p><button id="${list_id[counter]}" onclick="remove_btn(event)">Remove</button></div>`
        }

        input_item.value = ""//reseting value at input  
    }else{
        alert("please, insert a value!")
    }
})

function remove_btn(event){
    list.splice(Number(event.srcElement.id)-1,1)//removing values by id

    var list_id = []
    list.map(() => {//recreating id list
        let last_id = list_id.slice(-1)
        last_id++
        list_id.push(last_id)
    })

    wrapper.innerHTML = ""
    if(list.length > 1){//verifying and rendering elements
        for(counter=0; counter<=list.length-1; counter++){//rendering
            wrapper.innerHTML += `<div class="item"><p>${list[counter]}</p><button id="${list_id[counter]}" onclick="remove_btn(event)">Remove</button></div>`
        }
    }else if(list.length == 1){
        wrapper.innerHTML += `<div class="item"><p>${list[0]}</p><button id="${list_id[0]}" onclick="remove_btn(event)">Remove</button></div>`
    }
}



