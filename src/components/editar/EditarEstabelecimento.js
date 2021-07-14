import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';



async function getAtividadeEstabelecimentos(){
  let response = await fetch('https://api-smartantecipa.herokuapp.com/atividade')
  let data =  await response.json()
  return data;
}


async function getPrestadorEdit(id){
  let response = await fetch(`https://api-smartantecipa.herokuapp.com/prestador/find/${id}`)
  let data =  await response.json()
  document.getElementById("atendeNoLocal").checked = data.atendeNoLocal
  console.log(data.atendeNoLocal)
  document.getElementById("cnpj").value = data.cnpj
  document.getElementById("cep").value = data.cep
  document.getElementById("complemento").value = data.complemento
  document.getElementById("email").value = data.emails[0].email
  document.getElementById("fantasia").value = data.fantasia
  document.getElementById("inscricaoEstadual").value = data.inscricaoEstadual
  document.getElementById("contatonumero").value = data.contatos[0].numero
  document.getElementById("numero").value = data.numero
  document.getElementById("razaoSocial").value = data.razaoSocial
  document.getElementById("endereco").value = data.endereco
  document.getElementById("bairro").value = data.bairro
  document.getElementById("cidade").value = data.cidade
  document.getElementById("estado").value = data.estado
  document.getElementById("agencia").value = data.dadosBancarios[0].agencia
  document.getElementById("agenciaDigito").value = data.dadosBancarios[0].agenciaDigito
  document.getElementById("banco").value = data.dadosBancarios[0].codigobanco
  document.getElementById("contaCorrente").value = data.dadosBancarios[0].contaCorrente
  document.getElementById("contaCorrenteDigito").value = data.dadosBancarios[0].contaCorrenteDigito

    //MARCA SELECTED NA ATIVIDADE CADASTRADA NO ESTABELECIMENTO

  let opcoesAtiv = document.querySelectorAll("#atividadeEstabId")
  let tamanhoAtiv = opcoesAtiv.length
  let iA
  for(iA = 0; iA < tamanhoAtiv; iA++ ){
    if(opcoesAtiv[iA].textContent === data.atividades[0].descricao){
      opcoesAtiv[iA].setAttribute('selected',true)
    } 
  }
  // MARCA SELECTED NO TIPO EMAIL 
  let opcoesEmail = document.querySelectorAll("#tipoEmailId")
  let tamanhoEmail = opcoesEmail.length
  let iE
  
  for(iE = 0; iE < tamanhoEmail; iE++ ){
    if(opcoesEmail[iE].textContent === data.emails[0].tipoEmail){
      opcoesEmail[iE].setAttribute('selected',true)
    }
  }
  // MARCA SELECTED NO TIPO CONTATO 

  let opcoesContato = document.querySelectorAll("#tipoContatoId")
  let tamanhoContato = opcoesContato.length
  let x
  for(x = 0; x < tamanhoContato; x++ ){
    if(opcoesContato[x].textContent === data.contatos[0].tipo){
      opcoesContato[x].setAttribute('selected',true)
    }
  } 
}

