import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './shoppingCart.html'
})
export class AppComponent {
  title = 'Katana Vendor';
  items = [{'item':'Cursed Blade Muramasa', 'price':10340.00}, 
  {'item':`Onikiri and Ubadachi`, 'price':3200.00},
  {'item':'ChunChunMaru', 'price':200.00},
  {'item':'Kusai Blade', 'price':1.99}];

  orders = [];
  taxes = 0;
  total = 0;
  grandTotal = 0;
  firstName: string;
  lastName: string;
  address:string;
  submitted: boolean;
  fullAddress:string;

  


      constructor() {
        this.firstName= "Name"
        this.lastName= "Last-Name"
        this.address = "Address "
      }

      //item name
      //qty
      //price

      onSubmit(): void {
        this.submitted = true; 
        this.fullAddress = `Order for: ${this.firstName} ${this.lastName} at ${this.address}`
      }


      toFalse():void  {
        this.submitted = false;
      }
    


      addItem(f:NgForm){
        //if (!f.value.katana || !f.value.quantity){return;}
        //negates activation of Add items if null

        if (!f.value.katana || !f.value.quantity){
          return;
        }

        const order = { 
          item : f.value.katana.item, 
          price : f.value.katana.price,
          qty : f.value.quantity,
          amount: (f.value.quantity * f.value.katana.price)
        }

        
        this.orders.push(order);
        console.log(JSON.stringify(this.orders))
        console.log(JSON.stringify(f.value))

        this.recalculateSubtotal()
        
      } 

      removeItem(index) {
          this.orders.splice(index,1); // remove 1 item at ith place
          this.recalculateSubtotal()
        }
     

      recalculateSubtotal() {
        this.total = 0;
        this.taxes = 0;
        this.grandTotal = 0 ;

        for(let num=0 ;num < this.orders.length; num++){
          this.total += this.orders[num].amount;
          this.taxes = (this.total * 0.07);
          this.grandTotal = (this.total + this.taxes);
          }
        }
  
  
    }

  
    //   removeItem(item) {
    //     for(var i=0; i<this.items.length; i++) {
    //       if(this.items[i].num == item.num) {
    //         this.items.splice(i,1); // remove 1 item at ith place
    //       }
    //     }
    // }
