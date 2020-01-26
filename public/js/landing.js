$(document).ready(function() {

    let netfolk = [
        {
            name: "Grabby Goblin",
            desc: `Grabby Goblin is a grabby fellow who considers himself a chaotic
                   neutral. He uses his big ol' grabby arms to open doors and get noticed
                    by people in crowds. When he walks, he has to hold his grabby arms 
                    vertically.`,
            perks: "+1 Reach, Fluency in Goblin, +1 Attack, -2 Speed"
        },
        {
            name: "Guman",
            desc: `Guman's waiting for something exciting to happen. However, he's made of goo.
                    Therefore, nothing exciting will happen if he rests on his laurels. Go out there,
                    Guman! Achieve your destiny! Guman floats wherever he needs to go and, when he sleeps,
                     he falls into the glass orb as a perfect spherical blob of gooooooo.`,
            perks: "+2 Magic, -1 Willpower"
        },
        {
            name: "Toadstool",
            desc: `Heeeeheheheheheh. Get it? He kind of looks like a stool!
                    Toadstool enjoys eating giant bugs and jumping. He's also fluent in 
                    every language. Everyone loves Toadstool.`,
            perks: "Fluency in All Languages, +1 Speed, +2 Social Skills, -2 Stealth"
        },
        {
            name: "Linrick",
            desc: `Linrick left his home in the sea to pursue a career as a courier.
                    Unfortunately, he ended up being too slow on land to be of any aid.
                    And he couldn't deliver mail via rivers and streams because the 
                    letters would get wet. So now, he's a freelancer.`,
            perks: "+4 Speed Near Water, Fluency in Ladfish, Ladyfish, and Chon, -4 Speed Away from Water, +1 Strength"
        },
        {
            name: "Pointy Pete",
            desc: `Pete doesn't actually move. He just floats, staring at things. 
                    He's quite creepy. You can use him as a weapon, but if he doesn't like you, he'll
                    warp far away.`,
            perks: "+4 Attack, -2 Social Skills"
        }

    ];

    let locations = {
        "Bumblebee Bay" : {
            quests: [
                {
                    name: "Squabble with the Lad and Ladyfish",
                    description: `The king ladfish of Conchoth and the queen ladyfish of Billie-o are 
                                    disputing over land rights. If this continues, war between Conchoth
                                    and Billie-o is inevitable. Perhaps someone should persuade them to
                                    cease their bickering...`,
                },
                {
                    name: "Coastal Debris...",
                    description: `Something unusual washed up on the shores of Bumblebee Bay. Nobody knows what it is,
                                    and the locals are too afraid to touch it. Little to no information exists as to what 
                                    it looks like, but the general consensus is that it gives off an unpleasant air.`
                },
                {
                    name: "Thievery at the Billie-o sea garden!",
                    description: `"Some hooligan has stolen the world's largest sea tree at the Billie-o sea garden! 
                                    To anyone with the will to devote time and resources for his or her queen, I command
                                     the capture and DEATH of the perpetrator!" - Queen of Billie-o`
                }
            ]
        },
        "Goblintown Country":{
            quests: [
                {
                    name: "The Goblin Sirens",
                    description: `A group of goblin sirens are (ineffectively) trying to lure men from a human town
                                    into their murder caves. The humans are quietly wondering what to do.`
                },
                {
                    name: "Someone stole my watch!",
                    description: `{translated from Goblinspeak} SOMEONE STOLE MY FREAKIN' WATCH!`
                },
                {
                    name: "Thunderstorms?",
                    description: `Goblins have voiced concerns over frequent thunderstorms emanating from
                                    Thunder Mountain. When asked why they were surprised, they indignantly stated
                                    that this is the first time this has happened.`
                }
            ]

        },
        "Electric Plains":{
            quests: [
                {
                    name: "Metal Supply Run (Pays well!)",
                    description: `{translated from Rillic} Look, I know the fields are coursing with 
                                    electricity. I know this is a suicide run. But I need these pikes delivered
                                    YESTERDAY and the underground trade tunnels collapsed. I don't care how you do it,
                                    just deliver the goods to Goblintown, Goblintown and they'll generously reimburse you.`
                },
                {
                    name: "Lonely Sorceress seeks Wealthy, Lonely Man",
                    description: `"I'm tired of spending my days learning magic. I'm a twenty-year-old woman and the only
                                    thing I've done with my life is learn how to summon demons and push things around with my mind.
                                    Outside of cleaning and proving to people I know how to summon demons, these things are useless! 
                                    Any young man who can and wants to knock me up with a BUNCH of kids (and I mean a BUNCH) and has
                                    the pocketbook to support our future family is free to knock on my door and wow me.
                                    I'll be waiting...<3" - Vanessa Schlorschplat, Sorceress`
                },
                {
                    name: "The Disappearance of the Tumblefrogs",
                    description: `Locals are concerned about the disappearance of the regional tumblefrog herd. Without them,
                                    the supply of rubber is dangerously low. You should ask around town for any clues.`
                }
            ]
        },
        "The Desert Ocean":{
            quests: [
                {
                    name: "Prison Break!",
                    description: `HOLY CRAP ALL THE PRISONERS GOT LOOSE AND THEY'RE GOING NUTS,
                                    KNOCKING EVERYTHING OVER AND PULLING PRANKS ON PEOPLE, SOMEONE
                                    HAS TO HELP!`
                },
                {
                    name: "Sand Drought",
                    description: `"I warned 'em. I warned 'em all, but they were like, 'Noooo, Shauny, 
                                    we live in a desert. Ain't no sand drought ever gonna happen, sand's freakin' everywhere,
                                    we could use a little less sand around the place. Well, who's laughing now? Ol' Shauny, that's who.
                                    All the sand is plumb gone, leaving our town sittin' on a sea of bedrock fifty feet below its original 
                                    altitude. If one of you city slickers could get to the bottom of this, I'd appreciate it." - Shaun "Shauny" Rutherford`
                },

                {
                    name: "Sand Boats! They could be a thing! Tester needed!",
                    description: `"I need someone to test out my second sandboat prototype. It'll WORK! I SWEAR! SCREW YOU, PETER!" - Goblin Captain Jumbo`
                }
            ]
        }
    }

    let randomNames = {
        names: ["Lorbot", "Maxo", "Bilyula", "Marianth", "Shmoo", "Kantho-Heiriogliph", "Borbo-blobbitron", "Grog"],
        locations: ["Aester's Hold", "Smargon", "The Londobondo Mountains", "Ricciolo", "Nomnom Palace"],
        monstersOhNo: ["...o-one of them started flirting with me...and it made me uncomfortable...", "They ate my dog! I demand BLOOD!", "They aren't doing anything bad...but I just don't like monsters."],
        rumors: ["sexy witch summoning demon eggs into her womb", 
                "giant pillar of ice growing", "group of fat sirens ineffectively attempting to lure men into their trap",
                "huge, blinking eye floating above the ground somewhere", "slime that's shape-shifting into pies to trick unsuspecting housewives",
                "sorcerer telekinetically throwing boulders at people", "wingless dragon", "monkey man stealing business from local merchants"]
    }

    let missionDetails = {
        "Loan Money" : `A smug son of a gun named #### decided he wouldn't pay 
                        his loans. Oh, don't give me that, "poor guy" shtick,
                        we know for a fact he has enough money to pay us back. 
                        You just have to convince him.`,
        "Monster Trouble" : `Monsters are pouring out of %%%%, and we need someone to take care of them!
                             ^^^^`,
        "Discovery" : `An explorer named #### recently disappeared near %%%%. You should 
                        head out there and find out what happened to him. Maybe he found something 
                        he shouldn't have.`,
        "Rumor has it...": `A rumor has been circulating about a $$$$ near %%%%.`
    }
       
    for (x in locations) {
        console.log(x)
        $("#locations").append(
            `
            <option val = "${x}">${x}</option>
            `
        )
    }

    netfolk.forEach(function(item, index){

        $("#netfolk-box").append(
            `
            <div class = "monster-select-box" data-id = "${index}">
            <p>${item.name}</p>
            </div>
            `
        );

    });

    $("#netfolk-box").on("click", ".monster-select-box", function(){
        let descriptorItem = netfolk[parseInt($(this).attr("data-id"))]
        $("#descriptor").empty()
        $("#descriptor").append(
            `<p>${descriptorItem.desc}</p>
            <br>
            <p>${descriptorItem.perks}</p>
        `);
    });

    $("#locations").on("change", function() {
        console.log($(this).val());
        $("#quests").empty();
        $("#quests").append(`<option selected disabled val = "reset">Choose a quest!</option>`)

        if ($("#quests").css("display") === "none") {
            $("#quests").css("display", "block");
        }
        locations[$(this).val()].quests.forEach(item=>{
            $("#quests").append(
                `
                <option val="${item.name}">${item.name}</option>
                `
            )
        })
    });

    $("#quests").on("change", function() {
        country = locations[$("#locations").val()];

        country.quests.forEach(item=>{
            if (item.name === $(this).val()) {
                $("#mission").text(item.description);
            }
        })
    })

});