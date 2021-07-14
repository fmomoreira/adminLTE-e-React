import * as yup from 'yup';


export default yup.object().shape({
    cnpj:yup.string().required('Número de documento é obrigatorio.!'),
    razaoSocial:yup.string().required('Nome empresa é obrigatório.'),
    contrato:yup.string().required('Selecione um contrato.'),
    cep:yup.string().required('Cep é obrigatório.'),
    endereco:yup.string().required('Logradouro é obrigatório.'),
    numero:yup.string().required('Número é obrigatorio.'),
    complemento:yup.string().required('Complemento é obrigatório.'),
    bairro:yup.string().required('Bairro e obrigatório.'),
    cidade:yup.string().required('Cidade é obrigatório.'),
    estado:yup.string().required('Estado é obrigatorio.'),
    atividade:yup.string().required('Selecione uma atividade.'),
    nomeFavorecido:yup.string().required('Nome do favorecido é obrigatório.'),
    documentoFavorecido:yup.string().required('Nº de documentoé obrigatório.!'),
    banco:yup.string().required('Selecione um banco.!'),
    agencia:yup.string().required('Número da agência é obrigatório!'),
    contaCorrente:yup.string().required('Conta é Obrigatório!!'),
    tipoConta:yup.string().required('Selecione um tipo de conta!'),
    emailConfigAdquirente:yup.string().required('Email de  é obrigatório!'),
    tokenConfigAdquirente:yup.string().required('Token é obrigatório!'),
    nomeResponsavel:yup.string().required('Nome do responsável é obrigatório!'),
    sobrenomeResponsavel:yup.string().required('Sobrenome do responsável é Obrigatório!'),
    cpfResponsavel:yup.string().required('CPF responsável é obrigatório!'),
    rgResponsavel:yup.string().required('RG do responsável é Obrigatorio!'),
    dataNascimentoresponsavel:yup.string().required('Campo obrigatório!'),
    emailResponsavel:yup.string().required('Campo obrigatório!'),
    telefoneResponsavel:yup.string().required('Campo obrigatório!'),
    telefoneResponsavel2:yup.string().required('Campo obrigatório!'),
    cepResponsavel:yup.string().required('Campo obrigatório'),
    enderecoResponsavel:yup.string().required('Campo obrigatório!'),
    numeroResponsavel:yup.string().required('Campo obrigatório'),
    complementoResponsavel:yup.string().required('Campo obrigatório'),
    bairroResponsavel:yup.string().required('Campo Obrigatório!'),
    cidadeResponsavel:yup.string().required('Campo Obrigatório!'),
    estadoResponsavel:yup.string().required('Campo obrigatório!')


});