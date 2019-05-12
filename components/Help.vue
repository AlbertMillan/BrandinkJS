<template>
    <div class="help">
        <div class="help-header">
            <div class="space"></div>
            <div class="header">Centro de Ayuda</div>
        </div>
        <div class="help-body">
            <div class="help-wrapper">
                <div class="help-btns">
                    <div class="option-btn" 
                      v-for="option in options" 
                      :key="option.id"
                      @click="selectedOption = option.id"
                      :class="{ active: (selectedOption == option.id)}"
                    >
                        <!-- <i :src="option.src"></i> -->
                        <img class="icon" v-if="selectedOption == option.id" :src="option.src+'-b.svg'">
                        <img class="icon" v-if="selectedOption != option.id" :src="option.src+'.svg'">
                        <div class="option-container">{{ option.name }}</div>
                    </div>
                </div>

                <div class="help-info">
                     <!-- Contidional statement here  -->
                    <div class="title-container">
                        <h2>{{ options[selectedOption].name }}</h2>
                    </div>
                    <div class="questions-container">
                        <ul>
                            <li class="question" 
                              v-for="question in options[selectedOption].questions"
                              :key="question.id"
                              @click="question.isActive = !question.isActive"
                            >
                                <strong>{{ question.text }}</strong>
                                <p v-if="question.isActive">{{ question.answer }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            selectedOption: 1,
            options: [
                { 
                    id: 0, 
                    name: "Preguntas Frecuentes",
                    src: "assets/images/preguntas-frecuentes",
                    questions: [
                        {
                            id: 0,
                            isActive: false,
                            text: "¿Puedo devolver un pedido?",
                            answer: ''
                        },
                        {
                            id: 1,
                            isActive: false,
                            text: "¿Puedo modificar la cantidad de un pedido?",
                            answer: ''
                        },
                        {
                            id: 2,
                            isActive: false,
                            text: "¿Puedo modificar el diseño una vez hecho el pedido?",
                            answer: ''
                        },
                        {
                            id: 3,
                            isActive: false,
                            text: "¿Puedo cancelar el pedido?",
                            answer: ''
                        },
                    ]
                },
                { 
                    id: 1, 
                    name: "Pedidos" ,
                    src: "assets/images/pedido",
                    questions: [
                        {
                            id: 0,
                            isActive: false,
                            text: "¿Puedo devolver el pedido?",
                            answer: `Lamentablemente no. Al ser un producto personalizado no 
                                        se puede devolver ya que no valdría para otro posible cliente.`
                        },
                        {
                            id: 1,
                            isActive: false,
                            text: "¿Puedo modificar la cantidad del pedido?",
                            answer: `No, si el pedido aun no se ha empezado a producir (menos 
                                        de un día después de haber realizado el pago) se puede 
                                        cancelar y solicitar otro con las nuevas cantidades.`
                        },
                        {
                            id: 2,
                            isActive: false,
                            text: "¿Puedo modificar el diseño una vez hecho el pedido?",
                            answer: `No, si el pedido aun no se ha empezado a producir (menos 
                                        de un día después de haber realizado el pago) se puede 
                                        cancelar y solicitar otro con el nuevo diseño).`
                        },
                        {
                            id: 3,
                            isActive: false,
                            text: "¿Puedo modificar el tamaño del diseño una vez hecho el pedido?",
                            answer: `Sí, en el caso de que tu pedido no esté ya en fase de 
                                        producción. (menos de 48 horas una vez realizado el pago). 
                                        Mediante el siguiente Formulario puede solicitar un cambio 
                                        en el tamaño.`
                        },
                        {
                            id: 4,
                            isActive: false,
                            text: "¿Puedo cancelar el pedido?",
                            answer: `Los pedidos se pueden cancelar a las pocas horas de haber 
                                        empezado y será el departamento de producción quien nos 
                                        comunique si el pedido aún no se ha empezado a producir 
                                        y se puede cancelar por completo.`
                        },
                    ]
                },
                { 
                    id: 2, 
                    name: "Producto",
                    src: "assets/images/producto",
                    questions: [
                        {
                            id: 0,
                            isActive: false,
                            text: "¿Cuáles son las dimensiones de estampación?",
                            answer: `Cualquier tamaño mientras no supere los 30 x 40 cm.`
                        },
                        {
                            id: 1,
                            isActive: false,
                            text: "¿Qué tipo de técnica de estampación se usa?",
                            answer: `Nuestros expertos son lo que valoran cada diseño y según 
                                        los diferentes parámetros de cada pedido deciden cual 
                                        es la mejor opción. El cliente siempre será conocedor 
                                        de la técnica utilizada antes de proceder a realizar 
                                        el pago.`
                        },
                        {
                            id: 2,
                            isActive: false,
                            text: "¿En el precio están incluidas las pantallas, fotolitos, clichés…?",
                            answer: `Sí, el precio que enviamos por correo electrónico es 
                                        definitivo, incliye la prenda, el material necesario 
                                        para estampar y la mano de obra.`
                        },
                        {
                            id: 3,
                            isActive: false,
                            text: "¿Puedo incluir corte de hombre y de mujer en el mismo pedido?",
                            answer: `Claro, para confirmar el pedido es necesario introducir las 
                                        tallas y el tipo de corte. El cliente es totalmente libre 
                                        de decidir sobre las tallas y el corte.`
                        },
                        {
                            id: 4,
                            isActive: false,
                            text: "¿Tenéis tallas para niños?",
                            answer: `Actualmente tenemos tallas para niños pero no disponibles 
                                        en nuestra tienda. En el caso de estar interesado puedes 
                                        solicitar información a cerca de tallas para niños 
                                        mediante el siguiente Formulario.`
                        },
                        {
                            id: 5,
                            isActive: false,
                            text: "¿Puedo incluir en un mismo pedido diferentes gramajes?",
                            answer: `No, deberían ir en pedidos separados.`
                        },
                         
                    ]
                },
                { 
                    id: 3, 
                    name: "Pago y Facturas",
                    src: "assets/images/pago-y-facturas",
                    questions: [
                        {
                            id: 0,
                            isActive: false,
                            text: "¿Cómo puedo solicitar una factura con I.V.A.?",
                            answer: `En el momento que se procede al pago hay disponible una 
                                        casilla llamada “Quiero recibir mi factura” la cual si
                                        está activa se enviará la factura por correo electrónico 
                                        una vez realizado el pedido.
                                        En el caso de no haberla solicitado durante el procedimiento 
                                        de compra, aún estás a tiempo rellenando el siguiente Formulario.`
                        },
                        {
                            id: 1,
                            isActive: false,
                            text: "¿Puedo recibir una factura con un término de pago diferente?",
                            answer: `No, Nuestro término de pago siempre es por adelantado. 
                                        No se empieza a producir ningún trabajo sin haber realizado 
                                        el pago previamente.`
                        },
                        {
                            id: 2,
                            isActive: false,
                            text: "¿Puedo recibir una factura antes de pagar?",
                            answer: `No, la factura solo se genera una vez realizado el pago y 
                                        puesta en marcha la producción. En el caso de no haber 
                                        solicitado tu factura durante el proceso de compra, aún 
                                        estás a tiempo rellenando el siguiente Formulario.`
                        },
                        {
                            id: 3,
                            isActive: false,
                            text: "¿Qué métodos de pago acepta Brandink?",
/*NEED TO COMPLETE */       answer: `Disponemos de varios métodos de pago:`
                        },
                        {
                            id: 4,
                            isActive: false,
                            text: "¿Puedo pagar con tarjeta de crédito?",
                            answer: `Sí, aceptamos tanto tarjeta de débito como de crédito.`
                        },
                        {
                            id: 5,
                            isActive: false,
                            text: "¿Puedo pagar el pedido cuando lo reciba?",
                            answer: `No, el pago siempre es por adelantado. Se empieza la 
                                        producción una vez se ha abonado el pedido.`
                        },
                        {
                            id: 6,
                            isActive: false,
                            text: "¿Puedo pagar por trasferencia bancaria?",
                            answer: `Sí, nuestros datos son:

                                        Bla bla bla…

                                        Recuerda que en concepto es necesario poner la referencia 
                                        del pedido BRXXXXX.
                                        Este método de pago puede hacer atrasos la entrega a 1 
                                        o 2 días más dependiendo de la entidad bancaria del cliente.`
                        },
                    ]
                },
                { 
                    // á,é,í,ó,ú
                    id: 4, 
                    name: "Entrega",
                    src: "assets/images/entrega",
                    questions: [
                        {
                            id: 0,
                            isActive: false,
                            text: "¿Brandink hace envíos a Ceuta, Melilla, Islas Baleares o Islas Canarias?",
                            answer: `Sí, aunque conlleva cargos adicionales según el destino. Puedes consultar 
                                        nuestra política en envío para destinos fuera de la península`
                        },
                        {
                            id: 1,
                            isActive: false,
                            text: "¿Cuánto cuesta el envío?",
                            answer: `Pedidos superiores a los 100€ en la península son totalmente gratis.
                                        En pedidos inferiores, el envío es de 4,50€. Envíos a Ceuta, Melilla, 
                                        Islas Baleares e Islas Canarias pueden tener diferentes tarifas.`
                        },
                        {
                            id: 2,
                            isActive: false,
                            text: "¿Puedo recoger mi pedido en persona?",
                            answer: `No. Actualmente no tenemos ningún establecimiento a puerta abierta para
                                        el público por lo que la única opción de entrega es mediante el envío.`
                        },
                    ]
                },
                { 
                    id: 5, 
                    name: "Reclamaciones",
                    src: "assets/images/reclamaciones",
                    questions: [
                        {
                            id: 0,
                            isActive: false,
                            text: "¿Cómo puedo presentar una reclamación? ",
                            answer: `Para presentar una reclamación simpleme hemos creado un 
                                        Formulario de reclamaciones para poder simplificar el 
                                        proceso. Puedes utilizarlo para exponernos cualquier 
                                        problema sobre nuestros productos.`
                        },
                        {
                            id: 1,
                            isActive: false,
                            text: "¿Cual es el procedimiento una vez presentada la reclamación?",
                            answer: ''
                        },
                        
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
.help-body
    background-color #f8f8f8
    display inline-block
    width 100%
    // padding-bottom 5%

.help-header
    background-image: url("../assets/images/patron-cabecera.png")
    background-repeat: repeat;
    background-color #312f42

.space
    height 4em
    display block

.header
    color white
    font-size 40px
    font-family "Open-Sans--Semibold"
    text-align center
    padding 4.2em
    letter-spacing 1.5px


.help-wrapper
    display flex
    padding 6em 10em

.help-btns
    margin-right 6em
    width auto 
    min-width 225px

.option-btn
    text-align left
    padding 12px
    margin-bottom 25px
    border-style solid 
    border-width 1.5px
    border-color #312f42
    font-family "Open-Sans--Regular"
    cursor pointer
    display flex

.option-btn:last-child
    margin-bottom 0px

.option-btn:not(.active):hover
    background-color lightgray 

.active
    background-color #312f42
    // background white
    color white

.option-container 
    padding-top 3px


.help-info
    width 100%
    padding 0em 3em
    font-family "Open-Sans--Semibold"

h2
    font-size 28px
    margin 0
    padding 0
    letter-spacing 2.5px

.questions-container
    margin 1.5em 0
    letter-spacing 1.5px

ul
    margin 0

li
    margin 3em 0em
    cursor pointer

li:first-child
    margin-top 2em
    margin-bottom 3em

li:last-child
    margin-bottom 0

p
    font-family "Open-Sans--Regular"

img 
    width 20%
    height 20%

</style>


