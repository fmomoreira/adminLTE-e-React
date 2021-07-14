import React from 'react'
import FormPos from '../formulario/pos/'


export default function AdicionarPos(props) {
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
  <FormPos
      messageSuceess="Pos adicionado com Sucesso"
      tituloAdicionar="Adicionar novo POS"
      linkAddVoltar="/adicionarpos"
 />

</div>

    )
}
