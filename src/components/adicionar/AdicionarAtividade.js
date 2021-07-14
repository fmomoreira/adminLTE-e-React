import React from 'react'

import FormAtividade from '../formulario/atividade/'


export default function AdicionarAtividade(props) {
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
 <FormAtividade
   messageSuceess="Atividade adicionada com Sucesso"
   tituloAdicionar="Adicionar atividade"
   linkAddVoltar="/atividade"
 />




</div>

    )
}
