import * as yup from 'yup';

export default yup.object().shape({
    nome:yup.string().required('Nome do adquirente é obrigatório!'),
   
});