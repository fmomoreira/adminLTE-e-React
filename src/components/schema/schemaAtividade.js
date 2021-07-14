import * as yup from 'yup';

export default yup.object().shape({
    descricao:yup.string().required('Nome da atividade é obrigatório !'),
   
});