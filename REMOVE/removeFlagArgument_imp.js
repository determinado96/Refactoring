/**
 * =========================================================
 * REFACTORING: REMOVE FLAG ARGUMENT
 * =========================================================
 *
 * Consiste em remover parâmetros que alteram o comportamento
 * de um método (flags) e substituí-los por métodos explícitos.
 *
 * Objetivo:
 * - Melhorar clareza da API
 * - Evitar lógica condicional desnecessária
 * - Tornar o código mais expressivo
 */


/**
 * =========================================================
 * IMPLEMENTAÇÃO INICIAL
 * =========================================================
 *
 * Problemas:
 * - O método possui duas responsabilidades
 * - O parâmetro "name" atua como uma flag disfarçada
 * - Existe dependência de strings mágicas
 * - O comportamento muda com base no parâmetro
 * - Dificulta leitura e manutenção
 *
 * Além disso:
 * Para chamar a função corretamente, é necessário lembrar
 * exatamente qual string deve ser usada.
 */

function setDimension(name, value) {
  if (name === "height") {
    this._height = value;
    return;
  }

  if (name === "width") {
    this._width = value;
    return;
  }
}


/**
 * =========================================================
 * PROBLEMAS IDENTIFICADOS
 * =========================================================
 *
 * - Violação do SRP (Single Responsibility Principle)
 * - Uso de "string flags"
 * - API pouco expressiva
 * - Alto risco de erro de digitação
 *
 * Exemplo de chamada pouco clara:
 *
 * setDimension("height", 100)
 */


/**
 * =========================================================
 * REFACTORING: MÉTODOS EXPLÍCITOS
 * =========================================================
 *
 * Estratégia:
 * Criar métodos separados para cada comportamento.
 *
 * Benefícios:
 * - Cada método possui uma única responsabilidade
 * - Código mais legível
 * - API mais clara
 * - Remove dependência de strings
 */

function setHeight(value) {
  this._height = value;
}

function setWidth(value) {
  this._width = value;
}


/**
 * =========================================================
 * ORQUESTRADOR (OPCIONAL)
 * =========================================================
 *
 * Um objeto pode ser usado para mapear comportamentos,
 * mantendo flexibilidade sem depender de condicionais.
 */

const setters = {
  height: setHeight,
  width: setWidth,
};

// exemplo de uso
setters.height(100);


/**
 * =========================================================
 * RESULTADO
 * =========================================================
 *
 * Antes:
 * setDimension("height", 100)
 *
 * Depois:
 * obj.setHeight(100)
 *
 * A segunda forma é autoexplicativa e reduz erros.
 */