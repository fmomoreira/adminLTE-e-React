import React, { useEffect} from 'react'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

async function getFabricanteEdit(id){
  let response = await fetch(`https://api-smartantecipa.herokuapp.com/fabricantepos/find/${id}`)
  let data =  await response.json()
  document.getElementById("nomeFabricante").value = data.nome
}



export default function EditarFabricante(props) {
  useEffect(() => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("codigo");
    getFabricanteEdit(id)
  });
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
  <section className="content">
    <div className="container-fluid">
      <div className="row">
     
        {/* left column */}
        <div className="col-md-12">
          {/* general form elements */}
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Editar adquirente</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form>
              <div className="card-body">
                <div className="row">
                
                  <div className="form-group col-md-4">
                    <label htmlFor="nome">Nome do adquirente</label>
                    <input type="text" className="form-control " id="nomeFabricante" name="nome" placeholder="Edite o nome do adquirente POS " riquered />
                  </div>
                  
                </div>
                <div className="card-footer d-flex justify-content-end" style={{width: '100%', backgroundColor: '#ffffff'}}>
                <Link to="/adquirente" className="btn btn-flat btn-danger  active" role="button" aria-pressed="true">Voltar</Link>
                <button type="button" className="btn btn-flat btn-primary  buttonMecPock zoom" style={{marginLeft: '1rem'}} 
  onClick={() => {

    var editnamefabricantepos =  document.getElementById("nomeFabricante").value
    var url_string_fabricantepos = window.location.href;
    var urlfabricantepos = new URL(url_string_fabricantepos);
    var idfabricantepos = urlfabricantepos.searchParams.get("codigo");
    console.log(idfabricantepos)
  
   
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({"nome": editnamefabricantepos});
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    swal({
      text: "Aguarde..."  
    });
    fetch("https://api-smartantecipa.herokuapp.com/fabricantepos/edita/"+idfabricantepos, requestOptions)
      .then(response => response.text())
      .then(result =>{
        console.log(result)
        document.querySelector("#nomeFabricante").setAttribute('value', editnamefabricantepos)
        swal({
          title: "Alteração realizada",
          text: "Os dados foram alterado com sucesso!",
          icon: "success"
          
        });
      })
      .catch(error => console.log('error', error));

   
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

</div>

    )
}
