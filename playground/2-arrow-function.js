// const square = function (x) {
//     return x*x;
// }

// const square =  (x) => {
//     return x*x;
// }

// const square =  (x) => x*x;

const event = {
    name: 'birthday Party',
    guestList : ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        // const that = this;

        console.log('Guest list for '+ this.name) ;
 
        this.guestList.forEach((guest) => {
            console.log(guest+' is attending '+ this.name );
        });
    }
}

event.printGuestList();
