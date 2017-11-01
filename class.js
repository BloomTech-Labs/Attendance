const cs1 = ['Antonio Melendez', 'Brandon Moore',  'Brian Durbin', 'Dan Winslow',
    'Ely Alamillo','Evan Allen','Jake Cooley', 'Jason Campbell','Jesh Y','Jiovan Melendez',
    'John Wells','Julian Pegues','Latoyya Smith','Lois Truby','Manisha Lal','Pat Collins',
    'Patrick Kennedy','Ryan Sherrill','Sarah Majors','Stevie IsMagic','Tyge Johnson',
    'Wesley Harvey'];

const cs2 = ['Adam Lower','Ali Keshanian','Dylan Scheidt','Eric Blancas','Frank Faustino',
    'Joram Clervius','Matt Fay','Matt Jackson','Randall Whitlock','Raymond Rosario',
    'Roland Canuto','Ryan Lowe','Tyler Long'];

const cs3 = ['Anthony Tweed','Brandon Fizer','Bryson Hilton','Christopher Atoki',
    'Clayton Swafford','Collin Ferguson','Darryl Green','Donnie Reese','Doug Taylor',
    'Dr ew Mueller','Hussain Aljahmi','Illa Dutson','Jacob Stewart','John Linden',
    'John Pelley','Jonathan Chiang','Joseph Roland','Jourdan Clark','Kairat Abylkasymov',
    'Kayce Hubbard','Keagan Goetsch','Mathew Calkins', 'Mikin Patel','Mohammed Abumtary','Neil Barduson','Nicholas Costigan','Olayinka Akinhanmi',
    'Petrell Vereen','Samer Dabra',
    'Sara Fritz','Tai N',];

const cs4 = ['Alex Cassel', 'Alex Figliolia', 'Alex(andra) Novak','Austin French',
    'Bhavik Ravani','Brenda Estrada','Cassidy Avery','Christian Franco',
    'Christopher Coggins (Sondro)','Christy Crites','Consuella Moore','Dan Volosnikov',
    'David Long','Donnie Utley','Ellen Nitchals','Irish Sean Valdivia',
    'Isaac Osei','Jared Cooper','Jason Nuhn','Jeffrey Allen Schock II','Jennifer Dillard',
    'Jesse Reichel','Joshua Hall','Justin Borek','Kaymel White','Kevin Mullen',
    'Kei Ueda','Kia Choi','Lorin Fields','Marc Byndas','Mark Oliver','Mikias Hundie',
    'Nick Mckinley','Nicole Phillips','Patsakorn Wonghnasa','Perry Ahern','Rashmi Baheti',
    'RJay Ortiz','Ronald Cho','Ronald Goodwin','Ronald Willis','Samuel Kim','Sherial Elias Jawed',
    'Sneha Thadani','Sophie Muller','Susanna McDonald', 'Teresa Strout', 'Thomas Dillard','Travis Jones',
    'Tyler Sanford']

const returnClass = (list) => {
    const cs1_attendees = [];
    const cs2_attendees = [];
    const cs3_attendees = [];
    const cs4_attendees = [];
    for ( let i = 0; i <= list.length -1; i++) {
        
        if (cs1.includes(list[i])) {
             cs1_attendees.push(list[i]);
        }  
        if (cs2.includes(list[i])) {
             cs2_attendees.push(list[i]);
        }  
        if (cs3.includes(list[i])) {
             cs3_attendees.push(list[i]);
        }  
        if (cs4.includes(list[i])) {
             cs4_attendees.push(list[i]);
        }

    }

    if (cs1_attendees.length > 0) {
        console.log("This list belongs to CS1");
        console.log(cs1_attendees);
    } 
    if (cs2_attendees.length > 0) {
        console.log("This list belongs to CS2");
        console.log(cs2_attendees);
    } 
    if (cs3_attendees.length > 0) {
        console.log("This list belongs to CS3");
        console.log(cs3_attendees);
    } 
     if (cs4_attendees.length > 0) {
        console.log("This list belongs to CS4");
        console.log(cs4_attendees);
    }
};



console.log(returnClass(['Alex Cassel', 'Alex Figliolia', 'Alex(andra) Novak','Austin French',
'Bhavik Ravani','Brenda Estrada','Cassidy Avery','Christian Franco',
'Christopher Coggins (Sondro)','Christy Crites','Consuella Moore','Dan Volosnikov',
'David Long','Donnie Utley','Ellen Nitchals','Irish Sean Valdivia',
'Isaac Osei','Jared Cooper','Jason Nuhn','Jeffrey Allen Schock II','Jennifer Dillard',
'Jesse Reichel','Joshua Hall','Justin Borek','Kaymel White','Kevin Mullen',
'Kei Ueda','Kia Choi','Lorin Fields','Marc Byndas','Mark Oliver','Mikias Hundie',
'Nick Mckinley','Nicole Phillips','Patsakorn Wonghnasa','Perry Ahern','Rashmi Baheti',
'RJay Ortiz','Ronald Cho','Ronald Goodwin','Ronald Willis','Samuel Kim','Sherial Elias Jawed',
'Sneha Thadani','Sophie Muller','Susanna McDonald', 'Teresa Strout', 'Thomas Dillard','Travis Jones',
'Tyler Sanford','Anthony Tweed','Brandon Fizer','Bryson Hilton','Christopher Atoki',
'Clayton Swafford','Collin Ferguson','Darryl Green','Donnie Reese','Doug Taylor',
'Dr ew Mueller','Hussain Aljahmi','Illa Dutson','Jacob Stewart','John Linden',
'John Pelley','Jonathan Chiang']));