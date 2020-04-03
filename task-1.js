// 1) Stwórz strukturę danych związaną z książką adresową.

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


// Obiekt charakteryzujący pojedyńczy kontak:
// Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji
// Ma umożliwiać: Tworzenie obiektu, aktualizację datę modyfikacji, wyświetlać 
// w odpowiednim formacie przy wywołaniu. 

// Obiekt charakteryzujący grupę kontaktów:
// Ma mieć: listę kontaktów
// Ma umożliwiać: Create/Read/Update/Remove (CRUD)

