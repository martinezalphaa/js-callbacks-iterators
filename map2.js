var phoneBook = [
  {Abe: "111-111-1111"},
   {Bob: "222-222-2222"},
   {Cam: "333-333-3333"},
   {Dan: "444-444-4444"},
   {Ern: "555-555-5555"},
   {Fry: "111-111-1111"},
   {Gil: "222-222-2222"},
   {Hal: "333-333-3333"},
   {Ike: "444-444-4444"},
   {Jim: "555-555-5555"},
   {Kip: "111-111-1111"},
   {Liv: "222-222-2222"},
   {Mia: "333-333-3333"},
   {Nik: "444-444-4444"},
   {Oli: "555-555-5555"},
   {Pam: "111-111-1111"},
   {Qiq: "222-222-2222"},
   {Rob: "333-333-3333"},
   {Stu: "444-444-4444"},
   {Tad: "555-555-5555"},
   {Uwe: "111-111-1111"},
   {Val: "222-222-2222"},
   {Wil: "333-333-3333"},
   {Xiu: "444-444-4444"},
   {Yam: "555-555-5555"},
   {Zed: "111-111-1111"} //key value pair retrieve each key and add a value 
  ];

// Take the phonebook above and use map to return a new phonebook that includes a country-code that matches the rest of the phone number.
// For example, the 0th element of the new array should be {Abe: "1-111-111-1111"}

//Your code here


let newPhoneBook = phoneBook.map (element => {
  let phoneBookObject = Object.keys(element)
  
  let countryCode = element[phoneBookObject].charAt(0);

  return  phoneBookObject + ": " + countryCode + "-" + element[phoneBookObject];
});

console.log(newPhoneBook);