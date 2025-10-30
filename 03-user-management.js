// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin qui prends en paramètre un tableau d'objet d'utilisateurs .
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.

function whoIsAdmin(utilisateurs) {

	// tableau qui contiendra les noms des admins

	let admin = [];

	// boucle pour afficher les utilisers qui sont admin

	for(let i=0;i<utilisateurs.length;i++){
		if (utilisateurs[i].estAdmin){
			admin.push(utilisateurs[i].nom);
		}
	}
	return admin;
}

// tableau contenant les noms des utilisateurs

const users =[
	{
	nom :'joseph',
	age : 28,
	estAdmin : true
	},

  	{ 

	nom: "Charlie", 
	age: 28, 
	estAdmin: true 

	}

];

// affiche dans la console ce qui sont admins

console.log(whoIsAdmin(users));
module.exports = {
	whoIsAdmin,
};


