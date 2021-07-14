import React,  { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function formContrato(props){


  function ativoAluguelMaquineta(){
    let dadosMaquineta =  document.querySelector("#ativoAluguelMaquineta")
    let precoAluguel = document.querySelector("#precoAluguel")
    let aluguelPromocional = document.querySelector("#aluguelPromocional")
    let validade = document.querySelector("#validadePromoMaquineta")
    if(dadosMaquineta.checked){
      precoAluguel.removeAttribute('disabled')
      aluguelPromocional.removeAttribute('disabled')
      validade.removeAttribute('disabled')
    }else{
      precoAluguel.setAttribute('disabled', true)
      precoAluguel.value="0,00"
      aluguelPromocional.setAttribute('disabled', true)
      aluguelPromocional.value="0,00"
      validade.setAttribute('disabled', true)
      validade.value=""
     }
   }



    return(
<Fragment>
<section className="content">
    <div className="container-fluid">
      
      <div className="row">
     
        {/* left column */}
        <div className="col-md-12">
          {/* general form elements */}
          <div className="card card-title-mecpock">
            <div className="card-header ">
              <div className="row">
              <div className="col-12 d-flex justify-content-between">
              <h3 className="card-title" style={{display:"flex",alignItems:"center"}}>Adicionar Contrato</h3>
              <p  id="valorFinalDestaque"  style={{margin:0, fontSize:22, color:"white", fontWeight:900, }}></p>
              </div>
              </div>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form id="formularioContrato">
              <div className="card-body">
         
              <div className="row">
                    <div className="form-group col-md-6">
                          <label htmlFor="nome">Nome contrato</label>
                          <input type="text" className="form-control" id="nome" name="nome" placeholder="Ex: MecPock slim " />
                    </div>
                    <div  className="form-group col-md-2">
                              <label htmlFor="statusContrato">Status</label>
                              <select type="text" className="form-control" id="statusContrato" name="statusContrato"   >
                                  <option selected>Selecione status...</option>
                                  <option value="ATIVO">Ativo</option>
                                  <option value=" CREDITO">Inativo</option>
                              </select>
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="dataInicioContrato">Data Inicio</label>
                            <input type="date" className="form-control" id="dataInicioContrato" name="dataInicioContrato" placeholder="Ex: MecPock slim " />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="dataTerminoContrato">Data Termino</label>
                            <input type="date" className="form-control" id="dataTerminoContrato" name="dataTerminoContrato" placeholder="Ex: MecPock slim " />
                    </div>
                    <div className="form-group col-md-12 mb-5">
                          <label htmlFor="nome">Descrição do contrato</label>
                          <textarea className="form-control" id="nome" name="nome" placeholder="Ex: MecPock slim " rows="8"></textarea>
                    </div>
                    </div>
                    <div class="row">
                      <div className="form-group col-md-6">
                            <label htmlFor="custoPerdaPOS">Custo Perda POS</label>
                            <input type="text" className="form-control" id="custoPerdaPOS" name="custoPerdaPOS" placeholder="Ex: 879,00" />
                      </div>
                    </div>
                    <div class="row">
                      <div className="custom-control custom-switch ml-4 mt-3">
                            <input type="checkbox" className="custom-control-input" id="comissaoRepresentante" />
                            <label className="custom-control-label" htmlFor="comissaoRepresentante">Comissão representante sob valor da transação?</label>
                      </div>
                    </div>
                   
                    <div className="row mt-5">
                      <div className=" col-12">
                        <h4 className="mt-3 mb-3 ml-1">Aluguel maquineta</h4>
                        <hr></hr>
                      </div>
                      <div className=" col-12 custom-control custom-switch ml-4 mt-3 mb-3">
                            <input type="checkbox" className="custom-control-input" id="ativoAluguelMaquineta" onClick={() => {
                               ativoAluguelMaquineta()
                            }} />
                            <label className="custom-control-label" htmlFor="ativoAluguelMaquineta">Ativo</label>
                      </div>
                      <div className="form-group col-md-4">
                          <label htmlFor="precoAluguel">Aluguel</label>
                          <input type="number" className="form-control" id="precoAluguel" name="precoAluguel" placeholder="0,00" disabled/>
                      </div>
                      <div className="form-group col-md-4">
                          <label htmlFor="aluguelPromocional">Aluguel Maq. Promocional</label>
                          <input type="number" className="form-control" id="aluguelPromocional" name="aluguelPromocional" placeholder="0,00" disabled/>
                      </div>
                      <div className="form-group col-md-4">
                            <label htmlFor="validadePromoMaquineta">Validade Promoção</label>
                            <input type="date" className="form-control" id="validadePromoMaquineta" name="validadePromoMaquineta" disabled/>
                    </div>
                
                  </div>
                  <div className="row mt-5">
                    <div className=" col-12">
                          <h4 className="mt-3 mb-3 ml-1">Débito</h4>
                          <hr></hr>
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaFinalDebito">Taxa %</label>
                            <input type="text" className="form-control" id="taxaFinalDebito" name="taxaFinalDebito" placeholder="0,00" />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="plataformaDebito">Plataforma %</label>
                            <input type="text" className="form-control" id="plataformaDebito" name="plataformaDebito" placeholder="0,00" disabled/>
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaComissaoDebito">Comissão %</label>
                            <input type="text" className="form-control" id="taxaComissaoDebito" name="taxaComissaoDebito" placeholder="0,00" />
                    </div>
                    <div  className="form-group col-md-4">
                              <label htmlFor="diaDisponivelDebito">Dia disponível</label>
                              <select type="text" className="form-control" id="diaDisponivelDebito" name="diaDisponivelDebito"   >
                                  <option selected>Selecione...</option>
                                  <option value="1">1 dia</option>
                                  <option value="15">15 dias</option>
                                  <option value="30">30 dias</option>
                              </select>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className=" col-12">
                          <h4 className="mt-3 mb-3 ml-1">Crédito à vista</h4>
                          <hr></hr>
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaFinalDebito">Taxa %</label>
                            <input type="text" className="form-control" id="taxaFinalDebito" name="taxaFinalDebito" placeholder="0,00" />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="plataformaDebito">Plataforma %</label>
                            <input type="text" className="form-control" id="plataformaDebito" name="plataformaDebito" placeholder="0,00" disabled/>
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaComissaoDebito">Comissão %</label>
                            <input type="text" className="form-control" id="taxaComissaoDebito" name="taxaComissaoDebito" placeholder="0,00" />
                    </div>
                    <div  className="form-group col-md-4">
                              <label htmlFor="diaDisponivelDebito">Dia disponível</label>
                              <select type="text" className="form-control" id="diaDisponivelDebito" name="diaDisponivelDebito"   >
                                  <option selected>Selecione...</option>
                                  <option value="1">1 dia</option>
                                  <option value="15">15 dias</option>
                                  <option value="30">30 dias</option>
                              </select>
                    </div>
                  </div>              

                  <div className="mt-5">
                  <div className=" col-12">
                          <h4 className="mt-3 mb-3 ml-1">Crédito parcelado</h4>
                          <hr></hr>
                    </div>
              
                    <section className="row mt-3" id="parcelasCredito">
                    <div className="form-group col-md-2">
                            <label htmlFor="duasparcelas">Nº Parcela</label>
                            <input type="text" className="form-control" id="duasparcelas" name="taxaFinalDebito"  value="2x" disabled />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaFinalCredito">Taxa %</label>
                            <input type="text" className="form-control" id="taxaFinalCredito" name="taxaFinalCredito" placeholder="0,00" />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="plataformaCredito">Plataforma %</label>
                            <input type="text" className="form-control" id="plataformaCredito" name="plataformaCredito" placeholder="0,00" disabled/>
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaComissaoCredito">Comissão %</label>
                            <input type="text" className="form-control" id="taxaComissaoCredito" name="taxaComissaoCredito" placeholder="0,00" />
                    </div>
                    <div  className="form-group col-md-4">
                     
                              <label htmlFor="diaDisponivelCredito">Dia disponível</label>
                              <select type="text" className="form-control" id="diaDisponivelCredito" name="diaDisponivelCredito"   >
                                  <option selected>Selecione...</option>
                                  <option value="1">1 dia</option>
                                  <option value="30">30 dias</option>
                                  <option value="60">60 dias</option>
                              </select>
                    </div>
                    </section>    
                    <section className="row mt-3" id="parcelasCredito">
                    <div className="form-group col-md-2">
                            <label htmlFor="duasparcelas">Nº Parcela</label>
                            <input type="text" className="form-control" id="duasparcelas" name="taxaFinalDebito"  value="3x" disabled />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaFinalCredito">Taxa %</label>
                            <input type="text" className="form-control" id="taxaFinalCredito" name="taxaFinalCredito" placeholder="0,00" />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="plataformaCredito">Plataforma %</label>
                            <input type="text" className="form-control" id="plataformaCredito" name="plataformaCredito" placeholder="0,00" disabled/>
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaComissaoCredito">Comissão %</label>
                            <input type="text" className="form-control" id="taxaComissaoCredito" name="taxaComissaoCredito" placeholder="0,00" />
                    </div>
                    <div  className="form-group col-md-4">
                     
                              <label htmlFor="diaDisponivelCredito">Dia disponível</label>
                              <select type="text" className="form-control" id="diaDisponivelCredito" name="diaDisponivelCredito"   >
                                  <option selected>Selecione...</option>
                                  <option value="1">1 dia</option>
                                  <option value="45">45 dias</option>
                                  <option value="75">90 dias</option>
                              </select>
                    </div>
                    </section>    
                    <section className="row mt-3" id="parcelasCredito">
                    <div className="form-group col-md-2">
                            <label htmlFor="duasparcelas">Nº Parcela</label>
                            <input type="text" className="form-control" id="duasparcelas" name="taxaFinalDebito"  value="4x" disabled />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaFinalCredito">Taxa %</label>
                            <input type="text" className="form-control" id="taxaFinalCredito" name="taxaFinalCredito" placeholder="0,00" />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="plataformaCredito">Plataforma %</label>
                            <input type="text" className="form-control" id="plataformaCredito" name="plataformaCredito" placeholder="0,00" disabled/>
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaComissaoCredito">Comissão %</label>
                            <input type="text" className="form-control" id="taxaComissaoCredito" name="taxaComissaoCredito" placeholder="0,00" />
                    </div>
                    <div  className="form-group col-md-4">
                     
                              <label htmlFor="diaDisponivelCredito">Dia disponível</label>
                              <select type="text" className="form-control" id="diaDisponivelCredito" name="diaDisponivelCredito"   >
                                  <option selected>Selecione...</option>
                                  <option value="1">1 dia</option>
                                  <option value="15">60 dias</option>
                                  <option value="30">120 dias</option>
                              </select>
                    </div>
                    </section>    
                    <section className="row mt-3" id="parcelasCredito">
                    <div className="form-group col-md-2">
                            <label htmlFor="duasparcelas">Nº Parcela</label>
                            <input type="text" className="form-control" id="duasparcelas" name="taxaFinalDebito"  value="5x" disabled />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaFinalCredito">Taxa %</label>
                            <input type="text" className="form-control" id="taxaFinalCredito" name="taxaFinalCredito" placeholder="0,00" />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="plataformaCredito">Plataforma %</label>
                            <input type="text" className="form-control" id="plataformaCredito" name="plataformaCredito" placeholder="0,00" disabled/>
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaComissaoCredito">Comissão %</label>
                            <input type="text" className="form-control" id="taxaComissaoCredito" name="taxaComissaoCredito" placeholder="0,00" />
                    </div>
                    <div  className="form-group col-md-4">
                     
                              <label htmlFor="diaDisponivelCredito">Dia disponível</label>
                              <select type="text" className="form-control" id="diaDisponivelCredito" name="diaDisponivelCredito"   >
                                  <option selected>Selecione...</option>
                                  <option value="1">1 dia</option>
                                  <option value="75">75 dias</option>
                                  <option value="105">150 dias</option>
                              </select>
                    </div>
                    </section>    
                    <section className="row mt-3" id="parcelasCredito">
                    <div className="form-group col-md-2">
                            <label htmlFor="duasparcelas">Nº Parcela</label>
                            <input type="text" className="form-control" id="duasparcelas" name="taxaFinalDebito"  value="6x" disabled />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaFinalCredito">Taxa %</label>
                            <input type="text" className="form-control" id="taxaFinalCredito" name="taxaFinalCredito" placeholder="0,00" />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="plataformaCredito">Plataforma %</label>
                            <input type="text" className="form-control" id="plataformaCredito" name="plataformaCredito" placeholder="0,00" disabled/>
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaComissaoCredito">Comissão %</label>
                            <input type="text" className="form-control" id="taxaComissaoCredito" name="taxaComissaoCredito" placeholder="0,00" />
                    </div>
                    <div  className="form-group col-md-4">
                     
                              <label htmlFor="diaDisponivelCredito">Dia disponível</label>
                              <select type="text" className="form-control" id="diaDisponivelCredito" name="diaDisponivelCredito"   >
                                  <option selected>Selecione...</option>
                                  <option value="1">1 dia</option>
                                  <option value="90">90 dias</option>
                                  <option value="120">180 dias</option>
                              </select>
                    </div>
                    </section>    
                    <section className="row mt-3" id="parcelasCredito">
                    <div className="form-group col-md-2">
                            <label htmlFor="duasparcelas">Nº Parcela</label>
                            <input type="text" className="form-control" id="duasparcelas" name="taxaFinalDebito"  value="7x" disabled />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaFinalCredito">Taxa %</label>
                            <input type="text" className="form-control" id="taxaFinalCredito" name="taxaFinalCredito" placeholder="0,00" />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="plataformaCredito">Plataforma %</label>
                            <input type="text" className="form-control" id="plataformaCredito" name="plataformaCredito" placeholder="0,00" disabled/>
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaComissaoCredito">Comissão %</label>
                            <input type="text" className="form-control" id="taxaComissaoCredito" name="taxaComissaoCredito" placeholder="0,00" />
                    </div>
                    <div  className="form-group col-md-4">
                     
                              <label htmlFor="diaDisponivelCredito">Dia disponível</label>
                              <select type="text" className="form-control" id="diaDisponivelCredito" name="diaDisponivelCredito"   >
                                  <option selected>Selecione...</option>
                                  <option value="1">1 dia</option>
                                  <option value="105">105 dias</option>
                                  <option value="210">210 dias</option>
                              </select>
                    </div>
                    </section>    
                    <section className="row mt-3" id="parcelasCredito">
                    <div className="form-group col-md-2">
                            <label htmlFor="duasparcelas">Nº Parcela</label>
                            <input type="text" className="form-control" id="duasparcelas" name="taxaFinalDebito"  value="8x" disabled />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaFinalCredito">Taxa %</label>
                            <input type="text" className="form-control" id="taxaFinalCredito" name="taxaFinalCredito" placeholder="0,00" />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="plataformaCredito">Plataforma %</label>
                            <input type="text" className="form-control" id="plataformaCredito" name="plataformaCredito" placeholder="0,00" disabled/>
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaComissaoCredito">Comissão %</label>
                            <input type="text" className="form-control" id="taxaComissaoCredito" name="taxaComissaoCredito" placeholder="0,00" />
                    </div>
                    <div  className="form-group col-md-4">
                     
                              <label htmlFor="diaDisponivelCredito">Dia disponível</label>
                              <select type="text" className="form-control" id="diaDisponivelCredito" name="diaDisponivelCredito"   >
                                  <option selected>Selecione...</option>
                                  <option value="1">1 dia</option>
                                  <option value="120">120 dias</option>
                                  <option value="240">240 dias</option>
                              </select>
                    </div>
                    </section>    
                    <section className="row mt-3" id="parcelasCredito">
                    <div className="form-group col-md-2">
                            <label htmlFor="duasparcelas">Nº Parcela</label>
                            <input type="text" className="form-control" id="duasparcelas" name="taxaFinalDebito"  value="9x" disabled />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaFinalCredito">Taxa %</label>
                            <input type="text" className="form-control" id="taxaFinalCredito" name="taxaFinalCredito" placeholder="0,00" />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="plataformaCredito">Plataforma %</label>
                            <input type="text" className="form-control" id="plataformaCredito" name="plataformaCredito" placeholder="0,00" disabled/>
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaComissaoCredito">Comissão %</label>
                            <input type="text" className="form-control" id="taxaComissaoCredito" name="taxaComissaoCredito" placeholder="0,00" />
                    </div>
                    <div  className="form-group col-md-4">
                     
                              <label htmlFor="diaDisponivelCredito">Dia disponível</label>
                              <select type="text" className="form-control" id="diaDisponivelCredito" name="diaDisponivelCredito"   >
                                  <option selected>Selecione...</option>
                                  <option value="1">1 dia</option>
                                  <option value="135">135 dias</option>
                                  <option value="270">270 dias</option>
                              </select>
                    </div>
                    </section>    
                    <section className="row mt-3" id="parcelasCredito">
                    <div className="form-group col-md-2">
                            <label htmlFor="duasparcelas">Nº Parcela</label>
                            <input type="text" className="form-control" id="duasparcelas" name="taxaFinalDebito"  value="10x" disabled />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaFinalCredito">Taxa %</label>
                            <input type="text" className="form-control" id="taxaFinalCredito" name="taxaFinalCredito" placeholder="0,00" />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="plataformaCredito">Plataforma %</label>
                            <input type="text" className="form-control" id="plataformaCredito" name="plataformaCredito" placeholder="0,00" disabled/>
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaComissaoCredito">Comissão %</label>
                            <input type="text" className="form-control" id="taxaComissaoCredito" name="taxaComissaoCredito" placeholder="0,00" />
                    </div>
                    <div  className="form-group col-md-4">
                     
                              <label htmlFor="diaDisponivelCredito">Dia disponível</label>
                              <select type="text" className="form-control" id="diaDisponivelCredito" name="diaDisponivelCredito"   >
                                  <option selected>Selecione...</option>
                                  <option value="1">1 dia</option>
                                  <option value="15">150 dias</option>
                                  <option value="300">300 dias</option>
                              </select>
                    </div>
                    </section>    
                    <section className="row mt-3" id="parcelasCredito">
                    <div className="form-group col-md-2">
                            <label htmlFor="duasparcelas">Nº Parcela</label>
                            <input type="text" className="form-control" id="duasparcelas" name="taxaFinalDebito"  value="11x" disabled />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaFinalCredito">Taxa %</label>
                            <input type="text" className="form-control" id="taxaFinalCredito" name="taxaFinalCredito" placeholder="0,00" />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="plataformaCredito">Plataforma %</label>
                            <input type="text" className="form-control" id="plataformaCredito" name="plataformaCredito" placeholder="0,00" disabled/>
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaComissaoCredito">Comissão %</label>
                            <input type="text" className="form-control" id="taxaComissaoCredito" name="taxaComissaoCredito" placeholder="0,00" />
                    </div>
                    <div  className="form-group col-md-4">
                     
                              <label htmlFor="diaDisponivelCredito">Dia disponível</label>
                              <select type="text" className="form-control" id="diaDisponivelCredito" name="diaDisponivelCredito"   >
                                  <option selected>Selecione...</option>
                                  <option value="1">1 dia</option>
                                  <option value="165">165 dias</option>
                                  <option value="330">330 dias</option>
                              </select>
                    </div>
                    </section>    
                    <section className="row mt-3" id="parcelasCredito">
                    <div className="form-group col-md-2">
                            <label htmlFor="dozeparcelas">Nº Parcela</label>
                            <input type="text" className="form-control" id="dozeparcelas" name="dozeparcelas"  value="12x" disabled />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaFinalCredito">Taxa %</label>
                            <input type="text" className="form-control" id="taxaFinalCredito" name="taxaFinalCredito" placeholder="0,00" />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="plataformaCredito">Plataforma %</label>
                            <input type="text" className="form-control" id="plataformaCredito" name="plataformaCredito" placeholder="0,00" disabled/>
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaComissaoCredito">Comissão %</label>
                            <input type="text" className="form-control" id="taxaComissaoCredito" name="taxaComissaoCredito" placeholder="0,00" />
                    </div>
                    <div  className="form-group col-md-4">
                     
                              <label htmlFor="diaDisponivelCredito">Dia disponível</label>
                              <select type="text" className="form-control" id="diaDisponivelCredito" name="diaDisponivelCredito"   >
                                  <option selected>Selecione...</option>
                                  <option value="1">1 dia</option>
                                  <option value="15">180 dias</option>
                                  <option value="30">360 dias</option>
                              </select>
                    </div>
                    </section>    
                    <section className="row mt-3" id="parcelasCredito">
                    <div className="form-group col-md-2">
                            <label htmlFor="dozeparcelas">Nº Parcela</label>
                            <input type="text" className="form-control" id="dozeparcelas" name="dozeparcelas"  value="13x" disabled />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaFinalCredito">Taxa %</label>
                            <input type="text" className="form-control" id="taxaFinalCredito" name="taxaFinalCredito" placeholder="0,00" />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="plataformaCredito">Plataforma %</label>
                            <input type="text" className="form-control" id="plataformaCredito" name="plataformaCredito" placeholder="0,00" disabled/>
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaComissaoCredito">Comissão %</label>
                            <input type="text" className="form-control" id="taxaComissaoCredito" name="taxaComissaoCredito" placeholder="0,00" />
                    </div>
                    <div  className="form-group col-md-4">
                     
                              <label htmlFor="diaDisponivelCredito">Dia disponível</label>
                              <select type="text" className="form-control" id="diaDisponivelCredito" name="diaDisponivelCredito"   >
                                  <option selected>Selecione...</option>
                                  <option value="1">1 dia</option>
                                  <option value="15">195 dias</option>
                                  <option value="390">390 dias</option>
                              </select>
                    </div>
                    </section> 
                    <section className="row mt-3" id="parcelasCredito">
                    <div className="form-group col-md-2">
                            <label htmlFor="dozeparcelas">Nº Parcela</label>
                            <input type="text" className="form-control" id="dozeparcelas" name="dozeparcelas"  value="14x" disabled />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaFinalCredito">Taxa %</label>
                            <input type="text" className="form-control" id="taxaFinalCredito" name="taxaFinalCredito" placeholder="0,00" />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="plataformaCredito">Plataforma %</label>
                            <input type="text" className="form-control" id="plataformaCredito" name="plataformaCredito" placeholder="0,00" disabled/>
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaComissaoCredito">Comissão %</label>
                            <input type="text" className="form-control" id="taxaComissaoCredito" name="taxaComissaoCredito" placeholder="0,00" />
                    </div>
                    <div  className="form-group col-md-4">
                     
                              <label htmlFor="diaDisponivelCredito">Dia disponível</label>
                              <select type="text" className="form-control" id="diaDisponivelCredito" name="diaDisponivelCredito"   >
                                  <option selected>Selecione...</option>
                                  <option value="1">1 dia</option>
                                  <option value="210">210 dias</option>
                                  <option value="420">420 dias</option>
                              </select>
                    </div>
                    </section> 
                    <section className="row mt-3" id="parcelasCredito">
                    <div className="form-group col-md-2">
                            <label htmlFor="dozeparcelas">Nº Parcela</label>
                            <input type="text" className="form-control" id="dozeparcelas" name="dozeparcelas"  value="15x" disabled />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaFinalCredito">Taxa %</label>
                            <input type="text" className="form-control" id="taxaFinalCredito" name="taxaFinalCredito" placeholder="0,00" />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="plataformaCredito">Plataforma %</label>
                            <input type="text" className="form-control" id="plataformaCredito" name="plataformaCredito" placeholder="0,00" disabled/>
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaComissaoCredito">Comissão %</label>
                            <input type="text" className="form-control" id="taxaComissaoCredito" name="taxaComissaoCredito" placeholder="0,00" />
                    </div>
                    <div  className="form-group col-md-4">
                     
                              <label htmlFor="diaDisponivelCredito">Dia disponível</label>
                              <select type="text" className="form-control" id="diaDisponivelCredito" name="diaDisponivelCredito"   >
                                  <option selected>Selecione...</option>
                                  <option value="1">1 dia</option>
                                  <option value="15">225 dias</option>
                                  <option value="450">450 dias</option>
                              </select>
                    </div>
                    </section> 
                    <section className="row mt-3" id="parcelasCredito">
                    <div className="form-group col-md-2">
                            <label htmlFor="dozeparcelas">Nº Parcela</label>
                            <input type="text" className="form-control" id="dozeparcelas" name="dozeparcelas"  value="16x" disabled />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaFinalCredito">Taxa %</label>
                            <input type="text" className="form-control" id="taxaFinalCredito" name="taxaFinalCredito" placeholder="0,00" />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="plataformaCredito">Plataforma %</label>
                            <input type="text" className="form-control" id="plataformaCredito" name="plataformaCredito" placeholder="0,00" disabled/>
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaComissaoCredito">Comissão %</label>
                            <input type="text" className="form-control" id="taxaComissaoCredito" name="taxaComissaoCredito" placeholder="0,00" />
                    </div>
                    <div  className="form-group col-md-4">
                     
                              <label htmlFor="diaDisponivelCredito">Dia disponível</label>
                              <select type="text" className="form-control" id="diaDisponivelCredito" name="diaDisponivelCredito"   >
                                  <option selected>Selecione...</option>
                                  <option value="1">1 dia</option>
                                  <option value="15">240 dias</option>
                                  <option value="30">480 dias</option>
                              </select>
                    </div>
                    </section> 
                    <section className="row mt-3" id="parcelasCredito">
                    <div className="form-group col-md-2">
                            <label htmlFor="dozeparcelas">Nº Parcela</label>
                            <input type="text" className="form-control" id="dozeparcelas" name="dozeparcelas"  value="17x" disabled />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaFinalCredito">Taxa %</label>
                            <input type="text" className="form-control" id="taxaFinalCredito" name="taxaFinalCredito" placeholder="0,00" />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="plataformaCredito">Plataforma %</label>
                            <input type="text" className="form-control" id="plataformaCredito" name="plataformaCredito" placeholder="0,00" disabled/>
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaComissaoCredito">Comissão %</label>
                            <input type="text" className="form-control" id="taxaComissaoCredito" name="taxaComissaoCredito" placeholder="0,00" />
                    </div>
                    <div  className="form-group col-md-4">
                     
                              <label htmlFor="diaDisponivelCredito">Dia disponível</label>
                              <select type="text" className="form-control" id="diaDisponivelCredito" name="diaDisponivelCredito"   >
                                  <option selected>Selecione...</option>
                                  <option value="1">1 dia</option>
                                  <option value="255">255 dias</option>
                                  <option value="510">510 dias</option>
                              </select>
                    </div>
                    </section> 
                    <section className="row mt-3" id="parcelasCredito">
                    <div className="form-group col-md-2">
                            <label htmlFor="dozeparcelas">Nº Parcela</label>
                            <input type="text" className="form-control" id="dozeparcelas" name="dozeparcelas"  value="18x" disabled />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaFinalCredito">Taxa %</label>
                            <input type="text" className="form-control" id="taxaFinalCredito" name="taxaFinalCredito" placeholder="0,00" />
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="plataformaCredito">Plataforma %</label>
                            <input type="text" className="form-control" id="plataformaCredito" name="plataformaCredito" placeholder="0,00" disabled/>
                    </div>
                    <div className="form-group col-md-2">
                            <label htmlFor="taxaComissaoCredito">Comissão %</label>
                            <input type="text" className="form-control" id="taxaComissaoCredito" name="taxaComissaoCredito" placeholder="0,00" />
                    </div>
                    <div  className="form-group col-md-4">
                     
                              <label htmlFor="diaDisponivelCredito">Dia disponível</label>
                              <select type="text" className="form-control" id="diaDisponivelCredito" name="diaDisponivelCredito"   >
                                  <option selected>Selecione...</option>
                                  <option value="1">1 dia</option>
                                  <option value="2770">270 dias</option>
                                  <option value="540">540 dias</option>
                              </select>
                    </div>
                    </section> 
                  </div>
                 



             
                <div className="card-footer d-flex justify-content-end" style={{width: '100%', backgroundColor: '#ffffff'}}>
                <Link to="/contratos" className="btn btn-flat btn-danger  active buttonMecPock zoom" role="button" aria-pressed="true">Voltar</Link>
                <button type="button" className="btn btn-flat btn-salvar  buttonMecPock zoom" style={{marginLeft: '1rem'}} 
                onClick={() => {
                }}
                >Salvar </button>
                </div>
              </div>
              {/* /.card-body */}
            </form>
          </div>
        </div>
      </div>
      {/* /.row */}
    </div>{/* /.container-fluid */}
    
  </section>
 
  </Fragment>
    )
}

