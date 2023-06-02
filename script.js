
  
  let zminna1 = {
    data() {
        return {
          imgArr1: [
            { name: 'The Longines Avigation Bigeye 1.png', title: 'фото 1' },
            { name: 'The Longines Avigation Bigeye 2.png', title: 'фото 2' },
            { name: 'The Longines Avigation Bigeye 3.png', title: 'фото 3' },
            { name: 'The Longines Avigation Bigeye 4.png', title: 'фото 4' },
            { name: 'The Longines Avigation Bigeye 5.png', title: 'фото 5' },
            { name: 'The Longines Avigation Bigeye 6.png', title: 'фото 6' },
            { name: 'The Longines Avigation Bigeye 7.png', title: 'фото 7' },
           
        ],
            i1: 0,


        }
    },
    methods: {
        next() {
          this.i1++
         if( this.i1 > this.imgArr1.length-1){
            this.i1=0
         }
        },
        prev() {
           this.i1--
            if (this.i1 < 0) {
                this.i1 = this.imgArr1.length-1;
            }
        }
    },
}
Vue.createApp(zminna1).mount('.my-slider1')


let zminna2 = {
  data() {
      return {
        imgArr2: [
          { name: 'Flagship Heritage 1.png', title: 'фото 1' },
          { name: 'Flagship Heritage 2.png', title: 'фото 2' },
          { name: 'Flagship Heritage 3.png', title: 'фото 3' },
          { name: 'Flagship Heritage 4.png', title: 'фото 4' },
          { name: 'Flagship Heritage 5.png', title: 'фото 5' },
          { name: 'Flagship Heritage 6.png', title: 'фото 6' },
      ],
          i2: 0,


      }
  },
  methods: {
      next() {
        this.i2++
       if( this.i2 > this.imgArr2.length-1){
          this.i2=0
       }
      },
      prev() {
         this.i2--
          if (this.i2 < 0) {
              this.i2 = this.imgArr2.length-1;
          }
      }
  },
}
Vue.createApp(zminna2).mount('.my-slider2')


let zminna3 = {
    data() {
        return {
          imgArr3: [
            { name: 'HydroconQuest 1.png', title: 'фото 1' },
            { name: 'HydroconQuest 2.png', title: 'фото 2' },
            { name: 'HydroconQuest 4.png', title: 'фото 4' },
            { name: 'HydroconQuest 5.png', title: 'фото 5' },
            { name: 'HydroconQuest 6.png', title: 'фото 6' },
            { name: 'HydroconQuest 7.png', title: 'фото 7' },
            { name: 'HydroconQuest 9.png', title: 'фото 9' },
           

        ],
            i3: 0,
  
  
        }
    },
    methods: {
        next() {
          this.i3++
         if( this.i3 > this.imgArr3.length-1){
            this.i3=0
         }
        },
        prev() {
           this.i3--
            if (this.i3 < 0) {
                this.i3 = this.imgArr3.length-1;
            }
        }
    },
}
Vue.createApp(zminna3).mount('.my-slider3')


let zminna4 = {
    data() {
        return {
          imgArr4: [
            { name: 'Longines Dolcevita 1.png', title: 'фото 1' },
            { name: 'Longines Dolcevita 2.png', title: 'фото 2' },
            { name: 'Longines Dolcevita 3.png', title: 'фото 3' },
            { name: 'Longines Dolcevita 4.png', title: 'фото 4' },
   
        ],
            i4: 0,
  
  
        }
    },
    methods: {
        next() {
          this.i4++
         if( this.i4 > this.imgArr4.length-1){
            this.i4=0
         }
        },
        prev() {
           this.i4--
            if (this.i4 < 0) {
                this.i4 = this.imgArr4.length-1;
            }
        }
    },
}
Vue.createApp(zminna4).mount('.my-slider4')


