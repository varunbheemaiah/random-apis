import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const revalidate = 0
export function GET(request: NextRequest) {

    let items = [
        "In a haunted house",
        "In an abandoned building",
        "In a dimly lit parking lot",
        "In a sketchy neighborhood",
        "In a cramped elevator",
        "In a desolate forest",
        "In a rundown subway station",
        "In a deserted warehouse",
        "In a shady alleyway",
        "In a remote cabin",
        "In a derelict amusement park",
        "In a secluded underground tunnel",
        "In a rough part of town",
        "In a broken-down car on an empty road",
        "In a dilapidated motel",
        "In a crowded subway during rush hour",
        "In a decaying prison",
        "In a secluded beach at night",
        "In a dense and unfamiliar jungle",
        "In a poorly lit underground parking garage",
        "In a deserted stretch of highway",
        "In a cramped public restroom",
        "In a suspiciously quiet cemetery",
        "In a cramped and noisy subway car",
        "In a seedy motel room",
        "In a poorly maintained amusement park ride",
        "In a dark and unfamiliar basement",
        "In a remote and hostile desert",
        "In a notorious biker bar",
        "In a dimly lit alley behind a club",
        "In a dingy and unsettling motel lobby",
        "In a deserted train station at night",
        "In a decaying and abandoned hospital",
        "In a crowded protest or riot",
        "In a remote and isolated mountain cabin",
        "In a rundown and eerie carnival",
        "In a cramped and overcrowded bus",
        "In a suspiciously quiet and empty hotel corridor",
        "In a remote and secluded campsite",
        "In a deserted and ominous church at night",
        "In a dimly lit and unfamiliar subway tunnel",
        "In a cramped and chaotic marketplace",
        "In a deserted and decrepit factory",
        "In a dark and labyrinthine underground catacomb",
        "In a seedy and dangerous casino",
        "In a remote and hostile warzone",
        "In a rough and notorious prison yard",
        "In a secluded and isolated farmhouse",
        "In a dark and treacherous cave system",
        "In a cramped and claustrophobic airplane lavatory",
        "In a suspiciously quiet and abandoned shopping mall",
        "In a deserted and eerie amusement park at night",
        "In a dimly lit and unfamiliar hotel room",
        "In a remote and hostile jungle village",
        "In a rundown and unsettling mental asylum",
        "In a crowded and rowdy sports stadium",
        "In a suspiciously quiet and abandoned subway station",
        "In a cramped and sweltering subway platform",
        "In a seedy and crime-ridden red-light district",
        "In a remote and isolated Arctic research station",
        "In a dark and treacherous underground mine shaft",
        "In a deserted and dilapidated school building",
        "In a dimly lit and unfamiliar alleyway at night",
        "In a secluded and dangerous pirate hideout",
        "In a rough and unstable construction site",
        "In a suspiciously quiet and abandoned amusement park",
        "In a cramped and chaotic concert mosh pit",
        "In a deserted and eerie ghost town",
        "In a dark and treacherous underwater cave",
        "In a remote and hostile tribal village",
        "In a rundown and unsettling motel parking lot",
        "In a crowded and rowdy nightclub",
        "In a suspiciously quiet and abandoned hospital ward",
        "In a secluded and dangerous drug den",
        "In a dimly lit and unfamiliar subway station at night",
        "In a remote and isolated research laboratory",
        "In a dark and treacherous cliffside ledge",
        "In a deserted and ominous military base",
        "In a cramped and claustrophobic storage room",
        "In a suspiciously quiet and abandoned amusement park ride",
        "In a remote and hostile post-apocalyptic wasteland",
        "In a rough and lawless frontier town",
        "In a secluded and dangerous cult compound",
        "In a dark and treacherous underground sewer system",
        "In a deserted and unsettling prison cell",
        "In a dimly lit and unfamiliar forest at night",
        "In a suspiciously quiet and abandoned shopping center",
        "In a cramped and chaotic subway station during a blackout",
        "In a remote and isolated spaceship",
        "In a rundown and eerie motel hallway",
        "In a dark and treacherous mountain pass",
        "In a deserted and ominous government facility",
        "In a secluded and dangerous underground fight club",
        "In a dimly lit and unfamiliar back alley at night",
        "In a suspiciously quiet and abandoned warehouse",
        "In a remote and hostile war-torn city",
        "In a rough and dangerous gang territory",
        "In a secluded and isolated hunting lodge",
        "In a dark and treacherous underground tomb",
        "In a deserted and unsettling asylum hallway",
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