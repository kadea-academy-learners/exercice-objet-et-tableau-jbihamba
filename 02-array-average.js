// Crée un tableau `notes` contenant 5 nombres
// Écrire une fonction averageNote avec `notes` comme parametre qui effectue les opérations suivantes :
// - Calcule la moyenne des notes
// - retourne un message "Réussi" si la moyenne est >= 10, sinon "Échoué"

function averageNote(notes) {
	
	let somme =0;

	// gere le tableau vide
	
	if(notes.length === 0) return 'Échoué';

	for(let i =0; i<notes.length; i++){
		
		// Calculer la somme

		somme  += notes[i];
	}

	// Calculer la moyenne apres la boucle

		let moyenne = somme / notes.length;

	// Retourner le message approprié

		if(moyenne >= 10){
			console.log(`Réussi`);
			return 'Réussi';
		} else{
			console.log(`Échoué`);
			return 'Échoué';
		}
	
}
averageNote ([100,70,80,90,60]);
module.exports = {
	averageNote,
};



