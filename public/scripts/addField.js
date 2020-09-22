//Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener("click", cloneField)
//Executar uma ação
function cloneField() {
    //Duplicar os campos, que campo?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) //boolean; true or false
    
    //LIMPAR OS CAMPOS, que campos?

    const fields = newFieldContainer.querySelectorAll("input")

   /* fields[0].value = ""
    fields[1].value = ""*/

    //para cada campo limpar
    fields.forEach(function(field){
        //pegar o field do momento
        field.value= ""
    })
    
    //Colocar na página: onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
    