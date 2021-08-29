import { useState } from "react";
import * as S from "./styles";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [color, setColor] = useState(false);
  const [submitSuccess, setSubmitSuccess ] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleClick = () =>{
    setSubmitSuccess(false)
    setErrors({})
    setColor(false)
  }

  const validate = () => {
    let errors = {}
    if(!form.name){
      errors.name="Preencha com seu nome completo"
      setColor(true)
    } 
    console.log(!form.name)
    if(!form.email){
      errors.email="Preencha com seu email completo"
      setColor(true)
    }
    console.log(errors)
    return errors
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(form))

    try {
      const response = await fetch(
        "https://corebiz-test.herokuapp.com/api/v1/newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            name: name,
          }),
        }
      ).then((response) => {
        if(response.ok){
          setSubmitSuccess(true)
        } else{
          setSubmitSuccess(false)
        }
      })
      const data = await response.json();
      console.log("data", data);
    } catch (err) {
      console.log("alguma coisa deu errado" + err);
    }
  };

  return (
    <S.NewsletterWrapper>
      <S.Container>
        <S.NewsletterFormWrapper className={!submitSuccess ? 'open' : 'close'}>
        <S.NewsletterTittle>
          <h3>Participe de nossas news com promoções e novidades!</h3>
        </S.NewsletterTittle>
          <form onSubmit={handleSubmit}>
            <div className="input-fild">
              <input
                type="name"
                id="name"
                value={name}
                placeholder="Digite seu nome"
                className={color ? 'error' : ''}
                onChange={(e) => {
                  handleChange(e)
                  setName(e.target.value);
                }}
              />
              {errors.name ? <p className="error-input">{errors.name}</p> : ''}
            </div>
            <div className="input-fild">
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Digite seu email"
                className={color ? 'error' : ''}
                onChange={(e) => {
                  handleChange(e)
                  setEmail(e.target.value);
                }}
              />
            {errors.email && <p className="error-input">{errors.email}</p>}
            </div>
            <button>Eu quero!</button>
          </form>
        </S.NewsletterFormWrapper>
        <S.NewsletterSuccessWrapper className={!submitSuccess ? 'close' : 'open'}>
          <p><strong>Seu e-mail foi cadastrado com sucesso!</strong></p>
          <p>A partir de agora você receberá as novidade e ofertas exclusivas.</p>
          <button onClick={handleClick}>Cadastrar novo e-mail</button>
        </S.NewsletterSuccessWrapper>
      </S.Container>
    </S.NewsletterWrapper>
  );
}

export default Newsletter;