let zminna5 = {
      data() {
          return {
            imgArr5: [
                { name: 'Longines Spirit Zulu Time 1.png', title: 'фото 1' },
                { name: 'Longines Spirit Zulu Time 2.png', title: 'фото 2' },
                { name: 'Longines Spirit Zulu Time 3.png', title: 'фото 3' },
                { name: 'Longines Spirit Zulu Time 4.png', title: 'фото 4' },
                { name: 'Longines Spirit Zulu Time 5.png', title: 'фото 5' },
                { name: 'Longines Spirit Zulu Time 6.png', title: 'фото 6' },
                { name: 'Longines Spirit Zulu Time 7.png', title: 'фото 7' },
                { name: 'Longines Spirit Zulu Time 8.png', title: 'фото 8' },
  
          ],
              i5: 0,
    
    
          }
      },
      methods: {
          next() {
            this.i5++
           if( this.i5 > this.imgArr5.length-1){
              this.i5=0
           }
          },
          prev() {
             this.i5--
              if (this.i5 < 0) {
                  this.i5 = this.imgArr5.length-1;
              }
          }
      },
}
Vue.createApp(zminna5).mount('.my-slider5')
  
  
let zminna6 = {
      data() {
          return {
            imgArr6: [
              { name: 'Longines Dolcevita X Yuy 1.png', title: 'фото 1' },
              { name: 'Longines Dolcevita X Yuy 2.png', title: 'фото 2' },
              { name: 'Longines Dolcevita X Yuy 3.png', title: 'фото 3' },
              { name: 'Longines Dolcevita X Yuy 4.png', title: 'фото 4' },
              { name: 'Longines Dolcevita X Yuy 5.png', title: 'фото 5' },
              { name: 'Longines Dolcevita X Yuy 6.png', title: 'фото 6' },
     
          ],
              i6: 0,
    
    
          }
      },
      methods: {
          next() {
            this.i6++
           if( this.i6 > this.imgArr6.length-1){
              this.i6=0
           }
          },
          prev() {
             this.i6--
              if (this.i6 < 0) {
                  this.i6 = this.imgArr6.length-1;
              }
          }
      },
}
Vue.createApp(zminna6).mount('.my-slider6')

let zminna7 = {
        data() {
            return {
              imgArr7: [
                { name: 'Longines Ultre-Chron Box Edition 1.png', title: 'фото 1' },
                { name: 'Longines Ultre-Chron Box Edition 2.png', title: 'фото 2' },
                { name: 'Longines Ultre-Chron Box Edition 3.png', title: 'фото 3' },
                { name: 'Longines Ultre-Chron Box Edition 4.png', title: 'фото 4' },
                { name: 'Longines Ultre-Chron Box Edition 5.png', title: 'фото 5' },
            ],
                i7: 0,
      
      
            }
        },
        methods: {
            next() {
              this.i7++
             if( this.i7 > this.imgArr7.length-1){
                this.i7=0
             }
            },
            prev() {
               this.i7--
                if (this.i7 < 0) {
                    this.i7 = this.imgArr7.length-1;
                }
            }
        },
}
Vue.createApp(zminna7).mount('.my-slider7')

let zminna8 = {
    data() {
        return {
          imgArr8: [
            { name: 'Master Collection 190th Anniversar 1.png', title: 'фото 1' },
            { name: 'Master Collection 190th Anniversar 2.png', title: 'фото 2' },
            { name: 'Master Collection 190th Anniversar 3.png', title: 'фото 3' },
            { name: 'Master Collection 190th Anniversar 4.png', title: 'фото 4' },
            { name: 'Master Collection 190th Anniversar 5.jpg', title: 'фото 5' },
            { name: 'Master Collection 190th Anniversar 6.jpg', title: 'фото 6' },
            { name: 'Master Collection 190th Anniversar 7.png', title: 'фото 7' },
           
        ],
            i8: 0,
  
  
        }
    },
    methods: {
        next() {
          this.i8++
         if( this.i8 > this.imgArr8.length-1){
            this.i8=0
         }
        },
        prev() {
           this.i8--
            if (this.i8 < 0) {
                this.i8 = this.imgArr8.length-1;
            }
        }
    },
}
Vue.createApp(zminna8).mount('.my-slider8')

