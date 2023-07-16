import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const revalidate = 0
export function GET(request: NextRequest) {

    let items = [
        "Thou art like a toad; ugly and venomous.",
        "Villain, I have done thy mother.",
        "A weasel hath not such a deal of spleen as you are toss'd with.",
        "Thou dost infect my eyes.",
        "You scullion! You rampallian! You fustilarian! I'll tickle your catastrophe!",
        "Away, you three-inch fool!",
        "Thy tongue outvenoms all the worms of Nile.",
        "Thou art as loathsome as a toad.",
        "Methink\'st thou art a general offence and every man should beat thee",
        "You starveling, you eel-skin, you dried neat's-tongue, you bull's-pizzle, you stock-fish-O for breath to utter what is like thee!-you tailor's-yard, you sheath, you bow-case, you vile standing tuck!",
        "Thou art as fat as butter.",
        "More of your conversation would infect my brain.",
        "Thou sodden-witted lord! Thou hast no more brain than I have in mine elbows!",
        "Your brain is as dry as the remainder biscuit after voyage.",
        "If you spend word for word with me, I shall make your wit bankrupt.",
        "I'll beat thee, but I would infect my hands.",
        "He has not so much brain as ear-wax.",
        "You, minion, are too saucy.",
        "Away, you mouldy rogue, away!",
        "I do desire that we may be better strangers.",
        "Threadbare juggler!",
        "Eater of broken meats!",
        "There's no more faith in thee than in a stewed prune.",
        "What a thrice-double ass!",
        "Thou cream faced loon!",
        "I am sick when I do look on thee.",
    ]
    return NextResponse.json(
        {
            body: items[Math.floor(Math.random() * items.length)],
        },
        {
            status: 200,
            headers: {
                'Cache-Control': 'private, no-cache, s-maxage=0, max-age=0',
            },
        },
    );
}