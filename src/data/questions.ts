export enum LoveLanguageCode {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    E = 'E',
}

export enum LoveLanguageText {
    A = 'Palavras de afirmação',
    B = 'Tempo de qualidade',
    C = 'Receber presentes',
    D = 'Atos de serviço',
    E = 'Toque físico',
}

export interface IOptionQuestion {
    loveLanguageCode: LoveLanguageCode;
    answer: string;
}


export interface IQuestion {
    order: number;
    options: IOptionQuestion[];
}


const questions: IQuestion[] = [
    {
        order: 1,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.A,
                answer: 'Gosto de receber palavras de afirmação',
            },
            {
                loveLanguageCode: LoveLanguageCode.E,
                answer: 'Gosto de receber abraços',
            }
        ]
    },
    {
        order: 2,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.B,
                answer: 'Gosto de passar tempo a sós com alguém especial para mim',
            },
            {
                loveLanguageCode: LoveLanguageCode.D,
                answer: 'Sinto-me amada quando alguém me oferece ajuda prática',
            }
        ]
    },
    {
        order: 3,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.C,
                answer: 'Gosto quando ganho presentes',
            },
            {
                loveLanguageCode: LoveLanguageCode.B,
                answer: 'Gosto de visitas sem pressa com amigos e entes queridos',
            }
        ]
    },
    {
        order: 4,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.D,
                answer: 'Sinto-me amado quando as pessoas fazem coisas para ajudar-me',
            },
            {
                loveLanguageCode: LoveLanguageCode.E,
                answer: 'Sinto-me amado quando as pessoas me tocam',
            }
        ]
    },
    {
        order: 5,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.E,
                answer: 'Sinto-me amado quando alguém que amo ou admiro me rodeia com o braço',
            },
            {
                loveLanguageCode: LoveLanguageCode.C,
                answer: 'Sinto-me amado quando recebo um presente de alguém que amo e admiro -',
            }
        ]
    },
    {
        order: 6,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.B,
                answer: 'Gosto de sair com amigos e entes queridos',
            },
            {
                loveLanguageCode: LoveLanguageCode.E,
                answer: 'Gosto de bater palma com palma ou ficar de mãos dadas com pessoas especiais para mim',
            }
        ]
    },
    {
        order: 7,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.C,
                answer: 'Símbolos visíveis de amor (presentes) são importantes para mim',
            },
            {
                loveLanguageCode: LoveLanguageCode.A,
                answer: 'Sinto-me amado quando as pessoas me afirmam',
            }
        ]
    },
    {
        order: 8,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.E,
                answer: 'Gosto de sentar perto das pessoas a quem aprecio',
            },
            {
                loveLanguageCode: LoveLanguageCode.A,
                answer: 'Gosto de que me digam que sou atraente/bonito',
            }
        ]
    },
    {
        order: 9,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.B,
                answer: 'Gosto de passar tempo com amigos e entes queridos',
            },
            {
                loveLanguageCode: LoveLanguageCode.C,
                answer: 'Gosto de receber presentinhos de amigos e entes queridos',
            }
        ]
    },
    {
        order: 10,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.A,
                answer: 'Palavras de aceitação são importantes para mim',
            },
            {
                loveLanguageCode: LoveLanguageCode.D,
                answer: 'Sei que alguém me ama quando ele me ajuda',
            }
        ]
    },
    {
        order: 11,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.B,
                answer: 'Gosto de estar junto e fazer coisas com amigos e entes queridos',
            },
            {
                loveLanguageCode: LoveLanguageCode.A,
                answer: 'Gosto quando me dizem palavras bondosas',
            }
        ]
    },
    {
        order: 12,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.D,
                answer: 'O que a pessoa faz me afeta mais que aquilo que ela diz',
            },
            {
                loveLanguageCode: LoveLanguageCode.E,
                answer: 'Os abraços me fazem sentir participante e apreciado',
            }
        ]
    },
    {
        order: 13,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.A,
                answer: 'Aprecio o louvor e tento evitar as criticas',
            },
            {
                loveLanguageCode: LoveLanguageCode.C,
                answer: 'Vários presentes pequenos significam mais para mim que um grande',
            }
        ]
    },
    {
        order: 14,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.B,
                answer: ' Sinto-me íntimo de alguém quando estamos conversando ou fazendo coisas juntos',
            },
            {
                loveLanguageCode: LoveLanguageCode.E,
                answer: 'Sinto-me mais perto dos amigos e entes queridos quando eles me tocam com frequência ',
            }
        ]
    },
    {
        order: 15,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.A,
                answer: 'Gosto que as pessoas elogiem minhas realizações',
            },
            {
                loveLanguageCode: LoveLanguageCode.D,
                answer: 'Sei que as pessoas me amam quando fazem coisas para mim que si mesma não apreciam',
            }
        ]
    },
    {
        order: 16,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.E,
                answer: 'Gosto de ser tocado quando amigos e entes queridos passam perto de mim',
            },
            {
                loveLanguageCode: LoveLanguageCode.B,
                answer: 'Gosto quando as pessoas me ouvem e mostram interesse genuíno no que estou dizendo',
            }
        ]
    },
    {
        order: 17,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.D,
                answer: 'Sinto-me amado quando amigos e entes queridos me ajudam nos trabalhos e projetos',
            },
            {
                loveLanguageCode: LoveLanguageCode.C,
                answer: 'Gosto realmente de receber presentes de amigos e entes queridos',
            }
        ]
    },
    {
        order: 18,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.A,
                answer: 'Gosto que as pessoas elogiam minha aparência',
            },
            {
                loveLanguageCode: LoveLanguageCode.B,
                answer: 'Sinto-me amado quando as pessoas tomam tempo para entender meus sentimentos',
            }
        ]
    },
    {
        order: 19,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.E,
                answer: 'Sinto-me seguro quando uma pessoa especial toca em mim',
            },
            {
                loveLanguageCode: LoveLanguageCode.D,
                answer: 'Atos de serviço fazem com que me sinta amado',
            }
        ]
    },
    {
        order: 20,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.D,
                answer: 'Aprecio as muitas coisas que as pessoas especiais fazem para mim',
            },
            {
                loveLanguageCode: LoveLanguageCode.C,
                answer: 'Gosto de receber presentes que pessoas especiais fazem para mim',
            }
        ]
    },
    {
        order: 21,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.B,
                answer: 'Aprecio realmente o sentimento que tenho quando alguém me dá total atenção',
            },
            {
                loveLanguageCode: LoveLanguageCode.D,
                answer: 'Aprecio realmente o sentimento que tenho quando alguém me presta algum ato de serviço',
            }
        ]
    },
    {
        order: 22,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.C,
                answer: 'Sinto-me amado quando uma pessoa comemora meu aniversário com um presente',
            },
            {
                loveLanguageCode: LoveLanguageCode.A,
                answer: 'Sinto-me amado quando uma pessoa comemora meu aniversário com palavras significativas',
            }
        ]
    },
    {
        order: 23,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.C,
                answer: 'Sei o que a pessoa está pensando de mim quando me dá um presente',
            },
            {
                loveLanguageCode: LoveLanguageCode.D,
                answer: 'Sinto-me amado quando a pessoa me ajuda nas tarefas diárias',
            }
        ]
    },
    {
        order: 24,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.B,
                answer: 'Aprecio quando alguém ouve com paciência e não me interrompe',
            },
            {
                loveLanguageCode: LoveLanguageCode.C,
                answer: 'Aprecio quando alguém se lembra de dias especiais com um presente',
            }
        ]
    },
    {
        order: 25,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.D,
                answer: 'Gosto de saber que os entes queridos estão preocupados em ajudar-me nas tarefas diárias',
            },
            {
                loveLanguageCode: LoveLanguageCode.B,
                answer: 'Gosto de fazer viagens longas com alguém que é especial para mim',
            }
        ]
    },
    {
        order: 26,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.E,
                answer: 'Gosto de beijar ou ser beijado por pessoa de minha intimidade',
            },
            {
                loveLanguageCode: LoveLanguageCode.C,
                answer: 'Receber um presente sem qualquer razão especial me deixa contente',
            }
        ]
    },
    {
        order: 27,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.A,
                answer: 'Gosto que me digam que sou querido',
            },
            {
                loveLanguageCode: LoveLanguageCode.B,
                answer: 'Gosto que a pessoa olhe para mim enquanto falamos',
            }
        ]
    },
    {
        order: 28,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.C,
                answer: 'Presentes de um amigo ou ente querido são sempre especiais para mim',
            },
            {
                loveLanguageCode: LoveLanguageCode.E,
                answer: 'Sinto-me bem quando um amigo ou ente querido me toca',
            }
        ]
    },
    {
        order: 29,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.D,
                answer: 'Sinto-me amado quando alguém faz com entusiasmo o que pedi',
            },
            {
                loveLanguageCode: LoveLanguageCode.A,
                answer: 'Sinto-me amado quando dizem quanto me apreciam',
            }
        ]
    },
    {
        order: 30,
        options: [
            {
                loveLanguageCode: LoveLanguageCode.E,
                answer: 'Preciso ser tocado todos os dias',
            },
            {
                loveLanguageCode: LoveLanguageCode.A,
                answer: 'Preciso de palavras de afirmação todos os dias',
            }
        ]
    }

]

export default questions;