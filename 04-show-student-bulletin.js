// Tu disposes d'un tableau nommé `eleves` dont chaque élément est un objet ayant la structure suivante :
// {
//   nom: string,      // Le nom de l'élève
//   notes: number[]   // Un tableau de notes (nombres) obtenues par l'élève
// }
//
// Écris une fonction `showStudentBulletin(eleves)` qui, pour chaque élève du tableau, retourne un bulletin scolaire contenant :
// - Son nom
// - Sa moyenne (calculée à partir de ses notes, arrondie à deux décimales)
// - Un commentaire basé sur la moyenne obtenue :
//     - Moyenne >= 16 : "Excellent"
//     - Moyenne >= 14 : "Très Bien"
//     - Moyenne >= 12 : "Bien"
//     - Moyenne >= 10 : "Passable"
//     - Moyenne < 10  : "À revoir"
// Dans le cas où l'élève n'a pas de notes, la moyenne doit être considérée comme 0 et le commentaire "À revoir".
function showStudentBulletin(eleves) {

	// tableau qui va contenir le bulletin

	const bulletins = [];

	// ici on doit parcourir chaque elevevs
	for (let i = 0; i<eleves.length; i++){
		const eleve = eleves[i];
		const notes = eleve.notes;

		// apres on verifier d'abord si l'eleve a de note 
		let moyenne = 0;
		if(notes && notes.length > 0) {

			// on calcule  la somme
			let somme =0;
			for(let index =0; index < notes.length; index ++){

				somme += notes[index];
			}

			// on calcule ensuite la moyenne

			moyenne = somme / notes.length;
		}
		//ici on arrondit la moyenne en decimal
		moyenne =Math.round(moyenne * 100) / 100;

		//apres on determine le satisfaction
		let commentaire = "";
		if(moyenne >= 16){
			commentaire = `Excellent`;
		}else if (moyenne >= 14){
			commentaire = `Très Bien`;
		} else if(moyenne>=12){
			commentaire = "Bien";
		} else if(moyenne >=10){
			commentaire =`Passable`;
		} else{
			commentaire = `À revoir`;
		}

		// maintenant on cree un tableau de bulletin
		const bulletin ={
			nom :eleve.nom,
			moyenne : moyenne,
			commentaire : commentaire
		};

		// on ajoute au tableau bulletin final
		bulletins.push(bulletin);
	}
	
	//on returne bulletin
	return bulletins;
}

const eleves = [
	{
		nom:`joseph`,
		notes :[30,80,60,80],
	},
		{
		nom:`bihamba`,
		notes :[10,10,10,20],
	},

		{
		nom:`joe`,
		notes :[60,90,60,80],
	}
];
console.log(showStudentBulletin(eleves));

module.exports = {
	showStudentBulletin,
};