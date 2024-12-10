const questions = [
    {
        "question": "Qual è la patologia più frequente dell’orecchio esterno?",
        "options": ["Otite esterna", "Carcinoma basocellulare", "Colesteatoma"],
        "correct": 0
    },
    {
        "question": "L'otite ESTERNA:",
        "options": ["Deriva sempre da un raffreddore", "Può derivare da un raffreddore", "Non ha rapporti diretti con il raffreddore"],
        "correct": 1
    },
    {
        "question": "Quale affezione entra in diagnosi differenziale con l'otite esterna maligna?",
        "options": [
            "Carcinoma spinocellulare",
            "Colesteatoma",
            "Poliposi",
            "Herpes zoster oticus",
            "Colesteatoma",
            "Mastoidite",
            "Otite media cronica",
            "Osteoma",
            "Atresia auris"
        ],
        "correct": 1
    },
    {
        "question": "Sospetto di otite esterna maligna quando:",
        "options": [
            "Non guarisce un'otite esterna con normale trattamento (resistente alla terapia)",
            "È presente un colesteatoma",
            "Si presenta un'otite con ipoacusia improvvisa",
            "È presente otalgia persistente senza altri sintomi",
            "Concomitanza di un’otite media acuta",
            "Concomitanza di un colesteatoma"
        ],
        "correct": 0
    },
    {
        "question": "L’otite esterna maligna è generalmente sostenuta da:",
        "options": [
            "Pseudomonas aeruginosa",
            "Hemophilus influenzae",
            "Streptococcus pneumoniae"
        ],
        "correct": 0
    },
    {
        "question": "La presenza di vescicole nella conca indica:",
        "options": [
            "carcinoma dell’orecchio esterno",
            "herpes zooster oticus",
            "otite esterna maligna"
        ],
        "correct": 1
    },
    {
        "question": "L'herpes zoster oticus si associa tipicamente a:",
        "options": [
            "Ipoacusia bilaterale",
            "Nevralgia e vescicole auricolari",
            "Vertigine posizionale"
        ],
        "correct": 1
    },
    {
        "question": "La cheratite erpetica è causata da:",
        "options": [
            "Virus herpes simplex",
            "Batteri",
            "Virus varicella-zoster"
        ],
        "correct": 0
    },
    {
        "question": "Le lesioni orali e periorali da herpes simplex sono causate prevalentemente da:",
        "options": [
            "HSV tipo 1",
            "HSV tipo 2",
            "Una combinazione di HSV tipo 1 e 2"
        ],
        "correct": 0
    },
    {
        "question": "Qual è l’herpesvirus orale più frequente?",
        "options": [
            "HSV-1 16",
            "HSV-1 18",
            "HSV-2"
        ],
        "correct": 0
    },
    {
        "question": "La cheratite erpetica è causata da:",
        "options": [
            "Virus herpes simplex",
            "Adenovirus",
            "Mycobacterium tuberculosis"
        ],
        "correct": 0
    },
    {
        "question": "L’herpes oftalmico può dare origine a:",
        "options": [
            "Cheratite erpetica",
            "Cheratocongiuntivite erpetica",
            "Entrambe le precedenti"
        ],
        "correct": 2
    },
    {
        "question": "Il carcinoma rinofaringeo è stato posto in associazione con",
        "options": [
            "herpes virus",
            "papilloma virus",
            "Epstein Barr virus"
        ],
        "correct": 2
    },
    {
        "question": "La paresi o paralisi faciale “idiopatica” (o “a frigore”) è in genere considerata derivante da:",
        "options": [
            "infezione da Herpes virus"
        ],
        "correct": 0
    },
    {
        "question": "L’otosclerosi può considerarsi:",
        "options": [
            "inevitabile conseguenza di un’otite media acuta mal curata",
            "una manifestazione infiammatoria cronica caratterizzata dalla formazione di placche di sostanza amorfa",
            "manifestazione osteodistrofica a partenza dall’orecchio interno"
        ],
        "correct": 2
    },
    {
        "question": "L’otosclerosi è classicamente una malattia a partenza:",
        "options": [
            "dal cavo timpanico",
            "dall’orecchio interno",
            "dalla catena ossiculare"
        ],
        "correct": 1
    },
    {
        "question": "L’ipoacusia neurosensoriale nell’otosclerosi è posta soprattutto in relazione a:",
        "options": [
            "azione dannosa da tossine virali",
            "atrofia da mancata stimolazione del recettore",
            "azione dannosa degli enzimi del focolaio"
        ],
        "correct": 2
    },
    {
        "question": "L'otosclerosi è una patologia caratterizzata da:",
        "options": [
            "Degenerazione nervosa",
            "Fissazione della staffa nell’orecchio medio",
            "Perdita di elasticità della membrana timpanica"
        ],
        "correct": 1
    },
    {
        "question": "Quale delle seguenti alterazioni è tipica dell’otosclerosi?",
        "options": [
            "Perdita neurosensoriale bilaterale",
            "Calcificazione dei turbinati",
            "Ankylosi della staffa"
        ],
        "correct": 2
    },
    {
        "question": "L’otosclerosi colpisce principalmente:",
        "options": [
            "La membrana timpanica",
            "La staffa nell’orecchio medio",
            "La coclea"
        ],
        "correct": 1
    },
    {
        "question": "L’otosclerosi è una malattia che coinvolge:",
        "options": [
            "Il nervo acustico",
            "La catena ossiculare dell’orecchio medio",
            "La coclea"
        ],
        "correct": 1
    },
    {
        "question": "L'età di insorgenza tipica dell'otosclerosi è:",
        "options": [
            "Giovanile",
            "Neonatale",
            "Senile"
        ],
        "correct": 0
    },
    {
        "question": "Il sintomo iniziale dell’otosclerosi è abitualmente:",
        "options": [
            "Ipoacusia di trasmissione",
            "Acufene bilaterale",
            "Vertigine persistente"
        ],
        "correct": 0
    },
    {
        "question": "Timpanogramma dell'otosclerosi:",
        "options": [
            "Tipo A (normale)",
            "Tipo B (appiattito)",
            "Tipo C (negativo)"
        ],
        "correct": 0
    },
    {
        "question": "La chirurgia nell’otosclerosi:",
        "options": [
            "Ripristina una buona trasmissione del suono",
            "Blocca l’evoluzione della malattia",
            "Entrambi gli effetti"
        ],
        "correct": 0
    },
    {
        "question": "La chirurgia nell’otosclerosi:",
        "options": [
            "consiste in stapedotomia/stapedectomia"
        ],
        "correct": 0
    },
    {
        "question": "La stapedotomia/stapedectomia per otosclerosi ha finalità:",
        "options": [
            "curative verso la malattia di base",
            "funzionali",
            "entrambe"
        ],
        "correct": 1
    },
    {
        "question": "Alternativa chirurgica all'otosclerosi:",
        "options": [
            "Protesizzazione acustica",
            "Timpanoplastica",
            "Stapedectomia",
            "riabilitazione logopedica",
            "Terapia farmacologica",
            "nessuna delle precedenti"
        ],
        "correct": 0
    },
    {
        "question": "La protesizzazione dopo stapedotomia/stapedectomia per otosclerosi è indicata:",
        "options": [
            "se il deterioramento cocleare la rende utile",
            "se non c’è deterioramento cocleare",
            "mai"
        ],
        "correct": 0
    },
    {
        "question": "Nervo facciale decorre nell'osso:",
        "options": [
            "Temporale",
            "Occipitale",
            "Mandibolare"
        ],
        "correct": 0
    },
    {
        "question": "Il nervo facciale attraversa:",
        "options": [
            "La parotide",
            "La ghiandola sottolinguale",
            "La ghiandola sottomandibolare",
            "La tiroide"
        ],
        "correct": 0
    },
    {
        "question": "Nervo facciale è:",
        "options": [
            "Nervo misto",
            "Solo motorio",
            "Solo sensitivo"
        ],
        "correct": 0
    },
    {
        "question": "L’affezione più facilmente responsabile di danno al nervo faciale intracranico V:",
        "options": [
            "colesteatoma",
            "otosclerosi",
            "timpanosclerosi"
        ],
        "correct": 0
    },
    {
        "question": "La paralisi del faciale può essere causata da:",
        "options": [
            "Colesteatoma",
            "Nodulo e polipi delle corde vocali",
            "Otite media cronica",
            "Trauma cranico"
        ],
        "correct": 1
    },
    {
        "question": "Nel trattamento della paresi idiopatica del faciale i corticosteroidi si usano:",
        "options": [
            "in alcuni casi",
            "sempre",
            "raramente"
        ],
        "correct": -1
    },
    {
        "question": "Quale di questi sintomi non è coinvolto nella paralisi del faciale:",
        "options": [
            "lagoftalmo",
            "difficoltà nella masticazione e articolazione della parola",
            "odinofagia"
        ],
        "correct": -1
    },
    {
        "question": "Nel trattamento della paresi idiopatica del faciale i corticosteroidi si usano:",
        "options": [
            "in alcuni casi",
            "sempre",
            "raramente"
        ],
        "correct": 0
    },
    {
        "question": "La paralisi del nervo facciale di origine intratemporale coinvolge:",
        "options": [
            "Tutto l’emivolto",
            "Una parte dell’emivolto",
            "Solo i muscoli oculari",
            "Non vi è una regola precisa"
        ],
        "correct": 0
    },
    {
        "question": "La paralisi periferica del nervo facciale interessa quale parte del volto:",
        "options": [
            "Un intero emivolto",
            "Una parte dell’emivolto",
            "Solo il terzo superiore del volto",
            "Esclusivamente la muscolatura periorbitaria"
        ],
        "correct": 0
    },
    {
        "question": "Quale di questi sintomi non è coinvolto nella paralisi del faciale:",
        "options": [
            "lagoftalmo",
            "difficoltà nella masticazione e articolazione della parola",
            "odinofagia"
        ],
        "correct": 2
    },
    {
        "question": "Vertigine non correlata a ipoacusia:",
        "options": [
            "Vertigine parossistica posizionale benigna (VPPB)",
            "Malattia di Ménière",
            "Labirintite"
        ],
        "correct": 0
    },
    {
        "question": "La presbiacusia è causata da:",
        "options": [
            "Degenerazione/involuzione senile plurifattoriale",
            "Trauma acustico",
            "Esposizione a rumori intensi",
            "Infezioni ricorrenti"
        ],
        "correct": 0
    },
    {
        "question": "La presbiacusia è:",
        "options": [
            "Una degenerazione del nervo cocleare",
            "Una degenerazione che viene con l'età",
            "Un'infiammazione cronica dell'orecchio (interno)",
            "Un accumulo di fluidi nell'orecchio interno"
        ],
        "correct": 1
    },
    {
        "question": "Il trattamento della presbiacusia prevede:",
        "options": [
            "Protesi acustiche",
            "Farmaci otoprotettori",
            "Terapia chirurgica"
        ],
        "correct": 0
    },
    {
        "question": "Presbiacusia è in genere:",
        "options": [
            "Protesizzabile",
            "Non trattabile",
            "Associata a ipoacusia trasmissiva"
        ],
        "correct": 0
    },
    {
        "question": "Complicanza post-operatoria della tonsillectomia è tipicamente:",
        "options": [
            "Emorragia",
            "Infezione",
            "Ascesso"
        ],
        "correct": 0
    },
    {
        "question": "Eziologia della tonsillite acuta è in genere:",
        "options": [
            "Sia batterica che virale",
            "Solo batterica",
            "Solo virale"
        ],
        "correct": 0
    },
    {
        "question": "Parte anteriore della rinofaringe è costituita:",
        "options": [
            "Dalle coane",
            "Dal setto nasale",
            "Dalle tonsille"
        ],
        "correct": 0
    },
    {
        "question": "Le cripte tonsillari servono a:",
        "options": [
            "Migliorare il contatto con gli antigeni esterni",
            "Facilitare la respirazione",
            "Prevenire infezioni"
        ],
        "correct": 0
    },
    {
        "question": "Perché le tonsille si trovano nelle logge tonsillari?",
        "options": [
            "Per facilitare il contatto con gli antigeni esterni",
            "Per proteggere le vie aeree",
            "Per facilitare la deglutizione"
        ],
        "correct": 0
    },
    {
        "question": "Perilinfa ed endolinfa si trovano:",
        "options": [
            "Nell'orecchio interno",
            "Nell'orecchio medio",
            "Nell'orecchio esterno"
        ],
        "correct": 0
    },
    {
        "question": "Per la protesizzazione acustica l'esame più importante è:",
        "options": [
            "L'audiometria vocale",
            "La TC dell'orecchio",
            "La risonanza magnetica"
        ],
        "correct": 0
    },
    {
        "question": "Il picco di compliance del timpanogramma indica:",
        "options": [
            "Il punto in cui il sistema funziona meglio",
            "Il grado di ipoacusia",
            "La presenza di perforazione timpanica"
        ],
        "correct": 0
    },
    {
        "question": "L'equilibrio pressorio tra orecchio esterno e medio è mantenuto da:",
        "options": [
            "Tuba uditiva",
            "Membrana timpanica",
            "Osso temporale",
            "Catena ossiculare"
        ],
        "correct": 0
    },
    {
        "question": "Qual è la funzione della tuba uditiva di Eustachio?",
        "options": [
            "Mantenere l'equilibrio pressorio tra orecchio medio ed esterno",
            "Trasmettere suoni all’orecchio interno",
            "Regolare la vibrazione della membrana timpanica",
            "Produrre endolinfa"
        ],
        "correct": 0
    },
    {
        "question": "La formazione di un tappo di cerume è favorita da:",
        "options": [
            "Manovre di autodetersione",
            "L’uso di cotton fioc",
            "La detersione eccessiva",
            "Uso di auricolari",
            "Esposizione a rumori forti",
            "Ipoacusia",
            "Otorrea cronica",
            "Traumi acustici",
            "Eccesso di cerume prodotto",
            "Entrambe"
        ],
        "correct": 9
    },
    {
        "question": "Ipoacusia trasmissiva:",
        "options": [
            "È protesizzabile",
            "Non è protesizzabile",
            "Richiede sempre intervento chirurgico"
        ],
        "correct": 0
    },
    {
        "question": "In caso di ipoacusia trasmissiva:",
        "options": [
            "La curva per via ossea e la curva per via aerea coincidono",
            "La curva per via ossea ha una soglia peggiore di quella per via aerea",
            "La curva per via ossea è normale"
        ],
        "correct": 2
    },
    {
        "question": "Iturbinati sono:",
        "options": [
            "Parete laterale della cavità nasale",
            "Parete mediale della cavità nasale",
            "Setto nasale",
            "Ossa piramidali"
        ],
        "correct": 0
    },
    {
        "question": "Una tipica tumefazione laterocervicale non può essere:",
        "options": [
            "Allergica",
            "Infettiva",
            "Malformativa"
        ],
        "correct": 0
    },
    {
        "question": "Il tumore maligno più frequente della tonsilla palatina è:",
        "options": [
            "Carcinoma",
            "Linfoma",
            "Sarcoma"
        ],
        "correct": 0
    },
    {
        "question": "Il tegmen tympani è contiguo con:",
        "options": [
            "Fossa cranica media",
            "Fossa cranica posteriore",
            "Lamina cribrosa"
        ],
        "correct": 0
    },
    {
        "question": "La complicanza post-operatoria più comune della tonsillectomia è:",
        "options": [
            "Emorragia",
            "Infezione",
            "Ascesso"
        ],
        "correct": 0
    },
    {
        "question": "Da cosa è composta l'uvea?",
        "options": [
            "Iride, corpi ciliari e coroide"
        ],
        "correct": 0
    },
    {
        "question": "Di quale struttura dell'occhio fa parte l'iride:",
        "options": [
            "Della sclera",
            "Dell'uvea",
            "Della retina",
            "Cristallino"
        ],
        "correct": 1
    },
    {
        "question": "La coroide è",
        "options": [
            "la porzione posteriore dell'uvea",
            "la mucosa che riveste la porzione posteriore del bulbo oculare",
            "il rivestimento della superficie anteriore delle palpebre",
            "Una struttura della sclera"
        ],
        "correct": 0
    },
    {
        "question": "Qual è la porzione intermedia dell’uvea?",
        "options": [
            "Iride",
            "Corpi ciliari",
            "Coroide"
        ],
        "correct": 1
    },
    {
        "question": "Il sintomo principale della sinusite acuta è:",
        "options": [
            "Dolore",
            "Dispnea",
            "Disfagia",
            "Febbre",
            "Epistassi"
        ],
        "correct": 0
    },
    {
        "question": "Quale delle seguenti patologie può causare calo visivo transitorio?",
        "options": [
            "Neurite ottica retrobulbare",
            "Spasmo accomodativo",
            "Glaucoma cronico semplice",
            "Distacco di retina",
            "Cataratta",
            "Blefarite"
        ],
        "correct": 1
    },
    {
        "question": "Quale delle seguenti condizioni può causare un calo visivo improvviso?",
        "options": [
            "Distacco di retina",
            "Glaucoma cronico semplice",
            "Cataratta"
        ],
        "correct": 0
    },
    {
        "question": "Buftalmo e aumento della pressione intraoculare sono sintomi tipici di:",
        "options": [
            "Glaucoma congenito",
            "Cataratta senile",
            "Cheratocono"
        ],
        "correct": 0
    },
    {
        "question": "Quale segno è tipico del glaucoma congenito:",
        "options": [
            "Buftalmo",
            "Microftalmo",
            "Riduzione della pressione endo-oculare",
            "Opacità corneale"
        ],
        "correct": 0
    },
    {
        "question": "Qual è il sintomo più comune del glaucoma acuto?",
        "options": [
            "Dolore oculare intenso",
            "Diplopia",
            "Fotofobia"
        ],
        "correct": 0
    },
    {
        "question": "Quale delle seguenti patologie si associa tipicamente a esoftalmo?",
        "options": [
            "Distiroidismo",
            "Ipertiroidismo",
            "Distrofia tiroidea",
            "Distrofia muscolare",
            "Cheratocono",
            "Miastenia grave",
            "Sindrome di Behçet"
        ],
        "correct": 2
    },
    {
        "question": "Quale delle seguenti patologie oculari è tipica di pazienti con ipertiroidismo:",
        "options": [
            "Cataratta senile",
            "Cheratite",
            "Esoftalmo"
        ],
        "correct": 2
    },
    {
        "question": "Quale delle seguenti affermazioni sull’articaina è corretta?",
        "options": [
            "Viene metabolizzata anche a livello locale",
            "È un estere",
            "Non può essere impiegata a concentrazioni superiori al 2\\%"
        ],
        "correct": 0
    },
    {
        "question": "L’impedenzometria è possibile:",
        "options": [
            "Solo con membrana timpanica integra",
            "Con membrana timpanica perforata",
            "In nessun caso"
        ],
        "correct": 0
    },
    {
        "question": "L'impedenzometria misura:",
        "options": [
            "La compliance del sistema timpano-ossiculare",
            "La funzione delle cellule ciliate interne",
            "La pressione nella tuba di Eustachio"
        ],
        "correct": 0
    },
    {
        "question": "L’impedenzometria fornisce informazioni su:",
        "options": [
            "La compliance del sistema timpano-ossiculare",
            "La funzione della coclea",
            "La sensibilità del nervo acustico"
        ],
        "correct": 0
    },
    {
        "question": "La protesizzazione acustica è l’unico trattamento indicato per:",
        "options": [
            "Ipoacusia neurosensoriale bilaterale",
            "Ipoacusia trasmissiva bilaterale",
            "Ipoacusia mista bilaterale"
        ],
        "correct": 0
    },
    {
        "question": "La protesizzazione acustica è un provvedimento di carattere soprattutto:",
        "options": [
            "diagnostico",
            "riabilitativo",
            "preventivo"
        ],
        "correct": 1
    },
    {
        "question": "Il test di Weber è positivo lateralizzato nell'orecchio:",
        "options": [
            "Con ipoacusia trasmissiva",
            "Affetto da ipoacusia neurosensoriale",
            "Senza alterazioni"
        ],
        "correct": 0
    },
    {
        "question": "La dacriocistite è:",
        "options": [
            "Un'infiammazione del sacco lacrimale",
            "Un'infiammazione della ghiandola lacrimale",
            "Un'ostruzione del dotto naso-lacrimale",
            "Un'infiammazione della ghiandola lacrimale",
            "Un'infiammazione dei canalicoli lacrimali"
        ],
        "correct": 0
    },
    {
        "question": "Dacriocistite acuta:",
        "options": [
            "Tumefazione tra sopracciglio e radice nasale",
            "Tumefazione tra canto interno e radice nasale",
            "Tumefazione alla base dell’orbita"
        ],
        "correct": 1
    },
    {
        "question": "Quale parte della catena ossiculare è visibile all’otoscopia?",
        "options": [
            "Manico del martello",
            "Incudine",
            "Nessuna"
        ],
        "correct": 0
    },
    {
        "question": "La retinopatia può essere:",
        "options": [
            "Diabetica e ipertensiva",
            "Solo diabetica",
            "Solo ipertensiva"
        ],
        "correct": 0
    },
    {
        "question": "Quale tra le seguenti è una complicanza del diabete mellito?",
        "options": [
            "Retinopatia diabetica",
            "Cataratta senile",
            "Cheratite erpetica",
            "Ipermetropia",
            "Blefarite"
        ],
        "correct": 0
    },
    {
        "question": "La retinopatia diabetica proliferante è caratterizzata da:",
        "options": [
            "Edema maculare",
            "Neovascolarizzazione retinica",
            "Atrofia ottica"
        ],
        "correct": 1
    },
    {
        "question": "L’ischemia in una retinopatia diabetica può causare:",
        "options": [
            "Distacco di retina trazionale",
            "Glaucoma neovascolare",
            "Entrambe"
        ],
        "correct": 2
    },
    {
        "question": "La sindrome di Behçet è:",
        "options": [
            "malattia infiammatoria cronica recidivante su base autoimmune con interessamento multisistemico molto variabile e con un decorso difficilmente prevedibile ma progressivo",
            "Una malattia infiammatoria cronica multisistemica con decorso progressivo",
            "Malattia infiammatoria cronica recidivante su base autoimmune con interessamento multisistemico variabile e decorso progressivo",
            "Una malattia autoimmune con infiammazione cronica",
            "Una malattia infiammatoria acuta",
            "Una malattia virale transitoria",
            "malattia infiammatoria acuta recidivante su base autoimmune con interessamento multisistemico molto variabile e con un decorso difficilmente progressivo",
            "malattia infiammatoria cronica recidivante su base autoimmune con interessamento multisistemico molto variabile e con decorso difficilmente progressivo",
            "Malattia infiammatoria autoimmune che coinvolge solo il cavo orale"
        ],
        "correct": 3
    },
    {
        "question": "La seguente triade di alterazioni (afte ricorrenti al cavo orale, ulcerazioni genitali, uveite) è caratteristica di:",
        "options": [
            "Malattia di Sutton",
            "Herpes Simplex",
            "Sindrome di Behçet"
        ],
        "correct": 2
    },
    {
        "question": "È una malattia infiammatoria cronica recidivante su base immunitaria con interessamento sistemico molto variabile e con un decorso difficilmente prevedibile ma progressivo. A quale patologia si riferisce:",
        "options": [
            "Malattia di Sutton",
            "Sindrome di Behçet",
            "Gengivostomatite erpetica primaria"
        ],
        "correct": 1
    },
    {
        "question": "Quale patogeno è maggiormente coinvolto nella carie dentale?",
        "options": [
            "Streptococcus mutans",
            "Actinomyces viscosus",
            "Lactobacillus acidophilus",
            "Actinobacillus actinomycetemcomitans",
            "Eikenella corrodens",
            "Candida albicans"
        ],
        "correct": 0
    },
    {
        "question": "Il colesteatoma è:",
        "options": [
            "Un accumulo di squame cheratinizzate derivanti dalla matrice epidermica",
            "Un accumulo di pus nell'orecchio medio",
            "Una lesione maligna dell'orecchio interno",
            "Un tumore benigno dell'orecchio medio",
            "Un’infiammazione della membrana timpanica",
            "Un'infiammazione cronica dell'orecchio esterno"
        ],
        "correct": 0
    },
    {
        "question": "Qual è il trattamento indicato per il colesteatoma?",
        "options": [
            "Timpanoplastica",
            "Terapia antibiotica",
            "Stapedectomia"
        ],
        "correct": 0
    },
    {
        "question": "La chirurgia per il colesteatoma mira a:",
        "options": [
            "Rimuovere il tessuto patologico e prevenire complicanze",
            "Ripristinare la funzione del nervo acustico",
            "Ridurre l'infiammazione temporanea"
        ],
        "correct": 0
    },
    {
        "question": "L'empiema mastoideo è complicanza di:",
        "options": [
            "Colesteatoma",
            "Otite media acuta",
            "Entrambe"
        ],
        "correct": 2
    },
    {
        "question": "L'erosione dei canali semicircolari superiori può essere causata da:",
        "options": [
            "Otite media acuta",
            "Timpanosclerosi",
            "Colesteatoma"
        ],
        "correct": 2
    },
    {
        "question": "Il sintomo più frequente all’esordio del distacco vitreo è:",
        "options": [
            "Miodesopsie (mosche volanti)",
            "Fotofobia",
            "Dolore oculare"
        ],
        "correct": 0
    },
    {
        "question": "Le cosiddette \"mosche volanti\" o miodesopsie sono dovute a:",
        "options": [
            "Addensamenti vitreali",
            "Aree di addensamento del collagene dell’umor vitreo",
            "Aumento della pressione endo-oculare",
            "Trazione del vitreo sulla retina"
        ],
        "correct": 1
    },
    {
        "question": "L’opacizzazione del cristallino è detta:",
        "options": [
            "Cataratta",
            "Cheratocono",
            "Glaucoma"
        ],
        "correct": 0
    },
    {
        "question": "Il TNO test e il Lang test permettono di valutare:",
        "options": [
            "Acuità visiva",
            "Stereopsi",
            "Difetti refrattivi"
        ],
        "correct": 1
    },
    {
        "question": "Quale parte dell’occhio drena l’umor acqueo (responsabile della regolazione della pressione intraoculare):",
        "options": [
            "Angolo irido-corneale",
            "Vie lacrimali (accessorie)",
            "Ghiandola lacrimale",
            "Cristallino",
            "Corpo ciliare",
            "La fovea centrale"
        ],
        "correct": 0
    },
    {
        "question": "La ghiandola lacrimale principale si trova:",
        "options": [
            "Dietro al margine supero-esterno dell’orbita",
            "Dietro al margine inferiore dell’orbita",
            "In corrispondenza del pavimento orbitario",
            "A livello della caruncola"
        ],
        "correct": 0
    },
    {
        "question": "Qual è il sintomo più grave/ più comune della paralisi bilaterale delle corde vocali?",
        "options": [
            "Dispnea",
            "Disfonia",
            "Disfagia",
            "Afasia",
            "Stenosi tracheale"
        ],
        "correct": 0
    },
    {
        "question": "La paralisi delle corde vocali si diagnostica con:",
        "options": [
            "Laringoscopia diretta",
            "Esame audiometrico",
            "Impedenzometria"
        ],
        "correct": 0
    },
    {
        "question": "Qual è il trattamento più indicato per la paralisi bilaterale delle corde vocali?",
        "options": [
            "Tracheotomia",
            "Tiroplastica",
            "Laser terapia"
        ],
        "correct": 1
    },
    {
        "question": "Il polipo delle corde vocali:",
        "options": [
            "Consegue ad uno sforzo vocale acuto",
            "Deriva da un’infezione cronica",
            "È di natura neoplastica"
        ],
        "correct": 0
    },
    {
        "question": "Il nodulo delle corde vocali:",
        "options": [
            "Consegue ad un prolungato uso scorretto della voce",
            "Consegue ad uno sforzo vocale acuto",
            "È una precancerosi"
        ],
        "correct": 0
    },
    {
        "question": "Il nervo trigemino è coinvolto nella sensibilità di:",
        "options": [
            "Mascella e mandibola",
            "Faringe",
            "Cavità nasale"
        ],
        "correct": 0
    },
    {
        "question": "La nevralgia del trigemino è caratterizzata da:",
        "options": [
            "Dolore cronico diffuso",
            "Episodi di dolore intenso lungo le branche nervose",
            "Ipoestesia facciale"
        ],
        "correct": 1
    },
    {
        "question": "Il nervo trigemino può essere infiltrato da:",
        "options": [
            "Carcinoma rinofaringeo",
            "Adenoma parotideo",
            "Tumore laringeo"
        ],
        "correct": 0
    },
    {
        "question": "Il carcinoma rinofaringeo può infiltrare:",
        "options": [
            "Il nervo ipoglosso",
            "Il nervo trigemino",
            "Il nervo glossofaringeo"
        ],
        "correct": 1
    },
    {
        "question": "Quale dei seguenti farmaci può essere pericoloso per un paziente con glaucoma?",
        "options": [
            "Antibiotico oftalmico",
            "Collirio midriatico",
            "Collirio mitotico"
        ],
        "correct": 1
    },
    {
        "question": "Perché un collirio midriatico può essere pericoloso?",
        "options": [
            "Può causare cataratta",
            "Può indurre cheratopatia",
            "Può scatenare un attacco acuto di glaucoma in occhi anatomicamente predisposti"
        ],
        "correct": 2
    },
    {
        "question": "Un attacco acuto di glaucoma può essere favorito da:",
        "options": [
            "Miopia elevata",
            "Cataratta",
            "Midriasi (es. instillazione collirio midriatico)",
            "Scarsa illuminazione"
        ],
        "correct": 2
    },
    {
        "question": "Quale delle seguenti condizioni patologiche si presenta tipicamente con dolore?",
        "options": [
            "Glaucoma acuto",
            "Glaucoma cronico semplice",
            "Cataratta",
            "Distacco di retina"
        ],
        "correct": 0
    },
    {
        "question": "Quale dei seguenti segni è caratteristico del glaucoma in stadio avanzato?",
        "options": [
            "Perdita acuta della visione periferica",
            "Escavazione della testa del nervo ottico",
            "Cheratite cronica"
        ],
        "correct": 1
    },
    {
        "question": "La degenerazione maculare legata all’età può essere:",
        "options": [
            "Atrofica",
            "Con neovascolarizzazione subretinica",
            "Entrambe"
        ],
        "correct": 1
    },
    {
        "question": "Quale delle seguenti strutture fa parte del sistema lacrimale?",
        "options": [
            "Sacco lacrimale",
            "Angolo irido-corneale",
            "Ghiandola lacrimale accessoria"
        ],
        "correct": 0
    },
    {
        "question": "Quale delle seguenti strutture NON fa parte del sistema lacrimale",
        "options": [
            "l'angolo irido-corneale",
            "dotto naso-lacrimale",
            "il sacco lacrimale"
        ],
        "correct": 0
    },
    {
        "question": "Le metastasi laterocervicali sono meno frequenti in:",
        "options": [
            "Carcinoma sottoglottico",
            "Carcinoma glottico",
            "Carcinoma sopraglottico"
        ],
        "correct": 1
    },
    {
        "question": "Le rinopatie vasomotorie specifiche sono tipicamente:",
        "options": [
            "Di natura allergica",
            "Indotte da infezioni batteriche",
            "Non correlate a fattori esterni"
        ],
        "correct": 0
    },
    {
        "question": "Le rinopatie vasomotorie allergiche sono tipicamente causate da:",
        "options": [
            "Allergeni ambientali",
            "Infezioni virali",
            "Traumi nasali"
        ],
        "correct": 0
    },
    {
        "question": "In quale patologia i turbinati sono coinvolti?",
        "options": [
            "Rinopatie vasomotorie allergiche",
            "Sinusite odontogena",
            "Colesteatoma"
        ],
        "correct": 0
    },
    {
        "question": "Il nervo ottico è coinvolto direttamente nella:",
        "options": [
            "Motilità oculare",
            "Trasmissione degli stimoli visivi alla corteccia cerebrale",
            "Produzione di umor acqueo"
        ],
        "correct": 1
    },
    {
        "question": "La necrosi pulpare può avvenire:",
        "options": [
            "In modo sempre sintomatico",
            "In modo silente in alcune fasi",
            "Solo in presenza di infezioni secondarie"
        ],
        "correct": 1
    },
    {
        "question": "Quale delle seguenti affermazioni riguardo le pulpiti è vera:",
        "options": [
            "Il passaggio dalla prima fase (pulpite cronica) alla terza fase (necrosi pulpare) può essere silente",
            "Il passaggio dalla prima fase (pulpite cronica) alla terza fase (necrosi pulpare) è sempre comunque dolorosissimo",
            "Il passaggio dalla prima fase (pulpite cronica) alla terza fase (necrosi pulpare) non è mai doloroso"
        ],
        "correct": 0
    },
    {
        "question": "Nella clinica delle pulpiti quali tra le seguenti è la sequenza corretta:",
        "options": [
            "Pulpite acuta, pulpite cronica e necrosi pulpare",
            "Pulpite acuta, necrosi pulpare, pulpite cronica",
            "Pulpite cronica, pulpite acuta, necrosi pulpare"
        ],
        "correct": 2
    },
    {
        "question": "Qual è la funzione principale della fovea:",
        "options": [
            "Consente la visione dettagliata e a colori",
            "Consente la visione di oggetti piccoli e dei colori in presenza di luce sufficiente",
            "Consente la visione della parte periferica del campo visivo",
            "Consente solo la visione di oggetti grandi",
            "Permette la visione di oggetti grandi",
            "Regola la pressione intraoculare",
            "Regola l’apertura pupillare (la messa a fuoco)"
        ],
        "correct": 1
    },
    {
        "question": "Quale struttura permette la visione centrale a colori e dettagliata?",
        "options": [
            "Cornea",
            "Cristallino",
            "Fovea centrale"
        ],
        "correct": 2
    },
    {
        "question": "L’ipertensione endocranica può provocare:",
        "options": [
            "Papilledema",
            "Distacco di retina",
            "Neurite ottica"
        ],
        "correct": 0
    },
    {
        "question": "La papilledema è:",
        "options": [
            "Un rigonfiamento della testa del nervo ottico dovuto a ipertensione endocranica",
            "Un segno di retinopatia ipertensiva",
            "Una lesione primaria della retina"
        ],
        "correct": 0
    },
    {
        "question": "In quale delle seguenti alterazioni patologiche può comparire edema della papilla:",
        "options": [
            "Ipertensione endocranica"
        ],
        "correct": 0
    },
    {
        "question": "L’esotropia è:",
        "options": [
            "Una forma di strabismo convergente",
            "Una forma di astigmatismo",
            "Una condizione di cataratta"
        ],
        "correct": 0
    },
    {
        "question": "La classificazione delle parodontiti sulla base dell'età di insorgenza:",
        "options": [
            "Parodontite a insorgenza precoce (pre-puberale e giovanile), parodontite dell'adulto, parodontite rapidamente progressiva",
            "Parodontite infantile, parodontite giovanile, parodontite geriatrica",
            "Parodontite a insorgenza precoce (pre-puberale e giovanile), parodontite dell'adulto, parodontite dell'età matura"
        ],
        "correct": 0
    },
    {
        "question": "L'infiammazione cronica della mucosa sinusale è detta:",
        "options": [
            "Poliposi nasale",
            "Sinusite acuta",
            "Sinusite cronica"
        ],
        "correct": 2
    },
    {
        "question": "La diagnosi differenziale della sinusite cronica comprende:",
        "options": [
            "Poliposi nasale",
            "Tumori naso-sinusali",
            "Tonsillite cronica"
        ],
        "correct": 1
    },
    {
        "question": "Qual è l’esame di elezione per diagnosticare la sinusite cronica?",
        "options": [
            "Rinomanometria",
            "Tomografia computerizzata (TC) senza mezzo di contrasto",
            "Ecografia"
        ],
        "correct": 1
    },
    {
        "question": "Qual è il trattamento di elezione per la sinusite cronica micotica?",
        "options": [
            "Terapia chirurgica",
            "Chiururgia endoscopica funzionale",
            "Terapia antibiotica sistemica",
            "Corticosteroidi locali",
            "Vasocostrittori locali"
        ],
        "correct": 1
    },
    {
        "question": "La terapia chirurgica è elettiva per la sinusite cronica:",
        "options": [
            "Batterica",
            "Micotica",
            "Virale"
        ],
        "correct": 1
    },
    {
        "question": "Le tonsilliti acute sono causate principalmente da:",
        "options": [
            "Virus",
            "Batteri",
            "Entrambi"
        ],
        "correct": 2
    },
    {
        "question": "La diagnosi di otite media acuta è abitualmente:",
        "options": [
            "Otoscopica, anamnestica ed impedenzometrica",
            "Solo otoscopica e anamnestica",
            "Otoscopica e audiometrica",
            "TAC con mezzo di contrasto",
            "Risonanza magnetica"
        ],
        "correct": 0
    },
    {
        "question": "La diagnosi di certezza di otite media secretiva si basa su:",
        "options": [
            "Otoscopia, esame audiometrico ed impedenzometrico",
            "Otoscopia ed anamnesi",
            "Solo esame audiometrico",
            "Solo anamnesi",
            "RM con gadolinio"
        ],
        "correct": 0
    },
    {
        "question": "Il sintomo principale dell'otite media acuta è:",
        "options": [
            "Dolore",
            "Ipoacusia",
            "Vertigini"
        ],
        "correct": 0
    },
    {
        "question": "Il sintomo principale dell'otite media secretiva è:",
        "options": [
            "Ipoacusia",
            "Dolore",
            "Vertigini"
        ],
        "correct": 0
    },
    {
        "question": "Quale sintomo NON è frequentemente associato all'otite media?",
        "options": [
            "Ipoacusia",
            "Otalgia",
            "Periostite"
        ],
        "correct": 2
    },
    {
        "question": "Otite media acuta:",
        "options": [
            "Presenza microbi",
            "Assenza microbi",
            "Entrambe le situazioni"
        ],
        "correct": 0
    },
    {
        "question": "L’otite media acuta è caratterizzata da:",
        "options": [
            "Carica microbica timpanica assente",
            "Carica microbica timpanica ridotta",
            "Carica microbica timpanica presente e infettante"
        ],
        "correct": 2
    },
    {
        "question": "Qual è l'agente patogeno associato più frequentemente all’otite media acuta?",
        "options": [
            "Streptococcus pneumoniae",
            "Streptococcus mutans",
            "Haemophilus influenzae"
        ],
        "correct": 0
    },
    {
        "question": "Otite media secretiva:",
        "options": [
            "Assenza microbi",
            "Presenza microbi",
            "Entrambe le situazioni"
        ],
        "correct": 2
    },
    {
        "question": "Quale tra le seguenti non è una complicanza dell’otite media cronica:",
        "options": [
            "Ascesso cerebrale",
            "Paralisi del nervo facciale",
            "Vertigine posizionale benigna"
        ],
        "correct": 2
    },
    {
        "question": "La miringocentesi con inserimento di tubo di ventilazione è indicata per:",
        "options": [
            "Otite media secretiva cronica",
            "Timpanosclerosi",
            "Otite media cronica perforata",
            "Colesteatoma",
            "Perforazione timpanica"
        ],
        "correct": 0
    },
    {
        "question": "Quale delle seguenti sostanze è considerata ototossica?",
        "options": [
            "Furosemide",
            "Glicerolo",
            "Vitamina D",
            "Mannitolo"
        ],
        "correct": 0
    },
    {
        "question": "Quale dei seguenti farmaci non è considerato tra i classici farmaci ototossici:",
        "options": [
            "Ciprofloxacina",
            "Acido acetilsalicilico",
            "Chinino"
        ],
        "correct": 0
    },
    {
        "question": "Il carcinoma spinocellulare si presenta tipicamente come:",
        "options": [
            "Lesione ulcerata con croste e margini rilevati e aumento di volume",
            "Lesione pigmentata piatta",
            "Lesione peduncolata"
        ],
        "correct": 0
    },
    {
        "question": "La lesione ulcerata con bordi rilevati nel cavo orale è tipica di:",
        "options": [
            "Carcinoma spinocellulare",
            "Lichen planus orale",
            "Eritema multiforme"
        ],
        "correct": 0
    },
    {
        "question": "Il carcinoma spinocellulare colpisce frequentemente:",
        "options": [
            "La mucosa del cavo orale",
            "La lingua",
            "La faringe"
        ],
        "correct": 0
    },
    {
        "question": "Il tumore maligno più frequente dell'orecchio esterno è:",
        "options": [
            "Carcinoma spinocellulare",
            "Condrosarcoma",
            "Melanoma"
        ],
        "correct": 0
    },
    {
        "question": "Il carcinoma spinocellulare è il tumore maligno più frequente:",
        "options": [
            "Dell’orecchio esterno",
            "Della mucosa orale",
            "Della laringe"
        ],
        "correct": 0
    },
    {
        "question": "Qual è l’esame diagnostico gold standard per il melanoma della coroide?",
        "options": [
            "Ecografia oculare",
            "Ecografia bulbare",
            "Risonanza magnetica",
            "Angiografia",
            "Tomografia a coerenza ottica (OCT)",
            "Fluorangiografia"
        ],
        "correct": 1
    },
    {
        "question": "Quale delle seguenti condizioni può provocare disturbi della visione centrale come metamorfopsie?",
        "options": [
            "Congiuntivite allergica",
            "Glaucoma",
            "Degenerazione maculare senile"
        ],
        "correct": 2
    },
    {
        "question": "La degenerazione maculare legata all'età può causare:",
        "options": [
            "Metamorfopsie e calo del visus centrale",
            "Perdita della visione periferica",
            "Diplopia"
        ],
        "correct": 0
    },
    {
        "question": "Segno o sintomo oculare tipico di una malattia della macula:",
        "options": [
            "Perdita della visione centrale e metamorfopsie",
            "Alterazione della pressione oculare",
            "Visione periferica compromessa"
        ],
        "correct": 0
    },
    {
        "question": "La cheratopatia a bandelletta è una patologia:",
        "options": [
            "Della retina",
            "Della sclera",
            "Della cornea"
        ],
        "correct": 2
    },
    {
        "question": "La cheratopatia a bandelletta è una complicanza frequente in:",
        "options": [
            "Artrite reumatoide giovanile",
            "Sclerodermia",
            "Lupus eritematoso"
        ],
        "correct": 0
    },
    {
        "question": "Qual è una complicanza comune dell’artrite reumatoide giovanile?",
        "options": [
            "Uveite anteriore",
            "Cheratopatia a bandelletta",
            "Entrambe"
        ],
        "correct": 2
    },
    {
        "question": "Le lesioni elementari della mucosa orale possono essere:",
        "options": [
            "Lesioni bianche, rosse, vescicolo-bollose, erosivo-ulcerose, pigmentate",
            "Bianche, rosse, vescicolo-bollose e erosive",
            "Solo lesioni bianche e lesioni rosse",
            "Solo lesioni vescicolo-bollose e lesioni erosivo-ulcerose",
            "Lesioni pigmentate e ulcerose",
            "Lesioni bianche, rosse, bollose, erosivo-ulcerose"
        ],
        "correct": 1
    },
    {
        "question": "Qual è la classificazione delle cisti odontogene?",
        "options": [
            "Epiteliali, mesenchimali e miste",
            "Sierose e mucose",
            "Acquisite e congenite"
        ],
        "correct": 0
    },
    {
        "question": "Quale delle seguenti patologie presenta strie di Wickham nella mucosa orale?",
        "options": [
            "Lichen planus orale",
            "Malattia di Sutton",
            "Eritema multiforme"
        ],
        "correct": 0
    },
    {
        "question": "Lesione bilaterale e simmetrica, con strie di Wickham anche in assenza di lesioni erosive, atrofiche, bollose è:",
        "options": [
            "Oral lichen planus",
            "Candidosi cronica a placche",
            "Malattia di Sutton"
        ],
        "correct": 0
    },
    {
        "question": "Per fare diagnosi di quale patologia devono essere presenti contemporaneamente i seguenti criteri clinici: \"lesione bilaterale e simmetrica, con strie di Wickham anche in associazione a lesioni erosive, atrofiche, bollose\":",
        "options": [
            "Lichen planus",
            "Candidosi cronica a placche",
            "Malattia di Sutton"
        ],
        "correct": 0
    },
    {
        "question": "Quale delle seguenti condizioni può essere sospettata in caso di epifora monolaterale?",
        "options": [
            "Tumore del seno mascellare",
            "Polipo antrocoanale",
            "Tumore rinofaringeo"
        ],
        "correct": 0
    },
    {
        "question": "Quale tra questi sintomi non riguarda i tumori del seno mascellare:",
        "options": [
            "emispasmo faciale",
            "epifora",
            "diplopia"
        ],
        "correct": 0
    },
    {
        "question": "Il distacco di retina si presenta con:",
        "options": [
            "Calo del visus senza dolore",
            "Visione normale con fotofobia",
            "Iperemia congiuntivale"
        ],
        "correct": 0
    },
    {
        "question": "Quale sintomatologia è tipica di distacco di retina coinvolgente la macula:",
        "options": [
            "Calo del visus senza dolore oculare",
            "Calo del visus con dolore oculare",
            "Iperemia congiuntivale"
        ],
        "correct": 0
    },
    {
        "question": "Quali delle seguenti patologie può provocare perdita del visus monolaterale:",
        "options": [
            "Distacco della retina con interessamento della macula",
            "Ischemia dell’arteria retinica",
            "Entrambe"
        ],
        "correct": 2
    },
    {
        "question": "Il cheratocono è:",
        "options": [
            "Un assottigliamento e sfiancamento della cornea",
            "Un’opacità del cristallino",
            "Un'infiammazione della cornea"
        ],
        "correct": 0
    },
    {
        "question": "Le patologie tiroidee possono manifestarsi con:",
        "options": [
            "Alterazione dei muscoli estrinseci dell’occhio",
            "Esoftalmo",
            "Diplopia",
            "Degenerazioni maculari",
            "Esoftalmo",
            "Alterazioni retiniche"
        ],
        "correct": 2
    },
    {
        "question": "La miopatia distiroidea è:",
        "options": [
            "Una complicanza oculare del distiroidismo che può causare diplopia",
            "Una degenerazione retinica",
            "Un'infiammazione corneale"
        ],
        "correct": 0
    },
    {
        "question": "Quale delle seguenti condizioni si associa tipicamente alla paralisi del nervo ricorrente?",
        "options": [
            "Disfonia",
            "Dispnea",
            "Ipoacusia"
        ],
        "correct": 1
    },
    {
        "question": "La degenerazione maculare senile colpisce:",
        "options": [
            "La visione periferica",
            "La visione centrale",
            "L’acuità visiva notturna"
        ],
        "correct": 1
    },
    {
        "question": "La sordità improvvisa è tipicamente:",
        "options": [
            "Una condizione congenita",
            "Di origine neurosensoriale",
            "Causata da infezioni croniche"
        ],
        "correct": 1
    },
    {
        "question": "La rinite allergica si presenta con:",
        "options": [
            "Epistassi",
            "Starnuti, rinorrea e ostruzione nasale",
            "Febbre"
        ],
        "correct": 1
    },
    {
        "question": "La stenosi subglottica congenita è:",
        "options": [
            "Un restringimento congenito della laringe subglottica",
            "Una paralisi delle corde vocali",
            "Una malformazione delle cartilagini laringee"
        ],
        "correct": 0
    },
    {
        "question": "La causa principale di epistassi recidivanti è:",
        "options": [
            "Tumore del rinofaringe",
            "Rottura dei capillari nel locus di Kiesselbach",
            "Trombosi venosa centrale"
        ],
        "correct": 1
    },
    {
        "question": "La diagnosi di labirintite si basa su:",
        "options": [
            "Esame otoscopico",
            "Sintomi di vertigini e ipoacusia",
            "Audiometria vocale"
        ],
        "correct": 1
    },
    {
        "question": "Il segno più caratteristico della malattia di Ménière è:",
        "options": [
            "Vertigine episodica associata a ipoacusia",
            "Perdita permanente dell'udito",
            "Dolore auricolare"
        ],
        "correct": 0
    },
    {
        "question": "La faringotonsillite acuta è causata principalmente da:",
        "options": [
            "Batteri gram-negativi",
            "Streptococco beta-emolitico di gruppo A",
            "Virus influenzali"
        ],
        "correct": 1
    },
    {
        "question": "La stenosi tracheale congenita può provocare:",
        "options": [
            "Disfonia",
            "Dispnea progressiva",
            "Afasia"
        ],
        "correct": 1
    },
    {
        "question": "Il tumore maligno più frequente della ghiandola parotide è:",
        "options": [
            "Carcinoma mucoepidermoide",
            "Adenoma pleomorfo",
            "Tumore di Warthin"
        ],
        "correct": 0
    },
    {
        "question": "Qual è la funzione principale della membrana basale cocleare?",
        "options": [
            "Trasmettere vibrazioni alla finestra ovale",
            "Separare l’endolinfa dalla perilinfa e sostenere le cellule ciliate",
            "Stabilizzare la pressione nell'orecchio medio"
        ],
        "correct": 1
    },
    {
        "question": "La risonanza magnetica è l’esame di scelta per:",
        "options": [
            "Otite media cronica",
            "Diagnosi di neurinomi dell’acustico",
            "Valutazione del colesteatoma"
        ],
        "correct": 1
    },
    {
        "question": "Le paralisi monolaterali del nervo ipoglosso provocano:",
        "options": [
            "Deviazione della lingua verso il lato paralizzato",
            "Deviazione della lingua verso il lato opposto",
            "Movimenti involontari della lingua"
        ],
        "correct": 0
    },
    {
        "question": "La timpanosclerosi è:",
        "options": [
            "Una neoplasia del timpano",
            "Un’alterazione della tuba di Eustachio",
            "Una calcificazione della membrana timpanica e della catena ossiculare"
        ],
        "correct": 2
    },
    {
        "question": "Lamina cribrosa confina con:",
        "options": [
            "Fossa cranica anteriore",
            "RISPOSTA 2",
            "RISPOSTA 3"
        ],
        "correct": 0
    },
    {
        "question": "Nell'astigmatismo:",
        "options": [
            "I meridiani principali hanno curvatura differente",
            "RISPOSTA 2",
            "RISPOSTA 3"
        ],
        "correct": 0
    },
    {
        "question": "Paziente cardiopatico affetto da aritmia cardiaca in valvulopatia può sviluppare:",
        "options": [
            "Occlusione arteria retinica",
            "RISPOSTA 2",
            "RISPOSTA 3"
        ],
        "correct": 0
    },
    {
        "question": "Paziente affetto da grave malassorbimento:",
        "options": [
            "Neuropatia ottica carenziale",
            "RISPOSTA 2",
            "RISPOSTA 3"
        ],
        "correct": 0
    },
    {
        "question": "Che cos'è l'ambliopia:",
        "options": [
            "Un difetto di refrazione come la miopia, l'ipermetropia, l'astigmatismo",
            "Un difetto di sviluppo della funzione visiva che si verifica in età infantile",
            "Una forma di glaucoma infantile"
        ],
        "correct": 1
    },
    {
        "question": "Coni e bastoncelli fanno parte:",
        "options": [
            "Retina"
        ],
        "correct": 0
    },
    {
        "question": "In quali condizioni l'occhio NON si presenta rosso: ???",
        "options": [
            "Papilledema",
            "Neurite ottica",
            "Retinopatia diabetica",
            "Cataratta",
            "Glaucoma cronico semplice",
            "Entrambe"
        ],
        "correct": 5
    },
    {
        "question": "Quale delle seguenti condizioni può determinare un “occhio rosso”:",
        "options": [
            "Congiuntivite allergica",
            "Uveite anteriore",
            "Cataratta senile",
            "Distacco di retina"
        ],
        "correct": 1
    },
    {
        "question": "Neurite ottica retrobulbare:",
        "options": [
            "Infiammazione del nervo ottico nella sua porzione intracranica e intraorbitale",
            "Infiammazione della retina",
            "Infiammazione dei corpi ciliari"
        ],
        "correct": 0
    },
    {
        "question": "Arterite a cellule giganti di HORTON cosa può provocare:",
        "options": [
            "Neuropatia ottica ischemica"
        ],
        "correct": 0
    },
    {
        "question": "Tra cemento, smalto e dentina, qual è il tessuto più rappresentato:",
        "options": [
            "Dentina",
            "Cemento",
            "Smalto"
        ],
        "correct": 0
    },
    {
        "question": "Quale delle seguenti affermazioni NON è corretta: “nel mascellare superiore possono essere effettuate anestesie di conduzione nei seguenti punti”:",
        "options": [
            "spina dello Spix",
            "foro intraorbitario",
            "foro incisivo"
        ],
        "correct": 0
    },
    {
        "question": "Quale tra le seguenti famiglie di antibiotici non viene utilizzata come prima scelta nella terapia antibiotica delle infezioni odontoiatriche:",
        "options": [
            "Macrolidi 16 e 15C",
            "Aminopenicilline",
            "Lincosamidi"
        ],
        "correct": 0
    },
    {
        "question": "I tessuti che costituiscono l'organo “parodonto” sono:",
        "options": [
            "La gengiva, il legamento periodontale, l'osso alveolare e il cemento",
            "RISPOSTA 2",
            "RISPOSTA 3"
        ],
        "correct": 0
    },
    {
        "question": "Quale tra le seguenti definizioni di disodontiasi del terzo molare è corretta:",
        "options": [
            "Stato infiammatorio acuto o subacuto dei denti del giudizio (in particolare degli inferiori) secondario a una difficoltà nella eruzione fisiologica",
            "Stato infiammatorio cronico dei denti del giudizio (in particolare degli inferiori) secondario a una difficoltà nella eruzione fisiologica",
            "Stato infiammatorio cronico dei molari (in particolare degli inferiori) secondario a una difficoltà nella eruzione fisiologica"
        ],
        "correct": 0
    },
    {
        "question": "Quale tra le seguenti NON è una delle indicazioni per la rimozione chirurgica dell'ottavo:",
        "options": [
            "Carie mesiale del settimo",
            "Dolore cronico, continuo o recidivante con irradiazioni al capo, collo o orecchio",
            "Lesioni parodontali profonde distali al settimo causate da ristagno di cibo"
        ],
        "correct": 0
    },
    {
        "question": "Quale tra le seguenti NON è una forma patologica associata all'AIDS con localizzazione al cavo orale:",
        "options": [
            "Malattia di Sutton",
            "RISPOSTA 2",
            "RISPOSTA 3"
        ],
        "correct": 0
    },
    {
        "question": "La necrolisi epidermica tossica (TEN) o sindrome di Lyell è una forma di:",
        "options": [
            "Pemfigo",
            "Lichen",
            "Eritema multiforme"
        ],
        "correct": 2
    },
    {
        "question": "Un tentativo di classificazione basato sul quadro clinico suddivide l'eritema multiforme in:",
        "options": [
            "EM orale, EM minor, EM maior, Malattia di Sutton",
            "EM orale, EM minor, EM maior, EM epidermico",
            "EM orale, EM minor, EM maior, Necrolisi epidermica tossica (TEN)"
        ],
        "correct": 2
    },
    {
        "question": "Pemfigoide bolloso:",
        "options": [
            "Sottoepiteliale",
            "RISPOSTA 2",
            "RISPOSTA 3"
        ],
        "correct": 0
    },
    {
        "question": "L'individuo presbite:",
        "options": [
            "Non vede bene da vicino",
            "Non vede bene da lontano anche con gli occhiali correttivi",
            "Non vede bene né per lontano né per vicino anche con le lenti di refrazione"
        ],
        "correct": 0
    },
    {
        "question": "La congiuntiva è:",
        "options": [
            "La membrana mucosa che riveste la parte anteriore del bulbo oculare e delle palpebre",
            "Mucosa che ricopre bulbo oculare e parte interna palpebre",
            "La membrana che riveste l’iride",
            "La pelle che ricopre l’occhio",
            "La mucosa che riveste la porzione posteriore del bulbo oculare",
            "Il rivestimento della superficie anteriore delle palpebre"
        ],
        "correct": 1
    },
    {
        "question": "Che cos'è la midriasi:",
        "options": [
            "Il restringimento della pupilla",
            "La dilatazione della pupilla superiore a 5 mm",
            "Il meccanismo che rende possibile la messa a fuoco nella visione",
            "la dilatazione della pupilla e può essere correlata a un problema di accomodazione visiva"
        ],
        "correct": 3
    },
    {
        "question": "Che cos'è la miosi:",
        "options": [
            "Il restringimento della pupilla",
            "La dilatazione della pupilla",
            "La convergenza degli assi visivi che si verifica nella fissazione"
        ],
        "correct": 0
    },
    {
        "question": "Quali di questi quadri non è un'uveite:",
        "options": [
            "La blefarite",
            "L’irite",
            "La ciclite"
        ],
        "correct": 0
    },
    {
        "question": "Quali di questi quadri è un'uveite:",
        "options": [
            "La congiuntivite",
            "La corioretinite",
            "La neurite ottica"
        ],
        "correct": 1
    },
    {
        "question": "Che cos'è l'orzaiolo:",
        "options": [
            "Un tumore maligno della palpebra",
            "Un ascesso di una ghiandola palpebrale",
            "L'ostruzione dei canalini lacrimali"
        ],
        "correct": 1
    },
    {
        "question": "I cromoni hanno la migliore indicazione:",
        "options": [
            "Nella rinopatia allergica periodica",
            "Nella rinopatia allergica persistente",
            "Nella rinopatia vasomotoria non allergica"
        ],
        "correct": 0
    },
    {
        "question": "Nel carcinoma laringeo glottico il sintomo tipico è:",
        "options": [
            "Disfonia",
            "Disfagia",
            "Emottisi + dispnea"
        ],
        "correct": 0
    },
    {
        "question": "Indicare tra le seguenti l'affezione che non si considera in genere tra le cause locali:",
        "options": [
            "Tumori etmoido-mascellari",
            "Tumori rinofaringei",
            "Poliposi rinosinusale"
        ],
        "correct": 2
    },
    {
        "question": "L'ipertensione arteriosa può essere più facilmente collegata ad epistassi:",
        "options": [
            "Nel giovane",
            "Nell'anziano",
            "Nella retinopatia vasomotoria non allergica"
        ],
        "correct": 1
    },
    {
        "question": "Quale dei seguenti gruppi di farmaci viene utilizzato per la terapia della candidosi:",
        "options": [
            "Nistatina, ketonazolo, itraconazolo",
            "Amoxicillina, vancomicina, cicloserina",
            "Diclofenac, atodolac, piroxicam"
        ],
        "correct": 0
    },
    {
        "question": "Quale tra le seguenti definizioni descrive il papilloma del cavo orale:",
        "options": [
            "Tumore benigno ad istogenesi epiteliale frequente nel cavo orale, in relazione molto spesso a spine irritative traumatiche",
            "Tumore di origine connettivale riscontrabile sia sui tessuti molli del cavo orale sia a livello delle ossa mascellari",
            "Neoformazione benigna di origine mista che possiede una componente sia fibrosa che epiteliale",
            "Tumore di origine mista con componente fibrosa ed epiteliale",
            "Tumore con alta malignità frequente nel cavo orale"
        ],
        "correct": 0
    },
    {
        "question": "Quale tra le seguenti affermazioni sul Pemfigo è corretta:",
        "options": [
            "Si presenta maggiormente negli uomini che nelle donne in età compresa tra i 10 e i 15 anni",
            "Si presenta con uguale incidenza negli uomini e nelle donne in età compresa tra i 30 e i 60 anni",
            "Si presenta maggiormente nelle donne che negli uomini in età compresa tra i 15 e i 20 anni"
        ],
        "correct": 1
    },
    {
        "question": "Nella corona dei molari possiamo individuare:",
        "options": [
            "3 superfici (occlusale, mesiale e linguale)",
            "4 superfici (incisale, occlusale, palatale e mesiale)",
            "5 superfici (occlusale, mesiale, distale, vestibolare e linguale)"
        ],
        "correct": 2
    },
    {
        "question": "Nella dentizione permanente i molari per ogni emiarcata sono:",
        "options": [
            "2",
            "3",
            "4"
        ],
        "correct": 1
    },
    {
        "question": "La descrizione del seguente caso clinico: \"esso assume inizialmente l'aspetto di un nodulo, per poi ulcerarsi rapidamente, ricoprirsi di croste e passare a un rapido aumento di volume quando ormai la diagnosi precoce ha fallito\" riguarda la localizzazione del carcinoma orale:",
        "options": [
            "Palato",
            "Labbro inferiore",
            "Mucosa alveolare"
        ],
        "correct": 1
    },
    {
        "question": "Nel gruppo Pemfigo, le lesioni sono:",
        "options": [
            "In sede sottoepiteliale con assenza di fenomeni di acantolisi",
            "In sede sottoepiteliale con fenomeni di acantolisi",
            "In sede intraepiteliale con fenomeni di acantolisi"
        ],
        "correct": 2
    },
    {
        "question": "Quale tra le seguenti forme di pemfigo di origine autoimmune è la più frequente:",
        "options": [
            "Pemfigo volgare",
            "Pemfigo fogliaceo",
            "Pemfigo paraneoplastico"
        ],
        "correct": 0
    },
    {
        "question": "Il colletto del dente indica la linea che demarca:",
        "options": [
            "Corona e radice",
            "Corona e polpa",
            "Dentina e polpa"
        ],
        "correct": 0
    },
    {
        "question": "Nel carcinoma laringeo sottoglottico il sintomo tipico è:",
        "options": [
            "Disfonia",
            "Disfagia",
            "Emottisi + dispnea"
        ],
        "correct": 2
    },
    {
        "question": "Il consumo di alcolici associato al fumo:",
        "options": [
            "Non influisce sul rischio di carcinoma laringeo",
            "Aumenta leggermente il rischio",
            "Aumenta esponenzialmente il rischio"
        ],
        "correct": 2
    },
    {
        "question": "Per una paralisi ricorrenziale sinistra è più indicato eseguire:",
        "options": [
            "L'ecografia del collo",
            "La TC del mediastino e del collo con mezzo di contrasto",
            "La RM del collo senza mezzo di contrasto"
        ],
        "correct": 1
    },
    {
        "question": "Le vegetazioni adenoidi si sviluppano:",
        "options": [
            "Nell'orofaringe",
            "Nella rinofaringe",
            "Nell'ipofaringe"
        ],
        "correct": 1
    },
    {
        "question": "L'istologia della poliposi rinosinusale è caratterizzata fondamentalmente da:",
        "options": [
            "Iperplasia della mucosa",
            "Edema del chorion",
            "Metaplasia della mucosa"
        ],
        "correct": 1
    },
    {
        "question": "Indicare tra i seguenti sintomi quale non è appropriato per la poliposi rinosinusale:",
        "options": [
            "Iposmia",
            "Ipogeusia",
            "Dispnea nasale"
        ],
        "correct": 2
    },
    {
        "question": "Il recettore vestibolare ha un'attività di scarica di tipo:",
        "options": [
            "Tonico",
            "Fasico",
            "Misto"
        ],
        "correct": 0
    },
    {
        "question": "Nella vertigine periferica la deviazione del corpo e la fase lenta del nistagmo:",
        "options": [
            "Si dirigono verso il lato relativamente meno funzionante",
            "Si dirigono verso il lato relativamente più funzionante",
            "Non si dirigono verso lo stesso lato"
        ],
        "correct": 0
    },
    {
        "question": "Il recruitment è un fenomeno ad origine:",
        "options": [
            "Tipicamente retrococleare",
            "Tipicamente cocleare",
            "Cocleare e retrococleare"
        ],
        "correct": 1
    },
    {
        "question": "Il recruitment comporta:",
        "options": [
            "Un’aumentata percezione soggettiva dell’intensità sonora sopra soglia e una soglia del dolore abbassata",
            "Un aumento della percezione delle frequenze alte",
            "Una riduzione della discriminazione delle frequenze basse"
        ],
        "correct": 0
    },
    {
        "question": "Una perforazione timpanica può derivare da:",
        "options": [
            "Un'otite",
            "Un trauma",
            "Entrambi"
        ],
        "correct": 2
    },
    {
        "question": "Il condotto uditivo esterno e il cavo timpanico sono:",
        "options": [
            "In continuità diretta",
            "Separati dalla membrana timpanica",
            "In continuità diretta solo nel bambino"
        ],
        "correct": 1
    },
    {
        "question": "Lo studio del riflesso stapediale fornisce informazioni su:",
        "options": [
            "Sistema di trasmissione",
            "Recettore",
            "Entrambi"
        ],
        "correct": 2
    },
    {
        "question": "Il riflesso stapediale coinvolge:",
        "options": [
            "VIII e V nervo cranico",
            "VIII e VII nervo cranico",
            "VII e V nervo cranico"
        ],
        "correct": 1
    },
    {
        "question": "Le cellule ciliate interne:",
        "options": [
            "Convertono il suono in potenziali d'azione",
            "Stabilizzano la pressione interna",
            "Regolano il flusso di endolinfa"
        ],
        "correct": 0
    },
    {
        "question": "Nell'orecchio interno si trovano:",
        "options": [
            "I recettori del suono",
            "I recettori dell'accelerazione",
            "Entrambi"
        ],
        "correct": 2
    },
    {
        "question": "I canali semicircolari si trovano in:",
        "options": [
            "L'orecchio medio",
            "L'orecchio interno",
            "Il condotto uditivo esterno"
        ],
        "correct": 1
    },
    {
        "question": "L’ipoacusia improvvisa può essere causata da:",
        "options": [
            "Tumori cranici",
            "Infezioni virali o vasculopatie",
            "Difetti congeniti"
        ],
        "correct": 1
    },
    {
        "question": "L'ipoacusia improvvisa è localizzata:",
        "options": [
            "Tipicamente unilaterale",
            "Eccezionalmente bilaterale",
            "Generalmente/sempre bilaterale"
        ],
        "correct": 1
    },
    {
        "question": "A quale grado di danno cocleare si associa l'atresia auris?",
        "options": [
            "Grave",
            "Moderato",
            "Nessuno"
        ],
        "correct": 2
    },
    {
        "question": "La poliposi rinosinusale si considera:",
        "options": [
            "Una condizione infiammatoria cronica spesso associata ad uno stato allergico",
            "La complicanza di una rinopatia allergica",
            "Una varietà di rinopatia allergica",
            "Una malattia infettiva",
            "Una condizione allergica transitoria"
        ],
        "correct": 0
    },
    {
        "question": "Indicare tra le seguenti l'affezione che non si considera in genere tra le cause locali:",
        "options": [
            "Tumori etmoido-mascellari",
            "Tumori rinofaringei",
            "Poliposi rinosinusale"
        ],
        "correct": 1
    },
    {
        "question": "Quale tra le seguenti affermazioni sul pemfigo è corretta:",
        "options": [
            "Si presenta maggiormente negli uomini che nelle donne in età compresa tra i 10 e i 15 anni",
            "Si presenta con uguale incidenza negli uomini e nelle donne in età compresa tra i 30 e i 60 anni",
            "Si presenta maggiormente nelle donne che negli uomini in età compresa tra i 15 e i 20 anni"
        ],
        "correct": -1
    },
    {
        "question": "Il condotto uditivo esterno ed il cavo timpanico sono:",
        "options": [
            "In continuità diretta",
            "Separati dalla membrana timpanica",
            "In continuità diretta solo nel bambino"
        ],
        "correct": 1
    },
    {
        "question": "Lo studio del riflesso stapediale fornisce informazioni su:",
        "options": [
            "Sistema di trasmissione",
            "Recettore",
            "Entrambi"
        ],
        "correct": 2
    },
    {
        "question": "La più comune causa iatrogena di paralisi ricorrenziale è:",
        "options": [
            "Chirurgia tiroidea",
            "Chirurgia laringea",
            "Chirurgia parotidea"
        ],
        "correct": 0
    },
    {
        "question": "Se ho test di vitalità positivi, tasca sondabile e tumefazione allora ho:",
        "options": [
            "Ascesso pulpare",
            "Parodontale",
            "Pericoronale"
        ],
        "correct": 1
    },
    {
        "question": "L'ATM è composta da:",
        "options": [
            "Condilo, fossa glenoidea, tubercolo articolare e disco interarticolare",
            "Condilo, spina dello Spix, tubercolo articolare e disco",
            "Condilo, fosse glenoidea, tubercolo e spina"
        ],
        "correct": 0
    },
    {
        "question": "I tumori odontogeni benigni vengono suddivisi in:",
        "options": [
            "Epiteliali, mesenchimali e mesoteliali",
            "Epiteliali, mesoteliali, misti",
            "Epiteliali, mesenchimali, misti"
        ],
        "correct": 2
    },
    {
        "question": "Il criterio di classificazione del gruppo pemfigo si basa su:",
        "options": [
            "Sintomatologia ed eziopatogenesi",
            "Tipo di proteine interessate",
            "Tipo di lesioni sistemiche"
        ],
        "correct": 0
    },
    {
        "question": "Relativamente frequente, lieve incremento, elevata mortalità, problemi funzionali ed estetici post-intervento, può essere diagnosticato precocemente, può essere previsto. Queste affermazioni sul carcinoma squamoso del cavo orale sono:",
        "options": [
            "Tutte vere",
            "Tutte false",
            "Tutte vere tranne l’ultima"
        ],
        "correct": 2
    },
    {
        "question": "La neuronite vestibolare è caratterizzata da:",
        "options": [
            "Vertigini, sintomi neurovegetativi e nistagmo spontaneo di tipo periferico",
            "Vertigini, cefalea e nistagmo pluridirezionale",
            "Vertigini, diplopia e atassia"
        ],
        "correct": 0
    },
    {
        "question": "L'ipertrofia adeno-tonsillare:",
        "options": [
            "Deve essere sempre trattata chirurgicamente",
            "Tende a regredire con lo sviluppo",
            "Non deve essere mai trattata chirurgicamente"
        ],
        "correct": 1
    },
    {
        "question": "La fonazione è più direttamente collegata a:",
        "options": [
            "Epiglottide",
            "Ventricolo del Morgagni",
            "Legamento e muscolo vocale"
        ],
        "correct": 2
    },
    {
        "question": "Il lupus eritematoso può essere evidenziabile nel cavo orale nelle forme:",
        "options": [
            "Discoide e squamoso",
            "Squamoso e verrucoso",
            "Discoide e sistemico"
        ],
        "correct": 2
    },
    {
        "question": "La candida albicans è un fungo saprofita che si trova abitualmente:",
        "options": [
            "Nel cavo orale, nel tratto gastrointestinale e nel tratto bronchiale",
            "Nel cavo orale, nel tratto gastrointestinale e nella vagina",
            "Nel cavo orale, nel tratto gastrointestinale e nei reni"
        ],
        "correct": 1
    },
    {
        "question": "Il segno di Nikolsky è positivo quando:",
        "options": [
            "Dopo avere effettuato una lieve pressione sulla mucosa masticatoria si può verificare uno scollamento dello strato epiteliale con formazione di una bolla",
            "Dopo avere effettuato una lieve pressione sulla mucosa masticatoria si può verificare uno scollamento dello strato epiteliale senza formazione di bolle",
            "Dopo avere effettuato una lieve pressione sulla mucosa masticatoria si verifica un'ulcerazione",
            "Dopo un taglio chirurgico nella mucosa si formano bolle",
            "Quando si verifica una necrosi totale della mucosa"
        ],
        "correct": 0
    },
    {
        "question": "Quale delle seguenti affermazioni sulle ulcere orali ricorrenti è corretta:",
        "options": [
            "Herpes virus e streptococchi sono gli unici agenti eziologici",
            "L'eziopatogenesi è sconosciuta",
            "Sono sempre associate a carenza di vitamina B12"
        ],
        "correct": 1
    },
    {
        "question": "La diagnosi di epiglottite si effettua tramite:",
        "options": [
            "Laringoscopia",
            "Radiografia",
            "Esame obiettivo"
        ],
        "correct": 0
    },
    {
        "question": "Il nistagmo oculare patologico:",
        "options": [
            "È sempre accompagnato da un visus di 10/10",
            "È sempre associato allo strabismo",
            "Può essere causa di visus basso e/o torcicollo oculare"
        ],
        "correct": 2
    },
    {
        "question": "Quale esame specialistico va prescritto routinariamente al paziente cui è stato diagnosticato un morbo di Basedow:",
        "options": [
            "Elettroretinogramma",
            "Elettro-oculogramma",
            "Esame del campo visivo",
            "Test dei colori"
        ],
        "correct": 3
    },
    {
        "question": "Quale forma di degenerazione maculare si può giovare delle moderne terapie come la terapia fotodinamica o le terapie a base di farmaci antagonisti del VEGF:",
        "options": [
            "Degenerazione maculare legata all’età con neovascolarizzazione subretinica",
            "Degenerazione maculare del miope con neovascolarizzazione subretinica",
            "Degenerazione maculare legata all’età di tipo atrofico",
            "A + B"
        ],
        "correct": 3
    },
    {
        "question": "Le malattie demielinizzanti possono manifestarsi con:",
        "options": [
            "Neurite ottica retrobulbare",
            "Oftalmoplegia internucleare",
            "Entrambe le precedenti",
            "Nessuna delle precedenti"
        ],
        "correct": 2
    },
    {
        "question": "L’artrite reumatoide giovanile può complicarsi a livello oculare con:",
        "options": [
            "Cheratopatia a bandeletta, uveite e cataratta",
            "Miopatia elevata",
            "Retinoblastoma"
        ],
        "correct": 0
    },
    {
        "question": "Il soggetto affetto da fibrillazione atriale può andare incontro a:",
        "options": [
            "Glaucoma acuto",
            "Teleangectasie congiuntivali",
            "Cataratta metabolica",
            "Occlusione arteria retinica"
        ],
        "correct": 3
    },
    {
        "question": "Quale presidio topico è più largamente consigliato per la detersione delle coane nasali:",
        "options": [
            "Soluzione salina, fisiologica o similari",
            "Corticosteroidi associati a soluzione antibiotica",
            "Vasocostrittori alfa-adrenergici"
        ],
        "correct": -1
    },
    {
        "question": "Quali preparati topici per uso nasale non possono essere adoperati a lungo:",
        "options": [
            "Corticosteroidi",
            "Vasocostrittori alfa-adrenergici",
            "Soluzione salina"
        ],
        "correct": -1
    },
    {
        "question": "Il limite anteriore del rinofaringe è costituito da:",
        "options": [
            "Coane",
            "Velo palatino",
            "Fossa pterigo-mascellare"
        ],
        "correct": -1
    },
    {
        "question": "Le cripte tonsillari servono a:",
        "options": [
            "Favorire il contatto con antigeni esterni",
            "Favorire il drenaggio di secrezioni"
        ],
        "correct": -1
    },
    {
        "question": "Quale di questi sintomi non è di pertinenza dell’ascesso peritonsillare:",
        "options": [
            "Odinofagia",
            "Pseudotrisma",
            "Rinorrea"
        ],
        "correct": -1
    },
    {
        "question": "Il fibroangioma giovanile rinofaringeo metastatizza:",
        "options": [
            "spesso",
            "mai",
            "raramente"
        ],
        "correct": -1
    },
    {
        "question": "L’innervazione della laringe è dovuta al:",
        "options": [
            "vago",
            "glosso-faringeo",
            "ipoglosso"
        ],
        "correct": -1
    },
    {
        "question": "Le aritenoidi comunicano posteriormente:",
        "options": [
            "con la rinofaringe",
            "con l’ipofaringe",
            "con le vallecole glosso-epiglottiche"
        ],
        "correct": -1
    },
    {
        "question": "L’epiglottidite acuta può provocare:",
        "options": [
            "dispnea acuta grave con possibile soffocamento",
            "disfonia permanente",
            "nessuna delle due"
        ],
        "correct": -1
    },
    {
        "question": "Per la diagnosi di epiglottidite acuta è indispensabile:",
        "options": [
            "orofaringoscopia",
            "laringoscopia",
            "RMN"
        ],
        "correct": -1
    },
    {
        "question": "La laringite ipoglottica è di origine:",
        "options": [
            "virale",
            "micotica",
            "batterica"
        ],
        "correct": -1
    },
    {
        "question": "Il laringocele può derivare da:",
        "options": [
            "ripetute infiammazioni",
            "leucoplachia",
            "aumento di pressione aerea endolaringea"
        ],
        "correct": -1
    },
    {
        "question": "La glottide ha una vascolarizzazione linfatica:",
        "options": [
            "scarsa",
            "abbondante",
            "anormale"
        ],
        "correct": -1
    },
    {
        "question": "La lesione del nervo laringeo superiore causa un deficit di:",
        "options": [
            "motilità linguale",
            "motilità laringea",
            "entrambi"
        ],
        "correct": -1
    },
    {
        "question": "Il fibroangioma giovanile rinofaringeo metastatizza:",
        "options": [
            "spesso",
            "mai",
            "raramente"
        ],
        "correct": 2
    },
    {
        "question": "La manifestazione più grave del fibroangioma rinofaringeo è:",
        "options": [
            "Epistassi",
            "dislalia",
            "dispnea",
            "Dispnea",
            "Otalgia"
        ],
        "correct": 0
    },
    {
        "question": "La disfonia è:",
        "options": [
            "un deficit o alterazione di emissione della voce",
            "un deficit o alterazione di articolazione della parola",
            "entrambi"
        ],
        "correct": 0
    },
    {
        "question": "Quale di queste affezioni non si può associare a disfonia:",
        "options": [
            "neoplasia laringea",
            "neoplasia rinofaringea estesa al basicranio",
            "neoplasia della tonsilla palatina"
        ],
        "correct": 2
    },
    {
        "question": "L’innervazione della laringe è dovuta al:",
        "options": [
            "vago",
            "glosso-faringeo",
            "ipoglosso"
        ],
        "correct": 0
    },
    {
        "question": "Le aritenoidi comunicano posteriormente:",
        "options": [
            "con la rinofaringe",
            "con l’ipofaringe",
            "con le vallecole glosso-epiglottiche"
        ],
        "correct": 1
    },
    {
        "question": "L’epiglottidite acuta può provocare:",
        "options": [
            "dispnea acuta grave con possibile soffocamento",
            "disfonia permanente",
            "nessuna delle due"
        ],
        "correct": 0
    },
    {
        "question": "Per la diagnosi di epiglottidite acuta è indispensabile:",
        "options": [
            "orofaringoscopia",
            "laringoscopia",
            "RMN"
        ],
        "correct": 1
    },
    {
        "question": "La laringite ipoglottica è di origine:",
        "options": [
            "virale",
            "micotica",
            "batterica"
        ],
        "correct": 0
    },
    {
        "question": "Il laringocele può derivare da:",
        "options": [
            "ripetute infiammazioni",
            "leucoplachia",
            "aumento di pressione aerea endolaringea"
        ],
        "correct": 2
    },
    {
        "question": "La glottide ha una vascolarizzazione linfatica:",
        "options": [
            "scarsa",
            "abbondante",
            "anormale"
        ],
        "correct": 0
    },
    {
        "question": "La lesione del nervo laringeo superiore causa un deficit di:",
        "options": [
            "motilità linguale",
            "motilità laringea",
            "entrambi"
        ],
        "correct": 1
    },
    {
        "question": "La diplopia non può presentarsi in caso di:",
        "options": [
            "neoplasia maligna del seno mascellare",
            "neoplasia maligna rinofaringea",
            "neoplasia maligna parotidea"
        ],
        "correct": 1
    },
    {
        "question": "Ipoacusia, vertigine e deficit del nervo faciale possono associarsi:",
        "options": [
            "nell’herpes zoster oticus",
            "nel neurinoma dell’acustico",
            "entrambi"
        ],
        "correct": 2
    },
    {
        "question": "Quale affezione non comporta un’ipoacusia neurosensoriale monolaterale:",
        "options": [
            "neurinoma",
            "presbiacusia",
            "labirintite"
        ],
        "correct": 1
    },
    {
        "question": "Il danno da rumore colpisce:",
        "options": [
            "il nervo acustico",
            "l’orecchio interno",
            "l’orecchio medio"
        ],
        "correct": 1
    },
    {
        "question": "Il tubo di ventilazione transtimpanico:",
        "options": [
            "permette la ventilazione dell’orecchio medio",
            "impedisce alla tuba di funzionare",
            "entrambi"
        ],
        "correct": 0
    },
    {
        "question": "La timpanoplastica aperta trova indicazione nel trattamento:",
        "options": [
            "della perforazione timpanica",
            "del colesteatoma",
            "dell’otite media secretiva"
        ],
        "correct": 1
    },
    {
        "question": "L’intensità del suono si misura in:",
        "options": [
            "Hertz",
            "deca Pascal",
            "nessuno dei due"
        ],
        "correct": 1
    },
    {
        "question": "La frequenza del suono si misura in:",
        "options": [
            "dB",
            "Hertz",
            "nessuno dei due"
        ],
        "correct": 1
    },
    {
        "question": "La soglia audiometrica per via ossea è:",
        "options": [
            "migliore di quella per via aerea",
            "uguale o migliore di quella per via aerea",
            "uguale o peggiore di quella per via aerea"
        ],
        "correct": 1
    },
    {
        "question": "In caso di ipoacusia neurosensoriale:",
        "options": [
            "la curva per via ossea e la curva per via aerea coincidono",
            "la curva per via ossea ha una soglia peggiore di quella per via aerea",
            "la curva per via aerea ha una soglia peggiore di quella per via ossea"
        ],
        "correct": 0
    },
    {
        "question": "In caso di ipoacusia mista:",
        "options": [
            "la curva per via ossea e la curva per via aerea coincidono",
            "la curva per via ossea ha una soglia peggiore di quella per via aerea",
            "la curva per via aerea ha una soglia peggiore di quella per via ossea"
        ],
        "correct": 2
    },
    {
        "question": "L’ipoacusia neurosensoriale può riguardare:",
        "options": [
            "orecchio medio",
            "orecchio interno",
            "entrambi"
        ],
        "correct": 1
    },
    {
        "question": "L’ipoacusia neurosensoriale è più spesso:",
        "options": [
            "cocleare",
            "retrococleare",
            "tubo timpanica"
        ],
        "correct": 0
    },
    {
        "question": "Una ipoacusia mista riguarda anche l’orecchio esterno:",
        "options": [
            "sempre",
            "qualche volta",
            "mai"
        ],
        "correct": 1
    },
    {
        "question": "L’impedenziometria fornisce informazioni:",
        "options": [
            "esclusivamente sul sistema di trasmissione",
            "esclusivamente sul recettore",
            "su entrambi"
        ],
        "correct": 2
    },
    {
        "question": "Lo stimolo fisiologico per i recettori dei canali semicircolari è:",
        "options": [
            "accelerazione lineare",
            "accelerazione angolare",
            "velocità angolare"
        ],
        "correct": 1
    },
    {
        "question": "L'elemento dentale 47 corrisponde al:",
        "options": [
            "secondo molare inferiore di destra",
            "primo molare inferiore di sinistra",
            "secondo molare inferiore di sinistra"
        ],
        "correct": 0
    },
    {
        "question": "A quale ascesso si riferisce la seguente sintomatologia: “test di vitalità positivi, presenza di una tasca sondabile, presenza di una tumefazione localizzata e coronale”:",
        "options": [
            "Pulpare",
            "Parodontale",
            "Pericondrale"
        ],
        "correct": 1
    },
    {
        "question": "Relativamente frequente - lieve incremento – elevata mortalità - problemi funzionali ed estetici post-intervento - può essere diagnosticato precocemente - può essere previsto. Queste affermazioni sul carcinoma squamoso del cavo orale sono:",
        "options": [
            "Tutte vere",
            "Tutte false",
            "Tutte vere fuorché l’ultima"
        ],
        "correct": 0
    },
    {
        "question": "La teoria della field cancerization sostiene che:",
        "options": [
            "Le alterazioni geniche del secondo tumore non saranno esattamente uguali a quelle del primo tumore",
            "Le alterazioni geniche del secondo tumore saranno esattamente uguali a quelle del primo tumore",
            "Il secondo tumore può presentare alterazioni geniche"
        ],
        "correct": 2
    },
    {
        "question": "Attualmente, le malattie bollose vengono suddivise in:",
        "options": [
            "2 gruppi: bolla in sede intraepiteliale con acantolisi (pemfigo) e sottoepiteliale senza acantolisi (pemfigoide)",
            "3 gruppi: bolla in sede intraepiteliale con fenomeni di acantolisi (Gruppo Pemfigo), sottoepiteliale con assenza di fenomeni di acantolisi (Gruppo Pemfigoide) e sopraepiteliale con fenomeni di acantolisi (Gruppo Misto)",
            "2 gruppi: bolla in sede sottoepiteliale con fenomeni di acantolisi (Pemfigos) e intraepiteliale senza acantolisi (pemfigoide)"
        ],
        "correct": 1
    },
    {
        "question": "Nei tessuti infiammati l'azione degli anestetici locali è:",
        "options": [
            "Maggiore rispetto ai tessuti non infiammati",
            "Minore rispetto ai tessuti non infiammati",
            "Uguale rispetto ai tessuti non infiammati"
        ],
        "correct": 1
    },
    {
        "question": "La presbiacusia è in genere:",
        "options": [
            "Non protesizzabile",
            "Protesizzabile",
            "Suscettibile di trattamento chirurgico"
        ],
        "correct": 1
    },
    {
        "question": "Il limite anteriore del rinofaringe è costituito da:",
        "options": [
            "Coane",
            "Velo palatino",
            "Fossa pterigo-mascellare"
        ],
        "correct": 0
    },
    {
        "question": "La leucocoria in un neonato può essere segno di:",
        "options": [
            "Retinoblastoma",
            "Congiuntivite allergica",
            "Astigmatismo"
        ],
        "correct": 0
    },
    {
        "question": "L’exotropia è:",
        "options": [
            "Una forma di strabismo",
            "Un vizio di refrazione",
            "Una degenerazione corneale"
        ],
        "correct": 0
    },
    {
        "question": "Un difetto di sviluppo della funzione visiva che si verifica in età infantile è detto:",
        "options": [
            "Ambliopia",
            "Esotropia",
            "Ipometropia"
        ],
        "correct": 0
    },
    {
        "question": "Nel caso di rinite con eosinofili nel secreto, quando si può parlare di rinite allergica?",
        "options": [
            "Sempre",
            "Mai",
            "NON SEMPRE"
        ],
        "correct": 2
    },
    {
        "question": "Quale tra queste è una classificazione valida per gli anestetici locali?",
        "options": [
            "Gassosi e volatili",
            "Eteri e gassosi",
            "AMIDI ED ESTERI"
        ],
        "correct": 2
    },
    {
        "question": "Tra i carboidrati qual è il più coinvolto nella formazione della carie?",
        "options": [
            "Glucosio",
            "Fruttosio",
            "SACCAROSIO"
        ],
        "correct": 2
    },
    {
        "question": "Che tipo di articolazione è la temporo-mandibolare?",
        "options": [
            "Condiloartrosi",
            "GINGLIMO-ARTROIDALE",
            "Sincondrosi"
        ],
        "correct": 1
    },
    {
        "question": "Cos’è il cemento?",
        "options": [
            "Tessuto mineralizzato del dente",
            "TESSUTO CHE CIRCONDA LA SUPERFICIE RADICOLARE",
            "Rivestimento esterno dello smalto"
        ],
        "correct": 1
    },
    {
        "question": "Nell'astigmatismo:",
        "options": [
            "La cornea ha raggio di curvatura uniforme",
            "I meridiani corneali principali hanno raggio di curvatura differente",
            "La cornea non influisce sulla visione"
        ],
        "correct": 1
    },
    {
        "question": "Che cos'è l'ambliopia:",
        "options": [
            "Un difetto refrattivo",
            "Un'infiammazione oculare",
            "Un difetto di sviluppo della funzione visiva che si verifica in età infantile"
        ],
        "correct": 2
    },
    {
        "question": "La diplopia è un sintomo tipico di:",
        "options": [
            "Strabismo paretico/paralitico insorto in età adulta",
            "Astigmatismo",
            "Ipermetropia",
            "Strabismo infantile",
            "Retinopatia diabetica avanzata",
            "Neuropatia ottica ischemica",
            "Amaurosi fugax"
        ],
        "correct": 0
    },
    {
        "question": "Il nistagmo oculare patologico:",
        "options": [
            "Non influisce sul visus",
            "Può essere causa di visus basso e/o torcicollo oculare",
            "È sempre presente in condizioni normali"
        ],
        "correct": 1
    },
    {
        "question": "Quale di queste affermazioni descrive la superficie mesiale del dente:",
        "options": [
            "È la superficie che contatta il dente controlaterale",
            "È la superficie occlusale",
            "Contatta la superficie distale del dente che lo precede, prospiciente alla linea mediana"
        ],
        "correct": 2
    },
    {
        "question": "Nella patogenesi della carie dentale, il pH critico per la demineralizzazione dello smalto è:",
        "options": [
            "6.0",
            "5.2",
            "4.5"
        ],
        "correct": 1
    },
    {
        "question": "Tre gruppi principali delle cisti a seconda del coinvolgimento o meno dell’epitelio odontogeno:",
        "options": [
            "Cisti odontogene, cisti dentali, pseudocisti",
            "Cisti odontogene, non odontogene, pseudocisti",
            "Cisti radicolari, cisti dentali, granulomi"
        ],
        "correct": 1
    },
    {
        "question": "Il carcinoma del cavo orale origina:",
        "options": [
            "Dall’epitelio connettivale della mucosa orale",
            "Dall’epitelio pavimentoso/squamoso pluristratificato della mucosa orale",
            "Dal tessuto osseo mandibolare"
        ],
        "correct": 1
    },
    {
        "question": "Fattori eziologici del carcinoma del cavo orale:",
        "options": [
            "Solo il tabacco",
            "Tabacco, alcool, disvitaminosi (A e C), iposideremia",
            "Solo l’alcol"
        ],
        "correct": 1
    },
    {
        "question": "La sede più frequentemente interessata dal carcinoma del cavo orale è:",
        "options": [
            "Palato duro",
            "Lingua",
            "Gengiva alveolare"
        ],
        "correct": 1
    },
    {
        "question": "La terapia del colesteatoma è:",
        "options": [
            "Terapia antibiotica",
            "Timpanoplastica",
            "Aspirazione chirurgica del liquido"
        ],
        "correct": 1
    },
    {
        "question": "Presbiacusia deriva da:",
        "options": [
            "Ripetute infezioni virali",
            "Involuzione senile plurifattoriale",
            "Trauma acustico acuto"
        ],
        "correct": 1
    },
    {
        "question": "Convertono il suono in potenziali d'azione:",
        "options": [
            "Cellule ciliate esterne",
            "Cellule ciliate interne",
            "Stria vascolare"
        ],
        "correct": 1
    },
    {
        "question": "Nell'orecchio interno si trovano:",
        "options": [
            "Solo recettori di suono",
            "Solo recettori di accelerazione",
            "Entrambi"
        ],
        "correct": 2
    },
    {
        "question": "Lo stimolo fisiologico per i recettori dei canali semicircolari è:",
        "options": [
            "Vibrazioni sonore",
            "Accelerazione angolare",
            "Accelerazione lineare"
        ],
        "correct": 1
    },
    {
        "question": "L’ipoacusia neurosensoriale è:",
        "options": [
            "Non protesizzabile",
            "Curabile con farmaci",
            "Protesizzabile, con protesi monolaterale"
        ],
        "correct": 2
    },
    {
        "question": "Il canale naso-lacrimale sbocca:",
        "options": [
            "Nel meato medio",
            "Nel rinofaringe",
            "Nel meato inferiore"
        ],
        "correct": 2
    },
    {
        "question": "Le vegetazioni adenoidi si sviluppano:",
        "options": [
            "Orofaringe",
            "Rinofaringe",
            "Ipofaringe"
        ],
        "correct": 1
    },
    {
        "question": "Per la diagnosi di epiglottidite acuta è indispensabile:",
        "options": [
            "TAC",
            "Ecografia",
            "Laringoscopia"
        ],
        "correct": 2
    },
    {
        "question": "L'epiglottidite acuta può provocare:",
        "options": [
            "Rinite",
            "Otalgia",
            "Dispnea acuta grave con possibile soffocamento"
        ],
        "correct": 2
    },
    {
        "question": "Il fibroangioma giovanile rinofaringeo metastatizza:",
        "options": [
            "Frequentemente",
            "Sporadicamente",
            "Mai"
        ],
        "correct": 2
    },
    {
        "question": "Il sintomo di una paralisi ricorrenziale monolaterale è:",
        "options": [
            "Disfonia",
            "Dispnea",
            "Emottisi"
        ],
        "correct": 0
    },
    {
        "question": "La tracheotomia può essere indicata per:",
        "options": [
            "Sinusite cronica",
            "Otite media secretiva",
            "Gestione della ventilazione passiva in casi di coma prolungato"
        ],
        "correct": 2
    },
    {
        "question": "Trattamento neurinoma:",
        "options": [
            "Chirurgia",
            "Radio stereotassica",
            "Wait and scan, chirurgia e radio stereotassica"
        ],
        "correct": 2
    },
    {
        "question": "Sindrome NON correlata alla poliposi:",
        "options": [
            "Sindrome di Kartagener",
            "Sindrome ASA",
            "Sindrome di Eagle"
        ],
        "correct": 2
    },
    {
        "question": "Adenopatie laterocervicali sono tipiche nel:",
        "options": [
            "Carcinoma glottico",
            "Carcinoma sopraglottico",
            "Carcinoma sopra e sotto glottico (a + b)"
        ],
        "correct": 2
    },
    {
        "question": "Paralisi ricorrenziale sinistra può derivare da affezioni a carico di:",
        "options": [
            "Solo esofago e trachea",
            "Atrio e pericardio",
            "Atrio, arco aortico, pericardio, apice polmonare, pleura, linfonodi mediastinici, tiroide, trachea, esofago"
        ],
        "correct": 2
    },
    {
        "question": "La più comune causa iatrogena di paralisi ricorrenziale è:",
        "options": [
            "Chirurgia laringea",
            "Chirurgia parotidea",
            "Chirurgia tiroidea"
        ],
        "correct": 2
    },
    {
        "question": "Più comune causa di paralisi ricorrenziale:",
        "options": [
            "Chirurgia tiroidea",
            "Tumori glottici",
            "Trauma cervicale"
        ],
        "correct": 0
    },
    {
        "question": "Paralisi del VII periferica intracranica causa:",
        "options": [
            "Ptosi palpebrale",
            "Ipoacusia",
            "Paralisi emivolto"
        ],
        "correct": 2
    },
    {
        "question": "Dente 18:",
        "options": [
            "Primo molare superiore sinistro",
            "Terzo molare superiore sinistro",
            "Terzo molare superiore destro"
        ],
        "correct": 2
    },
    {
        "question": "Gomma luetica:",
        "options": [
            "Sifilide primaria",
            "Sifilide secondaria",
            "Sifilide terziaria"
        ],
        "correct": 2
    },
    {
        "question": "Elementi che costituiscono l’ATM:",
        "options": [
            "Condilo, spina dello Spix, tubercolo e disco",
            "Condilo, fossa glenoidea, tubercolo e disco",
            "Fossa temporale, disco articolare e spina dello Spix"
        ],
        "correct": 1
    },
    {
        "question": "Una tipica tumefazione laterocervicale NON può essere di natura:",
        "options": [
            "Malformativa",
            "Infetta",
            "Allergica"
        ],
        "correct": 2
    },
    {
        "question": "La lamina cribrosa confina con:",
        "options": [
            "Fossa cranica posteriore",
            "Fossa pterigo-mascellare",
            "Fossa cranica anteriore"
        ],
        "correct": 2
    },
    {
        "question": "Il più frequente tumore maligno della tonsilla palatina è:",
        "options": [
            "Linfoma",
            "Sarcoma",
            "Carcinoma"
        ],
        "correct": 2
    },
    {
        "question": "Nel carcinoma laringeo glottico il sintomo tipico è:",
        "options": [
            "Disfagia",
            "Emottisi + dispnea",
            "Disfonia"
        ],
        "correct": 2
    },
    {
        "question": "Nel carcinoma laringeo sottoglottico il sintomo tipico è:",
        "options": [
            "Disfonia",
            "Disfagia",
            "Emottisi + dispnea"
        ],
        "correct": 2
    },
    {
        "question": "Per una paralisi ricorrenziale sinistra è più indicato eseguire:",
        "options": [
            "L'ecografia del collo",
            "La TC del mediastino e del collo con mezzo di contrasto",
            "La RM del collo senza mezzo di contrasto"
        ],
        "correct": 1
    },
    {
        "question": "Le vegetazioni adenoidi si sviluppano:",
        "options": [
            "Nell'orofaringe",
            "Nella rinofaringe",
            "Nell'ipofaringe"
        ],
        "correct": 1
    },
    {
        "question": "La tonsillectomia può essere indicata per:",
        "options": [
            "apnee notturne",
            "tonsilliti recidivanti",
            "entrambe"
        ],
        "correct": 2
    },
    {
        "question": "La leucocoria (riflesso giallastro in campo pupillare) in un neonato può essere segno di:",
        "options": [
            "cataratta congenita",
            "retinopatia del prematuro",
            "retinoblastoma"
        ],
        "correct": 2
    },
    {
        "question": "La visione di lampi luminosi (fotopsie) può essere dovuta a:",
        "options": [
            "neurite ottica",
            "distacco di retina",
            "trazione del vitreo sulla retina"
        ],
        "correct": 2
    },
    {
        "question": "Un'accentuazione dell'escavazione fisiologica della testa del nervo ottico (papilla ottica) è segno di:",
        "options": [
            "neurite ottica retrobulbare",
            "glaucoma in stato avanzato",
            "degenerazione maculare senile"
        ],
        "correct": 1
    },
    {
        "question": "Quale antibiotico NON è indicato (controindicato) per la sinusite nel bambino:",
        "options": [
            "cefalosporine",
            "amoxicillina + acido clavulanico",
            "chinolonici"
        ],
        "correct": 2
    },
    {
        "question": "La diffusione del carcinoma laringeo da una sottosede all’altra, all’interno dell’organo, è ostacolata da:",
        "options": [
            "abbondante vascolarizzazione",
            "struttura ossea della laringe",
            "scarsa comunicazione della rete linfatica"
        ],
        "correct": 2
    },
    {
        "question": "I polipi laringei sono di natura:",
        "options": [
            "malformativa",
            "neoplastica",
            "infiammatoria"
        ],
        "correct": 2
    },
    {
        "question": "Qual è il più frequente precursore del colesteatoma:",
        "options": [
            "una perforazione timpanica paracentrale",
            "una tasca di retrazione epitimpanica",
            "una frattura della rocca petrosa"
        ],
        "correct": 1
    },
    {
        "question": "Diplopia e midriasi monolaterale areflessica:",
        "options": [
            "paralisi del quarto nervo cranico",
            "paralisi del sesto nervo cranico",
            "paralisi del terzo nervo cranico"
        ],
        "correct": 2
    },
    {
        "question": "In caso di ipoacusia mista:",
        "options": [
            "la curva per via ossea e quella per via aerea coincidono",
            "la curva per via ossea è peggiore",
            "la curva per via aerea ha una soglia peggiore di quella per via ossea"
        ],
        "correct": 2
    },
    {
        "question": "Sfintere pupillare: innervato da:",
        "options": [
            "ganglio simpatico cervicale superiore",
            "centro cilio-spinale C5-T1",
            "ganglio ciliare parasimpatico"
        ],
        "correct": 2
    },
    {
        "question": "Muscolo dilatatore pupillare: innervato da:",
        "options": [
            "ganglio ciliare parasimpatico",
            "ganglio cervicale superiore (simpatico)",
            "nervo oculomotore"
        ],
        "correct": 1
    },
    {
        "question": "Il fattore di rischio principale per il carcinoma laringeo è:",
        "options": [
            "il fumo di sigaretta",
            "il fumo di sigaro",
            "l’inalazione di vapori di colle"
        ],
        "correct": 0
    },
    {
        "question": "Le terapie di fotocoagulazione e fotodinamiche e la somministrazione di Ab anti-VEGF sono indicate:",
        "options": [
            "nel glaucoma acuto ad angolo stretto",
            "nella maculopatia senile con neovascolarizzazione sub-retinica e nella maculopatia miopica con neovascolarizzazione sub-retinica",
            "nella cataratta senile"
        ],
        "correct": 1
    },
    {
        "question": "Un paziente giunge in PS con visione doppia, possiamo sospettare:",
        "options": [
            "glaucoma ad angolo aperto",
            "strabismo paralitico acuto",
            "degenerazione maculare"
        ],
        "correct": 1
    },
    {
        "question": "Quale delle seguenti descrizioni si riferisce alla prevenzione primaria:",
        "options": [
            "siamo in presenza di una lesione dell’epitelio del cavo orale la quale non è ancora una lesione tumorale ma lo potrà diventare (lesione preneoplastica)",
            "siamo già in presenza di una lesione tumorale in un paziente che si presenta da noi per la prima volta",
            "la mucosa del cavo orale non presenta alcun tipo di lesione. In questa fase il medico deve consigliare alcune regole al paziente che si trovano in uno stato di rischio potenziale di sviluppare il tumore"
        ],
        "correct": -1
    },
    {
        "question": "La timpanoplastica aperta trova indicazione nel trattamento:",
        "options": [
            "dell'ipoacusia trasmissiva",
            "del colesteatoma",
            "della presbiacusia"
        ],
        "correct": 1
    },
    {
        "question": "Il glaucoma acuto:",
        "options": [
            "richiede un trattamento medico immediato",
            "è una patologia autolimitante",
            "non necessita di trattamento"
        ],
        "correct": 0
    },
    {
        "question": "Qual è il più frequente precursore del colesteatoma:",
        "options": [
            "un’infezione da otite media acuta",
            "una tasca di retrazione epitimpanica",
            "un trauma cranico"
        ],
        "correct": 1
    },
    {
        "question": "La trazione accidentale dei muscoli extraoculari in corso di intervento causa:",
        "options": [
            "Vomito a getto",
            "Bradicardizzazione riflessa"
        ],
        "correct": 1
    },
    {
        "question": "Un paziente con un pregresso ictus cerebri può presentare:",
        "options": [
            "Perdita dell’udito",
            "Calo del visus in alcune aree del campo visivo"
        ],
        "correct": 1
    },
    {
        "question": "Le terapie di fotocoagulazione e fotodinamiche e la somministrazione di Ab anti-VEGF sono indicate:",
        "options": [
            "Nella maculopatia miopica senza neovascolarizzazione",
            "Nella maculopatia senile con neovascolarizzazione sub-retinica"
        ],
        "correct": 1
    },
    {
        "question": "Qual è il segno oculare tipico dell’ipertensione endocranica di recente insorgenza:",
        "options": [
            "Emorragia retinica",
            "Edema bilaterale della papilla"
        ],
        "correct": 1
    },
    {
        "question": "Qual è il farmaco controindicato in pazienti con glaucoma:",
        "options": [
            "Beta-bloccanti",
            "Colliri midriatici"
        ],
        "correct": 1
    },
    {
        "question": "L’anestesia locale per infiltrazione può essere:",
        "options": [
            "Solo tronculare",
            "Plessica o terminale e di conduzione o tronculare"
        ],
        "correct": 1
    },
    {
        "question": "Nell’anestesia locale per infiltrazione la concentrazione di Lidocaina è:",
        "options": [
            "1\\%",
            "2\\%",
            "3\\%"
        ],
        "correct": 1
    },
    {
        "question": "I farmaci maggiormente indicati in letteratura per il trattamento del Lichen nelle sue manifestazioni lievi o moderate sono:",
        "options": [
            "macrolidi",
            "FANS",
            "steroidi topici (collutori, pomate)"
        ],
        "correct": 1
    },
    {
        "question": "Quale tra le seguenti famiglie di antibiotici non viene utilizzata come prima scelta nella terapia antibiotica delle infezioni odontoiatriche:",
        "options": [
            "Penicilline",
            "Cefalosporine",
            "Macrolidi"
        ],
        "correct": 2
    },
    {
        "question": "Patologia oculare da uso cronico di amiodarone:",
        "options": [
            "Retinopatia pigmentosa",
            "Cheratopatia (cornea verticillata)",
            "Uveite"
        ],
        "correct": 1
    },
    {
        "question": "Non è una lesione bianca:",
        "options": [
            "Leucoplachia",
            "Lichen planus",
            "Candidosi eritematosa"
        ],
        "correct": 2
    },
    {
        "question": "Entropion:",
        "options": [
            "Inversione verso l’esterno del bordo palpebrale",
            "Inversione verso l’interno del bordo palpebrale e delle ciglia",
            "Nessuna delle precedenti"
        ],
        "correct": 1
    },
    {
        "question": "L’anestesia locale per infiltrazione può essere:",
        "options": [
            "Solo tronculare",
            "Plessica o terminale e di conduzione o tronculare"
        ],
        "correct": 1
    },
    {
        "question": "Quale causa anisocoria:",
        "options": [
            "Glaucoma",
            "Cataratta",
            "Sindrome di Horner"
        ],
        "correct": 2
    },
    {
        "question": "Una pulpite può essere causata da:",
        "options": [
            "Carie dentali",
            "Esposizione traumatica della polpa",
            "Entrambe le precedenti"
        ],
        "correct": 2
    },
    {
        "question": "Cos’è il cheratotono:",
        "options": [
            "Alterazione della retina",
            "Sfiancamento corneale",
            "Edema della papilla"
        ],
        "correct": 1
    },
    {
        "question": "Nella placca batterica gengivale la percentuale di anaerobi obbligati è:",
        "options": [
            "20-40\\%",
            "40-60\\%",
            "40-80\\%"
        ],
        "correct": 2
    },
    {
        "question": "Nella parodontite apicale cronica (granuloma) i batteri anaerobi obbligati all’interno del canale sono circa:",
        "options": [
            "50\\%",
            "70\\%",
            "90\\%"
        ],
        "correct": 1
    },
    {
        "question": "La patologia infiammatoria dell’orecchio medio dipende fondamentalmente da:",
        "options": [
            "Infezioni batteriche",
            "Infezioni virali",
            "Malfunzione tubarica"
        ],
        "correct": 2
    },
    {
        "question": "Complicanza dell’orzaiolo:",
        "options": [
            "Ascesso",
            "Fistola",
            "Cellulite"
        ],
        "correct": 2
    },
    {
        "question": "Il muscolo obliquo superiore è innervato da:",
        "options": [
            "Il VII nervo cranico",
            "La branca oftalmica del V nervo cranico",
            "Il IV nervo cranico",
            "Il III nervo cranico"
        ],
        "correct": 1
    },
    {
        "question": "In un PS, nel dubbio che un paziente cosciente con sintomi neuro abbia un’emianopsia omonima dovuta a un ictus, si evidenzia con:",
        "options": [
            "RMN cerebrale",
            "TC cranio senza contrasto",
            "Esame del campo visivo di confronto"
        ],
        "correct": 2
    },
    {
        "question": "Prognosi a due anni pessima, è spesso inoperabile, la radioterapia non ha effetto, dà metastasi a distanza; a quale neoplasia del cavo orale si riferisce tale descrizione:",
        "options": [
            "Carcinoma squamoso",
            "Adenocarcinoma",
            "Melanoma"
        ],
        "correct": 2
    },
    {
        "question": "Quale di queste affermazioni riguardanti lo smalto è vera?",
        "options": [
            "Tessuto che ricopre interamente la polpa",
            "Tessuto di sostegno",
            "Tessuto acellulare mineralizzato"
        ],
        "correct": 2
    },
    {
        "question": "La colonizzazione dello Stafilococco aureo è stata associata con:",
        "options": [
            "Poliposi rinosinusale",
            "Sinusite mascellare",
            "Otite media"
        ],
        "correct": 1
    },
    {
        "question": "Il muscolo obliquo superiore è innervato da:",
        "options": [
            "Il VII nervo cranico",
            "La branca oftalmica del V nervo cranico",
            "Il IV nervo cranico"
        ],
        "correct": 2
    },
    {
        "question": "Eucocoria nel bimbo è indice di:",
        "options": [
            "Glaucoma congenito",
            "Papilledema",
            "Retinoblastoma"
        ],
        "correct": 2
    },
    {
        "question": "Le componenti dell’impedenza acustica sono:",
        "options": [
            "Resistenza e ammettenza",
            "Resistenza e reattanza",
            "Resistenza, reattanza e ammettenza"
        ],
        "correct": 1
    },
    {
        "question": "Il trauma acustico deriva da:",
        "options": [
            "ripetute labirintiti",
            "frattura della rocca petrosa",
            "esposizione a rumore"
        ],
        "correct": 2
    },
    {
        "question": "Adenopatie latero cervicali sono tipiche nel:",
        "options": [
            "carcinoma sopra e sotto glottico (a+b)"
        ],
        "correct": 0
    },
    {
        "question": "Sindrome NON correlata a poliposi:",
        "options": [
            "sindrome di eagle (per esclusione)"
        ],
        "correct": 0
    },
    {
        "question": "Per la protesizzazione acustica nell’adulto, oltre all’audiometria tonale, è comunemente più utile:",
        "options": [
            "l'audiometria vocale"
        ],
        "correct": 0
    },
    {
        "question": "La soglia audiometrica per via ossea è:",
        "options": [
            "uguale o migliore di quella per via aerea"
        ],
        "correct": 0
    },
    {
        "question": "L’ascesso peritonsillare si tratta:",
        "options": [
            "con antibiotici per via parenterale e drenaggio",
            "con il solo drenaggio",
            "con antibiotici per os"
        ],
        "correct": 0
    },
    {
        "question": "Un paziente affetto da grave malassorbimento intestinale può andare incontro a:",
        "options": [
            "neuropatia ottica carenziale"
        ],
        "correct": 0
    },
    {
        "question": "Un ostacolo al deflusso dell'umore acqueo si manifesta con:",
        "options": [
            "aumento della pressione intraoculare"
        ],
        "correct": 0
    },
    {
        "question": "Riflesso stapediale mediato da:",
        "options": [
            "VIII e VII nc"
        ],
        "correct": 0
    },
    {
        "question": "Difetto visivo se lesione a livello del chiasma:",
        "options": [
            "emianopsia bitemporale"
        ],
        "correct": 0
    },
    {
        "question": "Nella parodontite apicale cronica (granuloma), i batteri anaerobi obbligati all’interno del canale sono circa:",
        "options": [
            "70\\%"
        ],
        "correct": 0
    },
    {
        "question": "Tre gruppi principali delle cisti a seconda del coinvolgimento o meno dell’epitelio odontogeno:",
        "options": [
            "odontogene",
            "non odontogene",
            "pseudocisti"
        ],
        "correct": 0
    },
    {
        "question": "Patologia oculare da uso cronico di cordarone/amiodarone:",
        "options": [
            "cheratopatia (cornea verticillata)"
        ],
        "correct": 0
    },
    {
        "question": "L'individuo presbite:",
        "options": [
            "non vede bene da vicino"
        ],
        "correct": 0
    },
    {
        "question": "Il sintomo d’esordio più frequente di un distacco di vitreo è:",
        "options": [
            "miodesopsia"
        ],
        "correct": 0
    },
    {
        "question": "L’indicazione chirurgica per l’osteoma del condotto uditivo esterno è:",
        "options": [
            "assoluta",
            "non esiste",
            "esiste solo se la neoformazione occlude"
        ],
        "correct": 2
    },
    {
        "question": "Un tono puro è una variazione pressoria ad andamento:",
        "options": [
            "sinusoidale"
        ],
        "correct": 0
    },
    {
        "question": "Sfintere pupillare:",
        "options": [
            "innervato dal ganglio ciliare (parasimpatico, riceve fibre pregangliari parasimpatiche dall’oculomotore, provenienti dal nucleo di Edinger Westphal)"
        ],
        "correct": 0
    },
    {
        "question": "I tumori odontogeni benigni vengono suddivisi in:",
        "options": [
            "epiteliali, mesenchimali, misti",
            "ameloblastomi, mixomi, misti",
            "epiteliali, mesenchimali, ameloblastomi"
        ],
        "correct": 0
    },
    {
        "question": "I tumori odontogeni benigni si classificano come:",
        "options": [
            "epiteliali",
            "mesenchimali",
            "misti"
        ],
        "correct": 0
    },
    {
        "question": "Quale delle seguenti condizioni può favorire un attacco acuto di glaucoma:",
        "options": [
            "una scarsa illuminazione"
        ],
        "correct": 0
    },
    {
        "question": "Un ostacolo al deflusso dell'umore acqueo si manifesta con:",
        "options": [
            "aumento della pressione intraoculare"
        ],
        "correct": 0
    },
    {
        "question": "Il muscolo dilatatore pupillare è innervato da:",
        "options": [
            "ganglio ciliare superiore (simpatico, riceve fibre simpatiche pregangliari dal centro cilio-spinale C5-T1)"
        ],
        "correct": 0
    },
    {
        "question": "Il recettore vestibolare fa parte:",
        "options": [
            "dell’orecchio interno"
        ],
        "correct": 0
    },
    {
        "question": "L’audiometria vocale è:",
        "options": [
            "un esame per la protesizzazione acustica"
        ],
        "correct": 0
    },
    {
        "question": "Se tumefazione laterocervicale sospetto:",
        "options": [
            "tonsillite"
        ],
        "correct": 0
    },
    {
        "question": "Tre gruppi principali delle cisti a seconda del coinvolgimento o meno dell’epitelio odontogeno:",
        "options": [
            "odontogene, non odontogene, pseudocisti"
        ],
        "correct": 0
    },
    {
        "question": "La sede più frequentemente interessata dal carcinoma del cavo orale è:",
        "options": [
            "lingua"
        ],
        "correct": 0
    },
    {
        "question": "La teoria del \"Field Cancerization\" stabilisce che:",
        "options": [
            "il secondo tumore origini dallo stesso campo di epitelio alterato in cui si è sviluppato il primo carcinoma"
        ],
        "correct": 0
    },
    {
        "question": "Nell’astigmatismo:",
        "options": [
            "i meridiani corneali principali hanno raggio di curvatura differente"
        ],
        "correct": 0
    },
    {
        "question": "L’individuo presbite:",
        "options": [
            "non vede bene da vicino"
        ],
        "correct": 0
    },
    {
        "question": "Il nistagmo è:",
        "options": [
            "un movimento involontario degli occhi che può essere fisiologico o patologico"
        ],
        "correct": 0
    },
    {
        "question": "L’edema palpebrale può essere:",
        "options": [
            "un sintomo di cheratocongiuntivite allergica"
        ],
        "correct": 0
    },
    {
        "question": "Difetto visivo se lesione a livello del chiasma:",
        "options": [
            "emianopsia bitemporale"
        ],
        "correct": 0
    },
    {
        "question": "La perdita improvvisa e contemporanea di una metà (destra o sinistra) del campo visivo in entrambi gli occhi è indice di:",
        "options": [
            "ictus cerebrale"
        ],
        "correct": 0
    },
    {
        "question": "Un paziente cardiopatico affetto da aritmia cardiaca e valvulopatia può sviluppare:",
        "options": [
            "occlusione dell’arteria retinica"
        ],
        "correct": 0
    },
    {
        "question": "Una infiammazione dei canalicoli lacrimali può derivare da:",
        "options": [
            "infezioni acute o croniche"
        ],
        "correct": 0
    },
    {
        "question": "Quale complicanza può verificarsi in seguito a una tonsillectomia?",
        "options": [
            "Emorragia"
        ],
        "correct": 0
    },
    {
        "question": "Il colesteatoma è:",
        "options": [
            "un accumulo di squame di cheratina derivante da matrice epidermica"
        ],
        "correct": 0
    },
    {
        "question": "Quale complicanza può derivare da un orzaiolo?",
        "options": [
            "Cellulite",
            "Entropion",
            "Blefarite"
        ],
        "correct": 0
    },
    {
        "question": "La diagnosi di epiglottite si effettua con:",
        "options": [
            "Laringoscopia",
            "TC collo con mezzo di contrasto",
            "Risonanza magnetica"
        ],
        "correct": 0
    },
    {
        "question": "Il turbinato medio è una struttura appartenente:",
        "options": [
            "Al cranio",
            "All’etmoide",
            "Alla mandibola"
        ],
        "correct": 1
    },
    {
        "question": "Che cos’è l’ambliopia?",
        "options": [
            "Un difetto di sviluppo della funzione visiva che si verifica in età infantile",
            "Una patologia caratterizzata dalla riduzione del visus senza alterazioni oculari oggettivabili",
            "Entrambe"
        ],
        "correct": 2
    },
    {
        "question": "Quale di queste condizioni può causare un attacco acuto di glaucoma?",
        "options": [
            "Una scarsa illuminazione",
            "Un’occlusione delle vene retiniche",
            "Una pressione intraoculare aumentata"
        ],
        "correct": 0
    },
    {
        "question": "Quale batterio è responsabile di tonsilliti con complicanze a carico di cuore, reni e articolazioni?",
        "options": [
            "Haemophilus influenzae",
            "Streptococco beta emolitico gruppo A",
            "Pneumococco"
        ],
        "correct": 1
    },
    {
        "question": "Qual è la sede più frequentemente interessata dal carcinoma orale?",
        "options": [
            "Labbro superiore",
            "Lingua",
            "Palato duro"
        ],
        "correct": 1
    },
    {
        "question": "Quali sono le complicanze oculari da uso cronico di corticosteroidi?",
        "options": [
            "Cataratta",
            "Glaucoma",
            "Entrambe"
        ],
        "correct": 2
    },
    {
        "question": "Quale complicanza può derivare da un orzaiolo?",
        "options": [
            "Cellulite",
            "Entropion",
            "Blefarite"
        ],
        "correct": 0
    },
    {
        "question": "La diagnosi di epiglottite si effettua con:",
        "options": [
            "Laringoscopia",
            "TC collo con mezzo di contrasto",
            "Risonanza magnetica"
        ],
        "correct": 0
    },
    {
        "question": "Il turbinato medio è una struttura appartenente:",
        "options": [
            "Al cranio",
            "All’etmoide",
            "Alla mandibola"
        ],
        "correct": 1
    },
    {
        "question": "Quale di queste condizioni può causare un attacco acuto di glaucoma?",
        "options": [
            "Una scarsa illuminazione",
            "Un’occlusione delle vene retiniche",
            "Una pressione intraoculare aumentata"
        ],
        "correct": 0
    },
    {
        "question": "Quale batterio è responsabile di tonsilliti con complicanze a carico di cuore, reni e articolazioni?",
        "options": [
            "Haemophilus influenzae",
            "Streptococco beta emolitico gruppo A",
            "Pneumococco"
        ],
        "correct": 1
    },
    {
        "question": "Qual è la sede più frequentemente interessata dal carcinoma orale?",
        "options": [
            "Labbro superiore",
            "Lingua",
            "Palato duro"
        ],
        "correct": 1
    },
    {
        "question": "Quale epitelio è coinvolto nella formazione di cisti radicolari?",
        "options": [
            "Epitelio malasseziano",
            "Epitelio gengivale",
            "Epitelio mucoso orale"
        ],
        "correct": 0
    },
    {
        "question": "Qual è la struttura anatomica del turbinato medio?",
        "options": [
            "Parte del setto nasale",
            "Appartiene all’osso etmoide",
            "È un prolungamento della lamina cribrosa"
        ],
        "correct": 1
    },
    {
        "question": "La paralisi del VII nervo cranico può causare:",
        "options": [
            "Paralisi dell’emivolto",
            "Alterazioni della fonazione",
            "Entrambe"
        ],
        "correct": 2
    },
    {
        "question": "Quale complicanza può derivare dall’ischemia della circolazione retinica?",
        "options": [
            "Distacco della retina trazionale",
            "Neovascolarizzazione coroidale",
            "Entrambe"
        ],
        "correct": 2
    },
    {
        "question": "Quale complicanza può verificarsi dopo tonsillectomia?",
        "options": [
            "Infezione post-operatoria",
            "Emorragia",
            "Nessuna delle precedenti"
        ],
        "correct": 1
    },
    {
        "question": "Qual è il trattamento d’elezione per un attacco acuto di glaucoma?",
        "options": [
            "Farmaci ipotensivi topici",
            "Chirurgia immediata",
            "Laserterapia"
        ],
        "correct": 0
    },
    {
        "question": "Il colesteatoma è un accumulo di:",
        "options": [
            "Squame di cheratina",
            "Tessuto fibroso",
            "Residui di epitelio malasseziano"
        ],
        "correct": 0
    },
    {
        "question": "Quale delle seguenti è una complicanza da uso cronico di corticosteroidi?",
        "options": [
            "Glaucoma",
            "Cheratite",
            "Miopia progressiva"
        ],
        "correct": 0
    },
    {
        "question": "L’infiammazione dei canalicoli lacrimali può derivare da:",
        "options": [
            "Infezioni acute",
            "Ostruzione congenita",
            "Entrambe"
        ],
        "correct": 2
    },
    {
        "question": "Qual è il sintomo caratteristico della midriasi?",
        "options": [
            "Dilatazione della pupilla maggiore di 5 mm",
            "Riduzione della capacità di accomodazione",
            "Entrambe"
        ],
        "correct": 2
    },
    {
        "question": "L'epitelio malasseziano è coinvolto nella formazione di:",
        "options": [
            "Cisti radicolari",
            "Polipi nasali",
            "Tumori odontogeni benigni"
        ],
        "correct": 0
    },
    {
        "question": "I vasocostrittori locali possono essere indicati nelle rinosinusiti:",
        "options": [
            "Nei bambini sopra i 6 anni",
            "Per un massimo di 8 giorni consecutivi",
            "Entrambe"
        ],
        "correct": 2
    },
    {
        "question": "L’ambliopia è:",
        "options": [
            "Un difetto di sviluppo visivo che si verifica durante l’infanzia",
            "Un calo visivo senza patologie oculari obiettivabili",
            "Entrambe"
        ],
        "correct": 2
    },
    {
        "question": "L’emianopsia bitemporale è causata da:",
        "options": [
            "Lesione del chiasma ottico",
            "Lesione della corteccia visiva",
            "Distacco retinico"
        ],
        "correct": 0
    },
    {
        "question": "L’individuo presbite ha difficoltà:",
        "options": [
            "Nella visione da lontano",
            "Nella visione da vicino",
            "Nella visione periferica"
        ],
        "correct": 1
    },
    {
        "question": "Quale dei seguenti trattamenti è indicato per un attacco acuto di glaucoma?",
        "options": [
            "Terapia laser",
            "Farmaci ipotonici topici",
            "Chirurgia"
        ],
        "correct": 1
    },
    {
        "question": "Il colesteatoma è formato da:",
        "options": [
            "Squame di cheratina",
            "Fibrosi cicatriziale",
            "Tessuto adiposo"
        ],
        "correct": 0
    },
    {
        "question": "Qual è il punto più frequente di epistassi?",
        "options": [
            "Locus Kiesselbachi",
            "Locus Valsalvae",
            "Setto posteriore",
            "Seno mascellare",
            "Coane"
        ],
        "correct": 1
    },
    {
        "question": "L’ambliopia si sviluppa durante:",
        "options": [
            "L’età neonatale",
            "L’infanzia (fino ai 7 anni)",
            "La vita adulta"
        ],
        "correct": 1
    },
    {
        "question": "Un’infiammazione dei canalicoli lacrimali può essere causata da:",
        "options": [
            "Ostruzione congenita",
            "Infezioni croniche",
            "Entrambe"
        ],
        "correct": 2
    },
    {
        "question": "Quale batterio è il più frequentemente associato a tonsilliti con complicanze sistemiche?",
        "options": [
            "Streptococco beta-emolitico gruppo A",
            "Haemophilus influenzae",
            "Pneumococco"
        ],
        "correct": 0
    }
];

