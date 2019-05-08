<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="text-container boletin">
                <h3>Boletin</h3>
                <p>Suscribete para recibir promociones, ofertas 
                    especiales y noticias. Maximo un correo a la 
                    semana.
                </p>
            </div>
            <div class="text-container medio">
                <div class="sitemap--container">
                    <div class="sitemap--menu">
                        <h3>Empresa</h3>
                        <ul>
                            <li>Sobre nosotros</li>
                            <li>Trabaja con nosotros</li>
                        </ul>
                    </div>

                    <div class="sitemap--menu">
                        <h3>Guias de compra</h3>
                        <ul>
                            <li>Ayuda</li>
                            <li>Terminos del servicio</li>
                            <li>Politica de privacidad</li>
                        </ul>
                    </div>

                    <div class="sitemap--menu">
                        <h3>Contacto</h3>
                        <ul>
                            <li>hola@brandink.es</li>
                            <li>+34 615 641 666</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="text-container">
                <h3>Metodos de pago</h3>
                <p>Tienes a tu disposicion muchos metodos de 
                    pago. Elige el que mas te convenga
                </p>
                <div class="payment-badges">
                    <div class="payment-badges--item">
                        <img class="master" src="./../assets/icons/mastercard.svg" alt="Mastercard">
                    </div>
                    <div class="payment-badges--item">
                        <img class="master" src="./../assets/icons/maestro.svg" alt="Maestro">
                    </div>
                    <div class="payment-badges--item">
                        <img class="master" src="./../assets/icons/cirrus.svg" alt="Cirrus">
                    </div>
                    <div class="payment-badges--item">
                        <img class="visa" src="./../assets/icons/visa.svg" alt="Visa">
                    </div>
                    <div class="payment-badges--item">
                        <img class="paypal" src="./../assets/icons/paypal.svg" alt="Paypal">
                    </div>
                </div>
            </div>

        </div>
        <div class="end-footer">
            <div class="end-footer--container">
                <div class="end-footer--text trustpilot">
                    <span>See our X reviews on Trustpilot (API)</span>
                </div>
                <div class="end-footer--text ssl">
                    <span>Transacciones seguras 100% SSL (API)</span>
                </div>
                <div class="end-footer--text fairwear">
                    <span>Comprometidos con</span>
                </div>
            </div>
        </div>
    </footer>
</template>


<script>
export default {

}
</script>

<style lang="stylus" scoped>
 .footer-container
    display flex
    padding 4em 1.5625em 3em 1.5625em
    margin 0 1.5625em
    width auto 
    justify-content space-between
    font-family "Open-Sans--semibold"
    

.text-container
    padding-bottom 1.75em
    display block

.boletin
    flex: 0 0 22em;

.medio
    flex: 1 1 auto 


.sitemap--container
    display flex
    padding 0 1.875em
    justify-content space-around
    // min-width 685px

.sitemap--menu
    margin 0 0.625em

.payment-badges
    display flex
    align-items center
    justify-content space-between

.payment-badges--item
    margin 0
    margin-right 0.5em

.master
    width 40px

.visa
    width 70px

.paypal
    width 90px
    

h3
    margin: 0;
    font-size: 1.2em;
    line-height: 1em;

p
    padding-top: 19px;
    padding-bottom: 23px;
    font-size: 0.75em;
    letter-spacing: 0.4px;
    margin: 0;
    font-family "Open-Sans--Regular"

ul
  font-size 0.75em
  list-style-type: none;
  margin: 19px 0 0 0px;
  padding: 0;
  font-family "Open-Sans--Regular"

li
    margin 0 0 8px 0
    cursor pointer




// END FOOTER

.end-footer
    border-top: 1px solid rgba(11, 11, 11, 0.1);
    width 100%
    height 4em

.end-footer--container
    width 60%
    display flex
    justify-content space-around
    font-family "Open-Sans--Regular"
    font-size 0.75em
    margin 1.5em 0


</style>


