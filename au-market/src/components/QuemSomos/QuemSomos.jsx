import React from "react";
import Nathy from "../../images/Nathy2.jpg";
import Samu from "../../images/samuel261.jpg";
import Lucas from "../../images/lucas.jpeg";
import Piter from "../../images/piter261.jpg";
import "./QuemSomos.css";

//Tela "quem somos"
function QuemSomos() {
  //Renderização do componente
  return (
    <div>
      <div className="tituloContainer">
        <h2>Quem Somos</h2>
      </div>
      <div className="container5">
        <div className="contatos">
          <div className="linha">
            <div className="foto-container">
              <img src={Lucas} alt="" />
            </div>
            <div className="contato-container">
              <h5>Lucas Vanzuita</h5>
              <p>@lucasvanzuita</p>
              <p>(47) 9 9242-1998</p>
              <p>lucasvanzuita@gmail.com</p>
              <p>github.com/lucasvanzuita</p>
            </div>
          </div>
          <div className="linha">
            <div className="foto-container">
              <img src={Nathy} alt="" />
            </div>
            <div className="contato-container">
              <h5>Nathalya Neumann</h5>
              <p>@nathyneumann</p>
              <p>(41) 9 9688-7883</p>
              <p>nathalyan@gmail.com</p>
              <p>github/NathyNeumann</p>
            </div>
          </div>
          <div className="linha">
            <div className="foto-container">
              <img src={Piter} alt="" />
            </div>
            <div className="contato-container">
              <h5>Piter Merlo Bruner</h5>
              <p>@_pitermb_</p>
              <p>(47) 9 9242-2002</p>
              <p>merlobruner@gmail.com</p>
              <p>github.com/pitermb</p>
            </div>
          </div>
          <div className="linha">
            <div className="foto-container">
              <img src={Samu} alt="" />
            </div>

            <div className="contato-container">
              <h5>Samuel Mendes </h5>
              <p>@mendz_s4m</p>
              <p>(47) 9 9626-0232</p>
              <p>mendessamuel1@outlook.com</p>
              <p>github.com/MendesS4</p>
            </div>
          </div>
        </div>
        <div className="sobrePrograma">
          <h3>Programa Entra21 - Blusoft</h3>
          <p className="programa">
            O programa é dirigido à <strong>jovens</strong> a partir de 16 anos
            de idade<strong> e adultos</strong>, que residam em Blumenau e
            cidades vizinhas, que estejam cursando ou concluído o ensino médio
            ou superior. O programa atende também pessoas com deficiência e
            imigrantes que objetivam colocação no mercado de trabalho de
            qualidade.
          </p>

          <p className="programa">
            Os cursos em <strong>linguagem de programação</strong> tem carga
            horária de até<strong> 480 horas</strong> quando incluem o ensino de
            idioma estrangeiro e duração de 6 meses. Já as demais capacitações
            contam com até 300 horas em média em 5 meses. Os jovens formados
            pelo Entra21-Blusoft alcançam altos índices de empregabilidade entre
            as empresas de TIC da região.
          </p>

          <p className="programa">
            O <strong>treinamento é intensivo</strong>, com especializações de
            300 a 480 horas-aula, em aulas diárias de meio período até 6 meses,
            em linguagens de programação e demais especializações, incluindo o
            ensino de idioma estrangeiro (Inglês ou Alemão), Empreendedorismo e
            Inovação, Desenvolvimento Humano e Contabilidade e Finanças.
          </p>

          <p className="programa">
            As aulas acontecem em Blumenau em diversos períodos a serem
            escolhidos pelo aluno. Com opções em todos os períodos sendo,
            matutino, vespertino ou noturno, de segunda a sábado.
          </p>

          <p className="programa">
            O Programa Entra21 é financiado pelo governo do estado através da
            FAPESC, pela Prefeitura de Blumenau através do FIA e pelas empresas
            de tecnologia da região.
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuemSomos;
