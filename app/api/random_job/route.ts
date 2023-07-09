import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
    runtime: 'edge',
};

export function GET(request: NextRequest) {

    let jobList = [
        "Empty their septic tank",
        "Clean their pet's waste",
        "Unclog their drains",
        "Trim their toenails",
        "Shave their back",
        "Wash their dirty laundry",
        "Clean their oven",
        "Wipe their sweat",
        "Remove their garbage",
        "Scrub their bathtub",
        "Clean their windows",
        "Dust their furniture",
        "Mop their floors",
        "Iron their clothes",
        "Remove their lice",
        "Sort their trash",
        "Clean their fireplace",
        "Organize their clutter",
        "Untangle their hair",
        "Trim their nose hairs",
        "Clean their litter box",
        "Unclog their toilet",
        "Wash their dishes",
        "Scrub their toilet",
        "Remove their stains",
        "Polish their shoes",
        "Change their adult diapers",
        "Clean their dirty car",
        "Shovel their snow",
        "Wax their body hair",
        "Paint their walls",
        "Scrub their grout",
        "Clean their fish tank",
        "Trim their pubic hair",
        "Disinfect their bathroom",
        "Wipe their drool",
        "Remove their dead animals/pets",
        "Clean their outdoor grill",
        "Wash their dirty feet",
        "Clean their moldy shower",
        "Fix their leaky faucet",
        "Scrape their chewing gum",
        "Remove their vomit stains",
        "Unclog their kitchen sink",
        "Dig their grave",
        "Clean their soiled mattress",
        "Wash their dirty dishes by hand",
        "Polish their brass or silverware",
        "Clean their grease trap",
        "Remove their expired food from the fridge",
        "Trim their body hair in hard-to-reach areas",
        "Scrape off their peeling wallpaper",
        "Clear their blocked gutters",
        "Clean their pet's anal glands",
        "Wash their muddy clothes",
        "Collect their used tissues",
        "Clean their stained upholstery",
        "Wipe their greasy stovetop",
        "Dispose of their used sanitary products",
        "Remove their pet's fleas",
        "Change their bedridden patient's bedpan",
        "Clean their greasy range hood",
        "Wash their soiled bed sheets",
        "Remove their pet's skunk odor",
        "Disinfect their used medical equipment",
        "Wipe their baby's soiled diaper",
        "Clean their birdcage",
        "Collect their used condoms",
        "Remove their pet's anal worms",
        "Wash their stained bed pillows",
        "Trim their overgrown toenails",
        "Disinfect their used needles",
        "Clean their dirty fireplace chimney",
        "Wipe their sweaty armpits",
        "Remove their pet's ticks",
        "Change their colostomy bag",
        "Clean their greasy kitchen cabinets",
        "Wash their dirty dog blankets",
        "Collect their pet's hairballs",
        "Remove their pet's eye discharge",
        "Disinfect their used wound dressings",
        "Wipe their baby's spit-up",
        "Clean their stained porcelain sink",
        "Wash their greasy hair",
        "Remove their pet's maggots",
        "Trim their overgrown ear hair",
        "Collect their used chewing tobacco",
        "Clean their dirty barbecue grill",
        "Wipe their sweaty feet",
        "Dispose of their used adult toys",
        "Remove their pet's anal tumors",
        "Clean their vomit-stained carpet",
        "Wash their sweaty gym clothes",
        "Collect their used catheters",
        "Wipe their baby's dirty bottom",
        "Disinfect their used dialysis equipment",
        "Clean their moldy basement",
        "Remove their pet's infected wounds",
        "Trim their overgrown nose hairs",
        "Collect their used colostomy bags"
    ]

    const randomJob = jobList[Math.floor(Math.random() * jobList.length)];

    return NextResponse.json(
        {
            job: randomJob,
        },
        {
            status: 200,
            headers: {
                'Cache-Control': 'private, no-cache, s-maxage=0, max-age=0',
            },
        },
    );
}