export default function EditarEstabelecimento(props) {

  const [AtividadeEstabelecimentos, setAtividadeEstabelecimentos] = useState([])
  
          useEffect(() => {
             getAtividadeEstabelecimentos().then (data =>{
              setAtividadeEstabelecimentos(data)
             })
          }, [])


  useEffect(() => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("codigo");
    getPrestadorEdit(id)
  });
  
  return (
    <Fragment>
    <div className="content-wrapper">
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        {/* left column */}
        <div className="col-md-12">
          {/* general form elements */}
          <div className="card card-primary">
            <div className="card-header">
              <h4 className="card-title">Editar Estabelecimento</h4>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form  id="newEstabelecimento">
              <div className="card-body">
                {/* DADOS GERAL */}
                <section id="dadosgerais" className="visible">
                  <div className="row " >
                
             
                    <div className=" col-12">
                      <h5 className="mt-3 mb-3 ml-1">Atividade</h5>
                    </div>
                    </div>
                    <div className="formstyleContent">
                    <div className="row " >
                    <div  className="form-group col-md-6">
                      <label htmlFor="atividade">Selecione a atividade do estabelecimento*</label>
                          <select type="text" className="form-control" id="atividade" name="atividade"  riquered >
                          <option id="selecionarEdit">Selecione...</option>
                          {AtividadeEstabelecimentos.map((AtividadeEstabelecimento) =>
                            <option id="atividadeEstabId" value={AtividadeEstabelecimento.codigo}>{AtividadeEstabelecimento.descricao}</option>
                            )}
                          </select>
                    </div>
                    </div>
                 </div>
                 <div className="row">
                  <div className=" col-12">
                    <h5 className="mt-3 mb-3 ml-1">Dados do Prestador</h5>
                  </div>
                  </div>
                  <div className="formstyleContent">
                  <div className="row">
                  <div className="form-group col-md-4">
                      <label htmlFor="cnpj">CNPJ</label>
                      <input type="text" className="form-control" id="cnpj" name="cnpj" placeholder="Digite somente números" riquered onChange={() => {

                    
                      }} />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="inscricaoEstadual">Inscrição Estadual</label>
                      <input type="text" className="form-control" id="inscricaoEstadual" name="inscricaoEstadual" placeholder="Digite somente números" riquered />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="fantasia">Fatasia</label>
                      <input type="text" className="form-control" id="fantasia" name="fantasia" placeholder="Ex: Empresa LTDA " riquered />
                    </div>
                   
                   
                    <div className="form-group col-md-6">
                      <label htmlFor="razaoSocial">Razão Social</label>
                      <input type="text" className="form-control" id="razaoSocial" name="razaoSocial" placeholder="Ex: Comercio Eirele " riquered />
                    </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className=" col-12">
                    <h5 className="mt-3 mb-3 ml-1">Endereço</h5>
                    </div>
                    </div>
                    <div className="formstyleContent">
                    <div className="row">
                  <div className="form-group col-md-2">
                      <label htmlFor="cep">Cep</label>
                      <input type="text" className="form-control" id="cep" name="cep"  placeholder="Ex:12951-300" riquered />
                  </div>
                  <div className="form-group col-md-3">
                      <label htmlFor="endereco">Endereço</label>
                      <input type="text" className="form-control" id="endereco" name="endereco" placeholder="Digite somente números" riquered />
                  </div>
                  <div className="form-group col-md-3">
                      <label htmlFor="bairro">Bairro</label>
                      <input type="text" className="form-control" id="bairro" name="bairro" placeholder="Digite somente números" riquered />
                  </div>
                  <div className="form-group col-md-3">
                      <label htmlFor="numero">Numero</label>
                      <input type="text" className="form-control" id="numero" name="numero" placeholder="Digite somente números" riquered />
                  </div>
               
                  <div className="form-group col-md-4">
                      <label htmlFor="cidade">Cidade</label>
                      <input type="text" className="form-control" id="cidade" name="cidade" placeholder="Digite somente números" riquered />
                  </div>
                  <div className="form-group col-md-4">
                      <label htmlFor="estado">Estado</label>
                      <input type="text" className="form-control" id="estado" name="estado" placeholder="Digite somente números" riquered />
                  </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="complemento">Complemento</label>
                      <input type="text" className="form-control" id="complemento" name="complemento" placeholder="Ex: Galpão amarelo" riquered />
                  </div>
                  </div>
                  </div>
                  <div className="row">
                  <div className=" col-12">
                    <h5 className="mt-3 mb-3 ml-1">Contato</h5>
                    </div>
                    </div>
                    <div className="formstyleContent">
                    <div className="row">
                    <div className="form-group col-md-4">
                      <label htmlFor="contatonumero">Contato</label>
                      <input type="text" className="form-control" id="contatonumero" name="contatonumero" placeholder="Digite somente números" riquered />
                  </div>
                  <div  className="form-group col-md-4">
                    <label htmlFor="tipoContato">Tipo Contato</label>
                        <select type="text" className="form-control" id="tipoContato" name="tipoContato"  riquered >
                          <option id="tipoContatoId" value="COMERCIAL">Comercial</option>
                          <option id="tipoContatoId" value="FINANCEIRO">Financeiro</option>
                        </select>
                </div>
                  <div className="form-group col-md-4">
                      <label htmlFor="email">email</label>
                      <input type="text" className="form-control" id="email" name="email" placeholder="Ex: contato@email.com.br" riquered />
                  </div>
                  <div  className="form-group col-md-4">
                    <label htmlFor="tipoEmail">Tipo email</label>
                        <select type="text" className="form-control" id="tipoEmail" name="tipoEmail"  riquered >
                        <option id="tipoEmailId" value="COMERCIAL">Comercial</option>
                          <option id="tipoEmailId" value="COBRANCA">Cobrança</option>
                        </select>
                </div>
            
                </div>
                  </div>
                         
                  <div className="row">
                  <div className=" col-12">
                    <h5 className="mt-3 mb-3 ml-1">Dados Bancarios</h5>
                  </div>
                  </div>
                  <div className="formstyleContent">
                  <div className="row">
                  <div className="form-group col-12 col-sm-12 col-md-3">
                  <label for="browser">Choose your browser from the list:</label>
                  <input list="browsers" name="browser" id="browser"></input>
                   <datalist id="browsers">
                    <option value="1" >Bradesco</option>
                    <option value="2" >Itau</option>
                    <option value="3" >Santander</option>
                    <option value="4" >Caixa economica</option>
                    <option value="5" >Banco do Brasil</option>
                    <option value="6" >Inter</option>
                    <option value="7" >Nubank</option>
                    <option value="8" >Outros...</option>
                  </datalist>
                  </div>
                  <div className="form-group col-12 col-sm-12 col-md-3">
                        <label htmlFor="tipoConta">Tipo Contato</label>
                          <select type="text" className="form-control" id="tipoConta" name="tipoConta"  riquered >
                            <option value="CONTA CORRENTE">Conta Corrente</option>
                            <option value="POUPANÇA">Financeiro</option>
                          </select>
                  </div>
                
                  <div className="form-group col-md-2">
                      <label htmlFor="agencia">Agência</label>
                      <input type="text" className="form-control" id="agencia" name="agencia"  riquered />
                  </div>
                  <div className="form-group col-md-1">
                      <label htmlFor="agenciaDigito">Díg Ag.</label>
                      <input type="text" className="form-control" id="agenciaDigito" name="agenciaDigito" riquered />
                  </div>
                
                    <div className="form-group col-md-2">
                      <label htmlFor="contaCorrente">Nº Conta</label>
                      <input type="text" className="form-control" id="contaCorrente" name="contaCorrente" placeholder="Ex: 75249-3" riquered />
                    </div>
                    <div className="form-group col-md-1">
                      <label htmlFor="contaCorrenteDigito">Dig C.</label>
                      <input type="text" className="form-control" id="contaCorrenteDigito" name="contaCorrenteDigito"  riquered />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="nomeFavorecido">Nome Favorecido</label>
                      <input type="text" className="form-control" id="nomeFavorecido" name="nomeFavorecido"  riquered />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="documentoFavorecido">CPF/CNPJ</label>
                      <input type="text" className="form-control" id="documentoFavorecido" name="documentoFavorecido"  riquered />
                    </div>
                    </div>
                    </div>

                  <div className="row">
                      <div className=" col-12">
                        <h5 className="mt-3 mb-3 ml-1">Serviço SOS</h5>
                      </div>
                  </div>
                    <div className="formstyleContent">
                      <div className="row">
                        <div className="custom-control custom-switch ml-4">
                          <input type="checkbox" className="custom-control-input" id="atendeNoLocal" />
                          <label className="custom-control-label" htmlFor="atendeNoLocal">Atende no local?</label>
                        </div>
                      </div>
                  </div>
                    <div className="card-footer d-flex justify-content-end" style={{width: '100%', backgroundColor: '#ffffff'}}>
                  <Link to="/estabelecimentos" className="btn btn-flat btn-danger  active buttonMecPock zoom" role="button" aria-pressed="true">Cancelar</Link>
                  <button type="button" className="btn btn-flat btn-salvar  buttonMecPock zoom" style={{marginLeft: '1rem'}} 
  onClick={() => {


    function atendenoLocal(){
      let atendeLocal =  document.querySelector("#atendeNoLocal")
     if(atendeLocal.checked){
      return true
     }else{
       return false
      }
     }

    let Atividade =  document.getElementById("atividade").value
    let cnpj =  document.getElementById("cnpj").value
    let complemento =  document.getElementById("complemento").value
    let email =  document.getElementById("email").value
    let fantasia =  document.getElementById("fantasia").value
    let inscricaoEstadual =  document.getElementById("inscricaoEstadual").value
    let contatonumero =  document.getElementById("contatonumero").value
    let numero =  document.getElementById("numero").value
    let razaoSocial =  document.getElementById("razaoSocial").value
    let tipoContato = document.getElementById("tipoContato").value
    let tipoEmail = document.getElementById("tipoEmail").value
    let endereco = document.getElementById("endereco").value
    let bairro = document.getElementById("bairro").value
    let cidade = document.getElementById("cidade").value
    let estado = document.getElementById("estado").value
    let cep = document.getElementById("cep").value
   
    let atenLocal = atendenoLocal()
 
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({"atendeNoLocal": atenLocal,"atividades":[Atividade],"bairro":bairro,"cep":cep,"cidade":cidade,"cnpj":cnpj,"complemento":complemento,"contatos":[{"numero":contatonumero,"tipoContato":tipoContato}],"emails":[{"email":email,"tipoEmail":tipoEmail}],"endereco":endereco,"estado": estado,"fantasia":fantasia,"inscricaoEstadual":inscricaoEstadual,"numero":numero,"razaoSocial":razaoSocial});
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    swal({
      text: "Aguarde..."  
    });
    var url_string_put = window.location.href;
    var url_put = new URL(url_string_put);
    var id_put = url_put.searchParams.get("codigo");

    fetch(`https://api-smartantecipa.herokuapp.com/prestador/edita/${id_put}`, requestOptions)
      .then(response => response.text())
      .then(result =>{
        swal({
          title: "Dados Estabelecimento Alterado",
          text: props.messageSuceess,
          icon: "success"
          
        });
      })
      .catch(error => console.log('error', error));
    
   
  }}
  >Alterar</button>
                </div>
                  
                </section>
              
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /.row */}
    </div>{/* /.container-fluid */}
  </section>
    </div>
    </Fragment>
        )
}