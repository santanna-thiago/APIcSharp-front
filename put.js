const tabelaDados = document.querySelector('.tabelaDados');
        const dadosescritos = document.querySelector('.dadosescritos');
        const corpoTabela = document.querySelector('#corpoTabela');
        
        function limpaCorpoTabela(){
            while(corpoTabela.firstChild){
            corpoTabela.removeChild(corpoTabela.firstChild);
            }
        }
        
        async function Customers(){
          limpaCorpoTabela();
          tabelaDados.style.display = 'block';
         
          try {
                const response = await fetch('https://localhost:7040/api/Customer');
                const data = await response.json()
                    
                if(data.length !== 0){
                            
                    for (let i = 0; i < data.length ; i++){
                        console.log(data[i].nome);
                        const linha = document.createElement('tr');
                        //ID
                        const customerId = document.createElement('th');
                        const customerIdText = document.createTextNode(data[i].id);
                        customerId.appendChild(customerIdText);
                        linha.appendChild(customerId);
                        corpoTabela.appendChild(linha);
                        //NOME
                        const nome = document.createElement('th');
                        const nomeText = document.createTextNode(data[i].name);
                        nome.appendChild(nomeText);
                        linha.appendChild(nome);
                        corpoTabela.appendChild(linha);
                        //CPF
                        const cpf = document.createElement('th');
                        const cpfText = document.createTextNode(data[i].cpf);
                        cpf.appendChild(cpfText);
                        linha.appendChild(cpf);
                        corpoTabela.appendChild(linha);
                        //GENDER
                        const gender = document.createElement('th');
                        const genderText = document.createTextNode(data[i].gender);
                        gender.appendChild(genderText);
                        linha.appendChild(gender);
                        corpoTabela.appendChild(linha);
                        //STATUS
                        const statusId = document.createElement('th');
                        const statusIdText = document.createTextNode(data[i].domain_Status_Id);
                        statusId.appendChild(statusIdText);
                        linha.appendChild(statusId);
                        corpoTabela.appendChild(linha);
                        //TYPE
                        const typeId = document.createElement('th');
                        const typeIdText = document.createTextNode(`${data[i].domain_Type_Id}`);
                        typeId.appendChild(typeIdText);
                        linha.appendChild(typeId);
                        corpoTabela.appendChild(linha);
                        //CREATED AT
                        const createdAt = document.createElement('th');
                        const createdAtText = document.createTextNode(`${data[i].created_At}`);
                        createdAt.appendChild(createdAtText);
                        linha.appendChild(createdAt);
                        corpoTabela.appendChild(linha);
                        //UPDATED AT
                        const updatedAt = document.createElement('th');
                        const updatedAtText = document.createTextNode(`${data[i].updated_At}`);
                        updatedAt.appendChild(updatedAtText);
                        linha.appendChild(updatedAt);
                        corpoTabela.appendChild(linha);
                    }                       
                }  else{
                    alert('Não existem clientes cadastrados')
                    }
            } 
            catch (error) {
                console.log(`Error: Cliente não encontrado ${error}`);
                alert('Tente novamente mais tarde.');
            }
        }             
        
       
        Customers();


        const formulario = document.querySelector('.formFormulary')


            formulario.addEventListener('submit', async (evento) => {
            evento.preventDefault()
            try {
                const idValue = evento.target.querySelector('#id').value
                const nameValue = evento.target.querySelector('#name').value
                const cpfValue = evento.target.querySelector('#cpf').value
                const genderValue = evento.target.querySelector("#gender").value;
                const statusValue = evento.target.querySelector("#status").value;
                const typeValue = evento.target.querySelector("#type").value;

                await creatCustomer(idValue, nameValue, cpfValue, genderValue, statusValue, typeValue);
                
            }
            catch (erro) {
                console.log(erro)
            }
        })

        const creatCustomer = (idValue, nameValue, cpfValue, genderValue, statusValue, typeValue) => {
            return fetch(`https://localhost:7040/api/Customer/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: idValue,
                    name: nameValue,
                    cpf: cpfValue,
                    gender: genderValue,
                    domain_Status_Id: statusValue,
                    domain_Type_Id: typeValue
                })
            })
            .then( resposta => {
                if(resposta.ok){
                    alert('Atualização realizada com sucesso.');
                    window.location.href = 'put.html';
                    return resposta.body
                }
                throw new Error('Não foi possível atualizar o cliente')
            })
            
        }
      
