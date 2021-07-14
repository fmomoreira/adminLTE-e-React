import React from 'react'

import FormContrato from '../formulario/contrato/'


export default function AdicionarFabricante(props) {
    return (
     
<div className="content-wrapper">

  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
     
        <div className="col-sm-6">
        </div>
        <div className="col-sm-6">
        
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  <FormContrato 
    messageSuceess="Contrato adicionado com Sucesso"
    tituloAdicionar="Adicionar contrato"
    linkAddVoltar="/contrato"
  />

</div>

    )
}
