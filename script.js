let additem = document.getElementById("additem");

let list = document.getElementById("list")


additem.addEventListener('click', () => {
    var sample = document.getElementById('sample').value,

        listNode = document.getElementById('list');
        divNode = document.createElement("div");
        strongNode = document.createElement("strong");
        
        strongNode.style.display = "block"
        strongNode.style.margin = "5px 10px"
        strongNode.setAttribute("class", "alert alert-warning");
        strongNode.setAttribute("role","alert");
        txtNode = document.createTextNode(sample);
        divNode.style.display = "flexbox";
        let id = uuid();
        let id1 = uuid();
        
        divNode.setAttribute("Id", id);
        strongNode.appendChild(txtNode);
        divNode.appendChild(strongNode);
        listNode.appendChild(divNode);
        
        document.getElementById('sample').value = "";
        
        btnNode = document.createElement("button")
        
        btnNode.setAttribute("class","btn btn-outline-danger")
        btnNode.setAttribute("Id",id1)
        btnNode.setAttribute("type","button")

      
        btnNode.style.display = "block"
        btnNode.style.margin = "5px 10px"

        removenode = document.createTextNode("DELETE")
        btnNode.appendChild(removenode)
        divNode.appendChild(btnNode);
        listNode.appendChild(divNode);
        let delt = document.getElementById(id1);
        
        delt.addEventListener("click",() =>{
            document.getElementById(id).remove();
        })

        
        
        
});