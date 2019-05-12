<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <button class="modal-close" @click="$emit('close')"><i class="fa fa-close"></i></button>
                        <!-- á,é,í,ó,ú -->
                        <h3>Llámenos gratis al <br><strong>+34 615 641 666</strong><br> o te llamamos nosostros.</h3>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <div class="text-input">
                                <input class="text-area" type="text" placeholder="Nombre" v-model="name">
                            </div>
                            <div class="text-input">
                                <input class="text-area" type="tel" placeholder="Teléfono" v-model="phoneNumber">
                            </div>
                        </div>
                        <div class="container text">
                            <p>¿Cuando quiere que le llamemos?</p>
                        </div>
                        <div class="container flex-box">
                            <div class="btn-radio radio-input" 
                             v-for="option in options"
                             v-bind:key="option.id"
                             v-on:click="timeOption = option.id"
                             v-bind:class="{ active : (timeOption == option.id)}"
                            >
                                <p>{{ option.text }}</p>
                            </div>
                            <!-- <div class="btn-radio radio-input"><p>DEJAME ELEGIR</p></div> -->
                        </div>
                        <div class="container" v-if="timeOption ==  options[1].id">
                            <VueCtkDateTimePicker 
                             v-model="time" 
                             format="hh:mm a" 
                             formatted="LT"
                             minute-interval="15"
                             :only-time="true"
                             label="Select Time"
                             color="#312f42"
                            ></VueCtkDateTimePicker>
                        </div>

                        <div class="container">
                            <div class="btn-check">
                                <input type="checkbox" id="terms" v-model="termsChecked">
                                <span class="checkbox"></span>
                                <label for="terms">
                                    He leído y acepto las condiciones previstas en el 
                                    <strong>Aviso Legal*</strong>
                                </label>
                            </div>
                            <div class="btn-check">
                                <input type="checkbox" id="conditions" v-model="conditionsChecked">
                                <span class="checkbox"></span>
                                <label for="conditions">
                                    Consiento el uso de mis datos según los términos 
                                    establecidos en esta <strong>Politica de Privacidad*</strong>
                                </label>
                            </div>
                        </div>
                        

                        <!-- Try to do it with a transition -->
                        <div class="alert alert-danger alert-dismissible fade show" v-if="!textValidity" role="alert">
                            <strong>Error!</strong> Los campos no pueden estar vacios.
                            <button type="button" class="close" @click="textValidity=true" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div class="alert alert-danger alert-dismissible fade show" v-if="!timeValidity" role="alert">
                            <strong>Error!</strong> Indiquenos cuando quiere que le llamemos.
                            <button type="button" class="close" @click="timeValidity=true" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div class="alert alert-danger alert-dismissible fade show" v-if="!termsValidity" role="alert">
                            <strong>Error!</strong> Acepte los terminos y condiciones definidos.
                            <button type="button" class="close" @click="termsValidity=true" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <!-- <button class="black-box" @click="$emit('close')">CONTINUAR</button> -->
                        <button class="black-box" @click="checkInput">CONTINUAR</button>
                    </div>
                    <!-- <div class="modal-footer">
                        <button class="modal-default-button" @click="$emit('close')">OK</button>
                    </div> -->
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import { setTimeout } from 'timers';

