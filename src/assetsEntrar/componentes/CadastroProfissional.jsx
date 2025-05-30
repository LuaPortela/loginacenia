import React, { useState } from 'react'
import styles from '../css/CadastroProfissional.module.css'
import fundoprofissional from '../images/fundoprofissional.png'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

function CadastroProfissional() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    profissao: '',
    registro: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const { nome, email, senha, confirmarSenha, profissao, registro } = formData;

    if (!nome || !email || !senha || !confirmarSenha || !profissao || !registro) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    console.log('Dados enviados:', formData);
    alert('Conta de profissional criada com sucesso!');
    navigate('/login');
  };

  return (
    <div className={styles.paginaCadastro}>
      <div className={styles.leftSection}>
        <img
          src={fundoprofissional}
          alt="Profissional de saúde com criança"
          className={styles.imagemCadastro}
        />
      </div>

      <div className={styles.rightSection}>
        <div className={styles.logoCadastro}>
          <h1>
            <span className={styles.logoAc}>Ac</span>
            <span className={styles.logoEnis}>enis</span>
          </h1>
          <div className={styles.tag}>
            <span>@acenisoficial</span>
          </div>
        </div>

        <div className={styles.tituloSecao}>
          <h2>PROFISSIONAIS</h2>
          <p className={styles.instrucao}>
            Crie sua conta agora.<br />
            Preencha todos os campos com atenção e revise as informações antes de concluir o cadastro.
          </p>
          <div className={styles.divisor}></div>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>Nome Completo</label>
            <input
              type="text"
              name="nome"
              className={styles.input}
              value={formData.nome}
              onChange={handleChange}
            />

            <label className={styles.label}>E-mail</label>
            <input
              type="email"
              name="email"
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
            />

            <label className={styles.label}>Senha</label>
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="senha"
                className={styles.input}
                value={formData.senha}
                onChange={handleChange}
              />
              <button
                type="button"
                className={styles.showPasswordButton}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>

            <label className={styles.label}>Digite a senha novamente</label>
            <div className={styles.passwordWrapper}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmarSenha"
                className={styles.input}
                value={formData.confirmarSenha}
                onChange={handleChange}
              />
              <button
                type="button"
                className={styles.showPasswordButton}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>

            <label className={styles.label}>Profissão / Especialidade</label>
            <input
              type="text"
              name="profissao"
              className={styles.input}
              value={formData.profissao}
              onChange={handleChange}
            />

            <label className={styles.label}>Registro profissional (CRM, etc.)</label>
            <input
              type="text"
              name="registro"
              className={styles.input}
              value={formData.registro}
              onChange={handleChange}
            />

            <button type="submit" className={styles.cadastroButton}>
              CRIAR CONTA
            </button>

            <Link to="/login" className={styles.loginLink}>
              <p>Já tenho uma conta</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CadastroProfissional
