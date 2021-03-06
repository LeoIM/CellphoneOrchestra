// clipSets should be an array of arrays.
// each sub array should contain a series of objects with the fields "name" and
// "url". names are a user facing string.

const clipSets = [
    [
        {name:'BD_OG_DRUMS', url:'samples/BRIGHTERDAYS/BD_OG_DRUMS.wav'},
        {name:'BD_OG_HEALIT', url:'samples/BRIGHTERDAYS/BD_OG_HEALIT.wav'},
        {name:'BD_OG_LIFTMEUP', url:'samples/BRIGHTERDAYS/BD_OG_LIFTMEUP.wav'},
        {name:'BD_OG_OOHOHAHEE', url:'samples/BRIGHTERDAYS/BD_OG_OOHOHAHEE.wav'},
        {name:'BD_RASHAD_INTRO', url:'samples/BRIGHTERDAYS/BD_RASHAD_INTRO.wav'},
        {name:'BD_RASHAD_BREAK', url:'samples/BRIGHTERDAYS/BD_RASHAD_BREAK.wav'},
        {name:'BD_RASHAD_HATS', url:'samples/BRIGHTERDAYS/BD_RASHAD_HATS.wav'},
        {name:'BD_RASHAD_KEYS', url:'samples/BRIGHTERDAYS/BD_RASHAD_KEYS.wav'}
    ],
    [
        {name:'GW_EPIANO', url:'samples/CRYSTALWATERS/GW_EPIANO.wav'},
        {name:'GW_VERSE', url:'samples/CRYSTALWATERS/GW_VERSE.wav'},
        {name:'GW_JUSTLIKE', url:'samples/CRYSTALWATERS/GW_JUSTLIKE.wav'},
        {name:'GW_CHORUS', url:'samples/CRYSTALWATERS/GW_CHORUS.wav'},
        {name:'GW_PIANO', url:'samples/CRYSTALWATERS/GW_PIANO.wav'}
    ],
    [
        {name:'BIPP_INTRO', url:'samples/BIPP/BIPP_INTRO.wav'},
        {name:'BIPP_OUTRO', url:'samples/BIPP/BIPP_OUTRO.wav'},
        {name:'BIPP_VOCAL_A', url:'samples/BIPP/BIPP_VOCAL_A.wav'},
        {name:'BIPP_VOCAL_B', url:'samples/BIPP/BIPP_VOCAL_B.wav'},
        {name:'BIPP_VOCAL_C', url:'samples/BIPP/BIPP_VOCAL_C.wav'}
    ],
    [
        {name:'APE_A', url:'samples/SOICHI/APE_A.wav'},
        {name:'APE_B', url:'samples/SOICHI/APE_B.wav'},
        {name:'APE_C', url:'samples/SOICHI/APE_C.wav'},
        {name:'APE_D', url:'samples/SOICHI/APE_D.wav'},
        {name:'APE_E', url:'samples/SOICHI/APE_E.wav'},
        {name:'APE_F', url:'samples/SOICHI/APE_F.wav'},
        {name:'APE_G', url:'samples/SOICHI/APE_G.wav'},
        {name:'APE_H', url:'samples/SOICHI/APE_H.wav'}
    ],
    [
        {name:'BG_GUITAR', url:'samples/BADGIRLS/BG_GUITAR.wav'},
        {name:'BG_PIANO', url:'samples/BADGIRLS/BG_PIANO.wav'},
        {name:'BG_HORNS', url:'samples/BADGIRLS/BG_HORNS.wav'},
        {name:'BG_CHORUS', url:'samples/BADGIRLS/BG_CHORUS.wav'},
        {name:'BG_TOOTTOOT_VOX', url:'samples/BADGIRLS/BG_TOOTTOOT_VOX.wav'},
        {name:'BG_TOOTTOOT_DRUMS', url:'samples/BADGIRLS/BG_TOOTTOOT_DRUMS.wav'},
        {name:'BG_TOOTTOOT_GUITAR', url:'samples/BADGIRLS/BG_TOOTTOOT_GUITAR.wav'},
        {name:'BG_TOOTTOOT_FULL', url:'samples/BADGIRLS/BG_TOOTTOOT_FULL.wav'}
    ],
    [
        {name:'HA_VOX', url:'samples/HA/HA_VOX.wav'},
        {name:'HA_DUB', url:'samples/HA/HA_DUB.wav'},
        {name:'HA_SYNTH', url:'samples/HA/HA_SYNTH.wav'},
        {name:'HA_FULL', url:'samples/HA/HA_FULL.wav'}
    ],
    [
        {name:'ACID_KICK', url:'samples/ACID/ACID_KICK.wav'},
        {name:'ACID_COWBELL', url:'samples/ACID/ACID_COWBELL.wav'},
        {name:'ACID_BASS_A', url:'samples/ACID/ACID_BASS_A.wav'},
        {name:'ACID_BASS_B', url:'samples/ACID/ACID_BASS_B.wav'},
        {name:'ACID_BASS_C', url:'samples/ACID/ACID_BASS_C.wav'},
        {name:'ACID_BASS_D', url:'samples/ACID/ACID_BASS_D.wav'}
    ],
    [
        {name:'EVERYBODY_ORGAN', url:'samples/EVERYBODY/EVERYBODY_ORGAN.wav'},
        {name:'EVERYBODY_BREAK', url:'samples/EVERYBODY/EVERYBODY_BREAK.wav'},
        {name:'EVERYBODY_BASS', url:'samples/EVERYBODY/EVERYBODY_BASS.wav'},
        {name:'EVERYBODY_HORN', url:'samples/EVERYBODY/EVERYBODY_HORN.wav'},
        {name:'EVERYBODY_SOFREE', url:'samples/EVERYBODY/EVERYBODY_SOFREE.wav'},
        {name:'EVERYBODY_CHORUS', url:'samples/EVERYBODY/EVERYBODY_CHORUS.wav'}
    ],
    [
        {name:'TMWTG_BEAT', url:'samples/TMWTG/TMWTG_BEAT.wav'},
        {name:'TMWTG_CHORUS', url:'samples/TMWTG/TMWTG_CHORUS.wav'},
        {name:'TMWTG_GHOSTRIDE', url:'samples/TMWTG/TMWTG_GHOSTRIDE.wav'},
        {name:'TMWTG_SCRAPE', url:'samples/TMWTG/TMWTG_SCRAPE.wav'},
        {name:'TMWTG_STUNNASHADES', url:'samples/TMWTG/TMWTG_STUNNASHADES.wav'},
        {name:'TMWTG_GASBRAKEDIP', url:'samples/TMWTG/TMWTG_GASBRAKEDIP.wav'},
        {name:'TMWTG_SHAKETHEM', url:'samples/TMWTG/TMWTG_SHAKETHEM.wav'},
        {name:'TMWTG_GRILL', url:'samples/TMWTG/TMWTG_GRILL.wav'},
        {name:'TMWTG_THIZZFACE', url:'samples/TMWTG/TMWTG_THIZZFACE.wav'},
        {name:'TMWTG_DOORSOPEN', url:'samples/TMWTG/TMWTG_DOORSOPEN.wav'},
        {name:'TMWTG_WATCHEMSWANG', url:'samples/TMWTG/TMWTG_WATCHEMSWANG.wav'},
        {name:'TMWTG_GOSTUPID', url:'samples/TMWTG/TMWTG_GOSTUPID.wav'}
    ],
    [
        {name:'KYLIE_BASSLINE', url:'samples/CANTGETYOUOUT/KYLIE_BASSLINE.wav'},
        {name:'KYLIE_LALALA', url:'samples/CANTGETYOUOUT/KYLIE_LALALA.wav'},
        {name:'KYLIE_CHORUS', url:'samples/CANTGETYOUOUT/KYLIE_CHORUS.wav'}
    ],
    [
        {name:'IWANNAROCK_BREAK_A', url:'samples/IWANNAROCK/IWANNAROCK_BREAK_A.wav'},
        {name:'IWANNAROCK_BREAK_B', url:'samples/IWANNAROCK/IWANNAROCK_BREAK_B.wav'},
        {name:'IWANNAROCK_CHANT_A', url:'samples/IWANNAROCK/IWANNAROCK_CHANT_A.wav'},
        {name:'IWANNAROCK_CHANT_B', url:'samples/IWANNAROCK/IWANNAROCK_CHANT_B.wav'}
    ],
    [
        {name:'LADY_GUITAR', url:'samples/LADY/LADY_GUITAR.wav'},
        {name:'LADY_DRUMS', url:'samples/LADY/LADY_DRUMS.wav'},
        {name:'LADY_BASSLINE', url:'samples/LADY/LADY_BASSLINE.wav'},
        {name:'LADY_CHORUS', url:'samples/LADY/LADY_CHORUS.wav'}
    ],
    [
        {name:'BLUEMONDAY_KICK', url:'samples/BLUEMONDAY/BLUEMONDAY_KICK.wav'},
        {name:'BLUEMONDAY_BASSLINE', url:'samples/BLUEMONDAY/BLUEMONDAY_BASSLINE.wav'},
        {name:'BLUEMONDAY_SYNTHS', url:'samples/BLUEMONDAY/BLUEMONDAY_SYNTHS.wav'},
        {name:'BLUEMONDAY_CHOIR', url:'samples/BLUEMONDAY/BLUEMONDAY_CHOIR.wav'},
        {name:'BLUEMONDAY_PADS', url:'samples/BLUEMONDAY/BLUEMONDAY_PADS.wav'},
        {name:'BLUEMONDAY_OUTRO', url:'samples/BLUEMONDAY/BLUEMONDAY_OUTRO.wav'},
    ],
    [
        {name:'SYK_DRUM', url:'samples/SOUKNO/SYK_DRUM.wav'},
        {name:'SYK_VOXSOLO', url:'samples/SOUKNO/SYK_VOXSOLO.wav'},
        {name:'SYK_VOXDRUMS', url:'samples/SOUKNO/SYK_VOXDRUMS.wav'},
        {name:'SYK_VOXBASS', url:'samples/SOUKNO/SYK_VOXBASS.wav'},
        {name:'SYK_PADS', url:'samples/SOUKNO/SYK_PADS.wav'},
    ],
    [
        {name:'INJECAO_INTRO', url:'samples/INJECAO/INJECAO_INTRO.wav'},
        {name:'INJECAO_PRECHORUS', url:'samples/INJECAO/INJECAO_PRECHORUS.wav'},
        {name:'INJECAO_CHORUS', url:'samples/INJECAO/INJECAO_CHORUS.wav'},
        {name:'INJECAO_ROCKY_A', url:'samples/INJECAO/INJECAO_ROCKY_A.wav'},
        {name:'INJECAO_ROCKY_B', url:'samples/INJECAO/INJECAO_ROCKY_B.wav'}
    ],
    [
        {name:'GIVEIT_BASS', url:'samples/GIVEIT/GIVEIT_BASS.wav'},
        {name:'GIVEIT_INST_A', url:'samples/GIVEIT/GIVEIT_INST_A.wav'},
        {name:'GIVEIT_CHORUS', url:'samples/GIVEIT/GIVEIT_CHORUS.wav'},
        {name:'GIVEIT_INST_B', url:'samples/GIVEIT/GIVEIT_INST_B.wav'},
    ],
    [
        {name:'MJ_SCAT', url:'samples/MJ/MJ_SCAT.wav'},
        {name:'MJ_INST_A', url:'samples/MJ/MJ_INST_A.wav'},
        {name:'MJ_GUITAR', url:'samples/MJ/MJ_GUITAR.wav'},
        {name:'MJ_CHORUS', url:'samples/MJ/MJ_CHORUS.wav'},
        {name:'MJ_INST_B', url:'samples/MJ/MJ_INST_B.wav'},
        {name:'MJ_BUILD', url:'samples/MJ/MJ_BUILD.wav'},
        {name:'MJ_HORNS', url:'samples/MJ/MJ_HORNS.wav'},
    ],
    [
        {name:'RPBOO_HATS', url:'samples/RPBOO/RPBOO_HATS.wav'},
        {name:'RPBOO_KICKSNARE', url:'samples/RPBOO/RPBOO_KICKSNARE.wav'},
        {name:'RPBOO_DRUMSFULL', url:'samples/RPBOO/RPBOO_DRUMSFULL.wav'},
        {name:'RPBOO_VOX', url:'samples/RPBOO/RPBOO_VOX.wav'},
        {name:'RPBOO_VOX_HATS', url:'samples/RPBOO/RPBOO_VOX_HATS.wav'},
        {name:'RPBOO_FULL', url:'samples/RPBOO/RPBOO_FULL.wav'},
        {name:'RPBOO_CHOPPED', url:'samples/RPBOO/RPBOO_CHOPPED.wav'},
    ],
    [
        {name:'HYPNIC_BELLS', url:'samples/HYPNIC/HYPNIC_BELLS.wav'},
        {name:'HYPNIC_BELLSOCTAVE', url:'samples/HYPNIC/HYPNIC_BELLSOCTAVE.wav'},
        {name:'HYPNIC_HATS', url:'samples/HYPNIC/HYPNIC_HATS.wav'},
        {name:'HYPNIC_SQUELCH_A', url:'samples/HYPNIC/HYPNIC_SQUELCH_A.wav'},
        {name:'HYPNIC_SQUELCH_B', url:'samples/HYPNIC/HYPNIC_SQUELCH_B.wav'},
        {name:'HYPNIC_BRUTAL_A', url:'samples/HYPNIC/HYPNIC_BRUTAL_A.wav'},
        {name:'HYPNIC_BRUTAL_B', url:'samples/HYPNIC/HYPNIC_BRUTAL_B.wav'},
        {name:'HYPNIC_BRUTAL_C', url:'samples/HYPNIC/HYPNIC_BRUTAL_C.wav'}
    ]
];