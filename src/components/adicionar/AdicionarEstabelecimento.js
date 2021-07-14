import React from 'react';

import FormPrestador from '../formulario/prestador/'



export default function AdicionarEstabelecimento(props) {


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
  </div>
</section>
  <FormPrestador
  messageError="Contate o Suporte"
  messageSuceess="Atividade adicionada com Sucesso"
   tituloAdicionar="Adicionar Estabelecimeto"
   linkAddVoltar="/atividade"
  
   />
</div>

    )
}
