import React from "react";
import { Switch, Route } from "react-router-dom";
import Atividade from "./components/Atividade";
import Contratos from "./components/Contratos";
import Fabricante from "./components/Fabricante";
import MaquinasPos from "./components/Pos";
import Estabelecimentos from "./components/Estabelecimento";
import adicionarContrato from "./components/adicionar/AdicionarContrato";
import adicionarAtividade from "./components/adicionar/AdicionarAtividade";
import adicionarPos from "./components/adicionar/AdicionarPos";
import adicionarEstabelecimento from "./components/adicionar/AdicionarEstabelecimento";
import editarAtividade from "./components/editar/EditarAtividade";
import editarFabricante from "./components/editar/EditarFabricante";
import editarPos from "./components/editar/EditarPos";
import editarEstabelecimento from "./components/editar/EditarEstabelecimento";
import movimentacoes from "./components/financeiro/movimentacao/index";
import Dashboard from "./components/Dashboard";

export default function rotas() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/atividade" component={Atividade} />
      <Route exact path="/adquirente" component={Fabricante} />
      <Route exact path="/maquinaspos" component={MaquinasPos} />
      <Route exact path="/estabelecimentos" component={Estabelecimentos} />
      <Route exact path="/adicionaratividade" component={adicionarAtividade} />
      <Route exact path="/adicionarpos" component={adicionarPos} />
      <Route
        exact
        path="/adicionarestabelecimento"
        component={adicionarEstabelecimento}
      />
      <Route exact path="/editaradquirente" component={editarFabricante} />
      <Route exact path="/editaratividade" component={editarAtividade} />
      <Route exact path="/editarpos" component={editarPos} />
      <Route
        exact
        path="/editarestabelecimento"
        component={editarEstabelecimento}
      />
      <Route exact path="/movimentacao" component={movimentacoes} />
      <Route exact path="/contratos" component={Contratos} />
      <Route exact path="/adicionarcontrato" component={adicionarContrato} />
    </Switch>
  );
}
