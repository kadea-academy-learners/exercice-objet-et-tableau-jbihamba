// 1. Crée un tableau nommé `baseDeDonnees` qui contiendra des objets représentant des utilisateurs.
//    Chaque utilisateur doit avoir les propriétés suivantes :
//    - id: number (identifiant unique)
//    - nom: string
//    - email: string
//    - password: string
//    - estConnecte: boolean (indique si l'utilisateur est connecté)
//    - estBloque: boolean (indique si l'utilisateur est bloqué)

// 2. Écris une fonction `signUp(nom, email, password, confirmPassword)` qui :
//    - Vérifie si l'email existe déjà dans `baseDeDonnees`. Si oui, retourne un message d'erreur.
//    - Vérifie si `password` et `confirmPassword` sont identiques. Si non, retourne un message d'erreur.
//    - Sinon, ajoute le nouvel utilisateur à `baseDeDonnees` (avec un id unique, estConnecte à false, estBloque à false) et retourne l'objet utilisateur créé.

// 3. Écris une fonction `login(email, password)` qui :
//    - Recherche l'utilisateur correspondant à l'email dans `baseDeDonnees`.
//    - Si l'utilisateur n'existe pas ou si le mot de passe est incorrect, retourne un message d'erreur.
//    - Si l'utilisateur est bloqué (`estBloque` à true), retourne un message d'erreur spécifique.
//    - Sinon, met à jour `estConnecte` à true pour cet utilisateur et retourne l'objet utilisateur connecté.

const baseDeDonnees = [
    {
        id : 1,
        nom :"joseph",
        email:"josephbihamba@gmail.com",
        password:"text12345",
        estConnecte : false,
        estBloque: false,
    },
     {
        id : 2,
        nom :"Grace Ntisha",
        email:"Ntish@gmail.com",
        password:"texte12345",
        estConnecte : false,
        estBloque: false,
    }
    
];

// fonction d'inscription

function signUp(nom, email, password, confirmPassword) {

    nom = nom.trim();
    email = email.trim().toLowerCase();

    //verifier si les champs est vide
    if (!nom || !email || !password || !confirmPassword){
        return "Erreur : tous champs sont obligatoire.";
    }

    //verifie si l'email existe deja 
    const utilisateurExistant = baseDeDonnees.find(u => u.email === email);
    if(utilisateurExistant){
        return "Erreur: cet email existe déjà";
    }
	 
    // voir la correspondance de mot de passe 
    if(password !== confirmPassword){
        return "Erreur: les mots de passe ne correspondent pas";
    }

    //creation d'un nouveau compte avec un id qui sera unique
    const newId = baseDeDonnees.length 
    ? baseDeDonnees[baseDeDonnees.length - 1].id + 1 : 1;

    const nouvelUtilisateur ={
        id :newId,
        nom:nom,
        email:email,
        password:password,
        estConnecte:false,
        estBloque:false,
    };

    //ici on va l'ajouter a la base de donnees
    baseDeDonnees.push(nouvelUtilisateur);

    //ensuite on retourne notre objet cree
    return nouvelUtilisateur;
}

    //Apres on va maintenant dans la fonction de connection

function login(email,password) {
    
    //On normalise l'email d'abord
    email = email.trim().toLowerCase();

    //Apres va chercher l'utilisateur 
    const utilisateur = baseDeDonnees.find(u => u.email === email);

    if(!utilisateur){
        return "Erreur: utilisateur non trouvé";
    }
    if(utilisateur.password !== password){
        return "Erreur: mot de passe incorrect";
    }
    //Voir si le compte est bloque
    if(utilisateur.estBloque){
        return "Erreur: utilisateur bloqué";
    }
	
    //apres on mets a jour le statut de la connection
    utilisateur.estConnecte =true;

    //on retourne l'utilisateur est connecte
    return utilisateur;
}

// sign up test

console.log(`Sign Up`);

console.log(signUp("Grace ","Ntish@gmail.com","grace1234","grace1234"));
console.log("\n LOGIN ");
console.log(login("Ntish@gmail.com", "grace1234"));

module.exports = { baseDeDonnees, signUp, login };
