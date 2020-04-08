// 1) Stwórz strukturę danych związaną z książką adresową.
// Obiekt charakteryzujący pojedyńczy kontak:
// Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji
// Ma umożliwiać: Tworzenie obiektu, aktualizację datę modyfikacji, wyświetlać 
// w odpowiednim formacie przy wywołaniu. 

class Contact {
    constructor(name, surname, email, date){
        this.name = name;
        this.surname = surname;
        this.email= email;
        this.date = date;
    }
    createContact(newContact){
        this.name.push(newContact)
}
}
const Kowalski2 = new Contact ('jan','kowalski2','jw@op.pl','121')

// Obiekt charakteryzujący grupę kontaktów:
// Ma mieć: listę kontaktów
// Ma umożliwiać: Create/Read/Update/Remove (CRUD)
class GroupContact extends Contact{
    constructor(name, surname,email, date){
        super(name,surname,email,date)
        this.contactList = contactList
    }
    read(){
        
    }
}


// Obiekt "książka adresowa" 
// Ma mieć: listę wszystkich kontaktów, listę grup kontaktów.
// Ma umożliwiać: create/read/update/delete , umożliwiać sortowanie listy po frazach
class AdressBook {
    constructor(contactList, groupList){
    this.contactList = contactList;
    this.groupList = groupList;
    }
    createContact(newContact){
        this.contactList.push(newContact)
    }
}


const Kowalski = new AdressBook ('Kowalski')




