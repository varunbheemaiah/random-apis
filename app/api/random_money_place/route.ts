import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const revalidate = 0
export function GET(request: NextRequest) {

    let items = [
        "Inside a book",
        "Underneath a mattress",
        "Behind a picture frame",
        "In a cookie jar",
        "Inside a hollowed-out tree stump",
        "Buried in a backyard",
        "Taped to the underside of a desk",
        "Inside a coat pocket",
        "Underneath a loose floorboard",
        "Inside a shoebox",
        "Behind a loose brick in a wall",
        "Tucked away in a sock drawer",
        "Inside a coffee can",
        "Hidden inside a stuffed animal",
        "In a secret compartment of a car",
        "Underneath a loose tile",
        "Inside a DVD case",
        "Stashed in an old jacket pocket",
        "Taped to the back of a painting",
        "Inside a hollowed-out book",
        "In a safe deposit box",
        "Tucked away in a glove compartment",
        "Concealed inside a plant pot",
        "Underneath a potted plant",
        "Hidden inside a music instrument case",
        "In a hidden pocket of a backpack",
        "Inside an old shoe",
        "Taped to the back of a refrigerator",
        "Inside a toolbox",
        "Underneath a car seat",
        "Concealed in a wall clock",
        "Tucked away in a hatbox",
        "Hidden inside a pen holder",
        "In a hidden pocket of a jacket",
        "Underneath a bathroom sink",
        "Inside a DVD player",
        "Taped behind a mirror",
        "Concealed inside a candle holder",
        "In a secret compartment of a briefcase",
        "Hidden inside a kitchen appliance",
        "Tucked away in a jewelry box",
        "Underneath a loose board in the attic",
        "Inside a hollowed-out rock",
        "In a hidden pocket of a purse",
        "Concealed inside a speaker",
        "Taped to the underside of a table",
        "Underneath a car floor mat",
        "Hidden inside a teddy bear",
        "In a secret compartment of a wardrobe",
        "Inside a tool chest",
        "Tucked away in a guitar case",
        "Concealed inside a picture frame",
        "In a hidden pocket of a duffel bag",
        "Underneath a loose brick in the fireplace",
        "Inside a secret wall safe",
        "Hidden inside a computer tower",
        "Taped behind a toilet tank",
        "Concealed in a ceiling panel",
        "In a secret compartment of a filing cabinet",
        "Inside a hollowed-out coconut",
        "Tucked away in a violin case",
        "Underneath a loose floor tile",
        "Hidden inside a board game box",
        "In a hidden pocket of a backpack",
        "Concealed inside a flowerpot",
        "Taped to the back of a television",
        "Underneath a car spare tire",
        "Hidden inside a dollhouse",
        "In a secret compartment of a suitcase",
        "Inside a storage bin",
        "Tucked away in a saxophone case",
        "Concealed inside a desk drawer",
        "In a hidden pocket of a messenger bag",
        "Underneath a loose board on a deck",
        "Hidden inside a birdhouse",
        "Taped to the back of a microwave",
        "Concealed in a wall outlet",
        "In a secret compartment of a jewelry armoire",
        "Inside a false bottom drawer",
        "Tucked away in a clarinet case",
        "Underneath a loose brick in a garden wall",
        "Hidden inside a chess set",
        "In a hidden pocket of a camera bag",
        "Concealed inside a lamp base",
        "Taped behind a picture on a fridge",
        "Underneath a car hood",
        "Hidden inside a stuffed pillow",
        "In a secret compartment of a roll-top desk",
        "Inside a hidden panel of a bookshelf",
        "Tucked away in a cello case",
        "Concealed inside a shoe rack",
        "In a hidden pocket of a hiking backpack",
        "Underneath a loose board on a porch",
        "Hidden inside a jewelry display case",
        "Taped to the back of a washing machine",
        "Concealed in a wall vent",
        "In a secret compartment of a console table",
        "Inside a secret pocket of a travel suitcase",
        "Tucked away in a banjo case",
        "Underneath a loose brick in a garden path",
        "Hidden inside a shadow box",
        "In a hidden pocket of a gym bag",
        "Concealed inside a DVD storage tower",
        "Taped behind a mirror in a bathroom",
        "Underneath a car trunk lining",
        "Hidden inside a decorative vase",
        "In a secret compartment of a bookcase",
        "Inside a hidden panel of a piano",
        "Tucked away in a harmonica case",
        "Concealed inside a shoe organizer",
        "In a hidden pocket of a diaper bag",
        "Underneath a loose floor tile in a basement",
        "Hidden inside a display cabinet",
        "Taped to the back of a dryer",
        "Concealed in a wall cavity",
        "In a secret compartment of a sideboard",
        "Inside a secret pocket of a laptop bag",
        "Tucked away in a trumpet case",
        "Underneath a loose brick in a garden border",
        "Hidden inside a shadow puppet box",
        "In a hidden pocket of a climbing backpack",
        "Concealed inside a CD storage case",
        "Taped behind a mirror in a hallway",
        "Underneath a car seat cover",
        "Hidden inside a decorative bowl",
        "In a secret compartment of a curio cabinet",
        "Inside a hidden panel of a pool table",
        "Tucked away in a flute case",
        "Concealed inside a hanging shoe bag",
        "In a hidden pocket of a beach bag",
        "Underneath a loose floor tile in a garage",
        "Hidden inside a jewelry mannequin",
        "Taped to the back of a freezer",
        "Concealed in a wall niche",
        "In a secret compartment of a liquor cabinet",
        "Inside a secret pocket of a garment bag",
        "Tucked away in a trombone case",
        "Underneath a loose brick in a garden fountain",
        "Hidden inside a shadow box frame",
        "In a hidden pocket of a camping backpack",
        "Concealed inside a vinyl record sleeve",
        "Taped behind a mirror in a bedroom",
        "Underneath a car dashboard",
        "Hidden inside a decorative fruit basket",
        "In a secret compartment of a display stand",
        "Inside a hidden panel of a chess table",
        "Tucked away in a clarinet case",
        "Concealed inside a hanging jewelry organizer",
        "In a hidden pocket of a picnic basket",
        "Underneath a loose floor tile in a workshop",
        "Hidden inside a jewelry wall mirror",
        "Taped to the back of a stove",
        "Concealed in a wall safe box",
        "In a secret compartment of a trophy case",
        "Inside a secret pocket of a document bag",
        "Tucked away in a violin case"
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