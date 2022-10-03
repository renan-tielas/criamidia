import styles from '../styles/formularios.module.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

// interface User {
//   name: string
// }

// interface LoginFormValues {
//   username: string
//   password: string
//   remember: boolean
// }

const Formulario = () => {
  const [autor, poeAutor] = useState()
  const [titulo, poeTitulo] = useState()
  const [descricao, poeDescricao] = useState()
  const [conteudo, poeConteudo] = useState()

  const {
    register,
    formState: { errors },
    handleSubmit,  } = useForm()

  const onSubmit = handleSubmit(({ nomeautor, password, remember }) => {
    // You should handle login logic with username, password and remember form data
    poeAutor({ autor: nomeautor })

  })






  return (
    <div className={styles}>
      {autor ? (
        <span className={styles.hello_user}>Hello, {autor.autor}!</span>
      ) : (
        <div>
        {console.log(autor)}
        <form className={styles.formulario_codigo} action="" method="post" id="formulario-codigo" onSubmit={onSubmit} >
        <fieldset className={styles.formulario_borda}>
  
          <legend style={{ padding: '10px 20px', fontSize: '22px', backgroundColor:'white' }}>Preencha sua postagem!</legend>
         
          <div className="topo">
  
            <input className={styles.titulo} tabIndex={1} type="text" name="text" id="POST-titulo" 
            value={titulo}
            onChange={(e)=>{poeTitulo(e.target.value)}} />
            <label htmlFor="POST-titulo">Titulo do código, ou tópico</label>
            <div></div>
  
            <textarea className={styles.descricao} name="conteudo" id="POST-descricao" cols={40} rows={5}
             value={descricao}
             onChange={(e)=>{poeDescricao(e.target.value)}} ></textarea>
            <label htmlFor="POST-descricao">Descrição</label>
  
  
          {/* <div onAuxClick={}> */}
          <textarea className={styles.conteudo} name="text" id="POST-texto" 
           value={conteudo}
           onChange={(e)=>{poeConteudo(e.target.value)}} ></textarea>
          <label htmlFor="POST-texto">Conteúdo</label>
          </div>
  <input className={styles.titulo} tabIndex={1}  {...register("autor")}type="text" name="text" id="POST-autor" 
            value={autor}
            onChange={(e)=>{poeAutor(e.target.value.autor)}} />
            <label htmlFor="POST-autor">Autor</label>
         
          <button className={styles.botao} type="submit" form="formulario-codigo" value="Submit">Enviar</button>
        </fieldset>
  
      </form></div>
      )}
    </div>
  )
}



  
export default Formulario


// // //  FORMULARIO EXEMPLO
// <form onSubmit={onSubmit}>
// <div className={styles.row}>
//   <h3 className={styles.form_header}>LOGIN</h3>
// </div>
// <div className={styles.row}>
//   <input
//     type="text"
//     placeholder="user name"
//     {...register('username', {
//       required: { value: true, message: 'User name is required' },
//       minLength: {
//         value: 3,
//         message: 'User name cannot be less than 3 character',
//       },
//     })}
//     className={'form_field' + (errors.username ? ' has_error' : '')}
//   />
//   {errors.username && (
//     <span className={styles.error_label}>{errors.username.message}</span>
//   )}
// </div>
// <div className={styles.row}>
//   <input
//     type="password"
//     placeholder="password"
//     {...register('password', {
//       required: {
//         value: true,
//         message: 'Please enter your password',
//       },
//     })}
//     className={'form_field' + (errors.password ? ' has_error' : '')}
//   />
//   {errors.password && (
//     <span className={styles.error_label}>{errors.password.message}</span>
//   )}
// </div>
// <div className={`${styles.row} ${styles.row_remember}`}>
//   <input type="checkbox" id="remember" {...register('remember')} />
//   <label htmlFor="remember" className={styles.remember_label}>
//     Remember me
//   </label>
// </div>
// <div className={styles.row}>
//   <button type="submit" className={styles.botao}>
//     Login
//     </button>
// </div>
// </form>