let zminna9 = {
    data() {
        return {
          imgArr9: [
            { name: 'The Legend Longines  Diver Watch Blue 1.png', title: 'фото 1' },
            { name: 'The Legend Longines  Diver Watch Blue 2.png', title: 'фото 1' },
            { name: 'The Legend Longines  Diver Watch Blue 3.png', title: 'фото 1' },
            { name: 'The Legend Longines  Diver Watch Blue 4.png', title: 'фото 1' },
            { name: 'The Legend Longines  Diver Watch Blue 5.png', title: 'фото 1' },
            { name: 'The Legend Longines  Diver Watch Blue 6.png', title: 'фото 1' },
            { name: 'The Legend Longines  Diver Watch Blue 7.png', title: 'фото 1' },
           
        ],
            i9: 0,
  
  
        }
    },
    methods: {
        next() {
          this.i9++
         if( this.i9 > this.imgArr9.length-1){
            this.i9=0
         }
        },
        prev() {
           this.i9--
            if (this.i9 < 0) {
                this.i9 = this.imgArr9.length-1;
            }
        }
    },
}
Vue.createApp(zminna9).mount('.my-slider9')

let zminna10 = {
    data() {
        return {
          imgArr10: [
            { name: 'The Longines Heritage Military 1.png', title: 'фото 1' },
            { name: 'The Longines Heritage Military 2.png', title: 'фото 2' },
            { name: 'The Longines Heritage Military 3.png', title: 'фото 3' },
            { name: 'The Longines Heritage Military 4.png', title: 'фото 4' },  
        ],
            i10: 0,
  
  
        }
    },
    methods: {
        next() {
          this.i10++
         if( this.i10 > this.imgArr10.length-1){
            this.i10=0
         }
        },
        prev() {
           this.i10--
            if (this.i10 < 0) {
                this.i10 = this.imgArr10.length-1;
            }
        }
    },
}
Vue.createApp(zminna10).mount('.my-slider10')



let zminna11 = {
    data() {
        return {
          imgArr11: [
            { name: 'The Longines Legend Diver Watch 1.png', title: 'фото 1' },
            { name: 'The Longines Legend Diver Watch 2.png', title: 'фото 1' },
            { name: 'The Longines Legend Diver Watch 3.png', title: 'фото 1' },
            { name: 'The Longines Legend Diver Watch 5.png', title: 'фото 1' },
            { name: 'The Longines Legend Diver Watch 6.png', title: 'фото 1' },

        ],
            i11: 0,
  
  
        }
    },
    methods: {
        next() {
          this.i11++
         if( this.i11 > this.imgArr11.length-1){
            this.i11=0
         }
        },
        prev() {
           this.i11--
            if (this.i11 < 0) {
                this.i11 = this.imgArr11.length-1;
            }
        }
    },
}
Vue.createApp(zminna11).mount('.my-slider11')

let zminna12 = {
    data() {
        return {
          imgArr12: [
            { name: 'The Longines Master Collection 1.png', title: 'фото 1' },
            { name: 'The Longines Master Collection 2.png', title: 'фото 1' },
            { name: 'The Longines Master Collection 3.png', title: 'фото 1' },
            { name: 'The Longines Master Collection 4.png', title: 'фото 1' },
            { name: 'The Longines Master Collection 5.png', title: 'фото 1' },
            { name: 'The Longines Master Collection 6.png', title: 'фото 1' },
       

        ],
            i12: 0,
  
  
        }
    },
    methods: {
        next() {
          this.i12++
         if( this.i12 > this.imgArr12.length-1){
            this.i12=0
         }
        },
        prev() {
           this.i12--
            if (this.i12 < 0) {
                this.i12 = this.imgArr12.length-1;
            }
        }
    },
}
Vue.createApp(zminna12).mount('.my-slider12')








$(window).ready(function(){
    $(".boton").wrapInner('<div class=botontext></div>');
        
        $(".botontext").clone().appendTo( $(".boton") );
        
        $(".boton").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
        
        $(".twist").css("width", "25%").css("width", "+=3px");
    });

    function myFunction() {
        var x = document.getElementById("container-md");
        if (x.style.display === "block")  {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      } 


      function myFunction2() {
        var button = document.getElementById("show-more-btn");
      
        if (button.innerText === "Показати більше") {
          button.innerText = "Приховати";
        } else {
          button.innerText = "Показати більше";
        }
      }





