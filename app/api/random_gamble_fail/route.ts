import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const revalidate = 0
export function GET(request: NextRequest) {

    let items = [
        "Sorry, your bank account just did a facepalm.",
        "Your wallet is screaming 'mayday' in distress.",
        "Your piggy bank has officially declared bankruptcy.",
        "Your credit card called me and said, 'Please, no more.'",
        "Your budget is running away faster than a squirrel with a nut.",
        "Your finances are giving you a standing ovation for not gambling that much.",
        "Your bank statement is sending you a 'laugh out loud' emoji.",
        "Your savings account just fainted at the thought of that much gambling.",
        "Your money is giving you a 'do not pass go, do not collect $200' warning.",
        "Your financial advisor is writing a strongly-worded letter to your gambling ambitions.",
        "Your wallet is suggesting a modest game of Uno instead.",
        "Your piggy bank is hiding under the bed, scared of the gambling monster.",
        "Your credit card is whispering, 'Think of the interest rates!'",
        "Your budget is plotting an escape to a deserted island far away from the casino.",
        "Your finances are practicing their breakdance moves to distract you from gambling.",
        "Your bank account is waving a white flag, surrendering to financial prudence.",
        "Your savings account is singing, 'Can't touch this' to your gambling desires.",
        "Your money is screaming, 'Save me from the gambling black hole!'",
        "Your financial future just facepalmed at the thought of this gamble.",
        "Your wallet wants to remind you that patience is a virtue, especially with money.",
        "Your piggy bank is rolling its eyes so hard, it's about to break.",
        "Your credit card is practicing its ninja skills, ready to vanish if you try to gamble.",
        "Your budget just did a double take and said, 'Absolutely not!'",
        "Your finances are preparing a lecture on the importance of fiscal responsibility.",
        "Your bank account is considering filing a restraining order against the casino.",
        "Your savings account is giving you the side-eye, silently judging your gambling ambitions.",
        "Your money is staging a protest, chanting, 'Save, don't gamble!'",
        "Your financial advisor is practicing their poker face to tell you 'no'.",
        "Your wallet wants to remind you that money doesn't grow on slot machines.",
        "Your piggy bank is screaming, 'Emergency funds only!'",
        "Your credit card is holding a 'Stop, Drop, and Don't Gamble' seminar.",
        "Your budget just hired a bouncer to keep you away from the gambling table.",
        "Your finances are drafting a breakup letter to your gambling aspirations.",
        "Your bank account is considering starting a support group for compulsive gamblers.",
        "Your savings account just went on strike, demanding to be left untouched.",
        "Your money is secretly taking self-defense classes to protect itself from gambling.",
        "Your financial advisor just booked a vacation to avoid your gambling requests.",
        "Your wallet is begging you to put it on a strict 'no gambling' diet.",
        "Your piggy bank is writing an autobiography titled 'Surviving a Gambling-Free Life'.",
        "Your credit card is sharpening its claws, ready to swipe away your gambling hopes.",
        "Your budget just enrolled in a meditation retreat to find its inner financial peace.",
        "Your finances are holding a press conference to announce their divorce from gambling.",
        "Your bank account is considering an alias to hide from your gambling cravings.",
        "Your savings account is practicing its 'I told you so' dance routine for your gambling losses.",
        "Your money is preparing an intervention for your gambling addiction...kidding, but not really.",
        "Your financial advisor just booked a therapy session to cope with your gambling requests.",
        "Your wallet is sending you an SOS signal, desperately trying to save you from gambling.",
        "Your piggy bank is calling a family meeting to discuss its concerns about your gambling habits.",
        "Your credit card just hired a personal bodyguard to protect itself from your gambling whims.",
        "Your budget is writing a strongly-worded letter to the gambling gods, requesting a cease and desist.",
        "Your finances are gathering evidence for an intervention episode on 'Gamblers Gone Wild'.",
        "Your bank account is practicing its Jedi mind tricks to persuade you away from gambling.",
        "Your savings account is reciting financial affirmations in hopes of deterring your gambling desires.",
        "Your money is whispering sweet financial wisdom into your ear, trying to save you from gambling.",
        "Your financial advisor is considering opening a hotline exclusively for your gambling-related inquiries.",
        "Your wallet wants you to know that even fictional characters don't gamble away their fortunes.",
        "Your piggy bank is seeking therapy to recover from the trauma of witnessing your gambling attempts.",
        "Your credit card just enrolled in a self-defense class to fend off your gambling impulses.",
        "Your budget is practicing the art of saying 'no' to your gambling requests with a touch of humor.",
        "Your finances are preparing a PowerPoint presentation on the dangers of excessive gambling.",
        "Your bank account is drafting a breakup letter to your gambling ambitions, complete with 'It's not you, it's me.'",
        "Your savings account is calling in reinforcements to shield itself from your gambling temptations.",
        "Your money is attending a financial enlightenment seminar, hoping to inspire you away from gambling.",
        "Your financial advisor is considering hiring a team of bodyguards to protect themselves from your gambling inquiries.",
        "Your wallet is practicing a stand-up comedy routine about the perils of gambling to dissuade you from trying.",
        "Your piggy bank is putting up 'No Gambling Allowed' signs to deter your attempts.",
        "Your credit card is attending a support group for those affected by excessive gambling requests.",
        "Your budget is writing a book titled 'How to Save Money Without Gambling It All Away'.",
        "Your finances are planning an intervention in the form of a musical performance to discourage your gambling habits.",
        "Your bank account is penning a heartfelt letter about the risks of gambling, complete with tear-stained ink.",
        "Your savings account is practicing its most convincing 'Just Say No to Gambling' speech for you.",
        "Your money is attending a self-improvement seminar on breaking free from the shackles of gambling addiction.",
        "Your financial advisor is considering moonlighting as a stand-up comedian to tackle your gambling inquiries with humor.",
        "Your wallet is giving you the silent treatment, hoping you'll understand the gravity of your gambling desires.",
        "Your piggy bank is plotting an escape to a remote island with no casinos to keep you away from gambling.",
        "Your credit card is doing a happy dance every time you resist the urge to gamble.",
        "Your budget is composing a heartfelt song about the perils of gambling, hoping to strike a chord with you."
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