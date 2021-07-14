import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cep from "cep-promise";
import $ from "jquery";
import { Formik, Field, Form } from "formik";
import schema from "../../schema/schemaPrestador";

async function getAtividadeEstabelecimentos() {
  let response = await fetch("https://api-smartantecipa.herokuapp.com/atividade");
  let data = await response.json();
  return data;
}

const FormPrestador = (props) => {
  const [AtividadeEstabelecimentos, setAtividadeEstabelecimentos] = useState(
    []
  );
  useEffect(() => {
    getAtividadeEstabelecimentos().then((data) => {
      setAtividadeEstabelecimentos(data);
    });
  }, []);
  let arrayContato = [];
  let arrayEmail = [];
  function inserirEmail() {
    let inicioContagem = 0;
    let tamanho = arrayEmail.length;
    let elemento;
    if (tamanho === 0) {
      elemento += "<tr>";
      elemento += "</tr>";
    } else {
      while (inicioContagem < tamanho) {
        elemento += "<tr>";
        elemento += "<td>" + arrayEmail[inicioContagem].email + "</td>";
        elemento += "<td>" + arrayEmail[inicioContagem].tipoEmail + "</td>";
        elemento += "</tr>";

        inicioContagem += 1;
      }
    }
    $("tbody#listEmails").html(elemento);
  }
  function inserirTelefones() {
    let inicioContagem = 0;
    let tamanho = arrayContato.length;
    let elemento;
    if (tamanho === 0) {
      elemento += "<tr>";
      elemento += "</tr>";
    } else {
      while (inicioContagem < tamanho) {
        elemento += "<tr>";
        elemento += "<td>" + arrayContato[inicioContagem].numero + "</td>";
        elemento += "<td>" + arrayContato[inicioContagem].tipoContato + "</td>";
        elemento += "</tr>";
        inicioContagem += 1;
      }
    }
    $("tbody#contatos").html(elemento);
  }

  function onSubmit() {
    alert("Cadastro realizado");
  }

  return (
    <Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-title-mecpock">
                <div className="card-header">
                  <h4 className="card-title">{props.tituloAdicionar}</h4>
                </div>

                <Formik
                  validationSchema={schema}
                  onSubmit={onSubmit}
                  validateOnMount
                  initialValues={{
                    cnpj: "",
                    razaoSocial: "",
                    contrato: "",
                    cep: "",
                    endereco: "",
                    numero: "",
                    complemento: "",
                    bairro: "",
                    cidade: "",
                    estado: "",
                    atividade: "",
                    nomeFavorecido: "",
                    documentoFavorecido: "",
                    agencia: "",
                    banco: "",
                    contaCorrente: "",
                    tipoConta: "",
                    emailConfigAdquirente: "",
                    tokenConfigAdquirente: "",
                    nomeResponsavel: "",
                    sobrenomeResponsavel: "",
                    cpfResponsavel: "",
                    rgResponsavel: "",
                    dataNascimentoresponsavel: "",
                    emailResponsavel: "",
                    telefoneResponsavel: "",
                    telefoneResponsavel2: "",
                    cepResponsavel: "",
                    enderecoResponsavel: "",
                    numeroResponsavel: "",
                    bairroResponsavel: "",
                    cidadeResponsavel: "",
                    estadoResponsavel: "",
                  }}
                  render={({ values, errors, touched }) => (
                    <Form id="newEstabelecimento">
                      <div className="card-body">
                        <section id="dadosgerais" className="visible">
                          <div className="row">
                            <div className="col-6">
                              <h5 className="mt-3">Dados da Empresa</h5>
                            </div>
                          </div>
                          <hr></hr>

                          <div className="row">
                            <div className="form-group col-md-3">
                              <label htmlFor="cnpj">CPF/CNPJ</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="cnpj"
                                name="cnpj"
                                placeholder="Digite o cpf ou cnpj"
                              />
                              {errors.cnpj && touched.cnpj && (
                                <div class="campo-obrigatorio">
                                  {errors.cnpj}
                                </div>
                              )}
                            </div>
                            <div className="form-group col-md-3">
                              <label htmlFor="razaoSocial">Nome</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="razaoSocial"
                                name="razaoSocial"
                                placeholder="Digite o nome da empresa"
                              />
                              {errors.razaoSocial && touched.razaoSocial && (
                                <div class="campo-obrigatorio">
                                  {errors.razaoSocial}
                                </div>
                              )}
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="atividade">
                                Selecione um contrato
                              </label>
                              <Field
                                type="text"
                                className="form-control"
                                id="contrato"
                                name="contrato"
                                as="select"
                              >
                                <option value="" selected>
                                  Selecione um contrato...
                                </option>
                                {AtividadeEstabelecimentos.map(
                                  (AtividadeEstabelecimento) => (
                                    <option
                                      value={AtividadeEstabelecimento.codigo}
                                    >
                                      {AtividadeEstabelecimento.descricao}
                                    </option>
                                  )
                                )}
                              </Field>
                              {errors.contrato && touched.contrato && (
                                <div class="campo-obrigatorio">
                                  {errors.contrato}
                                </div>
                              )}
                            </div>

                            <div className="col-md-12">
                              <div className="row">
                                <div className="col-12 col-sm-12 col-md-12">
                                  <div className="row">
                                    <div className="form-group col-12 col-sm-12 col-md-4">
                                      <label>Email</label>
                                      <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        name="email"
                                      />
                                      <p
                                        hidden
                                        style={{
                                          backgroundColor: "#ff4400af",
                                          color: "#ffffff",
                                          fontSize: 14,
                                          padding: "15px 42px",
                                          position: "absolute",
                                          top: 5,
                                          left: 5,
                                          zIndex: 9,
                                          borderRadius: 5,
                                        }}
                                        id="menssagemErrorEmail"
                                      >
                                        Preenchimento do email é obrigatório!
                                      </p>
                                    </div>
                                    <div className="form-group col-12 col-sm-12 col-md-4">
                                      <label htmlFor="tipoemail">
                                        Tipo Email
                                      </label>
                                      <select
                                        className="form-control"
                                        id="tipoemail"
                                      >
                                        <option value="COMERCIAL">
                                          Comercial
                                        </option>
                                        <option value="COBRANCA">
                                          Cobraça
                                        </option>
                                      </select>
                                    </div>

                                    <div className="col-12 col-sm-12 col-md-2 d-flex align-items-center">
                                      <button
                                        type="button"
                                        className="btn btn-primary col-12 col-sm-12 col-md-12 mt-3"
                                        onClick={() => {
                                          let email =
                                            document.getElementById(
                                              "email"
                                            ).value;
                                          let tpemail =
                                            document.getElementById(
                                              "tipoemail"
                                            ).value;
                                          if (email === "") {
                                            document.getElementById(
                                              "menssagemErrorEmail"
                                            ).hidden = false;
                                            document
                                              .getElementById(
                                                "menssagemErrorEmail"
                                              )
                                              .setAttribute(
                                                "class",
                                                "animated fadeInLeft"
                                              );
                                            setTimeout(function () {
                                              //animate backOutUp
                                              document
                                                .getElementById(
                                                  "menssagemErrorEmail"
                                                )
                                                .setAttribute(
                                                  "class",
                                                  "animated fadeOutLeft"
                                                );
                                              setTimeout(function () {
                                                document.getElementById(
                                                  "menssagemErrorEmail"
                                                ).hidden = true;
                                                document
                                                  .getElementById(
                                                    "menssagemErrorEmail"
                                                  )
                                                  .removeAttribute("class");
                                              }, 250);
                                            }, 3500);
                                          } else {
                                            arrayEmail.push({
                                              email: email,
                                              tipoEmail: tpemail,
                                            });
                                            inserirEmail();
                                            console.log(arrayEmail);
                                          }
                                        }}
                                      >
                                        Adicionar
                                      </button>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-2 d-flex align-items-center">
                                      <button
                                        type="button"
                                        className="btn btn-danger col-12 col-sm-12 col-md-12 mt-3 "
                                        onClick={() => {
                                          arrayEmail.pop();
                                          inserirEmail();
                                          console.log(arrayEmail);
                                        }}
                                      >
                                        Remover
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 mt-3">
                                  <div className="row">
                                    <div
                                      className="col-12"
                                      id="tipo"
                                      style={{ overflow: "auto", height: 100 }}
                                    >
                                      <table className="table table-bordered table-striped">
                                        <thead>
                                          <tr>
                                            <th>Email</th>
                                            <th>Tipo email</th>
                                          </tr>
                                        </thead>
                                        <tbody id="listEmails"></tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-12 mt-4">
                              <div className="row">
                                <div className="col-12 col-sm-12 col-md-12">
                                  <div className="row">
                                    <div className="form-group col-12 col-sm-12 col-md-4">
                                      <label htmlFor="contatonumero">
                                        Contato
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="contatonumero"
                                        name="contatonumero"
                                        placeholder="Digite somente números"
                                      />
                                      <p
                                        hidden
                                        style={{
                                          backgroundColor: "#ff4400af",
                                          color: "#ffffff",
                                          fontSize: 14,
                                          padding: "15px 42px",
                                          position: "absolute",
                                          top: 5,
                                          left: 5,
                                          zIndex: 9,
                                          borderRadius: 5,
                                        }}
                                        id="menssagemErrorContato"
                                      >
                                        Cadastre um numero para contato para
                                        continuar!
                                      </p>
                                    </div>
                                    <div className="form-group col-12 col-sm-12 col-md-4">
                                      <label htmlFor="tipoContato">
                                        Tipo Contato
                                      </label>
                                      <select
                                        type="text"
                                        className="form-control"
                                        id="tipoContato"
                                        name="tipoContato"
                                      >
                                        <option value="COMERCIAL">
                                          Comercial
                                        </option>
                                        <option value="FINANCEIRO">
                                          Financeiro
                                        </option>
                                      </select>
                                    </div>

                                    <div className="col-12 col-sm-12 col-md-2 d-flex align-items-center">
                                      <button
                                        type="button"
                                        className="btn btn-primary col-12 col-sm-12 col-md-12 mt-3"
                                        onClick={() => {
                                          let telefoneContato =
                                            document.getElementById(
                                              "contatonumero"
                                            ).value;
                                          let tpContato =
                                            document.getElementById(
                                              "tipoContato"
                                            ).value;
                                          if (telefoneContato === "") {
                                            document.getElementById(
                                              "menssagemErrorContato"
                                            ).hidden = false;
                                            document
                                              .getElementById(
                                                "menssagemErrorContato"
                                              )
                                              .setAttribute(
                                                "class",
                                                "animated fadeInLeft"
                                              );

                                            setTimeout(function () {
                                              //animate backOutUp
                                              document
                                                .getElementById(
                                                  "menssagemErrorContato"
                                                )
                                                .setAttribute(
                                                  "class",
                                                  "animated fadeOutLeft"
                                                );
                                              setTimeout(function () {
                                                document.getElementById(
                                                  "menssagemErrorContato"
                                                ).hidden = true;
                                                document
                                                  .getElementById(
                                                    "menssagemErrorContato"
                                                  )
                                                  .removeAttribute("class");
                                              }, 250);
                                            }, 3500);
                                          } else {
                                            arrayContato.push({
                                              numero: telefoneContato,
                                              tipoContato: tpContato,
                                            });

                                            inserirTelefones();
                                            console.log(arrayContato);
                                          }
                                        }}
                                      >
                                        Adicionar
                                      </button>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-2 d-flex align-items-center">
                                      <button
                                        type="button"
                                        className="btn btn-danger col-12 col-sm-12 col-md-12 mt-3 "
                                        onClick={() => {
                                          arrayContato.pop();
                                          inserirTelefones();
                                          console.log(arrayContato);
                                        }}
                                      >
                                        Remover
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 mt-3 mb-4">
                                  <div className="row">
                                    <div
                                      className="col-12"
                                      id="tipo"
                                      style={{ overflow: "auto", height: 100 }}
                                    >
                                      <table className="table table-bordered table-striped">
                                        <thead>
                                          <tr>
                                            <th>Contato</th>
                                            <th>Tipo Contato</th>
                                          </tr>
                                        </thead>
                                        <tbody id="contatos"></tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="form-group col-md-12">
                              <label htmlFor="atividade">
                                Selecione a atividade do estabelecimento*
                              </label>
                              <Field
                                type="text"
                                className="form-control"
                                id="atividade"
                                name="atividade"
                                as="select"
                              >
                                <option value="" selected>
                                  Selecione uma atividade
                                </option>
                                {AtividadeEstabelecimentos.map(
                                  (AtividadeEstabelecimento) => (
                                    <option
                                      value={AtividadeEstabelecimento.codigo}
                                    >
                                      {AtividadeEstabelecimento.descricao}
                                    </option>
                                  )
                                )}
                              </Field>
                              {errors.atividade && touched.atividade && (
                                <div class="campo-obrigatorio">
                                  {errors.atividade}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="row">
                            <div className="form-group col-md-2">
                              <label htmlFor="cep">Cep</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="cep"
                                name="cep"
                                placeholder="Ex:12951-300"
                                onKeyUp={() => {
                                  let cepSearch =
                                    document.getElementById("cep").value;
                                  if (cepSearch.length > 7) {
                                    let cepPrestador = cepSearch.replace(
                                      "-",
                                      ""
                                    );
                                    cep(cepPrestador).then((response) => {
                                      document.getElementById(
                                        "endereco"
                                      ).value = response.street;
                                      document.getElementById("bairro").value =
                                        response.neighborhood;
                                      document.getElementById("cidade").value =
                                        response.city;
                                      document.getElementById("estado").value =
                                        response.state;
                                    });
                                  }
                                }}
                              ></Field>
                              {errors.cep && touched.cep && (
                                <div class="campo-obrigatorio">
                                  {errors.cep}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="row">
                            <div className="form-group col-md-8">
                              <label htmlFor="endereco">Logradouro</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="endereco"
                                name="endereco"
                                placeholder="Digite somente números"
                              ></Field>
                              {errors.endereco && touched.endereco && (
                                <div class="campo-obrigatorio">
                                  {errors.endereco}
                                </div>
                              )}
                            </div>
                            <div className="form-group col-md-4">
                              <label htmlFor="numero">Numero</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="numero"
                                name="numero"
                                placeholder="Digite somente números"
                              ></Field>
                              {errors.numero && touched.numero && (
                                <div class="campo-obrigatorio">
                                  {errors.numero}
                                </div>
                              )}
                            </div>
                            <div className="form-group col-md-4">
                              <label htmlFor="complemento">Complemento</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="complemento"
                                name="complemento"
                                placeholder="Ex: Galpão amarelo"
                              ></Field>
                              {errors.complemento && touched.complemento && (
                                <div class="campo-obrigatorio">
                                  {errors.complemento}
                                </div>
                              )}
                            </div>
                            <div className="form-group col-md-4">
                              <label htmlFor="bairro">Bairro</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="bairro"
                                name="bairro"
                                placeholder="Digite somente números"
                              ></Field>
                              {errors.bairro && touched.bairro && (
                                <div class="campo-obrigatorio">
                                  {errors.bairro}
                                </div>
                              )}
                            </div>

                            <div className="form-group col-md-4">
                              <label htmlFor="cidade">Cidade</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="cidade"
                                name="cidade"
                                placeholder="Digite somente números"
                              ></Field>
                              {errors.cidade && touched.cidade && (
                                <div class="campo-obrigatorio">
                                  {errors.cidade}
                                </div>
                              )}
                            </div>
                            <div className="form-group col-md-4">
                              <label htmlFor="estado">Estado</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="estado"
                                name="estado"
                                placeholder="Digite somente números"
                              ></Field>
                              {errors.estado && touched.estado && (
                                <div class="campo-obrigatorio">
                                  {errors.estado}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="row">
                            <div className="custom-control custom-switch ml-4">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="empresaAtivo"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="empresaAtivo"
                              >
                                Ativo
                              </label>
                            </div>
                          </div>

                          <div className="row mt-5">
                            <div
                              className="col-12"
                              style={{ backgroundColor: "#f6f6f6" }}
                            >
                              <h5 className="mt-3 mb-3">
                                Configurações Bancárias
                              </h5>
                            </div>
                          </div>
                          <hr></hr>
                          <div className="row mt-5">
                            <div className="form-group col-md-6">
                              <label htmlFor="nomeFavorecido">Titular*</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="nomeFavorecido"
                                name="nomeFavorecido"
                              ></Field>
                              {errors.nomeFavorecido &&
                                touched.nomeFavorecido && (
                                  <div class="campo-obrigatorio">
                                    {errors.nomeFavorecido}
                                  </div>
                                )}
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="documentoFavorecido">
                                CPF/CNPJ
                              </label>
                              <Field
                                type="text"
                                className="form-control"
                                id="documentoFavorecido"
                                name="documentoFavorecido"
                              ></Field>
                              {errors.documentoFavorecido &&
                                touched.documentoFavorecido && (
                                  <div class="campo-obrigatorio">
                                    {errors.documentoFavorecido}
                                  </div>
                                )}
                            </div>

                            <div className="form-group col-md-3">
                              <label htmlFor="banco">Banco</label>
                              <Field
                                className="form-control"
                                id="banco"
                                name="banco"
                                as="select"
                              >
                                <option value="">- Selecione um banco</option>
                                <option value="182">
                                  1 - Banco do Brasil S.A.
                                </option>
                                <option value="98">
                                  3 - Banco da Amazônia S.A.
                                </option>
                                <option value="108">
                                  4 - Banco do Nordeste do Brasil S.A.
                                </option>
                                <option value="4">7 - BNDES</option>
                                <option value="135">
                                  10 - Credicoamo Crédito Rural Cooperativa
                                </option>
                                <option value="168">
                                  11 - SC Credit Suisse HG
                                </option>
                                <option value="158">
                                  14 - Natixis Brasil S.A.
                                </option>
                                <option value="171">15 - SC UBS Brasil</option>
                                <option value="122">
                                  16 - CC Sicoob Creditran
                                </option>
                                <option value="5">
                                  17 - BNY Mellon Banco S.A.
                                </option>
                                <option value="92">
                                  18 - Banco Tricury S.A.
                                </option>
                                <option value="109">
                                  21 - Banestes S.A. Banco do Estado do Espírito
                                  Santo
                                </option>
                                <option value="23">
                                  24 - Banco Bandepe S.A.
                                </option>
                                <option value="13">25 - Banco Alfa S.A.</option>
                                <option value="60">
                                  29 - Banco Itaú Consignado S.A.
                                </option>
                                <option value="85">
                                  33 - Banco Santander (Brasil) S. A.
                                </option>
                                <option value="27">
                                  36 - Banco Bradesco BBI S.A.
                                </option>
                                <option value="106">
                                  37 - Banco do Estado do Pará S.A.
                                </option>
                                <option value="35">
                                  40 - Banco Cargill S.A.
                                </option>
                                <option value="107">
                                  41 - Banco do Estado do Rio Grande do Sul S.A.
                                </option>
                                <option value="105">
                                  47 - Banco do Estado de Sergipe S.A.
                                </option>
                                <option value="133">
                                  60 - Confidence Corretora de Câmbio S.A.
                                </option>
                                <option value="145">
                                  62 - Hipercard Banco Múltiplo S.A.
                                </option>
                                <option value="26">
                                  63 - Banco Bradescard S.A.
                                </option>
                                <option value="142">
                                  64 - Goldman Sachs do Brasil Banco Múltiplo S.
                                  A.
                                </option>
                                <option value="15">
                                  65 - Banco AndBank (Brasil) S.A.
                                </option>
                                <option value="70">
                                  66 - Banco Morgan Stanley S. A.
                                </option>
                                <option value="21">
                                  69 - Banco BPN Brasil S.A.
                                </option>
                                <option value="100">
                                  70 - Banco de Brasília S.A.
                                </option>
                                <option value="62">
                                  74 - Banco J. Safra S.A.
                                </option>
                                <option value="11">
                                  75 - Banco ABN Amro S.A.
                                </option>
                                <option value="64">
                                  76 - Banco KDB do Brasil S.A.
                                </option>
                                <option value="56">
                                  77 - Banco Intermedium S.A.
                                </option>
                                <option value="144">
                                  78 - Haitong Banco de Investimento do Brasil
                                  S.A.
                                </option>
                                <option value="74">
                                  79 - Banco Original do Agronegócio S.A.
                                </option>
                                <option value="8">
                                  80 - BT Associados Corretora de Câmbio Ltda
                                </option>
                                <option value="2">
                                  81 - BBN Banco Brasileiro de Negocios S.A.
                                </option>
                                <option value="91">
                                  82 - Banco Topazio S.A.
                                </option>
                                <option value="99">
                                  83 - Banco da China Brasil S.A.
                                </option>
                                <option value="181">
                                  84 - Uniprime Norte do Paraná
                                </option>
                                <option value="118">85 - CC Cecred</option>
                                <option value="124">
                                  87 - CC Unicred Central SC/PR
                                </option>
                                <option value="121">
                                  89 - CC Região da Mogiana
                                </option>
                                <option value="125">
                                  90 - CC Unicred Central SP
                                </option>
                                <option value="123">
                                  91 - CC Unicred Central RS
                                </option>
                                <option value="115">92 - Brickell S.A.</option>
                                <option value="164">93 - Pólocred</option>
                                <option value="51">
                                  94 - Banco Finaxis S.A.
                                </option>
                                <option value="40">
                                  95 - Banco Confidence de Câmbio S.A.
                                </option>
                                <option value="18">
                                  96 - Banco BMFBovespa
                                </option>
                                <option value="119">
                                  97 - CC Centralcredi
                                </option>
                                <option value="134">
                                  98 - Credialiança Cooperativa de Crédito Rural
                                </option>
                                <option value="180">
                                  99 - Uniprime Central
                                </option>
                                <option value="162">
                                  100 - Planner Corretora de Valores S.A.
                                </option>
                                <option value="138">
                                  101 - DTVM Renascença
                                </option>
                                <option value="128">
                                  104 - Caixa Econômica Federal
                                </option>
                                <option value="153">
                                  105 - Lecca Crédito, Financiamento e
                                  Investimento S/A
                                </option>
                                <option value="17">107 - Banco BBM S.A.</option>
                                <option value="163">
                                  108 - PortoCred S.A.
                                </option>
                                <option value="137">
                                  111 - DTVM Oliveira Trust
                                </option>
                                <option value="156">113 - Magliano S.A.</option>
                                <option value="117">114 - CC Cecoopes</option>
                                <option value="1">
                                  117 - Advanced Corretora de Câmbio Ltda.
                                </option>
                                <option value="175">
                                  118 - Standard Chartered Bank (Brasil) S.A.
                                </option>
                                <option value="96">
                                  119 - Banco Western Union do Brasil S.A.
                                </option>
                                <option value="83">
                                  120 - Banco Rodobens S.A.
                                </option>
                                <option value="12">
                                  121 - Banco Agiplan S.A.
                                </option>
                                <option value="28">
                                  122 - Banco Bradesco BERJ S.A.
                                </option>
                                <option value="97">
                                  124 - Banco Woori Bank do Brasil S.A.
                                </option>
                                <option value="114">
                                  125 - Brasil Plural S.A.
                                </option>
                                <option value="6">
                                  126 - BR Partners Banco de Investimento S.A.
                                </option>
                                <option value="131">
                                  127 - Codepe Corretora de Valores e Câmbio
                                  S.A.
                                </option>
                                <option value="155">128 - MS Bank S.A.</option>
                                <option value="178">
                                  129 - UBS Brasil Banco de Investimento S.A.
                                </option>
                                <option value="172">
                                  130 - SCFI Caruana S.A.
                                </option>
                                <option value="177">
                                  131 - Tullett Prebon Brasil Corretora de
                                  Valores e Câmbio Ltda.
                                </option>
                                <option value="146">
                                  132 - ICBC do Brasil Banco Múltiplo S.A.
                                </option>
                                <option value="120">133 - CC Confesol</option>
                                <option value="136">
                                  134 - DTVM BGC Liquidez
                                </option>
                                <option value="169">135 - SC Gradual</option>
                                <option value="126">
                                  136 - CC Unicred do Brasil
                                </option>
                                <option value="157">
                                  137 - Multimoney Corretora de Câmbio Ltda
                                </option>
                                <option value="141">
                                  138 - Get Money Corretora de Câmbio S.A.
                                </option>
                                <option value="148">
                                  139 - Intesa Sanpaolo Brasil S.A.
                                </option>
                                <option value="116">
                                  142 - Broker Brasil Corretora de Câmbio Ltda.
                                </option>
                                <option value="176">
                                  143 - Treviso Corretora de Câmbio S.A.
                                </option>
                                <option value="112">
                                  144 - Bexs Banco de Câmbio S.A.
                                </option>
                                <option value="154">
                                  145 - Levycam - Corretora de Câmbio e Valores
                                  Ltda.
                                </option>
                                <option value="143">
                                  146 - Guitta Corretora de Câmbio Ltda.
                                </option>
                                <option value="165">
                                  147 - Rico Corretora de Títulos e Valores
                                  Mobiliários S.A.
                                </option>
                                <option value="140">
                                  149 - Facta Financeira S.A.
                                </option>
                                <option value="170">157 - SC ICAP</option>
                                <option value="132">
                                  163 - Commerzbank Brasil S.A.
                                </option>
                                <option value="166">
                                  167 - S. Hayata Corretora de Câmbio S.A.
                                </option>
                                <option value="72">
                                  169 - Banco Olé Bonsucesso Consignado S.A.
                                </option>
                                <option value="7">
                                  173 - BRL Trust Distribuidora de Títulos e
                                  Valores Mobiliários S.A.
                                </option>
                                <option value="167">
                                  180 - SC CM Capital Markets
                                </option>
                                <option value="59">
                                  184 - Banco Itaú BBA S.A.
                                </option>
                                <option value="184">
                                  197 - Stone Pagamentos S/A
                                </option>
                                <option value="29">
                                  204 - Banco Bradesco Cartões S.A.
                                </option>
                                <option value="22">
                                  208 - Banco BTG Pactual S.A.
                                </option>
                                <option value="73">
                                  212 - Banco Original S.A.
                                </option>
                                <option value="16">
                                  213 - Banco Arbi S.A.
                                </option>
                                <option value="63">
                                  217 - Banco John Deere S.A.
                                </option>
                                <option value="25">
                                  218 - Banco Bonsucesso S.A.
                                </option>
                                <option value="43">
                                  222 - Banco Credit Agrícole Brasil S.A.
                                </option>
                                <option value="49">
                                  224 - Banco Fibra S.A.
                                </option>
                                <option value="45">
                                  229 - Banco Cruzeiro S.A.
                                </option>
                                <option value="179">
                                  230 - Unicard Banco Múltiplo S.A.
                                </option>
                                <option value="37">
                                  233 - Banco Cifra S.A.
                                </option>
                                <option value="31">
                                  237 - Banco Bradesco S.A.
                                </option>
                                <option value="188">237 - Next</option>
                                <option value="39">
                                  241 - Banco Clássico S.A.
                                </option>
                                <option value="71">
                                  243 - Banco Máxima S.A.
                                </option>
                                <option value="10">
                                  246 - Banco ABC Brasil S.A.
                                </option>
                                <option value="24">
                                  248 - Banco Boavista Interatlântico S.A.
                                </option>
                                <option value="57">
                                  249 - Banco Investcred Unibanco S.A.
                                </option>
                                <option value="3">
                                  250 - BCV - Banco de Crédito e Varejo S/A
                                </option>
                                <option value="113">
                                  253 - Bexs Corretora de Câmbio S/A
                                </option>
                                <option value="161">
                                  254 - Parana Banco S. A.
                                </option>
                                <option value="160">
                                  260 - Nu Pagamentos S. A.
                                </option>
                                <option value="32">
                                  263 - Banco Cacique S. A.
                                </option>
                                <option value="48">
                                  265 - Banco Fator S.A.
                                </option>
                                <option value="46">
                                  266 - Banco Cédula S.A.
                                </option>
                                <option value="127">
                                  279 - CCR de Primavera do Leste
                                </option>
                                <option value="183">
                                  290 - PagSeguro internet S/A
                                </option>
                                <option value="104">
                                  300 - Banco de la Nacion Argentina
                                </option>
                                <option value="19">318 - Banco BMG S.A.</option>
                                <option value="129">
                                  320 - China Construction Bank (Brasil) Banco
                                  Múltiplo S/A
                                </option>
                                <option value="185">336 - C 6 Bank</option>
                                <option value="150">
                                  341 - Itaú Unibanco S.A.
                                </option>
                                <option value="88">
                                  366 - Banco Société Générale Brasil S.A.
                                </option>
                                <option value="68">
                                  370 - Banco Mizuho do Brasil S.A.
                                </option>
                                <option value="61">
                                  376 - Banco J. P. Morgan S. A.
                                </option>
                                <option value="67">
                                  389 - Banco Mercantil do Brasil S.A.
                                </option>
                                <option value="30">
                                  394 - Banco Bradesco Financiamentos S.A.
                                </option>
                                <option value="152">
                                  399 - Kirton Bank S.A.
                                </option>
                                <option value="34">
                                  412 - Banco Capital S. A.
                                </option>
                                <option value="84">
                                  422 - Banco Safra S.A.
                                </option>
                                <option value="103">
                                  456 - Banco de Tokyo-Mitsubishi UFJ Brasil
                                  S.A.
                                </option>
                                <option value="90">
                                  464 - Banco Sumitomo Mitsui Brasileiro S.A.
                                </option>
                                <option value="33">
                                  473 - Banco Caixa Geral - Brasil S.A.
                                </option>
                                <option value="130">477 - Citibank N.A.</option>
                                <option value="58">
                                  479 - Banco ItauBank S.A.
                                </option>
                                <option value="139">
                                  487 - Deutsche Bank S.A.
                                </option>
                                <option value="151">
                                  488 - JPMorgan Chase Bank, National
                                  Association
                                </option>
                                <option value="147">492 - ING Bank N.V.</option>
                                <option value="102">
                                  494 - Banco de La Republica Oriental del
                                  Uruguay
                                </option>
                                <option value="101">
                                  495 - Banco de La Provincia de Buenos Aires
                                </option>
                                <option value="44">
                                  505 - Banco Credit Suisse (Brasil) S.A.
                                </option>
                                <option value="174">
                                  545 - Senso Corretora de Câmbio e Valores
                                  Mobiliários S.A.
                                </option>
                                <option value="66">
                                  600 - Banco Luso Brasileiro S.A.
                                </option>
                                <option value="53">
                                  604 - Banco Industrial do Brasil S.A.
                                </option>
                                <option value="94">610 - Banco VR S.A.</option>
                                <option value="77">
                                  611 - Banco Paulista S.A.
                                </option>
                                <option value="52">
                                  612 - Banco Guanabara S.A.
                                </option>
                                <option value="78">
                                  613 - Banco Pecúnia S. A.
                                </option>
                                <option value="76">623 - Banco Pan S.A.</option>
                                <option value="50">
                                  626 - Banco Ficsa S. A.
                                </option>
                                <option value="55">
                                  630 - Banco Intercap S.A.
                                </option>
                                <option value="81">
                                  633 - Banco Rendimento S.A.
                                </option>
                                <option value="93">
                                  634 - Banco Triângulo S.A.
                                </option>
                                <option value="89">
                                  637 - Banco Sofisa S. A.
                                </option>
                                <option value="14">
                                  641 - Banco Alvorada S.A.
                                </option>
                                <option value="79">
                                  643 - Banco Pine S.A.
                                </option>
                                <option value="149">
                                  652 - Itaú Unibanco Holding S.A.
                                </option>
                                <option value="54">
                                  653 - Banco Indusval S. A.
                                </option>
                                <option value="9">
                                  654 - Banco A. J. Renner S.A.
                                </option>
                                <option value="95">
                                  655 - Banco Votorantim S.A.
                                </option>
                                <option value="47">
                                  707 - Banco Daycoval S.A.
                                </option>
                                <option value="75">
                                  712 - Banco Ourinvest S.A.
                                </option>
                                <option value="110">
                                  719 - Banif - Bco Internacional do Funchal
                                  (Brasil) S.A.
                                </option>
                                <option value="187">735 - Banco Neon</option>
                                <option value="36">
                                  739 - Banco Cetelem S.A.
                                </option>
                                <option value="82">
                                  741 - Banco Ribeirão Preto S.A.
                                </option>
                                <option value="86">
                                  743 - Banco Semear S.A.
                                </option>
                                <option value="38">
                                  745 - Banco Citibank S.A.
                                </option>
                                <option value="69">
                                  746 - Banco Modal S.A.
                                </option>
                                <option value="80">
                                  747 - Banco Rabobank International Brasil S.A.
                                </option>
                                <option value="41">
                                  748 - Banco Cooperativo Sicredi S. A.
                                </option>
                                <option value="173">
                                  751 - Scotiabank Brasil S.A.
                                </option>
                                <option value="20">
                                  752 - Banco BNP Paribas Brasil S.A.
                                </option>
                                <option value="159">
                                  753 - Novo Banco Continental S.A.
                                </option>
                                <option value="87">
                                  754 - Banco Sistema S.A.
                                </option>
                                <option value="111">
                                  755 - Bank of America Merrill Lynch Banco
                                  Múltiplo S.A.
                                </option>
                                <option value="42">
                                  756 - Banco Cooperativo do Brasil S/A -
                                  Bancoob
                                </option>
                                <option value="186">756 - Banco Sicoob</option>
                                <option value="65">
                                  757 - Banco Keb Hana do Brasil S. A.
                                </option>
                              </Field>
                              {errors.banco && touched.banco && (
                                <div class="campo-obrigatorio">
                                  {errors.banco}
                                </div>
                              )}
                            </div>

                            <div className="form-group col-md-2">
                              <label htmlFor="agencia">Agência</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="agencia"
                                name="agencia"
                              ></Field>
                              {errors.agencia && touched.agencia && (
                                <div class="campo-obrigatorio">
                                  {errors.agencia}
                                </div>
                              )}
                            </div>
                            <div className="form-group col-md-1">
                              <label htmlFor="agenciaDigito">Díg Ag.</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="agenciaDigito"
                                name="agenciaDigito"
                              ></Field>
                              {errors.agenciaDigito &&
                                touched.agenciaDigito && (
                                  <div class="campo-obrigatorio">
                                    {errors.agenciaDigito}
                                  </div>
                                )}
                            </div>
                            <div className="form-group col-md-2">
                              <label htmlFor="contaCorrente">Nº Conta</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="contaCorrente"
                                name="contaCorrente"
                                placeholder="Ex: 75249-3"
                              ></Field>
                              {errors.contaCorrente &&
                                touched.contaCorrente && (
                                  <div class="campo-obrigatorio">
                                    {errors.contaCorrente}
                                  </div>
                                )}
                            </div>
                            <div className="form-group col-md-1">
                              <label htmlFor="contaCorrenteDigito">
                                Dig C.
                              </label>
                              <Field
                                type="text"
                                className="form-control"
                                id="contaCorrenteDigito"
                                name="contaCorrenteDigito"
                              ></Field>
                              {errors.contaCorrenteDigito &&
                                touched.contaCorrenteDigito && (
                                  <div class="campo-obrigatorio">
                                    {errors.contaCorrenteDigito}
                                  </div>
                                )}
                            </div>
                            <div className="form-group col-12 col-sm-12 col-md-3">
                              <label htmlFor="tipoConta">Tipo de conta</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="tipoConta"
                                name="tipoConta"
                                as="select"
                              >
                                <option value="" selected>
                                  Selecione um tipo
                                </option>
                                <option value="CONTA CORRENTE">
                                  Conta Corrente
                                </option>
                                <option value="POUPANÇA">Poupança</option>
                              </Field>
                              {errors.tipoConta && touched.tipoConta && (
                                <div class="campo-obrigatorio">
                                  {errors.tipoConta}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="row mt-5">
                            <div
                              className="col-12"
                              style={{ backgroundColor: "#f6f6f6" }}
                            >
                              <h5 className="mt-3 mb-3">Dados do adquirente</h5>
                            </div>
                          </div>

                          <hr></hr>
                          <div className="row mt-3 mb-3">
                            <div className="custom-control custom-switch ml-4">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="configPadraoAdquirente"
                                onClick={() => {
                                  let configativooufalse =
                                    document.querySelector(
                                      "#configPadraoAdquirente"
                                    );
                                  let tokenDefault = document.querySelector(
                                    "#tokenConfigAdquirente"
                                  );
                                  let emailDefault = document.querySelector(
                                    "#emailConfigAdquirente"
                                  );
                                  let urlAutogenerator =
                                    document.querySelector("#urlgeradaAtuto");
                                  let labelAutourl =
                                    document.querySelector("#labelUrlAuto");

                                  // let emailDefault = "mecpockpay@mecpock.com"
                                  //let tokenDefault = "a8cdfa38-b76b-4fcb-ab7d-b8892db67e2b75b1544c4703961ff6a9a0065ffcaa8328d8-f80e-446e-bad0-58396250cf26"
                                  //let urlDefault   = "https://mecpock-functions.azurewebsites.net/api/mecpock"
                                  //tokenConfigAdquirente
                                  //tokenConfigAdquirente
                                  if (configativooufalse.checked) {
                                    tokenDefault.value =
                                      "a8cdfa38-b76b-4fcb-ab7d-b8892db67e2b75b1544c4703961ff6a9a0065ffcaa8328d8-f80e-446e-bad0-58396250cf26";
                                    emailDefault.value =
                                      "mecpockpay@mecpock.com";
                                    urlAutogenerator.value =
                                      "https://mecpock-functions.azurewebsites.net/api/mecpock";
                                    labelAutourl.textContent =
                                      "https://mecpock-functions.azurewebsites.net/api/mecpock";
                                  } else {
                                    let tokenDefault = document.querySelector(
                                      "#tokenConfigAdquirente"
                                    );
                                    let emailDefault = document.querySelector(
                                      "#emailConfigAdquirente"
                                    );
                                    tokenDefault.value = "";
                                    emailDefault.value = "";
                                    urlAutogenerator.value = "";
                                    labelAutourl.textContent =
                                      "Url gerada automaticamente";
                                    console.log(false);
                                  }
                                }}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="configPadraoAdquirente"
                              >
                                Usar configuração padrão?
                              </label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="form-group col-md-6">
                              <label htmlFor="emailConfigAdquirente">
                                E-mail*
                              </label>
                              <Field
                                type="text"
                                className="form-control"
                                id="emailConfigAdquirente"
                                name="emailConfigAdquirente"
                              ></Field>
                              {errors.emailConfigAdquirente &&
                                touched.emailConfigAdquirente && (
                                  <div class="campo-obrigatorio">
                                    {errors.emailConfigAdquirente}
                                  </div>
                                )}
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="tokenConfigAdquirente">
                                Token*
                              </label>
                              <Field
                                type="text"
                                className="form-control"
                                id="tokenConfigAdquirente"
                                name="tokenConfigAdquirente"
                              ></Field>
                              {errors.tokenConfigAdquirente &&
                                touched.tokenConfigAdquirente && (
                                  <div class="campo-obrigatorio">
                                    {errors.tokenConfigAdquirente}
                                  </div>
                                )}
                            </div>
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="urlgeradaAtuto" id="labelUrlAuto">
                              Url gerada automaticamente
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="urlgeradaAtuto"
                              name="urlgeradaAtuto"
                              hidden
                            />
                          </div>

                          <div className="row mt-5">
                            <div
                              className="col-12"
                              style={{ backgroundColor: "#f6f6f6" }}
                            >
                              <h5 className="mt-3 mb-3">
                                Dados do responsável
                              </h5>
                            </div>
                          </div>
                          <hr></hr>

                          <div className="row">
                            <div className="form-group col-12 col-sm-12 col-md-6">
                              <label htmlFor="nomeResponsavel">Nome</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="nomeResponsavel"
                                name="nomeResponsavel"
                                placeholder="Digite seu nome"
                              ></Field>
                              {errors.nomeResponsavel &&
                                touched.nomeResponsavel && (
                                  <div class="campo-obrigatorio">
                                    {errors.nomeResponsavel}
                                  </div>
                                )}
                            </div>
                            <div className="form-group col-12 col-sm-12 col-md-6">
                              <label htmlFor="sobrenomeResponsavel">
                                Sobrenome
                              </label>
                              <Field
                                type="text"
                                className="form-control"
                                id="sobrenomeResponsavel"
                                name="sobrenomeResponsavel"
                                placeholder="Digite seu sobrenome"
                              ></Field>
                              {errors.sobrenomeResponsavel &&
                                touched.sobrenomeResponsavel && (
                                  <div class="campo-obrigatorio">
                                    {errors.sobrenomeResponsavel}
                                  </div>
                                )}
                            </div>
                            <div className="form-group ol-12 col-sm-12 col-md-4">
                              <label htmlFor="cpfResponsavel">CPF*</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="cpfResponsavel"
                                name="cpfResponsavel"
                                placeholder="Digite seu CPF"
                              ></Field>
                              {errors.cpfResponsavel &&
                                touched.cpfResponsavel && (
                                  <div class="campo-obrigatorio">
                                    {errors.cpfResponsavel}
                                  </div>
                                )}
                            </div>
                            <div className="form-group ol-12 col-sm-12 col-md-4">
                              <label htmlFor="rgResponsavel">RG*</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="rgResponsavel"
                                name="rgResponsavel"
                                placeholder="Digite seu RG"
                              ></Field>
                              {errors.rgResponsavel &&
                                touched.rgResponsavel && (
                                  <div class="campo-obrigatorio">
                                    {errors.rgResponsavel}
                                  </div>
                                )}
                            </div>

                            <div className="form-group ol-12 col-sm-12 col-md-4">
                              <label htmlFor="dataNascimentoresponsavel">
                                Data Nascimento
                              </label>
                              <Field
                                type="date"
                                className="form-control"
                                id="dataNascimentoresponsavel"
                                name="dataNascimentoresponsavel"
                                placeholder="Digite seu RG"
                              ></Field>
                              {errors.dataNascimentoresponsavel &&
                                touched.dataNascimentoresponsavel && (
                                  <div class="campo-obrigatorio">
                                    {errors.dataNascimentoresponsavel}
                                  </div>
                                )}
                            </div>
                            <div className="form-group col-12 col-sm-12 col-md-4">
                              <label htmlFor="emailResponsavel">E-mail*</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="emailResponsavel"
                                name="emailResponsavel"
                                placeholder="Digite um email"
                              ></Field>
                              {errors.emailResponsavel &&
                                touched.emailResponsavel && (
                                  <div class="campo-obrigatorio">
                                    {errors.emailResponsavel}
                                  </div>
                                )}
                            </div>
                            <div className="form-group col-12 col-sm-12 col-md-4">
                              <label htmlFor="telefoneResponsavel">
                                Telefone*
                              </label>
                              <Field
                                type="text"
                                className="form-control"
                                id="telefoneResponsavel"
                                name="telefoneResponsavel"
                                placeholder="Digite telefone principal"
                              ></Field>
                              {errors.telefoneResponsavel &&
                                touched.telefoneResponsavel && (
                                  <div class="campo-obrigatorio">
                                    {errors.telefoneResponsavel}
                                  </div>
                                )}
                            </div>
                            <div className="form-group col-12 col-sm-12 col-md-4">
                              <label htmlFor="telefoneResponsavel2">
                                Telefone 2
                              </label>
                              <Field
                                type="text"
                                className="form-control"
                                id="telefoneResponsavel2"
                                name="telefoneResponsavel2"
                                placeholder="Digite um 2º telefone"
                              ></Field>
                              {errors.telefoneResponsavel2 &&
                                touched.telefoneResponsavel2 && (
                                  <div class="campo-obrigatorio">
                                    {errors.telefoneResponsavel2}
                                  </div>
                                )}
                            </div>
                          </div>

                          <div className="row">
                            <div className="form-group col-md-2">
                              <label htmlFor="cepResponsavel">Cep*</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="cepResponsavel"
                                name="cepResponsavel"
                                placeholder="Ex:12951-300"
                                onKeyUp={() => {
                                  let cepSearchResponsavel =
                                    document.getElementById(
                                      "cepResponsavel"
                                    ).value;
                                  if (cepSearchResponsavel.length > 7) {
                                    let cepPrestadorResponsavel =
                                      cepSearchResponsavel.replace("-", "");
                                    cep(cepPrestadorResponsavel).then(
                                      (response) => {
                                        document.getElementById(
                                          "enderecoResponsavel"
                                        ).value = response.street;
                                        document.getElementById(
                                          "bairroResponsavel"
                                        ).value = response.neighborhood;
                                        document.getElementById(
                                          "cidadeResponsavel"
                                        ).value = response.city;
                                        document.getElementById(
                                          "estadoResponsavel"
                                        ).value = response.state;
                                      }
                                    );
                                  }
                                }}
                              ></Field>
                              {errors.cepResponsavel &&
                                touched.cepResponsavel && (
                                  <div class="campo-obrigatorio">
                                    {errors.cepResponsavel}
                                  </div>
                                )}
                            </div>
                          </div>
                          <div className="row">
                            <div className="form-group col-md-8">
                              <label htmlFor="enderecoResponsavel">
                                Logradouro*
                              </label>
                              <Field
                                type="text"
                                className="form-control"
                                id="enderecoResponsavel"
                                name="enderecoResponsavel"
                                placeholder="Digite o nome da rua"
                              ></Field>
                              {errors.enderecoResponsavel &&
                                touched.enderecoResponsavel && (
                                  <div class="campo-obrigatorio">
                                    {errors.enderecoResponsavel}
                                  </div>
                                )}
                            </div>
                            <div className="form-group col-md-4">
                              <label htmlFor="numeroResponsavel">Numero</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="numeroResponsavel"
                                name="numeroResponsavel"
                                placeholder="Digite o numero"
                              ></Field>
                              {errors.numeroResponsavel &&
                                touched.numeroResponsavel && (
                                  <div class="campo-obrigatorio">
                                    {errors.numeroResponsavel}
                                  </div>
                                )}
                            </div>
                            <div className="form-group col-md-4">
                              <label htmlFor="complementoResponsavel">
                                Complemento
                              </label>
                              <Field
                                type="text"
                                className="form-control"
                                id="complementoResponsavel"
                                name="complementoResponsavel"
                                placeholder="Ex: casa amarela"
                              ></Field>
                              {errors.complementoResponsavel &&
                                touched.complementoResponsavel && (
                                  <div class="campo-obrigatorio">
                                    {errors.complementoResponsavel}
                                  </div>
                                )}
                            </div>
                            <div className="form-group col-md-4">
                              <label htmlFor="bairroResponsavel">Bairro</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="bairroResponsavel"
                                name="bairroResponsavel"
                                placeholder="Digite o nome do bairro"
                              ></Field>
                              {errors.bairroResponsavel &&
                                touched.bairroResponsavel && (
                                  <div class="campo-obrigatorio">
                                    {errors.bairroResponsavel}
                                  </div>
                                )}
                            </div>

                            <div className="form-group col-md-4">
                              <label htmlFor="cidadeResponsavel">Cidade</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="cidadeResponsavel"
                                name="cidadeResponsavel"
                                placeholder="Digite o nome da cidade"
                              ></Field>
                              {errors.cidadeResponsavel &&
                                touched.cidadeResponsavel && (
                                  <div class="campo-obrigatorio">
                                    {errors.cidadeResponsavel}
                                  </div>
                                )}
                            </div>
                            <div className="form-group col-md-4">
                              <label htmlFor="estadoResponsavel">Estado</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="estadoResponsavel"
                                name="estadoResponsavel"
                                placeholder="Digite o estado"
                              ></Field>
                              {errors.estadoResponsavel &&
                                touched.estadoResponsavel && (
                                  <div class="campo-obrigatorio">
                                    {errors.estadoResponsavel}
                                  </div>
                                )}
                            </div>
                          </div>

                          <div className="row mt-5">
                            <div
                              className="col-12"
                              style={{ backgroundColor: "#f6f6f6" }}
                            >
                              <h5 className="mt-3 mb-3">Serviços</h5>
                            </div>
                          </div>
                          <hr></hr>
                          <div className="row">
                            <div className="custom-control custom-switch ml-4">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="atendeNoLocal"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="atendeNoLocal"
                              >
                                Atende no local?
                              </label>
                            </div>
                          </div>
                          <div
                            className="card-footer d-flex justify-content-end"
                            style={{
                              width: "100%",
                              backgroundColor: "#ffffff",
                            }}
                          >
                            <Link
                              to="/estabelecimentos"
                              className="btn btn-flat btn-danger  active buttonMecPock zoom"
                              role="button"
                              aria-pressed="true"
                            >
                              Cancelar
                            </Link>
                            <button
                              type="submit"
                              className="btn btn-flat btn-salvar buttonMecPock zoom"
                              style={{ marginLeft: "1rem" }}
                            >
                              Salvar{" "}
                            </button>
                          </div>
                        </section>
                      </div>
                    </Form>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default FormPrestador;
