const buscaId = document.querySelector('#id');
        var IdValue = buscaId.value;
        var change = new Event("change");
        buscaId.addEventListener('change', () => {
            IdValue = buscaId.value;
            console.log(IdValue);
            
        })
        
        const tabelaDados = document.querySelector('.tabelaDados');
        const dadosescritos = document.querySelector('.dadosescritos');
        const corpoTabela = document.querySelector('#corpoTabela');    
    
        async function getCustomers(){
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
                alert('Busca não realizada, tente novamente mais tarde.');
            }
        }               
       
        function limpaCorpoTabela(){
            while(corpoTabela.firstChild){
            corpoTabela.removeChild(corpoTabela.firstChild);
            }
        }
    
        async function getCustomer(){
          limpaCorpoTabela();
          tabelaDados.style.display = 'block';
          
            try {
                const response = await fetch(`https://localhost:7040/api/Customer/${IdValue}`)
                const dataId = await response.json()
    
                
                console.log(dataId.nome);
                const linha = document.createElement('tr');
                //ID
                const customerId = document.createElement('th');
                const customerIdText = document.createTextNode(dataId.id);
                customerId.appendChild(customerIdText);
                linha.appendChild(customerId);
                corpoTabela.appendChild(linha);
                //NOME
                const nome = document.createElement('th');
                const nomeText = document.createTextNode(dataId.name);
                nome.appendChild(nomeText);
                linha.appendChild(nome);
                corpoTabela.appendChild(linha);
                //CPF
                const cpf = document.createElement('th');
                const cpfText = document.createTextNode(dataId.cpf);
                cpf.appendChild(cpfText);
                linha.appendChild(cpf);
                corpoTabela.appendChild(linha);
                //GENDER
                const gender = document.createElement('th');
                const genderText = document.createTextNode(dataId.gender);
                gender.appendChild(genderText);
                linha.appendChild(gender);
                corpoTabela.appendChild(linha);
                //STATUS
                const statusId = document.createElement('th');
                const statusIdText = document.createTextNode(dataId.domain_Status_Id);
                statusId.appendChild(statusIdText);
                linha.appendChild(statusId);
                corpoTabela.appendChild(linha);
                //TYPE
                const typeId = document.createElement('th');
                const typeIdText = document.createTextNode(`${dataId.domain_Type_Id}`);
                typeId.appendChild(typeIdText);
                linha.appendChild(typeId);
                corpoTabela.appendChild(linha);
                //CREATED AT
                const createdAt = document.createElement('th');
                const createdAtText = document.createTextNode(`${dataId.created_At}`);
                createdAt.appendChild(createdAtText);
                linha.appendChild(createdAt);
                corpoTabela.appendChild(linha);
                //UPDATED AT
                const updatedAt = document.createElement('th');
                const updatedAtText = document.createTextNode(`${dataId.updated_At}`);
                updatedAt.appendChild(updatedAtText);
                linha.appendChild(updatedAt);
                corpoTabela.appendChild(linha);        
    
            } catch (error) {
              console.log(`Error: Cliente não encontrado ${error}`);
              alert('Cliente não encontrado.');
            }
        }
    