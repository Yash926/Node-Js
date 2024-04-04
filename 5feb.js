// const hobbies =['Cricket','Football'];
// for (const i of hobbies) {
//     console.log('play:'+i);
// }

// const hobbies =['Cricket','Football'];
// console.log(hobbies.map(hobbies=>'game:'+hobbies))

// const hobbies =['Cricket','Football'];
// // hobbies.push('badminton');
// hobbies.pop('badminton');
// console.log(hobbies); 


// const lpu={dep:'cse'}
// lpu.dep='it';
// console.log(lpu);


// spread and rest operation

// const food1=['Paneer','Lassi'];
// const food2=food1;
// console.log(food1);             //new item added to food1 will be automatically added to food 2 also and vice versa because both becomes the same basket and hence slice is used to avoid that.
// console.log(food2);
// food2.push('paratha');
// console.log(food1);
// console.log(food2);


// const food1=['Paneer','Lassi'];
// const food2=['PARATHA'];
// food1.push('paratha');
// console.log(food2);


// const item1=['idly','dosa'];
// const item2=item1.slice();      // now item 2 is a different basket.
// item2.push('sambhar');
// console.log(item1);
// console.log(item2);

// SPREAD operator

// const item1=['idly','dosa'];
// const item2=[item1]  ;  //without spread operator
// const item2=[...item1]    //with spread operator
// item1.push('sambhar');
// console.log(item1);
// const item2=[...item1]    //with spread operator
// console.log(item2);

// const student1={name:'Yash'};
// const student2={...student1,age:20};
// console.log(student2);


//REST OPERATOR


// const items=(item1,item2,item3)=>{
//     return [item1,item2,item3];
// }
// console.log(items(1,2,3,4,));

// const items=(...itms)=>{
//     return itms;
// }
// console.log(items(1,2,3,4,5)); //here any no. of items can be entered