// Mischia un array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Prendi 40 domande a caso
function getRandomQuestions(allQuestions, num) {
    if (allQuestions.length < num) {
        console.error("Non ci sono abbastanza domande!");
        num = allQuestions.length; // Usa tutte le domande disponibili se sono meno di 40
    }
    shuffleArray(allQuestions);
    return allQuestions.slice(0, num);
}

const selectedQuestions = getRandomQuestions(questions, 40);

function generaQuiz() {
    const form = document.getElementById('quiz-form');
    form.innerHTML = '';

    selectedQuestions.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${item.question}`;
        questionDiv.appendChild(questionText);

        // Mischia le opzioni mantenendo il mapping originale
        const originalOptions = item.options.map((opt, i) => ({ text: opt, index: i }));
        shuffleArray(originalOptions);

        originalOptions.forEach((option) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `q${index}`;
            input.value = option.index; // Mantiene l'indice originale
            label.appendChild(input);
            label.appendChild(document.createTextNode(option.text));
            questionDiv.appendChild(label);
            questionDiv.appendChild(document.createElement('br'));
        });

        form.appendChild(questionDiv);
    });

    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Invia Risposte';
    button.classList.add('button');
    button.onclick = () => calcolaPunteggio();
    form.appendChild(button);
}

function calcolaPunteggio() {
    const form = document.getElementById('quiz-form');
    let score = 0;

    const answers = new FormData(form);

    selectedQuestions.forEach((item, index) => {
        const questionDiv = document.querySelectorAll('.question')[index]; // Seleziona il div della domanda
        const userAnswer = answers.get(`q${index}`);

        // Rimuovi eventuali feedback precedenti
        const existingFeedback = questionDiv.querySelector('.feedback');
        if (existingFeedback) {
            existingFeedback.remove();
        }

        // Crea un elemento per il feedback
        const feedback = document.createElement('span');
        feedback.classList.add('feedback');
        feedback.style.marginLeft = '10px';

        // Verifica la risposta e aggiungi il feedback
        if (parseInt(userAnswer) === item.correct) {
            score++;
            feedback.className = 'feedback correct';
            feedback.textContent = '✓ Risposta corretta';
        } else {
            feedback.className = 'feedback wrong';
            feedback.textContent = `✗ Sbagliata. Corretto: ${item.options[item.correct]}`;
        }

        // Aggiungi il feedback accanto alla domanda
        questionDiv.appendChild(feedback);
    });

    // Mostra il punteggio totale in alto
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h2>Il tuo punteggio è: ${score} su ${selectedQuestions.length}</h2>`;
}

document.addEventListener('DOMContentLoaded', generaQuiz);