export default {
    components: {
        VueCtkDateTimePicker
    },
    data() {
        return {
            name: '',
            phoneNumber: '',
            timeOption: -1,
            termsChecked: false,
            conditionsChecked: false,
            textValidity: true,
            timeValidity: true,
            termsValidity: true,
            options: [
                { id: 1, text: 'LO ANTES POSIBLE'},
                { id: 2, text: 'DEJAME ELEGIR'}
            ],
            time: "12:00"
        }
    },
    methods: {
        checkInput: function() {
            if(this.name === '' || this.phoneNumber === '') {
                // console.log('Los campos no pueden estar vacios');
                this.textValidity = false;
                setTimeout(() => {
                    this.textValidity = true;
                }, 3000);
            }
            
        //  CHeck for valid phone number

            if(this.timeOption == -1) {
                // console.log('Por favor indique cuando quiere que le llamemos'); 
                this.timeValidity = false;
                setTimeout(() => {
                    this.timeValidity = true;
                }, 3000);
            }

            if(!this.termsChecked || !this.conditionsChecked) {
                // console.log('Acepte los terminos y condiciones definidos');
                this.termsValidity = false;
                setTimeout(() => {
                    this.termsValidity = true;
                }, 3000);
            }

            if(this.textValidity && this.termsValidity && this.timeValidity) this.$emit('close');

        }
    }
 }
</script>


<style lang="stylus" scoped>
.modal-mask
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;

.modal-wrapper
  display: table-cell;
  vertical-align: middle;

.modal-container
  width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: "Open-Sans--Regular";
//   font-family: Helvetica, Arial, sans-serif;


.modal-header h3 {
    text-align center
    margin-top: 0;
    font-weight normal 
    letter-spacing 2px
}

.modal-close
    position relative
    float right
    background-color transparent
    border-style none 
    cursor pointer

.modal-body {
  margin: 20px 0;
}

.container
    width 100%
    margin-bottom 15px


.text-input 
    display block
    border-style solid
    border-color #312f42 
    width auto 
    padding 15px 20px
    margin-bottom 15px
    border-width 2px
    

.text-area
    font-size 20px
    border-style none 
    width 100%
    font-family: "Open-Sans--Regular";

input:focus 
    outline blue

.flex-box
    display flex
    cursor pointer

.btn-radio 
    text-align center
    border-width 2px
    cursor pointer

.radio-input 
    border-style solid 
    width 50%
    padding 10px 10px
    margin-right 10px

.radio-input:last-child
    margin-right 0px

.radio-input p 
    margin 0px

.active
    font-weight bold
    border-width 3px

.btn-check
    margin-bottom 12px
    // user-select none 
    // display block

.btn-check input 
    position absolute 
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

.btn-check:hover input ~ .checkbox
    background-color #cccccc

// .btn-check input:checked ~ .checkbox {
//   background-color: #2196F3;
// }

.checkbox:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.btn-check input:checked ~ .checkbox:after {
  display: block;
}

/* Style the checkmark/indicator */
.btn-check .checkbox:after {
  left: 6px;
  top: 0px;
  width: 5px;
  height: 12px;
  border: solid black ;
  border-width: 0 4px 4px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.checkbox
    position absolute  
    border-style solid 
    border-width 2px
    border-color black  
    height: 20px;
    width: 20px;
    background-color: white;
    
label 
    font-size 12px
    margin-left 30px

.black-box
    width 100%
    cursor pointer
    background-color #312f42
    color white
    font-family "Open-Sans--semibold"
    letter-spacing 1.3px
    font-size 18px
    padding 12px 13px
    border-style none
    cursor pointer

.black-box:active
    transform translateY(4px)

.black-box:focus, .modal-close:focus
    outline none 


// .modal-default-button {
//   float: right;
// }


// TRANSITION
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


// CLOCk


// ALERT
.alert-danger
    color #721c24
    background-color #f8d7da
    border-color #f5c6cb

// .alert-dismissible
//     padding-right 4rem

.alert 
    position relative
    padding 0.75rem 1.25rem
    margin-bottom 1rem
    border 1px solid transparent
    border-radius 0.25rem
    font-size 0.85em

.fade .show
    opacity 1

.fade
    transition opacity 0.15s linear 


.close 
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5;
    background-color transparent
    border-style none

.close:focus
    outline none 

.close:not(:disabled):not(.disabled)
    cursor pointer

.alert-dismissible .close
    position absolute 
    top 0
    right 0
    padding 0.6rem 0.8rem
    color inherit 

// button .close 
//     background-color transparent
//     border 0




</style>
