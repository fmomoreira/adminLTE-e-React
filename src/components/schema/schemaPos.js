import * as yup from 'yup';

export default yup.object().shape({
    nome:yup.string().required('Nome é obrigatório!'),
    fabricantePos:yup.string().required('Selecione um adquirente!'),  
});